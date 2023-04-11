import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  todoList: []
};

export const toDoSlider = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const { todoList } = state;
      const newTodoList = {
        id: Math.floor(1000 + Math.random() * 9000),
        content: action.payload.newContent
      }
      todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      const { todoList } = state;
      const { payload } = action;
      const idx = todoList.findIndex((item: any) => item.id === payload.todoId);
      if (idx > -1) {
        todoList.splice(idx, 1);
        state.todoList = todoList;
      }
    },
    editTodo: (state, action) => {
      const { payload } = action;
      const { todoList } = state;
      const idx = todoList.findIndex((item: any) => item.id === payload.id);
      if (idx > -1) {
        todoList[idx] = payload;
        state.todoList = todoList;
      }
    }
  },
  extraReducers: {
    
  }
})
// Action creators are generated for each case reducer function
export const { addToDo, deleteToDo, editTodo } = toDoSlider.actions
export default toDoSlider.reducer;
