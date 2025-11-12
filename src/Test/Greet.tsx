type GreetProps={
    name?:string
}

function Greet(props:GreetProps) {
  return (
    <div>Hello {props.name ? props.name : 'Guest'}</div>
  )
}

export default Greet