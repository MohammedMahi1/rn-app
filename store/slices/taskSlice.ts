import { createSlice } from "@reduxjs/toolkit";


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
    reducers:{}
})


export default taskSlice