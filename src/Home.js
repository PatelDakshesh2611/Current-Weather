import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1>This is home page</h1>
      <Link to='weather'>Get weatherdetails</Link>
    </div>
  )
}
