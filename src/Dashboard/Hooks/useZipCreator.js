import { useState } from 'react'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

import { useDevices } from './useDevices'

var zip = new JSZip()

export const useZipCreator = () => {

    const { getAll, getOneDevice } = useDevices()
    const [files, setfiles] = useState([])

    const downloadDevices = async () => {

        const devices = await getAll()
        let tempFiles = []
        devices.forEach((device) => {

            const { file, name } = createExcel(device)
            tempFiles.push({ file, name })

        })
        setfiles(tempFiles)

    }

    const createZip = () => {

        files.map((file) => {
            zip.file(file.name, file.file, { base64: true })
        })

        zip.generateAsync({ type: "blob" })
            .then(function (content) {
                saveAs(content, "devices.zip")
            })

        zip = new JSZip()
        setfiles([])
    }

    const createExcel = (deviceData) => {

        const { measures } = deviceData

        const deviceDataCopy = { ...deviceData }
        delete deviceDataCopy.measures
        const aoaDevice = Object.entries(deviceDataCopy)

        const workBook = XLSX.utils.book_new()
        const workSheet = XLSX.utils.json_to_sheet(measures)
        const ws2 = XLSX.utils.aoa_to_sheet(aoaDevice)

        XLSX.utils.book_append_sheet(workBook, workSheet, "Mediciones")
        XLSX.utils.book_append_sheet(workBook, ws2, "Dispositivo")
        const file = XLSX.write(workBook, { bookType: 'xlsx', type: 'base64' })
        const name = deviceData._id + ".xlsx"

        return {
            file,
            name
        }

    }

    /*
        const file2 = XLSX.write(workBook, { bookType: 'xlsx', type: 'base64' })
        console.log(file2)
    */

    return {
        downloadDevices,
        createZip,
    }
}
