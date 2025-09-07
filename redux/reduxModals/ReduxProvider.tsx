"use client"

import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'


interface ReduxProviderChildren{
  children: ReactNode 
}

const ReduxProvider = ({children}:ReduxProviderChildren) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ReduxProvider


