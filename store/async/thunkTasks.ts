import { createAsyncThunk } from "@reduxjs/toolkit";
import { monday } from "db/schema";
import useDb from "hooks/useDb";

export const getThunkTasks = createAsyncThunk("getTasks",async(_,thunkAPI)=>{
    const {rejectWithValue}= thunkAPI
      const db = useDb()
    try {
      const data = await db.select().from(monday)
      return data
    } catch (error) {
        console.log(rejectWithValue(error));  
    }
})
