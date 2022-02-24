import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/"

const initialState = {
    todos:[],
    addTodoStatus: "",
    addTodoError: "",
    getTodoStatus: "",
    getTodoError: "",
    updateTodoStatus: "",
    updateTodoError: "",
    deleteTodoStatus: "",
    deleteTodoError: "",
}

const todosAdd = createAsyncThunk("todos/todosAdd",async(todo,{rejectWithValue})=>{
    try {
        const response = await axios.post(baseUrl + "todos",todo)
        return response.data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data)
    }

})

const todosSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{},
    extraReducers:{
        [todosAdd.pending]:(state,action)=>{
            return{
                ...state,
                addTodoStatus:"prnding",
                addTodoError: "",
                getTodoStatus: "",
                getTodoError: "",
                updateTodoStatus: "",
                updateTodoError: "",
                deleteTodoStatus: "",
                deleteTodoError: "",

            }
        },
        [todosAdd.fulfilled]:(state,action)=>{
            return{
                ...state,
                todos:[action.payload,...state.todos],
                addTodoStatus:"success",
                addTodoError: "",
                getTodoStatus: "",
                getTodoError: "",
                updateTodoStatus: "",
                updateTodoError: "",
                deleteTodoStatus: "",
                deleteTodoError: "",

            }
        },
    },
})

export default todosSlice.reducer;