import { Box, styled } from "@mui/material";

export const MicroBox = styled(Box)(({ theme }) => ({

  height: '100px',
  backgroundColor: theme.palette.secondary.light,
  width: '100px',
  borderRadius: '20%',
  transition: 'all 0.3s',
  border: '1px none black',
  boxShadow: '0px 0px 1px 1px white',
  color: theme.palette.primary.dark,
  ":hover": {
    transform: 'scale(1.1)',
    boxShadow: '0px 0px 1px 1px white',
    border: '2px solid white',

  }

}))