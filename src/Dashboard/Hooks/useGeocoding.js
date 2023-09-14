import AirqualityApi from "../../api/airqualityApi"

export const useGeocoding = () => {

    const getLongLat = async (placeId) => {

        const directions = await AirqualityApi.post('/admin/getLongLat', { placeId })
        return directions.data

    }

    const autocomplete = async (address) => {

        const prediction = await AirqualityApi.post('/admin/autocomplete', { address })
        return prediction.data.predictions
    }

    return {
        getLongLat,
        autocomplete
    }

}