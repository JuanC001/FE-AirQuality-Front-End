import { Box, styled } from "@mui/material";

export const DashBox = styled(Box)(({ theme }) => ({

    borderRadius: '3%',
    transition: 'all 0.2s ease-in-out',
    padding: theme.spacing(3),

    ':hover': {

        backgroundColor: theme.palette.primary.light,
        transform: 'translateY(-5px)',
        boxShadow: `5px 10px 5px${theme.palette.primary.main}`,

    }

}))