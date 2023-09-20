import { useContext } from "react"
import { ThemeContext } from "./ContextUsage";
import '../../App.css' ;


const UsingProvider = () => {

    const {theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className = "usingProvider" style = 
     {{ backgroundColor : theme === "dark" ? "black" : "white" ,
      color:theme === "dark" ? "white" : "black" 
     }}>
        <h3> Inside Provider </h3>
        <button onClick={toggleTheme}> Change Theme  </button>
    </div>
  )
}

export default UsingProvider