import { createSlice } from "@reduxjs/toolkit";
const initialState={
   value:0,
    origin:0,

    destination:0,
    travelTimeInformation:0
}


export const navSlice=createSlice({
    name:'nav',
    reducers:{
        setOrigin:(state,action)=>{
            state.origin=action.payload;
        },
        setDestination:(state,action)=>{
            state.destination=action.payload;
        },
        setTravelTimeInformation:(state,action)=>{
            state.travelTimeInformation=action.payload;
        }
    }
})



export const {setOrigin,setDestination,setTravelTimeInformation}=navSlice.actions;
export default navSlice.reducer;