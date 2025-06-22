import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const insertInThunk = createAsyncThunk("insertTask", async (data:string, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    await AsyncStorage.setItem('my-key', data);
  } catch (err) {
    console.log(rejectWithValue(err));
  }
})