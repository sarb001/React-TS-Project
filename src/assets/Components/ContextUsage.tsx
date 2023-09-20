import { ReactNode, createContext, useState } from "react";
import UsingProvider from "./UsingProvider";

type TypeTheme = "light" | "dark" ;

// dataType used Dynamically 
interface ThemeContextType {
  theme : TypeTheme,
  toggleTheme: () => void;
}


// Creating Context with Initial Value 
export const ThemeContext = createContext<ThemeContextType>({
    theme : "light",
    toggleTheme : () => {}
})

 const ThemeProvider = ({children } : {children : ReactNode}) => {

      const [theme,setTheme] = useState<TypeTheme>("light");        // set now at first 

      const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
      }

     return (
        <ThemeContext.Provider value = {{theme ,toggleTheme }}>
            {children}
        </ThemeContext.Provider>
     )
}

// passed here as Main Component 

const ContextUsage = () => {
  return (
     <ThemeProvider>
         <h3> Hello flight </h3>
         <UsingProvider />
     </ThemeProvider>
  )
}

export default ContextUsage