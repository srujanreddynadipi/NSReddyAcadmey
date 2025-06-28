import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PricingPlans from './PricingPlans'
import UserDetailsForm from './UserDetailsForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PricingPlans />} />
        <Route path="/user-details" element={<UserDetailsForm />} />
      </Routes>
    </Router>
  )
}

export default App
