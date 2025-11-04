import './App.css'
// import ComponentA from './Components/ComponentA'
// import { UserProvider } from './Components/UseContext'
import React from 'react';
// export const Context1=React.createContext();
import ThemeProvider from './Components/ThemeProvider';
import Navbar from './Components/Navbar';
function App() {

  return (
    <>
    {/* <UserProvider value={"hello Context from UserContext"}>
      <Context1.Provider value={"hello context from context 1"}>
    <ComponentA/>
    </Context1.Provider>
    </UserProvider> */}
<ThemeProvider>
  <Navbar/>
</ThemeProvider>
    </>
  )
}

export default App
