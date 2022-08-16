import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
// initial state
const initialState={
    tasks:[],
    error:null,
    loading:true
}

// Create context
export const GlobalContext=createContext(initialState)

// Provider Component
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

//Actions

}
return (<GlobalContext.Provider value={{
    tasks:state.tasks,
    error:state.error,
    loading:state.loading,
    getTransactions,
    deleteTransaction,
    addTransaction
  }}>
              {children}
  </GlobalContext.Provider>)
