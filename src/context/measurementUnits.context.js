import { createContext, useEffect, useState } from 'react'
import measurementsUnitsService from '../services/measurementsUnits.service'

const measurementUnitsContext = createContext()

function MeasurementUnitsProviderWrapper(props) {

    const [measurementsUnits, setmeasurementsUnits] = useState([])
    
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {

        measurementsUnitsService
            .getMeasurementsUnits()
            .then(({ data }) => {
                setmeasurementsUnits(data)
            })
            .catch(err => console.log(err))

    }

    
    return (
        <measurementUnitsContext.Provider value={{ measurementsUnits }}>
            {props.children}
        </measurementUnitsContext.Provider>
    )
}

export { measurementUnitsContext, MeasurementUnitsProviderWrapper }