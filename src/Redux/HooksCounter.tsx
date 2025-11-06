import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { increment,decrement,clear } from './CounterActions'
import type { RootState,AppDispatch} from './Store'
function HooksCounter() {
    const count=useSelector( (state :RootState) => state.counter.count)
    const theme=useSelector( (state :RootState) => state.theme.theme)

    const dispatch=useDispatch<AppDispatch>()
  return (
   <>
   <Card>
    <CardContent>
        <Typography variant='h3'>
                {count}
        </Typography>
    </CardContent>
    <CardActions>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(clear())}>Clear</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        
    </CardActions>
   </Card>
   </>
  )
}

export default HooksCounter