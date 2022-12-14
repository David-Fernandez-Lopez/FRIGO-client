import { useLoadScript, Marker} from '@react-google-maps/api';
import { createContext, useEffect, useState } from 'react';

const mapsContext = createContext()

function MapsProviderWrapper(props) {

    const [coordinates, setCoordinates] = useState({})
    const [map, setMap] = useState(null)
    const [libraries] = useState(['places'])

    
    const [request, setRequest]= useState({
        location: {lat: 39.85990934802615, lng: -4.028579292753214},        
        radius: '1000',    
        type: ['supermarket']  //, 'home_good_store','liquor_store', 'convenience_store', 'shopping_mall'
  })

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBOY1J9VAqyUHN2rbl2IK0iIEV4jSaaJAM',
        libraries: libraries
    })
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setRequest({
        location: {lat:latitude, lng:longitude},        
        radius: '1000',    
        type: ['supermarket']  //, 'home_good_store','liquor_store', 'convenience_store', 'shopping_mall'
  })
            setCoordinates({lat:latitude, lng:longitude})    // {lat: 39.85990934802615, lng: -4.028579292753214}
        })
    }, [map])


    useEffect(() => {
        getplaces(request, callback )
    }, [coordinates])
    
     
    function getplaces (request, callback) {
        const service = map && new window.google.maps.places.PlacesService(map)
        console.log(service)
        map && service.nearbySearch(request, callback)
        
    }

    const createMarker = (place) => {
        new window.google.maps.Marker({
            map: map,
            position: place.geometry.location
        })
    }

    const callback = (results, status) => {
        if (status == window.google.maps.places.PlacesServiceStatus.OK) {      
            for (var i = 0; i < results.length; i++) {        
                createMarker(results[i])                
            }            
        }        
    }
    
    
    
    

    
    return (
        <mapsContext.Provider value={{ coordinates, isLoaded, map, setMap, request, setRequest, getplaces, callback }}>
            {props.children}
        </mapsContext.Provider>
    )
}

export { mapsContext, MapsProviderWrapper }