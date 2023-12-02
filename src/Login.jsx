import React from 'react'

function Login() {
  return (
    <div className="container mx-auto p-12">
    <form className="max-w-md mx-auto bg-yellow-200 rounded-lg overflow-hidden shadow-md p-6">
      <h2 className="text-4xl font-semibold mb-4 mx-28">Sign up</h2>
     
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-b-orange-200"
          placeholder="Your Email"
        />
      </div>
     
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-b-orange-200"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-amber-400 text-white py-2 px-4 rounded-md hover:bg-amber-600 focus:outline-none focus:ring focus:border-b-orange-300"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default Login