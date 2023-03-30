import { AppBar, Box, Toolbar, Typography } from "@mui/material";

type BaseLayoutProps = {
    children:React.ReactNode,
    appBarTitle:string
}

export function BaseLayout({children, appBarTitle}:BaseLayoutProps){

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h5'>APP BAR</Typography>
                </Toolbar>
            </AppBar>
            <Box>
                {children}
            </Box>
        </>
    )
}