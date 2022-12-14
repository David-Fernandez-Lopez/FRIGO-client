import './Map.css'
import { Container, Row, Col } from "react-bootstrap"
import GoogleMapReact from 'google-map-react'
import { useEffect, useState } from 'react'

const Map = () => {
    
    const [coordinates, setCoordinates]= useState({})
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } })=> {
            setCoordinates({lat:latitude, lng:longitude})
        })
    }, [])
    

    return (
        
        <Container>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <div id='map' className="map">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyBOY1J9VAqyUHN2rbl2IK0iIEV4jSaaJAM' }}
                            defaultCenter={coordinates}
                            center={coordinates}
                            defaultZoom={15}
                            margin={[50, 50, 50, 50]}
                            options={''}
                            onChange={''}
                            onChildClick={''}
                        >
                        </GoogleMapReact>

                    </div>
                    
                </Col>
            </Row>            
        </Container>
    )
}

export default Map