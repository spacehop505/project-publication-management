import React from "react";

const SampleRead = ({ currentBooks, handleUpdateClick, http_DeleteBook }) => {
  console.log('--Read Component--');

  return (
    <tr>
      <td>{currentBooks.book_id} </td>
      <td>{currentBooks.book_title}</td>
      <td>{currentBooks.book_description}</td>
      <td>{currentBooks.book_isbn}</td>
      <td>{currentBooks.genre_name}</td>
      <td>
        <button className='btn-update' type='button' onClick={(event) => handleUpdateClick(event, currentBooks)}>Update</button>
        <button className='btn-delete' type='button' onClick={() => http_DeleteBook(currentBooks.book_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default SampleRead;