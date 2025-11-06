
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { increment,decrement,clear } from './CounterActions';
import { connect } from 'react-redux'

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  clear: () => void;
}


function Counter(props: CounterProps) {
 
    return (

    <>
    <Card>
        <CardContent>
            <Typography variant='h6'>
                {props.count}
            </Typography>
        </CardContent>
        <CardActions>
    <Button onClick={props.increment}>+</Button>
     <Button onClick={props.clear}>Clear</Button>
   <Button onClick={props.decrement}>-</Button>
   </CardActions>
</Card>

    
    </>
  )
}

const mapStateToProps = (state:{count:number}) => ({
    
      count:state.counter.count
    
});
 const mapDispatchToProps = dispatch => {
  return{
          increment:() => dispatch(increment()),
          decrement:() => dispatch(decrement()),
          clear:() => dispatch(clear())
  }
 }

export default connect(mapStateToProps,mapDispatchToProps)(Counter)