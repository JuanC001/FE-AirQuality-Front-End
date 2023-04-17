import React, { useContext } from 'react'
import { DataGrid, GridToolbarFilterButton, GridToolbarColumnsButton, GridToolbar } from '@mui/x-data-grid'
import { Box, Button } from '@mui/material'
import { DashboardContext } from '../../Context/DashboardContext'


export const DeviceList = () => {

    const {devicesList, setdeviceString, setready, deviceString} = useContext(DashboardContext)

    const columns = [

        { field: "id", headerName: 'ID', width: '90' },
        { field: "lat", headerName: 'Latitud', width: '150' },
        { field: "lng", headerName: 'Longitud', width: '150' },
        { field: "lastUpdated", headerName: 'Ultima Actualización', width: '350' },
        { field: "_id", headerName: 'idDB', width: '10' },
    ]

    const Barra = () => {
        return <>
            <GridToolbarFilterButton />
            <GridToolbarColumnsButton />
        </>
    }

    const rowClickHandler = async (e) => {

        console.log(e.row._id)
        if(e.row._id === deviceString) return
        setready(false)
        await setdeviceString(e.row._id)
        setready(true)
        
    }

    return (
        <Box sx={{ height: '90%', width: '100%' }}>
            <DataGrid rows={devicesList} columns={columns} components={{ Toolbar: Barra }} onRowClick={rowClickHandler} />
        </Box>
    )
}

