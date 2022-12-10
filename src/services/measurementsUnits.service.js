import axios from 'axios'

class MeasurementsUnitsService {

    constructor() {


        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/measurementsUnits`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getMeasurementsUnits() {
        return this.api.get(`/`)
    }


}

const measurementsUnitsService = new MeasurementsUnitsService()

export default measurementsUnitsService