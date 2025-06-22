import { createAsyncThunk } from "@reduxjs/toolkit";
import { monday } from "db/schema";
import useDb from "hooks/useDb";


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