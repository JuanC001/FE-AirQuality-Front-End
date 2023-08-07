import { Box, styled } from "@mui/material";

export const MicroBox = styled(Box)(({ theme }) => ({

  height: '100px',
  backgroundColor: theme.palette.secondary.light,
  width: '100px',
  borderRadius: '20%',
  transition: 'all 0.3s',
  border: '0px none transparent',
  boxShadow: '0px 0px 0px 0px transparent',
  ":hover": {
    transform: 'scale(1.1)',
<<<<<<< Updated upstream
    boxShadow: '0px 0px 1px 1px white',
    border: '2px solid white'
=======
    boxShadow: `0px 0px 1px 1px ${theme.palette.secondary.dark}}`,
    border: `1px solid ${theme.palette.secondary.dark}}`,

>>>>>>> Stashed changes
  }

}))