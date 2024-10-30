// import React from 'react';
// import tick from '/tick-circle.png';
// import slash from '/eye-slash.png';
// import linkCircle from '/link-circle.png';
// import addCircle from '/add-circle.png';
// import swapCircle from '/link-circle.png';


// const Homepage:React.FC = () => {

//     const renderIcon = (type:string) => {
//         switch (type) {
//           case 'Add Money':
//             return <img src={addCircle} alt="add icon" />;
      
//           case 'Swap':
//             return <img src={swapCircle} alt="swap icon" />;
      
//           default:
//             return <span className='w-2 h-2 rounded-full bg-[#FCEABB]'></span>;
//         }
//       };
      
//   return (
//     <section>
//         <div className='flex flex-col gap-6'>
//             <h1>
//                 Hello Boluwatife 😎 
//             </h1>

//             <div className='bg-[#FCEABB] border-t-2 border-t-[#E5AE40] flex flex-col gap-4 px-4 py-2'>

//                 <h2 className='text-[#1B1C1E] font-bold text-left capitalize'>
// complete your account verification
//                 </h2>
//                 <h3 className='font-normal text-base text-wrap'>
//                 Verify your Account by submitting a valid ID Card and BVN to access all our features and protect your account.
//                 </h3>

//                 <div className='flex  flex-col md:flex-row '>
//                     <span className='flex items-center'>
//                         <img src={tick} alt="tick" />
//                         <p className='text-base font-medium'>Bank Verification Number (BVN)</p>
//                     </span>
//                     <span className='flex items-center'>
//                     <img src={tick} alt='tick'/>
//                     <p className='text-base font-medium'>Valid Identification card</p>
//                     </span>
//                 </div>
//             </div>  


//             <div className='flex flex-col md:flex-row gap-4'>
               
//             <div className="w-[350px] h-[132px] rounded-[8px] text-[#FFFFFF] px-2" style={{background: 'linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)'}}>
//           <span className='flex  justify-between items-center'>
//                     <p className='font-bold text-[32px]'>N 0.00</p>
//                     <img src={slash} alt="slash" />
//                   </span>
//                   <p>Nigerian Naira Wallet</p>
//                 </div>
//                 <div className='w-[350px] h-[132px] rounded-[8px] text-[#FFFFFF] px-2 py-2'style={{background: 'linear-gradient(90deg, #2B5876 0%, #4E4376 100%)' }}>
                
//                     <span className='flex justify-between items-center'>
//                     <p className='font-bold text-[32px]'>$ 0.00</p>
//                       <img src={slash} alt="slash" />
//                     </span>
//                     <p>USDC Wallet</p>
//                 </div>
//             </div>

//             <div>
//                 <h2 className='text-[18px] font-bold text-[#1B1C1E]'>Quick actions</h2>
//                 <div className='flex gap-4'>
//                     <span className='flex gap-2'>
//                 <img src={addCircle} alt="add icon" />
//                 <p className='capitalize font-semibold text-[#008000] text-base'>add money</p>
//                     </span>
//                     <span className='flex gap-2'>
//                         <img src={swapCircle} alt="swap icon" />
//                         <p className='capitalize text-[#008080] text-base font-semibold'>swap money</p>
//                     </span>
//                     <span className='flex gap-2'>
//                         <img src={linkCircle} alt="payment icon" />
//                         <p className='capitalize text-base font-semibold text-[#A146A1]'>Payment link</p>
//                     </span>
                    
//                 </div>
//             </div>

//             <div>
//                 <h2 className='capitalize text-[#1B1C1E] font-bold text-[18px]'>transactions history</h2>
                
        

//                 <div className='overflow-x-auto'>
//        <table className='min-w-full'>
//     <thead className='bg-[#1B1C1E] text-[#FFFFFF] font-semibold text-base capitalize'>
//       <tr>
//         {['date', 'time', 'type', 'amount', 'reference number', 'status'].map((ele, i) =>
//           <th key={i} className='py-2 px-4'>{ele}</th>
//         )}
//       </tr>
//     </thead>
//     <tbody>
//       {[
//         { date: "1 Feb, 2020", time: "07:24.33", type: "Add Money", amount: "N100,000", refNum: "USMK6UEDMT", status: "Completed"},
//         { date: "22 Oct, 2020", time: "07:24.33", type: "Send Money", amount: "N70,000", refNum: "USFJMWKW7J", status: "Cancelled" },
//         { date: "24 May, 2020", time: "07:24.33", type: "Swap", amount: "$2,000", refNum: "USB8X66J8A", status: "Completed" },
//         { date: "21 Sep, 2020", time: "07:24.33", type: "Add Money", amount: "N1,000,000", refNum: "USVNMJ5CAA", status: "Pending" },
//         { date: "24 May, 2020", time: "07:24.33", type: "Swap", amount: "$2,000", refNum: "USB8X66J8A", status: "Completed" }
//       ].map((ele, i) => (
//         <tr key={i}>
//           <td className='py-2 px-4'>{ele.date}</td>
//           <td className='py-2 px-4'>{ele.time}</td>
//           <td className='py-2 px-4'>
//             <span className='flex gap-2'>
//               {renderIcon(ele.type)}
//               {ele.type}
//             </span>
//           </td>
//           <td className='py-2 px-4'>{ele.amount}</td>
//           <td className='py-2 px-4'>{ele.refNum}</td>
//           <td className='py-2 px-4'>{ele.status}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>

//             </div>
//         </div>
//     </section>
//   )
// }

// export default Homepage;

import React from 'react';
import tick from '/tick-circle.png';
import slash from '/eye-slash.png';
import linkCircle from '/link-circle.png';
import addCircle from '/add-circle.png';
import swapCircle from '/link-circle.png';
import Table from '../components/Table';

const Homepage: React.FC = () => {
  // const renderIcon = (type: string) => {
  //   switch (type) {
  //     case 'Add Money':
  //       return <img src={addCircle} alt="add icon" />;
  //     case 'Swap':
  //       return <img src={swapCircle} alt="swap icon" />;
  //     default:
  //       return <span className='w-2 h-2 rounded-full bg-[#FCEABB]'></span>;
  //   }
  // };

  return (
    <section>
      <div className='flex flex-col gap-6'>
        <h1>Hello Boluwatife 😎</h1>

        <div className='bg-[#FCEABB] border-t-2 border-t-[#E5AE40] flex flex-wrap flex-col gap-4 px-4 py-2'>
          <h2 className='text-[#1B1C1E] font-bold text-left capitalize'>
            Complete your account verification
          </h2>
          <h3 className='font-normal text-base'>
            Verify your account by submitting a valid ID Card and BVN to access all our features and protect your account.
          </h3>

          <div className='flex flex-wrap flex-col md:flex-row gap-2'>
            <span className='flex items-center'>
              <img src={tick} alt="tick" />
              <p className='text-base font-medium'>Bank Verification Number (BVN)</p>
            </span>
            <span className='flex items-center'>
              <img src={tick} alt='tick'/>
              <p className='text-base font-medium'>Valid Identification Card</p>
            </span>
          </div>
        </div>

        <div className='flex flex-wrap flex-col md:flex-row gap-4'>
          <div className="w-full md:w-[350px] h-[132px] rounded-[8px] text-[#FFFFFF] px-2 py-2" style={{background: 'linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)'}}>
            <span className='flex justify-between items-center'>
              <p className='font-bold text-[32px]'>N 0.00</p>
              <img src={slash} alt="slash" />
            </span>
            <p>Nigerian Naira Wallet</p>
          </div>
          <div className='w-full md:w-[350px] h-[132px] rounded-[8px] text-[#FFFFFF] px-2 py-2' style={{background: 'linear-gradient(90deg, #2B5876 0%, #4E4376 100%)'}}>
            <span className='flex justify-between items-center'>
              <p className='font-bold text-[32px]'>$ 0.00</p>
              <img src={slash} alt="slash" />
            </span>
            <p>USDC Wallet</p>
          </div>
        </div>

        <div>
          <h2 className='text-[18px] font-bold text-[#1B1C1E]'>Quick actions</h2>
          <div className='flex gap-4'>
            <span className='flex gap-2'>
              <img src={addCircle} alt="add icon" />
              <p className='capitalize font-semibold text-[#008000] text-base'>add money</p>
            </span>
            <span className='flex gap-2'>
              <img src={swapCircle} alt="swap icon" />
              <p className='capitalize text-[#008080] text-base font-semibold'>swap money</p>
            </span>
            <span className='flex gap-2'>
              <img src={linkCircle} alt="payment icon" />
              <p className='capitalize text-base font-semibold text-[#A146A1]'>Payment link</p>
            </span>
          </div>
        </div>

        <div>
          <h2 className='capitalize text-[#1B1C1E] font-bold text-[18px]'>Transactions history</h2>
          <div>
  {/* <table className="min-w-full table-fixed">
    <thead className='bg-[#1B1C1E] text-[#FFFFFF] font-semibold text-base capitalize'>
      <tr>
        {['date', 'time', 'type', 'amount', 'reference number', 'status'].map((ele, i) => (
          <th key={i} className='py-2 px-4 md:px-8 text-left whitespace-nowrap'>
            {ele}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {[
        { date: "1 Feb, 2020", time: "07:24.33", type: "Add Money", amount: "N100,000", refNum: "USMK6UEDMT", status: "Completed" },
        { date: "22 Oct, 2020", time: "07:24.33", type: "Send Money", amount: "N70,000", refNum: "USFJMWKW7J", status: "Cancelled" },
        { date: "24 May, 2020", time: "07:24.33", type: "Swap", amount: "$2,000", refNum: "USB8X66J8A", status: "Completed" },
        { date: "21 Sep, 2020", time: "07:24.33", type: "Add Money", amount: "N1,000,000", refNum: "USVNMJ5CAA", status: "Pending" },
        { date: "24 May, 2020", time: "07:24.33", type: "Swap", amount: "$2,000", refNum: "USB8X66J8A", status: "Completed" }
      ].map((ele, i) => (
        <tr key={i} className="border-b last:border-0">
          <td className='py-2 px-4 md:px-8 whitespace-nowrap'>{ele.date}</td>
          <td className='py-2 px-4 md:px-8 whitespace-nowrap'>{ele.time}</td>
          <td className='py-2 px-4 md:px-8 whitespace-nowrap'>
            <span className='flex gap-2 items-center'>
              {renderIcon(ele.type)}
              {ele.type}
            </span>
          </td>
          <td className='py-2 px-4 md:px-8 whitespace-nowrap'>{ele.amount}</td>
          <td className='py-2 px-4 md:px-8 whitespace-nowrap'>{ele.refNum}</td>
          <td className='py-2 px-4 md:px-8 whitespace-nowrap'>{ele.status}</td>
        </tr>
      ))}
    </tbody>
  </table> */}
  <Table/>
</div>

        </div>
      </div>
    </section>
  );
};

export default Homepage;
