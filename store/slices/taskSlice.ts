import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getThunkTasks, insertInThunk } from "store/async/thunkTasks";


type StateType = {
    task:string | undefined,
    isChecked:boolean
}
const initialState:StateType = {
    isChecked:false,
    task:undefined
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        //Add data
        builder.addCase(insertInThunk.fulfilled,(state,action)=>{
            console.log("fgbfg");
            
        })

        //Get data
        builder.addCase(getThunkTasks.pending,(state,{payload})=>{
            console.log("pending");
        });
        builder.addCase(getThunkTasks.fulfilled,(state,{payload})=>{
            state.isChecked = true;
            const task = payload?.find((e)=>e.task)?.task;
            state.task = task
            console.log("dfvdfvdf");
        });
        builder.addCase(getThunkTasks.rejected,(state,{payload})=>{
            console.log("errro");
        })  
    }
})

export default taskSlice.reducer