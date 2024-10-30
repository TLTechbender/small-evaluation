import React from 'react';
import { useTable, Column } from 'react-table';
import addCircle from '/add-circle.png';
import swapCircle from '/link-circle.png';


interface Transaction {
  date: string;
  time: string;
  type: string;
  amount: string;
  refNum: string;
  status: string;
}


const data: Transaction[] = [
  { date: "1 Feb, 2020", time: "07:24.33", type: "Add Money", amount: "N100,000", refNum: "USMK6UEDMT", status: "Completed" },
  { date: "22 Oct, 2020", time: "07:24.33", type: "Send Money", amount: "N70,000", refNum: "USFJMWKW7J", status: "Cancelled" },
  { date: "24 May, 2020", time: "07:24.33", type: "Swap", amount: "$2,000", refNum: "USB8X66J8A", status: "Completed" },
  { date: "21 Sep, 2020", time: "07:24.33", type: "Add Money", amount: "N1,000,000", refNum: "USVNMJ5CAA", status: "Pending" },
  { date: "24 May, 2020", time: "07:24.33", type: "Swap", amount: "$2,000", refNum: "USB8X66J8A", status: "Completed" }
];

const columns: Column<Transaction>[] = [
  { Header: 'Date', accessor: 'date' },
  { Header: 'Time', accessor: 'time' },
  { Header: 'Type', accessor: 'type' },
  { Header: 'Amount', accessor: 'amount' },
  { Header: 'Reference Number', accessor: 'refNum' },
  { Header: 'Status', accessor: 'status' },
];


const renderIcon = (type: string) => {
  switch (type) {
    case 'Add Money':
      return <img src={addCircle} alt="add icon" />;
    case 'Swap':
      return <img src={swapCircle} alt="swap icon" />;
    default:
      return <span className='w-2 h-2 rounded-full bg-[#FCEABB]'></span>;
  }
};


const Table: React.FC = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Transaction>({ columns, data });

  return (
    <div className='overflow-x-auto table-class'>
      <table {...getTableProps()} className="min-w-full table-fixed">
        <thead className='bg-[#1B1C1E] text-[#FFFFFF] font-semibold text-base capitalize'>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className='py-2 px-4 md:px-8 text-left whitespace-nowrap'>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b last:border-0">
                {row.cells.map(cell => {
                  // If the column accessor is 'type', render the icon
                  if (cell.column.id === 'type') {
                    return (
                      <td {...cell.getCellProps()} className='py-2 px-4 md:px-8 whitespace-nowrap'>
                        <span className='flex gap-2 items-center'>
                          {renderIcon(cell.value as string)} 
                          {cell.value}
                        </span>
                      </td>
                    );
                  }
                  return (
                    <td {...cell.getCellProps()} className='py-2 px-4 md:px-8 whitespace-nowrap'>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
