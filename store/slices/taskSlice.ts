import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { insertInThunk } from "store/async/thunkTasks";
import { Day, Task } from "types/task";



export type StateType = {
  [key in Day]: Task[];
};
const initialState:StateType = {
    "monday":[],
    "friday":[],
    "saturday":[],
    "sunday":[],
    "thursday":[],
    "tuesday":[],
    "wednesday":[]
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Add data
        builder.addCase(insertInThunk.pending, (state, action) => {
            console.log("pendding");

        })
        builder.addCase(insertInThunk.fulfilled, (state, action) => {
            console.log("full");
        })
        builder.addCase(insertInThunk.rejected, (state, action) => {
            console.log("reject");

        })


        //Get data 
        builder.addCase(insertInThunk.pending, (state, action) => {
            console.log("pendding");

        })
        builder.addCase(insertInThunk.fulfilled, (state, action) => {
            console.log("full");
        })
        builder.addCase(insertInThunk.rejected, (state, action) => {
            console.log("reject");

        })
    }
})

export default taskSlice.reducer