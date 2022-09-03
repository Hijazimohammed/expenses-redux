/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteExpense } from '../redux/operations/expense-operations';

function TableRow({ title, date, id, value, desc }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteExpense(id));
        Swal.fire({
          icon: 'success',
          title: 'Great',
          text: 'Expenses deleted successfully',
          showConfirmButton: false,
          showCancelButton: false,
          timer: 1000,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        });
      }
    });
  };
  return (
    <tr>
      <td> {title} </td>
      <td>{date}</td>
      <td>{value}</td>
      <td colSpan='2'>{desc} </td>
      <td className='text-right'>
        <a className='delete' onClick={deleteHandler}>
          <i className='fa fa-trash-o' aria-hidden='true' />
        </a>
      </td>
    </tr>
  );
}

export default TableRow;
