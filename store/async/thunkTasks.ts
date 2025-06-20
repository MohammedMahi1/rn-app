import { createAsyncThunk } from "@reduxjs/toolkit";
import { monday } from "db/schema";
import useDb from "hooks/useDb";

export const getThunkTasks = createAsyncThunk("getTasks",async(_,thunkAPI)=>{
    const {rejectWithValue}= thunkAPI
const db = useDb()

    try {
      const data = await db.select().from(monday)
      console.log("fff");
      return data
    } catch (error) {
        console.log(rejectWithValue(error));  
    }
})


export const insertInThunk = createAsyncThunk("insertTask",async (data:string,thunkAPI)=>{
  const {rejectWithValue} = thunkAPI;
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