import React, { useState, useEffect } from "react";


const BookHasAuthorUpdate = ({ api_book, api_author, axiousUpdate_HandleOnClick, getUpdateInput_Data, collectFromInput_SetInputUpdateData_handleOnChange, cancelClick_onClick }) => {
  console.log('--Update Component--');

  const [getBook, setBook] = useState([]);
  const [getAuthor, setAuthor] = useState([]);
  console.log(getUpdateInput_Data)




  useEffect(() => {
    const http_getcurrentBookAuthor = async () => {
      await api_book.get('/book')
        .then(res => {
          setBook(res.data.content);
          console.log('http_getcurrentBookAuthor() get book -', res.data.content);
        });

      await api_author.get('/author')
        .then(res => {
          setAuthor(res.data.content);
          console.log('http_getcurrentBookAuthor() get author -', res.data.content);
        });
    }
    http_getcurrentBookAuthor();
  }, [api_book, api_author]);

  return (
    <tr className="active-row">
      <td>
        {getUpdateInput_Data.many_book_id}
      </td>
      <td>
        <select name='many_book_id'
          value={getUpdateInput_Data.many_book_id}
          onChange={collectFromInput_SetInputUpdateData_handleOnChange}>
          {getBook.map(book => (
            <option key={book.book_id} value={book.book_id}>{book.book_title}</option>
          ))}
        </select >
      </td>
      <td>
        {getUpdateInput_Data.many_author_id}
      </td>
      <td>
        <select name='many_author_id'
          value={getUpdateInput_Data.many_author_id}
          onChange={collectFromInput_SetInputUpdateData_handleOnChange}>
          {getAuthor.map(author => (
            <option key={author.author_id} value={author.author_id}>{author.author_name}</option>
          ))}
        </select >
      </td>
      <td>
        <button onClick={axiousUpdate_HandleOnClick} className='btn-save' type='button'>Save</button>
        <button className='btn-cancel' type='button' onClick={cancelClick_onClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default BookHasAuthorUpdate;