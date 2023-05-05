import { Box, styled } from "@mui/material";

export const DashBox = styled(Box)(({ theme }) => ({

    borderRadius: '10px',
    transition: 'ease 0.2s',
    cursor: 'pointer',
    ':hover': {

        backgroundColor: theme.palette.primary.light,
        transform: 'translateY(-5px)',
        boxShadow: `5px 10px 10px ${theme.palette.primary.main}`,

    },

    '.active': {

        backgroundColor: theme.palette.primary.light,
        transform: 'translateY(-5px)',
        boxShadow: `5px 10px 10px ${theme.palette.primary.main}`,

    }

}))