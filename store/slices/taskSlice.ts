import { createSlice } from "@reduxjs/toolkit";
import { getThunkTasks } from "store/async/thunkTasks";


type StateType = {
    task:string,
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
        builder.addCase(getThunkTasks.fulfilled,(state,{payload})=>{
            
        })  
    }
})


export default taskSlice.reducer