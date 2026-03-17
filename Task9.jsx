import React from "react";

function Task9() {

  // reusable button style
  const baseButton = "px-4 py-2 rounded text-white";

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 3️⃣ Responsive Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>


      <div className="p-6">

        {/* 2️⃣ Card Component */}
        <div className="border rounded-lg shadow-md p-6 max-w-sm bg-white mb-6">
          <h2 className="text-xl font-bold mb-2">Product Card</h2>

          <p className="text-gray-600 mb-4">
            This card is styled using Tailwind spacing, typography, and border utilities.
          </p>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Buy Now
          </button>
        </div>


        {/* 4️⃣ Button Group */}
        <div className="space-x-4 mb-6">

          <button
            className={`${baseButton} bg-blue-500 hover:bg-blue-700 focus:ring-2 active:scale-95`}
          >
            Save
          </button>

          <button
            className={`${baseButton} bg-green-500 hover:bg-green-700 focus:ring-2 active:scale-95`}
          >
            Submit
          </button>

          <button
            className={`${baseButton} bg-red-500 hover:bg-red-700 focus:ring-2 active:scale-95`}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default Task9;