import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getThunkTasks } from "store/async/thunkTasks";


type StateType = {
    task:string | undefined,
    isChecked:boolean
}
const initialState:StateType = {
    isChecked:false,
    task:""
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getThunkTasks.pending,(state,{payload})=>{
            console.log("pending");
        });
        builder.addCase(getThunkTasks.fulfilled,(state,{payload})=>{
            state.isChecked = true;
            const task = payload?.find((e)=>e.task)?.task;
            console.log(task);
            
            state.task = task
        });
        builder.addCase(getThunkTasks.rejected,(state,{payload})=>{
            console.log("error");
        })  
    }
})

export default taskSlice.reducer