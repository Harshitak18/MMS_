import { useState } from "react";
import { createContext } from "react";

const ThemeEffect = createContext()

const ThemeProvider = ({children})=>{
    const [blur, setBlur] = useState(false)

    const handleBlur = ()=>{
        setBlur((prev)=>!prev)
    }

    return (
        <ThemeEffect.Provider value={{handleBlur, blur}}>
            {children}
        </ThemeEffect.Provider>
    )
}

export {ThemeEffect}
export default ThemeProvider