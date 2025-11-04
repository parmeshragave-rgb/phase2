import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Navbar=() => {
   const [theme, toggleTheme] = useContext(ThemeContext);
  return(
    <>
    <AppBar  sx={{bgcolor:theme==="light" ? "blue" : "red",color:theme==="light" ?"red" :"blue"}}>
        <Toolbar>
           
            <Typography variant='h4' sx={{ display:"flex",flexGrow:1,justifyContent:"flex-start"}}>
                   ThemeSet.
            </Typography>
            
            <Stack spacing={2} direction={"row"}>
             <Button sx={{color:"black"}}>Home</Button>
             <Button sx={{color:"black"}}>About</Button>

             <Button sx={{color:"black"}}>Contact</Button>

             <Button sx={{color:"black"}} onClick={toggleTheme}>Switch theme</Button>

            </Stack>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar