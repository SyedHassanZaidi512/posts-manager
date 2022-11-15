import { configureStore } from '@reduxjs/toolkit';
import editSlice from './redux/editSlice';


export default configureStore({
  reducer: {
    edit:editSlice
  }
})

