import { createSlice } from "@reduxjs/toolkit";


const PictureSlice = createSlice({
    name:'pictures',
    initialState:{
        items:[]
    },
    reducers:{
        AddPictures(state,action){
            const item = action.payload;
            return{
                ...state,
                items:item
            }
        }
    }
})


export  const PicturesActions = PictureSlice.actions;
export default PictureSlice;