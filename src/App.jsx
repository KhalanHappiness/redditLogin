import { useState } from 'react'
import redditlogo from './assets/Reddit.png'
import googleLogo from './assets/google.svg'
//import Header from './components/Header'

import './App.css'

function App() {
 

  return (
  <>


<header >
    <a href="https://react.dev" target="_blank">
        <img src={redditlogo} className="logo" alt="reddit logo" />
    </a>

   </header>
   <main>
     <form className="space-y-4">
      <h2>Log in </h2>
      <p>By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.</p>
      
      <div className="social-input">
        <img src={googleLogo} alt="Google" className="social-logo" />
        <input type="text" placeholder="Enter your Google email" />
      </div>
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 border rounded-md bg-gray-100 focus:outline-none"
        required
      />
      <button
        type="submit"
        className="w-full py-2 bg-gray-200 text-gray-500 font-semibold rounded-full cursor-not-allowed"
        disabled >
        Log In
      </button>
    </form>
   </main>
    
  
  
  </>
     
    
   
  )
}

export default App
