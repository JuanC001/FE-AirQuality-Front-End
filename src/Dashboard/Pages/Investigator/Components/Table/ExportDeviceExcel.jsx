import React, { useState } from 'react'
import { useContext } from 'react'
import { DashboardContext } from '../../../../Context/DashboardContext'
import * as XLSX from 'xlsx'
import { Box, Button } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

export const ExportDeviceExcel = () => {

    const { deviceData } = useContext(DashboardContext)
    const [loading, setloading] = useState(false)

    const handleDownload = () => {

        setloading(true)
        if (deviceData === null) {
            Swal.fire({
                title: 'No hay dispositivo seleccionado',
                text: 'Por favor seleccione un dispositivo',
                icon: 'warning'
            })
            setloading(false)
            return
        }
        const { measures } = deviceData

        const deviceDataCopy = { ...deviceData }
        delete deviceDataCopy.measures
        const aoaDevice = Object.entries(deviceDataCopy)

        const workBook = XLSX.utils.book_new()
        const workSheet = XLSX.utils.json_to_sheet(measures)
        const ws2 = XLSX.utils.aoa_to_sheet(aoaDevice)

        XLSX.utils.book_append_sheet(workBook, workSheet, "Mediciones")
        XLSX.utils.book_append_sheet(workBook, ws2, "Dispositivo")
        XLSX.writeFile(workBook, deviceData._id + ".xlsx")

        setloading(false)

    }

    return (
        <>
            <Button variant='outlined' onClick={handleDownload} disabled={loading}>
                <Box display={'flex'} gap={1} alignItems={'center'}>
                    <FontAwesomeIcon icon={faFileExcel} />
                    Descargar Excel
                </Box>
            </Button>
        </>
    )
}
