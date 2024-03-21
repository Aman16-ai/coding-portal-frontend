import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <div style={{marginTop:'13px'}}>
        <Outlet/>
        </div>
    </div>
  )
}
