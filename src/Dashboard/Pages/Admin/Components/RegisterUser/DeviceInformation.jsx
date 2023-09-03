import { Box, Button, Divider, Grid, Paper, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { useDevices } from '../../../../Hooks/useDevices';


export const DeviceInformation = ({ handleNext, saveData, data }) => {

    const [selectedDevice, setSelectedDevice] = useState('')
    const [devices, setDevices] = useState([])
    const [ready, setReady] = useState(false)

    const { getAdminDeviceList } = useDevices()

    const getDevicesID = async () => {

        const devices = await getAdminDeviceList()

        setDevices(devices)
        setReady(true)

    }

    useEffect(() => {

        getDevicesID()

    }, [])

    const handleChangeDevice = (e = Event) => {

        e.preventDefault()
        const device = devices.filter(filtro)
        saveData({
            device: device[0]._id,
        })
        handleNext()

    }

    const filtro = (item) => {
        const { id } = item
        const nId = id.toString()

        if (selectedDevice === '') return item
        if (nId === selectedDevice) return item
    }

    return (
        <>
            <Box width={'100%'} height={'100%'} position={'relative'} component={'form'} onSubmit={handleChangeDevice}>

                <Stack height={'100%'} width={'100%'} mx={'auto'}>

                    <Stack height={{ xs: '45%', md: '35%' }} gap={3} component={Paper} p={2}>
                        <Typography variant="h6" color="initial">
                            Asigne un dispositivo de la Lista:
                        </Typography>

                        <Divider />

                        <TextField
                            id=""
                            label="Dispositivo"
                            value={selectedDevice}
                            onChange={e => setSelectedDevice(e.target.value)}
                        />
                    </Stack>
                    <Stack sx={{ overflowY: 'scroll' }} height={'50%'} gap={1}>
                        {ready &&
                            devices.filter(filtro).map((device, index) => (
                                <Button key={index} component={Paper} elevation={2} border={'1px solid lightgrey'} onClick={e => setSelectedDevice(device.id.toString())}>
                                    <Grid container justifyContent={'center'} textAlign={'center'}>

                                        <Grid item xs={6} md={4}>
                                            <Typography variant="h6" color="initial">
                                                {device.id}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} md={4}>
                                            <Typography variant="caption" color={device.owner ? 'error' : 'success'}>
                                                {device.owner ? 'No Disponible' : 'Disponible'}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Tooltip title={device.owner ? device.owner : `Si no tiene un dueño, se puede seleccionar para ${data.email}`} placement="top">
                                                <Typography variant="caption" color="initial">
                                                    <b>Owner:</b> {device.owner ? device.owner : 'No asignado'}
                                                </Typography>
                                            </Tooltip>
                                        </Grid>

                                    </Grid>
                                </Button>
                            ), 0)

                        }

                    </Stack>

                </Stack>
                <Grid container height="20" position="absolute" sx={{ bottom: 0 }}>
                    <Grid item xs={6}>
                        <div></div>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="end">
                        <Button type="Submit">Next</Button>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}
