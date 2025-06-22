import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTaks = createAsyncThunk("getTasks", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    await AsyncStorage.getItem('tasks')
  } catch (err) {
    console.log(rejectWithValue(err));
  }
})

export const insertInThunk = createAsyncThunk("insertTask", async (data: string, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    await AsyncStorage.setItem('tasks', data);
  } catch (err) {
    console.log(rejectWithValue(err));
  }
})