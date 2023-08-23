import axios from 'axios';


const mapsApi = axios.create({

    baseURL: `https://maps.googleapis.com/maps/api/geocode/`

})

export default mapsApi
