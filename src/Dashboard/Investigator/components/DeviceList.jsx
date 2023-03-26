import React, { useState } from 'react'
import { DataGrid, GridToolbarFilterButton, GridToolbarColumnsButton, GridToolbar } from '@mui/x-data-grid'
import { Box, Button } from '@mui/material'


export const DeviceList = () => {

    const columns = [
        { field: "id", headerName: 'ID', width: '90' },
        { field: "longitude", headerName: 'Latitud', width: '150' },
        { field: "latitude", headerName: 'Longitud', width: '150' },
        { field: "date", headerName: 'Ultima Actualización', width: '150' },
        { field: "name", headerName: 'A cargo de', width: '150' },
    ]

    const Barra = () => {
        return <>
            <GridToolbarFilterButton />
            <GridToolbarColumnsButton />
        </>
    }

    const data = []

    return (
        <Box sx={{height:'90%', width: '100%' }}>
            <DataGrid rows={data} columns={columns} components={{ Toolbar: Barra }} checkboxSelection />
        </Box>
    )
}

