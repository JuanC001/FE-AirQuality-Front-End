import {
  Box,
  Divider,
  IconButton,
  Modal,
  Paper,
  Typography,
  styled,

  Stepper,
  StepLabel,
  Step, Grid, MobileStepper,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import CloseIcon from "@mui/icons-material/Close";
import { BasicInformation } from "./RegisterUser/BasicInformation";
import { AddressInformation } from "./RegisterUser/AddressInformation";
import { CreatePassword } from "./RegisterUser/CreatePassword";
import { useEffect, useState } from "react";
import { USER_TYPES } from "../../../../Consts/UsersTypes";
import { DeviceInformation } from "./RegisterUser/DeviceInformation";
import { ConfirmationStep } from "./RegisterUser/ConfirmationStep";


const ModalBoxStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "20px",
}));

const UserStepper = ({ step, saveData, handleNext, handleBack, data }) => {

  return (
    <>
      <Box
        width={"100%"}
        height={"100%"}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        {step == 0 && (
          <BasicInformation saveData={saveData} handleNext={handleNext} />
        )}

        {step == 1 && (
          <DeviceInformation saveData={saveData} handleNext={handleNext} handleBack={handleBack} data={data} />
        )}

        {step == 2 && (

          <AddressInformation saveData={saveData} handleNext={handleNext} handleBack={handleBack} />

        )}
        {step == 3 && (
          <CreatePassword saveData={saveData} handleNext={handleNext} handleBack={handleBack} data={data} />
        )}

        {step == 4 && (
          <ConfirmationStep data={data} />
        )}
      </Box>
    </>
  )

}

const ElseStepper = ({ step, saveData, handleNext, handleBack, data }) => {

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
    >

      {step == 0 && (
        <BasicInformation saveData={saveData} handleNext={handleNext} />
      )}

      {step == 1 && (
        <CreatePassword saveData={saveData} handleNext={handleNext} handleBack={handleBack} data={data} />
      )}

      {step == 2 && (
        <ConfirmationStep data={data} />
      )}

    </Box>
  )

}

const StepAstep = ({ step, saveData, handleNext, handleBack, data }) => {

  const { role } = data

  return (
    <>
      <AnimatePresence>

        {role === USER_TYPES.USR ?
          <UserStepper step={step} saveData={saveData} handleNext={handleNext} handleBack={handleBack} data={data} />
          :
          <ElseStepper step={step} saveData={saveData} handleNext={handleNext} handleBack={handleBack} data={data} />
        }

      </AnimatePresence >
    </>
  );
};

export const ModalBox = ({ open, handleClose }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    role: USER_TYPES.USR,
  });

  const saveData = (dataenv) => {

    if (step === 0) {
      setData({});
    }

    setData({
      ...data,
      ...dataenv,
    });

  };

  const steps = ["Registrar Datos Usuario", "Dispositivo", "Dirección", "Crea una Contraseña", "Confirmación"];
  const steps2 = ["Registrar Datos Usuario", "Crea una Contraseña", "Confirmación"];

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <AnimatePresence>
      {open && (
        <Modal open={true} onClose={handleClose} sx={{ zIndex: 0 }}>
          <motion.div
            transition={{ duration: 0.5, type: "spring" }}
            initial={{ x: "-100vw", y: "50vh" }}
            animate={{ x: 0, y: "50vh" }}
            exit={{ x: "100%", opacity: 0 }}
            key="modal"
            layout
          >
            <ModalBoxStyle zIndex={-1}
              component={Paper}
              elevation={6}
              p={4}
              width={{ xs: "99%", md: "70%", lg: "60%", xl: "50%" }}
              position={"relative"}
              height={{ xs: "80vh", md: "80vh" }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: "0%",
                  right: "0%",
                }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>

              <Box height={"10%"}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Registrar Un Usuario
                </Typography>
                <Divider />
              </Box>
              <Box my={2} width={'100%'}>
                <Stepper activeStep={step} variant="outlined" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                  {data.role === USER_TYPES.USR ?
                    steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))
                    :
                    steps2.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))
                  }
                </Stepper>
                <MobileStepper activeStep={step} steps={steps.length}
                  title="pasos"
                  variant="progress"
                  position="static"
                  sx={{ width: '100%', display: { xs: 'flex', sm: 'none' }, justifyContent: 'center' }}
                />
              </Box>
              <Box
                borderRadius={"20px"}
                border={"1px solid lightgrey"}
                height={"75%"}
                p={2}
                alignItems={"center"}
                position={"relative"}
                mt={5}
                mb={2}
                sx={{
                  overflowX: "hidden",
                }}
              >
                <StepAstep
                  step={step}
                  saveData={saveData}
                  handleNext={handleNext}
                  handleBack={handleBack}
                  data={data}
                />
              </Box>
            </ModalBoxStyle>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};
