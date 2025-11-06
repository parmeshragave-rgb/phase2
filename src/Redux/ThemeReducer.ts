import { CHANGETHEME } from "./CounterTypes";


interface InitialThemeState{
    theme:boolean
}

const initialThemeState:InitialThemeState={
    theme:false
}
interface ChangeTheme{
    type:string
}

export const changeTheme= () : ChangeTheme => ({
    type:CHANGETHEME
})

const ThemeReducer=(state=initialThemeState,action:ChangeTheme):InitialThemeState => {
    switch(action.type){
        case CHANGETHEME:
            return{theme:!state.theme}
        default:
            return state
    }
}

export default ThemeReducer