import { Box, styled } from "@mui/material";

export const ImgBox = styled(Box)(() => ({

    filter: 'invert(0.5) sepia(1) hue- rotate(10deg) saturate(1000%) blur(10px)',
    transition: 'all 0.3s',
    maxWidth: '45%',
    transitionTimingFunction: 'ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1)',
  
    ":hover": {
      backgroudColor: 'red',
      transform: 'translateY(-5px)',
      filter: 'drop-shadow(10px 10px 10px lightgrey)'
    }
  
  }));