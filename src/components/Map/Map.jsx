import './Map.css'
import { Container, Row, Col, Button } from "react-bootstrap"
import { useContext, useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { mapsContext } from '../../context/maps.context';
import Loader from '../Loader/Loader';


const Map = () => {
    
    const { coordinates, isLoaded, map, setMap, request, setRequest, getplaces, callback } = useContext(mapsContext)

    
    
    const onLoad = (map) => {
        setMap(map)
        map.setCenter(coordinates)
    }

    return (
        
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    {
                        isLoaded ?
                            <>
                            <div id='map' className="map">

                        <GoogleMap 
                            zoom={15}
                            onLoad={onLoad}
                            defaultCenter = {{lat: 39.85990934802615, lng: -4.028579292753214}}
                            center={coordinates}                            
                            mapContainerClassName='map'
                            ></GoogleMap>

                            </div>
                                <Button onClick={()=>getplaces(request, callback)}>Find Places</Button>
                            </>
                            :
                            <Loader/>
                    }
                    
                </Col>
            </Row>            
        </Container>
    )
}

export default Map