// import React from 'react';
// import walletIcon from '/wallet.png';
// import settingsIcon from '/settings-icon.png';
// import linkIcon from '/link-circle.png';
// import bankIcon from '/bank.png';
// import logoutIcon from '/logout-icon.png';
// import passport from '/passport.png';
// import logo from '/pysche-logo.png';
// import { NavLink } from 'react-router-dom';

// interface SidebarProps {
//   toggleSidebar: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
//   return (
//     <section>
//       <div className='flex sticky top-0 flex-col gap-80 h-screen pl-6 pr-2 bg-[#FFFFFF]'>
//         <div className='flex flex-col gap-16'>
//           <picture>
//             <img src={logo} alt="website logo" />
//           </picture>

//           <ul className='flex flex-col gap-4'>
//             {[
//               { icon: walletIcon, name: 'Wallets' },
//               { icon: bankIcon, name: 'Accounts' },
//               { icon: linkIcon, name: 'Payment Links' },
//               { icon: settingsIcon, name: 'Settings' }
//             ].map((ele, i) => (
//               <li key={i}> 
//                 <NavLink
//                   to={'/coming-soon'}
//                   className='flex gap-4 items-center w-fit hover:shadow-md py-2 px-2'
//                   onClick={toggleSidebar} 
//                 >
//                   <img src={ele.icon} className='w-6 h-6' alt="sidebar Icon" />
//                   <h3 className='text-[#778899] text-base font-normal'>{ele.name}</h3>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className='flex flex-col gap-4'>
//           <span className='flex gap-2'>
//             <img src={logoutIcon} alt="log out icon" />
//             <p className='text-[#F04438]'>Logout</p>
//           </span>
//           <picture className='flex gap-2'>
//             <img src={passport} alt="client passport" />
//             <span className='text-[#778899] font-normal text-base'>
//               <p>Boluwatife</p>
//               <p>Oluwafemi</p>
//             </span>
//           </picture>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sidebar;
import React from 'react';
import walletIcon from '/wallet.png';
import settingsIcon from '/settings-icon.png';
import linkIcon from '/link-circle.png';
import bankIcon from '/bank.png';
import logoutIcon from '/logout-icon.png';
import passport from '/passport.png';
import logo from '/pysche-logo.png';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  return (
    <section className="md:sticky md:top-0 md:left-0 md:h-screen">
      <div className="flex flex-col gap-80 h-full pl-6 pr-2 bg-[#FFFFFF]">
        <div className="flex flex-col gap-16">
          <picture>
            <img src={logo} alt="website logo" />
          </picture>

          <ul className="flex flex-col gap-4">
            {[
              { icon: walletIcon, name: 'Wallets' },
              { icon: bankIcon, name: 'Accounts' },
              { icon: linkIcon, name: 'Payment Links' },
              { icon: settingsIcon, name: 'Settings' }
            ].map((ele, i) => (
              <li key={i}>
                <NavLink
                  to={'/coming-soon'}
                  className="flex gap-4 items-center w-fit hover:shadow-md py-2 px-2"
                  onClick={toggleSidebar}
                >
                  <img src={ele.icon} className="w-6 h-6" alt="sidebar Icon" />
                  <h3 className="text-[#778899] text-base font-normal">{ele.name}</h3>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="flex gap-2">
            <img src={logoutIcon} alt="log out icon" />
            <p className="text-[#F04438]">Logout</p>
          </span>
          <picture className="flex gap-2">
            <img src={passport} alt="client passport" />
            <span className="text-[#778899] font-normal text-base">
              <p>Boluwatife</p>
              <p>Oluwafemi</p>
            </span>
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
