import './Map.css'
import { Container, Row, Col, Form} from "react-bootstrap"
import { useContext, useEffect, useState } from 'react'
import { GoogleMap } from '@react-google-maps/api';
import { mapsContext } from '../../context/maps.context';
import Loader from '../Loader/Loader';
import RangeSlider from 'react-bootstrap-range-slider';

import mapStyle from './MapsStyle';

const Map = () => {
    
    const { coordinates, isLoaded, setMap, request, setRequest } = useContext(mapsContext)

    const [value, setValue] = useState(400)

    useEffect(() => {
        setRequest({ ...request, radius: value })
    },[isLoaded])
    
    const valueHandler = () => {
        
        value && setRequest({ ...request, radius: value })
    }

    const onLoad = (map) => {
        setMap(map)
        map.setCenter(coordinates)
    }

    return (
        
        <Container>
            <Row>
                    {
                        isLoaded ?
                            <>
                <Col md={{ span: 12 }}>
                            <div id='map' className="map">

                                    <GoogleMap                                          
                                        options={{styles: mapStyle}}
                                        zoom={16}                                           
                                        onLoad={onLoad}                                         
                                        defaultCenter={{ lat: 39.85990934802615, lng: -4.028579292753214 }}                                        
                                        center={coordinates} 
                                        mapContainerClassName='map'>    
                                    </GoogleMap>
                                    

                            </div>
                            </Col>
                            
                            <Col md={{ span: 8, offset: 2 }}> 
                                
                                <Form>
                                <Form.Group>
                                <Form.Label> Choose search radius (m) </Form.Label>
       
                                    <RangeSlider
                                        className='slider'                                    
                                        size='sm'                                    
                                        value={value}                                    
                                        onChange={(e) => setValue(e.target.value)}                                    
                                        onAfterChange={valueHandler}                                                      
                                        min={400}                                    
                                        max={2000}                                    
                                        variant='secondary'                                    
                                        />    
                                    </Form.Group>
                                </Form>
                                
                            </Col>
                            
                            </>
                            :
                            <Loader/>
                    }
                    
            </Row>            
        </Container>
    )
}

export default Map