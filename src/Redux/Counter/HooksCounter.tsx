import { Button, Card, CardActions, CardContent, Toolbar, Typography } from '@mui/material'
import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { increment,decrement,clear } from './CounterActions'
import type { RootState,AppDispatch} from '../Store'
import { changeTheme } from '../ThemeReducer'
function HooksCounter() {
    const count=useSelector( (state :RootState) => state.counter.count)
    const theme=useSelector( (state :RootState) => state.theme.theme)
const dispatch=useDispatch<AppDispatch>()
  return (
   <>
   <Toolbar/>
   <Card>
    <CardContent>
        <Typography variant='h3'>
                {count} - {theme ? "Dark" : "Light"}
        </Typography>
    </CardContent>
    <CardActions>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(clear())}>Clear</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(changeTheme())}>toggle theme</Button>

        
    </CardActions>
   </Card>
   </>
  )
}

export default HooksCounter