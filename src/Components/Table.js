import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';

function Table() {
  const expenses = useSelector((state) => state.expenses);

  return (
    <table className='table '>
      <thead>
        <tr>
          <th> Title</th>
          <th> Date</th>
          <th>value</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((e) => (
          <TableRow
            key={e.id}
            title={e.title}
            date={e.date}
            id={e.id}
            value={e.value}
            desc={e.desc}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
