import { useState } from "react"

export const useCutDec = (num) => {

    const [number, setnumber] = useState(num)

    const cutNumber = (num) => {

        setnumber(Math.round(number, -2))
        return number

    }

    return {

        cutNumber

    }

}