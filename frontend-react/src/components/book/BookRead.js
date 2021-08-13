import React from "react";

const BookRead = ({ api, axiosGetBook, currentBooks, collectFromRead_SetInputUpdateData_handleOnClick }) => {
  console.log('--Read Component--');

  //----------[DELETE]----------
  // - [delete-step-0] [onClick] [DELETE]
  const axiosDelete_onClick = async (id) => {
    await api.delete(`/book/${id}`).then(res => {
      console.log('[delete-step-0] [DELETE] axiosDelete_onClick -', res);
      axiosGetBook();
    });
  };

  return (
    <tr>
      <td>{currentBooks.book_id} </td>
      <td>{currentBooks.book_title}</td>
      <td>{currentBooks.book_description}</td>
      <td>{currentBooks.book_isbn}</td>
      <td>{currentBooks.genre_name}</td>
      <td>
        <button className='btn-update' type='button' onClick={() => collectFromRead_SetInputUpdateData_handleOnClick(currentBooks)}>Update</button>
        <button className='btn-delete' type='button' onClick={() => axiosDelete_onClick(currentBooks.book_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default BookRead;