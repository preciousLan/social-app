import { createSlice } from '@reduxjs/toolkit'

const initialState = {
signUpModalOpen : false,
logInModalOpen : false,
commentModalOpen: false
}

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
  }


  
  }
});

export const {openSignUpModal,closeSignUpModal,openLogInModal,closeLogInModal,
  openCommentModal,closeCommentModal} = ModalSlice.actions

export default ModalSlice.reducer