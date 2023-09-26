import { Paper , Typography ,Button , Stack } from '@mui/material';

type PropsType = {
     todo : TodoItemType;
     deleteHandler :   (id : string) => void;
     completeHandler : (id : string) => void;
}

const TodoItem = ({ todo , deleteHandler , completeHandler  } : PropsType ) => {
  return (
    <Paper sx = {{padding : '1rem'}}>
        <Stack direction={'row'} alignItems = {'center'} >
            <Typography marginRight={'auto'}> {todo.title} </Typography>
            <Button > Edit </Button>

            <Button onClick = {() => deleteHandler(todo.id)}> Delete </Button>
        </Stack>
    </Paper>
  )
}

export default TodoItem