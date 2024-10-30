import React from 'react'
import { Link } from 'react-router-dom';

const ComingSoonPage:React.FC = () => {
   return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 mt-4">
      <h1 className="text-6xl font-bold text-gray-800 animate-bounce">Coming soon</h1>
     <p className="text-gray-500 mt-2">Abi how Asake talk am again? Them never see me coming 😛 😛 😛 </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Go back 
      </Link> 
    </div>
  );



};

export default ComingSoonPage;