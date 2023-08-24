import {
  Box,
  Divider,
  IconButton,
  Modal,
  Paper,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  Select,
  MenuItem,
  Button,
  Grid,
  Stepper,
  StepLabel,
  Step,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import CloseIcon from "@mui/icons-material/Close";
import { StepOne } from "./RegisterUser/StepOne";
import { StepTwo } from "./RegisterUser/StepTwo";
import { StepThree } from "./RegisterUser/StepThree";
import { useEffect, useState } from "react";
import { useForm } from "../../../Hooks/useForm";

import Swal from "sweetalert2";

const ModalBoxStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "20px",
}));

const StepAstep = ({ step, saveData, handleNext, handleBack }) => {
  return (
    <>
      <AnimatePresence>
        <Box
          width={"100%"}
          height={"100%"}
          display="flex"
          alignItems={"center"}
        >
          {step == 0 && (
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              key="stepone"
            >
              <StepOne saveData={saveData} handleNext={handleNext} />
            </motion.div>
          )}
          {step == 1 && (
            <Box
              component={motion.div}
              height="100%"
              width="100%"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              key="steptwo"
            >
              <StepTwo
                saveData={saveData}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            </Box>
          )}
          {step == 2 && (
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              key="stepthree"
            >
              <StepThree
                saveData={saveData}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            </motion.div>
          )}
        </Box>
      </AnimatePresence>
    </>
  );
};

export const ModalBox = ({ open, handleClose }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const saveData = (dataenv) => {

    if (step === 0) {
      setData({});
    }

    setData({
      ...data,
      ...dataenv,
    });

    console.log(data)

  };

  const steps = ["Registrar Datos Usuario", "Dirección", "Crea una Contraseña"];

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
        <Modal open={true} onClose={handleClose} sx={{zIndex: 0}}>
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
              width={{ xs: "99%", md: "50%", lg: "30%" }}
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
              <Box my={2}>
                <Stepper activeStep={step}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
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
                />
              </Box>
            </ModalBoxStyle>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};
