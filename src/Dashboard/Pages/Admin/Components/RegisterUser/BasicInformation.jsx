import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Collapse,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useForm } from "../../../../Hooks/useForm";
import { USER_TYPES } from "../../../../../Consts/UsersTypes";
import { motion } from 'framer-motion'
import { useUsers } from "../../../../Hooks/useUsers";

export const BasicInformation = ({ handleNext, saveData }) => {

  const [verifying, setVerifying] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const { name, email, role, onInputChange } = useForm({
    name: "",
    email: "",
    role: "",
  });

  const { verifyUser } = useUsers()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, role };

    if (!emailError && !verifying) {
      saveData(data);
      handleNext();
    }

  };

  const handleVerifyUser = async () => {
    const res = await verifyUser(email)
    if (res.result === false) {
      setEmailError(true)

    }
    setVerifying(false)


  }

  useEffect(() => {
    setEmailError(false)
    if (email.length > 0) {
      setVerifying(true)
    } else {
      setEmailError(false)
      setVerifying(false)
    }
    const delaySearch = setTimeout(() => {

      if (email.length > 0) {
        handleVerifyUser()
      }

    }, 2000)

    return () => clearTimeout(delaySearch)

  }, [email])

  return (
    <Box width={'100%'} >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        key="stepone"
      >
        <Box component={"form"} onSubmit={handleSubmit} position={"relative"} width={'100%'}>
          {emailError && (
            <motion.div animate={{ scaleY: [0, 1] }}>
              <Alert severity="error" sx={{ mb: 2 }}>
                El correo ya se encuentra registrado
              </Alert>
            </motion.div>
          )}
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                label={"Nombre completo"}
                type="text"
                required
                fullWidth
                color="secondary"
                value={name}
                onChange={onInputChange}
                name="name"
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <TextField
                label={"Correo"}
                type={"email"}
                placeholder="correo@unbosque.edu.co"
                required
                fullWidth
                color="secondary"
                value={email}
                name="email"
                onChange={onInputChange}
                error={emailError}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {verifying && <CircularProgress size={20} />}
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" color="secondary">
                  Rol
                </InputLabel>
                <Select
                  value={role}
                  name="role"
                  onChange={onInputChange}
                  required
                  color="secondary"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Rol"
                >
                  <MenuItem value={USER_TYPES.USR}>Usuario</MenuItem>
                  <MenuItem value={USER_TYPES.INV}>Investigador</MenuItem>
                  <MenuItem value={USER_TYPES.ADM}>Admin</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>

          <Grid container height="20" position="absolute" sx={{ bottom: -50 }}>
            <Grid item xs={6}>
              <Button type=""></Button>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end">
              <Button type="Submit">Next</Button>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
};
