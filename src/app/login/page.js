'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Login = () => {
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
  }

  const buttonClick = () => {
    router.push("/") 
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-200 p-20 border-2 border-blue-500 rounded-xl">
        <h2 className="text-center text-2xl m-5">Login Details</h2>
        
        {/* Username Checkbox */}
        <input 
          type="checkbox" 
          id="username" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
          className="h-5 w-5 text-green-600 hover:ring-2 hover:ring-green-300 focus:ring-2 focus:ring-green-500 border-gray-300 rounded"
        />
        <label htmlFor="username" className="text-gray-700 hover:text-green-600 m-2">Username</label>

        {/* Password Checkbox */}
        <input 
          type="checkbox" 
          id="password" 
          className="h-5 w-5 text-green-600 hover:ring-2 hover:ring-green-300 focus:ring-2 focus:ring-green-500 border-gray-300 rounded"
        />
        <label htmlFor="password" className="text-gray-700 hover:text-green-600 m-2">Password</label>

        {/* Display Login Button if Checkbox is Checked */}
        {isChecked && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 m-5"
            onClick={buttonClick}
          >
            Login
          </button>
        )}
      </div>
    </div>
  )
}

export default Login
