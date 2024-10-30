import React from 'react';
import notificaionIcon from '/notification-icon.png';

const Navbar:React.FC = () => {
  return (
     <section>
        <div>
            <div className='flex  justify-between '>
                <h2 className='text-base font-normal text-[#1B1C1E] '>Dashboard</h2>
                <div className='flex gap-4'>
                <img src={notificaionIcon} className='w-6 h-6 bg-[#EBEDF0] z-4 p-4 rounded-full' alt="notification icon" />
                <span className='px-12 bg-[#E7EFF6] rounded-[20px]'></span>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Navbar;