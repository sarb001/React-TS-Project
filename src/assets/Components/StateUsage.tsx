import { FormEvent, useState } from "react"

interface Person  {
    name : string,
    age  : number,
}

const StateUsage = () => {

    const [user,setUser] = useState<Person>();

    const submitHandler = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('user submission- ',user);
    }


  return (
    <div>
        <h2> useState Usage </h2>
        <form onSubmit = {submitHandler}>
              <input  type = "number"  
              placeholder = "Enter age.."
              value = {user?.age || ""}       // exist then name else  default value or empty  
              onChange = {(e) => setUser((prev) => ({
                ...prev!, age : Number(e.target.value)
              }))}  />

              <input  type = "text"  
               placeholder="Enter Name..."
              value = {user?.name || ""}        // exist then name else  empty 
              onChange = {(e) => setUser((prev) => ({
                ...prev!, name : e.target.value }))}  />

                <button type = "submit"> Register </button>

        </form>
    </div>
  )
}

export default StateUsage