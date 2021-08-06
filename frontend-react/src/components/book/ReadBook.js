import React from "react";

const ReadBook = ({ pass_book, handleUpdateClick, handleDeleteClick }) => {
  return (
    <tr >
      <td>{pass_book.book_id} </td>
      <td>{pass_book.book_title}</td>
      <td>{pass_book.book_description}</td>
      <td>{pass_book.book_isbn}</td>
      <td>{pass_book.book_genre_id}</td>
      <td>
        <button type='button' onClick={(event) => handleUpdateClick(event, pass_book)}>Update</button>
        <button type='button' onClick={(event) => handleDeleteClick(event, pass_book.book_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadBook;