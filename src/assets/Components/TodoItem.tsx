import { Paper , Typography ,Button , Stack ,TextField } from '@mui/material';
import {useState } from 'react' ;

type PropsType = {
     todo : TodoItemType;
     deleteHandler :   (id : string) => void;
     EditHandler : (id:string , newtitle : string) => void;
}

const TodoItem = ({ todo , deleteHandler , EditHandler } : PropsType ) => {

     const[isEditActive,setisEditActive] = useState<boolean>(false);        // when to show textbox and normal Text 
     const[textval,setTextval]           = useState<string>(todo.title); 

    //  const changedHandler = (e) => {
    //    const Newtodo  = e.target.value;
    //   //  setTextval(Newtodo);
    //   //  setisEditActive((prev) => !prev)
    //  }


  return (
    <Paper sx = {{padding : '1rem'}}>
        <Stack direction={'row'} alignItems = {'center'} >
                {
                    isEditActive ? (
                        <>
                          <TextField value = {textval}  
                            onChange  = {(e) => setTextval(e.target.value)}
                            onKeyDown = {(e) => { 
                                if(e.key === "Enter") {
                                    EditHandler(todo.id,textval);
                                    setisEditActive(false);
                                }
                            }}
                          />
                        </>
                    ) : (
                        <>
                            <Typography marginRight={'auto'}> {todo.title} </Typography>
                        </>
                    )
                }

            <Button  onClick = {() => {
                 EditHandler(todo.id,textval);
                setisEditActive((prev) => !prev)
            }
              }> 
             {isEditActive ? "Done" : "Edit"}
             </Button>

            <Button onClick = {() => deleteHandler(todo.id)}> Delete </Button>
        </Stack>
    </Paper>
  )
}

export default TodoItem