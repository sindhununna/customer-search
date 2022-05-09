import React from 'react'
import './App.css'
// import { PaginationTable } from './components/PaginationTable'
import {BasicTable} from './components/BasicTable'
// import {FilteringTable} from './components/FilteringTable'
function App() {
  return (
    <div className='App'>
       {/* <PaginationTable /> */}
    <BasicTable /> 
     {/* <FilteringTable /> */}
    </div>
  )
}

export default App