import { Box, Divider, IconButton, Modal, Paper, Typography, styled, Avatar, TextField, Stack, Select, MenuItem } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import CloseIcon from '@mui/icons-material/Close';

const ModalBoxStyle = styled(Box)(({ theme }) => ({

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '50vh',
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

            <motion.div transition={{ duration: 0.5, type: 'spring' }} initial={{ x: '-100vw', y: '50vh' }} animate={{ x: 0, y: '50vh' }} exit={{ x: '100vw', opacity: 0 }}>

                <ModalBoxStyle component={Paper} elevation={6} p={4} width={{ xs: '90%', md: '50%', lg: '40%' }} position={'relative'}>

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
                    <Box height={'90%'}>

                    </Box>
                </ModalBoxStyle>
            </motion.div>
        </Modal >

    )
}