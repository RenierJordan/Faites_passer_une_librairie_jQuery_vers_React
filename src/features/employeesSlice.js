import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    name:"employees",
    initialState:{
        employeesList:[],
    },
    reducers:{
        create: (state,action) => {
            
            state.employeesList.push(action.payload) ;
           
            
        },
        reset: (state) => {
            state.employeesList = [];
        },

    },
    
});

export const {create, reset} = employeesSlice.actions;


export default employeesSlice.reducer;