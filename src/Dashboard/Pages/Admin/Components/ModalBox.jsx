import { Box, Divider, IconButton, Modal, Paper, Typography, styled, Avatar, TextField, Stack, Select, MenuItem } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import CloseIcon from '@mui/icons-material/Close';

const ModalBoxStyle = styled(Box)(({ theme }) => ({

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: '50%',
    height: '60vh',
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

export const ModalBox = ({ open, handleClose }) => {

    return (

        <Modal
            open={open}
            onClose={handleClose}
        >

            <motion.div

                transition={{
                    duration: 0.5,
                    type: 'spring',
                }}

                initial={{
                    x: '-100vw',
                    y: '50vh'
                }}

                animate={{
                    x: 0,
                    y: '50vh'
                }}

                exit={{
                    x: '100vw',
                    opacity: 0
                }}
            >


                <ModalBoxStyle component={Paper} elevation={6} p={4}>

                    <IconButton sx={{
                        position: 'absolute',
                        top: '1%',
                        left: '95%',
                    }}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Registrar un Usuario
                    </Typography>
                    <Divider />
                    <Box height={'95%'} sx={{
                        overflowY: 'scroll',
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px',
                        border: '1px solid #ccc',
                        mt: 2,

                        '&::-webkit-scrollbar': {
                            width: '2px',
                        },

                        '&::-webkit-scrollbar-thumb': {
                            background: '#888',
                            borderRadius: '50%',
                        }

                    }}>
                        <Box p={4} display={'flex'}>
                            <Stack direction="row" spacing={3} mx={'auto'}>
                                <TextField
                                    id="outlined-basic"
                                    label="Nombre"
                                    value={''}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Apellido"
                                    value={''}
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Usuario"
                                    placeholder="user@unbosque.edu.co"
                                    value={''}
                                />

                                <SelectType />

                            </Stack>
                            <Stack></Stack>
                        </Box>
                    </Box>
                </ModalBoxStyle>
            </motion.div>
        </Modal >

    )
}