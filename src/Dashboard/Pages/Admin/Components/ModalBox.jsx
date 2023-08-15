import { Box, Divider, IconButton, Modal, Paper, Typography, styled, Avatar, TextField, Stack, Select, MenuItem, Button, Grid, Stepper, StepLabel, Step } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import CloseIcon from '@mui/icons-material/Close';
import { StepOne } from "./RegisterUser/StepOne";
import { StepTwo } from "./RegisterUser/StepTwo";
import { StepThree } from "./RegisterUser/StepThree";
import { useState } from "react";

const ModalBoxStyle = styled(Box)(({ theme }) => ({

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px'

}))

const SelectType = () => (
    <>

        <Select label="Tipo" defaultValue={"User"}>
            <MenuItem value={"Investigator"}>Investigador</MenuItem>
            <MenuItem value={"User"}>Usuario</MenuItem>
        </Select>

    </>
)

const StepAstep = ({ step }) => {
    return (
        <>

            {step == 0 && <StepOne />}
            {step == 1 && <StepTwo />}
            {step == 2 && <StepThree />}

        </>
    )
}

export const ModalBox = ({ open, handleClose }) => {

    const [step, setStep] = useState(0)

    const steps = [
        'Registrar Datos Usuario',
        'Dirección',
        'Crea una Contraseña'
    ]

    const handleNext = () => {


        setStep(step + 1)

    }

    return (

        <Modal
            open={open}
            onClose={handleClose}
        >

            <motion.div transition={{ duration: 0.5, type: 'spring' }} initial={{ x: '-100vw', y: '50vh' }} animate={{ x: 0, y: '50vh' }} exit={{ x: '100vw', opacity: 0 }}>

                <ModalBoxStyle component={Paper} elevation={6} p={4} width={{ xs: '90%', md: '50%', lg: '30%' }} position={'relative'}>

                    <IconButton sx={{
                        position: 'absolute',
                        top: '0%',
                        right: '0%',
                    }}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Box height={'10%'}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Registrar Un Usuario
                        </Typography>
                        <Divider />
                    </Box>
                    <Box my={2}>
                        <Stepper activeStep={step}>

                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}

                        </Stepper>
                    </Box>
                    <Box borderRadius={'20px'} border={'1px solid lightgrey'} minHeight={'100%'} p={2} alignItems={'center'} position={'relative'} my={5}>

                        <StepAstep step={step} />

                    </Box>

                    <Box position={'relative'} width={'100%'} height={'10%'}>

                        <Grid container>
                            <Grid item xs={6}>
                                <Box>
                                    {step > 0 && <Button onClick={e => setStep(step - 1)}>Atras</Button>}
                                </Box>
                            </Grid>

                            <Grid item xs={6} display={'flex'} justifyContent={'end'}>
                                {step < 2 && <Button onClick={handleNext}>Siguiente</Button>}
                                {step == 2 && <Button onClick={handleNext}>Finalizar</Button>}
                            </Grid>
                        </Grid>
                    </Box>

                </ModalBoxStyle>
            </motion.div>
        </Modal >

    )
}