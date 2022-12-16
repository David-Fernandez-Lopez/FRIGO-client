import { useLoadScript} from '@react-google-maps/api';
import { createContext, useEffect, useState } from 'react';
import capitalize from '../utils/capitalize';


const mapsContext = createContext()
let placedMarkers = []


function MapsProviderWrapper(props) {


    const [coordinates, setCoordinates] = useState({})
    const [map, setMap] = useState(null)
    const [requestType] = useState(['supermarket'])
    const [libraries] = useState(['places'])
    const [request, setRequest]= useState(null)
    
    const infoWindow = map && new window.google.maps.InfoWindow()
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBOY1J9VAqyUHN2rbl2IK0iIEV4jSaaJAM',
        libraries: libraries
    })
    
    useEffect(() => {
        loadMapData()
    }, [map])
    
    useEffect(() => {
        deleteMarkers()
        getplaces(request, callback)
    }, [request])
    
    const loadMapData = () => {
        
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setRequest({
                location: { lat: latitude, lng: longitude },                     
                radius: request,
                type: requestType
            })
            setCoordinates({lat:latitude, lng:longitude})
            map && new window.google.maps.Marker({
                map: map,
                position: { lat: latitude, lng: longitude },
                icon: {
                    url: 'https://res.cloudinary.com/dp0abawuh/image/upload/v1671098225/Frigo_mini_logo-02_brz8cb.png'
                }
            })
        })

    }
     
    const getplaces = (request, callback) => {
        const service = map && new window.google.maps.places.PlacesService(map)
        map && service.nearbySearch(request, callback)
        
    }

    
    const callback = (results, status) => {
        if (status == window.google.maps.places.PlacesServiceStatus.OK) {      
            for (var i = 0; i < results.length; i++) {        
                createMarker(results[i])                
            }            
        }    
    }


    
    const createMarker = (place) => {

        if (!place.geometry || !place.geometry.location) return

        const marker = map && new window.google.maps.Marker({
            map: map,
            position: place.geometry.location,
            vicinity: place.vicinity,
            website: place.website,
            business_status: place.business_status,
            url: place.url,
            animation: window.google.maps.Animation.DROP,
            icon :{
                    url: 'https://res.cloudinary.com/dp0abawuh/image/upload/v1671182183/marker_crenvc.png'
                }
        })
        placedMarkers.push(marker)

        map && window.google.maps.event.addListener(marker, "click", () => {
            toggleBounce()

            infoWindow.setContent(
                
                '<div id="content">' +                
                '<div id="siteNotice">' +                
                '<img class="mapIcon" src="/images/Frigo logo_Mesa de trabajo.png"/>' +                
                "<hr>" +                
                `<h6>${place.name.toUpperCase()}</h6>` +                   
                `<p>${place.vicinity}</p>` +     
                `<p> <strong>Business Status:</strong> ${capitalize(place.business_status)}</p>` +   
                "</div>" +
                "</div>" || "")
            infoWindow.open({
                anchor: marker,
                map: map,
            })

            function toggleBounce() {
                if (marker.getAnimation() !== null) {      
                    marker.setAnimation(null)                    
                } else {                    
                    marker.setAnimation(window.google.maps.Animation.BOUNCE)
                }

            }
            
        })
        
    }
    
    const deleteMarkers = () => {
        placedMarkers.forEach(elm => {
            elm.setMap(null)
        })
    }
    
    return (
        <mapsContext.Provider value={{
            coordinates,
            isLoaded,
            map,
            setMap,
            request,
            setRequest,
            getplaces,
            callback,
            loadMapData
        }}>
            {props.children}
        </mapsContext.Provider>
    )
}

export { mapsContext, MapsProviderWrapper }