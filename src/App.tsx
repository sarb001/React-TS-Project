
// // import { useState } from 'react';
// // import './App.css';
// // import { StateType  , increment , decrement , incrementByValue } from './assets/Components/Redux';
// // import { useSelector , useDispatch } from 'react-redux/es/exports';


// // import UseReducerUsage from './assets/Components/UseReducerUsage'
// // import ContextUsage from './assets/Components/ContextUsage'
// // import StateUsage from './assets/Components/StateUsage'
// // import Box from './assets/Components/Box'

// function App() {

//   // const [val, setval] = useState<number>(0);
//   // const dispatch = useDispatch();
//   // const count = useSelector((state : StateType ) => state.counter);

//   //  const incrementValueBy = () => {
//   //    setval(0)
//   //    dispatch(incrementByValue(val))
//   //  }

//   //  const incrementHandler = () => {
//   //    dispatch(increment());
//   //  }
//   //  const decrementHandler = () => {
//   //    dispatch(decrement());
//   //  }

//   return (
//     <>
//          <h1> Use React-Redux with Redux Toolkit  </h1>
//           {/* <Box  heading = {"Hello Structuring here"} 
//            addnumber = {45}
//           /> */}
//           {/* <StateUsage /> */}
//           {/* <ContextUsage /> */}
//           {/* <UseReducerUsage /> */}

//           {/* <Redux /> */}


//           {/* <div className = "mainapp">
//                 <h3> Toolkit Counter here - {count}  </h3>
//                   <button onClick = {incrementHandler}> Add ++ </button>
//                   <button onClick = {decrementHandler}> Subtact --  </button>
//                   <div>
//                      <input type = 'number'  value = {val}   
//                      onChange={(e) => setval(Number(e.target.value))} />
//                   </div>
//                   <button onClick = {incrementValueBy}> Add Value </button>
//           </div> */}

//     </>
//   )
// }

// export default App


// For React + Ts Project - Todo App  


import { AppBar, Container, Toolbar, Typography ,Stack  ,Button , TextField } from '@mui/material' ;
import { useState } from 'react' ;
import TodoItem from './assets/Components/TodoItem';

const App = () => {

    const [todos, setTodos] = useState<TodoItemType[]>([]) ;
    const [title,setTitle]  = useState<TodoItemType["title"]>("");
  
    const completeHandler = (id : string):void => {
      alert(id);
    };
    const deleteHandler   = (id : string):void => {
      alert(id);
    };

    const addHandler = () => {
        const newTodo = {
           title,
           isCompleted : false,
           id : String(Math.random() * 1000) ,
        };
        setTodos((prev) => [ ...prev, newTodo]);
        setTitle("");
    }

  return (
    <>
    <Container maxWidth = "sm" sx = {{height : '80vh'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography>  Todo App React + Ts   </Typography> 
        </Toolbar>
      </AppBar>

      <Stack  height = {'80%'} direction={"column"}  spacing={'1rem'} p = {'1rem'}>
              {todos.map((i) => (
                 <TodoItem  key = {i.id}  todo = {i} 
                  deleteHandler   = {deleteHandler}
                  completeHandler = {completeHandler}
                 /> 
              ))}
      </Stack>
        <TextField
         value = {title} 
         onChange={(e) => setTitle(e.target.value)} 
         fullWidth label = {'New Task'}  />
        <Button variant='contained'  onClick = {addHandler} > Add  </Button>
        <Button variant='contained' > Delete </Button>
    </Container>
    </>
  )
}

export default App