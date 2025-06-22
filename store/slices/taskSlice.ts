import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { insertInThunk } from "store/async/thunkTasks";


type StateType = {
    task:string | undefined,
    isChecked:boolean
}[]
const initialState:StateType = []
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        //Add data
        builder.addCase(insertInThunk.pending,(state,action)=>{
            console.log("pendding");
            
        })
        builder.addCase(insertInThunk.fulfilled,(state,action)=>{
            console.log("full");
            
        })
        builder.addCase(insertInThunk.rejected,(state,action)=>{
            console.log("reject");
            
        })

    }
})

export default taskSlice.reducer