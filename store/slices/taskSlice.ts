import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { insertInThunk } from "store/async/thunkTasks";


type StateType = {
   [key:string]:object 
}

const initialState:StateType = {
    "monday": [
        {
            id: 1,
            task: "React js",
            isChecked: false
        }
    ],
    "tuesday": [
        {
            id: 1,
            task: "React js",
            isChecked: false
        }
    ],
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