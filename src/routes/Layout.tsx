import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import '../fonts.css';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className='max-w-[1280px] mx-auto custom-font'>
      <header className="sticky md:hidden w-full top-0 z-20 bg-white shadow-md">
        <nav className="flex items-center p-4">
          <button
            className='text-2xl'
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? <FaXmark /> : <GiHamburgerMenu />}
          </button>
        </nav>
      </header>
      
      <main className="flex min-h-screen bg-[#FFFFFF] pt-4">
      
        <div
          className={`fixed inset-y-0 left-0 z-40 transition-transform transform md:sticky md:h-full ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } bg-[#FFFFFF] md:translate-x-0`}
        >
          <button
            className='md:hidden p-4 text-2xl'
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <FaXmark /> 
          </button>
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
        
        {(isSidebarOpen && window.innerWidth <= 768) && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={toggleSidebar} 
          />
        )}
   
        <div className="flex-1 px-4 md:pl-[4rem] overflow-x-auto">
          <Navbar />
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;

