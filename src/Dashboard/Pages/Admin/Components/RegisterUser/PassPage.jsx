import { Box, Button } from "@mui/material";

export const PassPage = ({ step, handleBack, handleNext }) => {
  return (
    <>
      <Box position={"relative"} width={"100%"} height={"5%"}>
        <Grid container>
          <Grid item xs={6}>
            <Box>{step > 0 && <Button onClick={handleBack}>Atras</Button>}</Box>
          </Grid>

          <Grid item xs={6} display={"flex"} justifyContent={"end"}>
            {step < 2 && <Button onClick={handleNext}>Siguiente</Button>}
            {step == 2 && <Button onClick={handleNext}>Finalizar</Button>}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
