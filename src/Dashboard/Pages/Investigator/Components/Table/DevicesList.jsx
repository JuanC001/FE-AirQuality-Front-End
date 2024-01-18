import { Box, Button, CircularProgress } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useDevices } from '../../../../Hooks/useDevices'
import { DataGrid, GridToolbarFilterButton } from '@mui/x-data-grid'
import { DashboardContext } from '../../../../Context/DashboardContext'
import RefreshIcon from '@mui/icons-material/Refresh';
import { ExportDeviceExcel } from './ExportDeviceExcel'

export const DevicesList = () => {

    const [loaded, setloaded] = useState(false)

    const { devices, getList, deviceInfo, setDevice } = useContext(DashboardContext)

    const columns = [

        { field: "id", headerName: 'ID', width: '90' },
        { field: "lastUpdated", headerName: 'Ultima Actualización', width: '350' },
        { field: "_id", headerName: 'idDB', width: '10' },
        { field: "owner", headerName: 'A cargo de', width: '200' },
    ]

    const toolBar = () => {

        return <GridToolbarFilterButton />

    }

    const onRefresh = async () => {

        setloaded(false)
        await getList()
        setloaded(true)

    }

    useEffect(() => {

        if (devices === null) {
            setloaded(false)
        } else {
            setloaded(true)
        }

    }, [devices])

    useEffect(() => {

        getList()

    }, [])

    const rowClickHandler = (e) => {
        if (deviceInfo === null) {
            setDevice(e.row)
            return
        }
        if (e.row.id !== deviceInfo.id) {
            setDevice(e.row)
        }
    }

    return (
        <>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={2} height={'40vh'} px={2} mb={1}>

                {!loaded && <CircularProgress variant='indeterminate' size={100} />}

                {loaded && <>

                    <DataGrid rows={devices} columns={columns} components={{ Toolbar: toolBar }} sx={{ width: '90%', overflow: 'hidden' }} onRowClick={rowClickHandler} />

                </>}


            </Box>
            <Box display={'flex'} justifyContent={'end'} gap={1}>
                <Button onClick={onRefresh} variant='outlined' startIcon={<RefreshIcon />}>Actualizar</Button>
                <ExportDeviceExcel />
            </Box>
        </>
    )
}
