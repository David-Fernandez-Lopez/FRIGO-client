import './Map.css'
import { Container, Row, Col } from "react-bootstrap"
import { useContext, useState } from 'react'
import { GoogleMap, InfoWindow } from '@react-google-maps/api';
import { mapsContext } from '../../context/maps.context';
import Loader from '../Loader/Loader';
import RangeSlider from 'react-bootstrap-range-slider';


const Map = () => {
    
    const { coordinates, isLoaded, setMap, request, setRequest } = useContext(mapsContext)

    const [value, setValue] = useState(400)
    const [finalValue, setFinalValue] = useState(null)
    
    const valueHandler = e => {
        setFinalValue(e.target.value)
        finalValue && setRequest({ ...request, radius: finalValue })
    }

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
                                        zoom={16}                                        
                                        onLoad={onLoad}                                        
                                        defaultCenter={{ lat: 39.85990934802615, lng: -4.028579292753214 }}                                        
                                        center={coordinates} 
                                        mapContainerClassName='map'>                                        
                                        
                            </GoogleMap>

                            </div>
                                
                                <RangeSlider
                                    className='slider'                                    
                                    size='sm'                                    
                                    value={value}                                    
                                    onChange={(e) => setValue(e.target.value)}                                    
                                    onAfterChange={e => valueHandler(e)}                                    
                                                                      
                                    min={400}                                    
                                    max={2000}                                    
                                    variant='secondary'                                    
                                />                                
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