import axios from "axios";
import mapsApi from "../../api/mapsApi"

import { getEnvVariables } from "../../helpers";

const { VITE_API_PLACES_KEY } = getEnvVariables()

export const useGeocoding = () => {

    const getDirections = async (address) => {

        const directions = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${VITE_API_PLACES_KEY}&region=co&radius=10000&query=${address}`)
        console.log("DIRECTIONS -------------------------------------------------------------------")
        console.log(directions.data)
        return directions.data

    }

    return {
        getDirections
    }

}