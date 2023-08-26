
export const getEnvVariables = () => {


    return {

        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_API_MAPS_KEY: import.meta.env.VITE_API_MAPS_KEY,
        VITE_API_PLACES_KEY: import.meta.env.VITE_API_PLACES_KEY

    }


}