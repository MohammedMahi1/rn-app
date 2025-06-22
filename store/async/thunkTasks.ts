import { createAsyncThunk } from "@reduxjs/toolkit";
import { monday } from "db/schema";
import useDb from "hooks/useDb";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getThunkTasks = createAsyncThunk("getTasks", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    await AsyncStorage.getItem('tasks');
  } catch (err) {
    console.log(rejectWithValue(err));
  }
})


export const insertInThunk = createAsyncThunk("insertTask", async (data: string, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const db = useDb()

  try {
    const res = await db.insert(monday).values(
      {
        task: data,
      },
    )
    return res
  } catch (error) {
    console.log(rejectWithValue(error));
  }
})