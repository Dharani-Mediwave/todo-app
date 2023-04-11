import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../reducers/todoSlider';

export default configureStore({
  reducer: {
    toDo: toDoReducer
  }
})