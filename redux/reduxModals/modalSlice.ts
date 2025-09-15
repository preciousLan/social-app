import { createSlice } from '@reduxjs/toolkit'


const initialState = {
signUpModalOpen : false,
logInModalOpen : false,
commentModalOpen: false,
commentPostDetails: {
name: "",
username : "",
text : "",
id : ""

}}

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {

  openSignUpModal: (state)=>{
  state.signUpModalOpen = true
  },
  closeSignUpModal: (state)=>{
  state.signUpModalOpen = false
  },

  openLogInModal: (state)=>{
  state.logInModalOpen = true
  },
  closeLogInModal: (state)=>{
  state.logInModalOpen = false
  },
  openCommentModal : (state)=>{
    state.commentModalOpen = true
  },
  closeCommentModal: (state)=>{
    state.commentModalOpen = false
  },
  setCommentDetails: (state, action)=>{
state.commentPostDetails.name = action.payload.name
state.commentPostDetails.username = action.payload.username
state.commentPostDetails.text = action.payload.text
state.commentPostDetails.id = action.payload.id
  }


  
  }
});

export const {openSignUpModal,closeSignUpModal,openLogInModal,closeLogInModal,
  openCommentModal,closeCommentModal,setCommentDetails} = ModalSlice.actions

export default ModalSlice.reducer