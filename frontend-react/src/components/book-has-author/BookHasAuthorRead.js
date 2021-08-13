import React from "react";

const BookHasAuthorRead = ({ api, axiosGetBookHasAuthor, currentBookHasAuthor, collectFromRead_SetInputUpdateData_handleOnClick }) => {
  console.log('--Read Component--');

  //----------[DELETE]----------
  // - [delete-step-0] [onClick] [DELETE]
  const axiosDelete_onClick = async (many_book_id, many_author_id) => {
    const send_data = { many_book_id: many_book_id, many_author_id: many_author_id };
    await api.delete(`/book-has-author`, { data: send_data }).then(res => {
      console.log('[delete-step-0] [DELETE] axiosDelete_onClick -', res);
      axiosGetBookHasAuthor();
    });
  };

  return (
    <tr>
      <td>{currentBookHasAuthor.many_book_id} </td>
      <td>{currentBookHasAuthor.book_title}</td>
      <td>{currentBookHasAuthor.many_author_id}</td>
      <td>{currentBookHasAuthor.author_name}</td>
      <td>
        <button className='btn-update' type='button' onClick={() => collectFromRead_SetInputUpdateData_handleOnClick(currentBookHasAuthor)}>Update</button>
        <button className='btn-delete' type='button' onClick={() => axiosDelete_onClick(currentBookHasAuthor.many_book_id, currentBookHasAuthor.many_author_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default BookHasAuthorRead;