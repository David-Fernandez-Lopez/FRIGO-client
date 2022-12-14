import { Html } from '@mui/icons-material';
import { useLoadScript} from '@react-google-maps/api';
import { createContext, useEffect, useState } from 'react';


const mapsContext = createContext()

function MapsProviderWrapper(props) {

    const [coordinates, setCoordinates] = useState({})
    const [map, setMap] = useState(null)
    const [requestType] = useState(['supermarket'])
    const [libraries] = useState(['places'])

    
    const contentString =
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<img class="mapIcon" src="/images/Frigo logo_Mesa de trabajo.png"/>' +
            "<hr>" +
            '<div id="bodyContent">' +
            
            "</div>" +
            "</div>";
    
    const infoWindow = map && new window.google.maps.InfoWindow()
    
    const [request, setRequest]= useState(null)

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBOY1J9VAqyUHN2rbl2IK0iIEV4jSaaJAM',
        libraries: libraries
    })
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setRequest({
                location: { lat: latitude, lng: longitude },                     
                radius: '400',            
                type: requestType
            })
            
            setCoordinates({lat:latitude, lng:longitude})
        })
    }, [map])


    useEffect(() => {
        getplaces(request, callback)
    }, [request])
    
     
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

        const svgMarker = {
            path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
            fillColor: "green",
            fillOpacity: 0.6,
            strokeWeight: 0,
            rotation: 0.1,
            scale: 2,
            anchor: new window.google.maps.Point(15, 30),
        }

        const marker = map && new window.google.maps.Marker({
            map: map,
            position: place.geometry.location,
            vicinity: place.vicinity,
            animation: window.google.maps.Animation.DROP,
            icon :svgMarker
        })

        map && window.google.maps.event.addListener(marker, "click", () => {
            toggleBounce()

            infoWindow.setContent(
                
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<img class="mapIcon" src="/images/Frigo logo_Mesa de trabajo.png"/>' +
            "<hr>" +
                `<h6>${place.name}</h6>` +     
            `<p>${place.vicinity}</p>`+  
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
    
    
    

    
    return (
        <mapsContext.Provider value={{ coordinates, isLoaded, map, setMap, request, setRequest, getplaces, callback }}>
            {props.children}
        </mapsContext.Provider>
    )
}

export { mapsContext, MapsProviderWrapper }