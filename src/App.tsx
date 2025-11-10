import './App.css'
// import ComponentA from './Components/ComponentA'
// import { UserProvider } from './Components/UseContext'
// import React from 'react';
// export const Context1=React.createContext();
// import ThemeProvider from './Components/ThemeProvider';
// import Navbar from './Components/Navbar';
// import Counter from './Redux/Counter/Counter';
// import HooksCounter from './Redux/Counter/HooksCounter';
// import UserContainer from './Redux/users/UserContainer';
// import Counter from './Redux/RTK/rtkCounter';
// @ts-ignore: module has no declaration file
import Memo from './Perfomance_optimization/Memo.jsx'
// import ZusCounter from './Zustand/ZusCounter.jsx'
// @ts-ignore: module has no declaration file
import ParentComponent from './Perfomance_optimization/ParentComponent.jsx'

// import ZusUserList from './Zustand/ZusUserList.jsx'
function App() {

  return (
    <>


<ParentComponent/>
<Memo/>













    {/* <UserProvider value={"hello Context from UserContext"}>
      <Context1.Provider value={"hello context from context 1"}>
    <ComponentA/>
    </Context1.Provider>
    </UserProvider> */}
{/* <ThemeProvider> */}
  {/* <Navbar/> */}
  {/* <Counter/>
  <HooksCounter/> */}
  {/* <ZusUserList/> */}
  {/* <ZusCounter/> */}
  {/* <UserContainer/> */}
  {/* <Counter/> */}
  {/* <UserContainer/> */}
{/* </ThemeProvider> */}
    </>
  )
}

export default App
