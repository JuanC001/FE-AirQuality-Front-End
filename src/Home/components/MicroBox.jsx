import { Box, styled } from "@mui/material";

export const MicroBox = styled(Box)(({ theme }) => ({

    height: '100px',
    width: '100px',
    borderRadius: '20%',
    marginRight: 'auto',
    marginLeft: 'auto',
    transition: 'all 0.3s',
    border: '1px none transparent',
    boxShadow: '0px 0px 1px 1px transparent',
    ":hover": {
      transform: 'scale(1.1)',
      boxShadow: '0px 0px 1px 1px white',
      border: '2px solid white'
    }
  
  }))