import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import ReadBook from './ReadBook';
import UpdateBook from './UpdateBook';
import './book.css';


const api = axios.create({
  baseURL: 'http://localhost:4000/book-management'
});

function Book() {
  const [getBook, setBook] = useState({ books: [] });
  const [getSearchId, setSearchId] = useState('');

  const [getSelectedBookId, setSelectedBookId] = useState(null);

  const [getCreateFormData, setCreateFormData] = useState({
    title: '',
    description: '',
    isbn: '',
    genre: ''
  });

  const [getUpdateFormData, setUpdateFormData] = useState({
    id: '',
    title: '',
    description: '',
    isbn: '',
    genre: ''
  });

  // ------------------------------------------------CREATE
  const http_createBook = async () => {
    await api.post('/book', getCreateFormData).then(res => {
      console.log(res);
    });
  };

  const handleCreateFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const frieldValue = event.target.value;
    const newFormData = { ...getCreateFormData };
    newFormData[fieldName] = frieldValue;
    setCreateFormData(newFormData);
    console.log(getCreateFormData);
  };
  ///////////////////////////////////////////////////////


  // ------------------------------------------------UPDATE
  const http_updateBook = async () => {
    console.log(getUpdateFormData);
    await api.put(`/book/${getUpdateFormData.id}`, getUpdateFormData).then(res => {
      console.log(res);
    });
  };

  const handleUpdateClick = (event, books) => {
    event.preventDefault();
    setSelectedBookId(books.book_id);
    console.log(books);

    const formValues = {
      id: books.book_id,
      title: books.book_title,
      description: books.book_description,
      isbn: books.book_isbn,
      genre: books.book_genre_id

    }
    setUpdateFormData(formValues)
  };
  const handleUpdateFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const frieldValue = event.target.value;
    const newFormData = { ...getUpdateFormData };
    newFormData[fieldName] = frieldValue;
    setUpdateFormData(newFormData);
    console.log(getUpdateFormData);
  };
  ///////////////////////////////////////////////////////


  // ------------------------------------------------DELETE 
  const handleDeleteClick = async (event, id) => {
    console.log(id);
    await api.delete(`/book/${id}`).then(res => {
      console.log(res);
      getBooks();
    });
  };


  // ------------------------------------------------GET  
  const getBooks = async () => {
    await api.get('/book').then(res => {
      setBook({ books: res.data.content })
      console.log(getBook);
    });
  };
  const getBooksId = async () => {
    await api.get(`/book/${getSearchId}`).then(res => {
      setBook({ books: res.data.content })
      console.log(getBook);
      setSearchId('');
    });
  };
  const handleChangeSearchId = (event) => {
    setSearchId(event.target.value);
  };
  ///////////////////////////////////////////////////////

  const handleCancelClick = () => {
    setSelectedBookId(null);
  };

  useEffect(() => {
    // async function fetchData(){
    //  await api.get('Books/read/').then(res => {
    //    setBook({Books: res.data.content})
    //    console.log(getBook); }); }
    //fetchDataId();
  }, []);

  return (
    <div className='book-main'>

      <div className='book-box'>
        <h1>Create Book</h1>
        <form onSubmit={http_createBook} autoComplete='off'>
          <input type="text" onChange={handleCreateFormChange} name='title' required='required' placeholder='Enter Title...' />
          <input type="text" onChange={handleCreateFormChange} name='description' required='required' placeholder='Enter Description...' />
          <input type="text" onChange={handleCreateFormChange} name='isbn' required='required' placeholder='Enter ISBN...' />
          <input type="text" onChange={handleCreateFormChange} name='genre' required='required' placeholder='Enter Genre...' />
          <button type='submit'>Create Book</button>
        </form>
      </div>

      <div className='book-box'>
        <h1>Read Book</h1>

        <div className='get-b0'>
          <div className='get-b1'>
            <button onClick={getBooks}>Reload Books</button>
          </div>
          <div className='get-b1'>
            <input type="text" value={getSearchId} placeholder='Enter id...' onChange={handleChangeSearchId} />
            <button onClick={getBooksId}>Search By ID</button>
          </div>
        </div>

        <div className='app-container'>
          <form onSubmit={http_updateBook} autoComplete='off'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>DESCRIPTION</th>
                  <th>ISBN</th>
                  <th>GENRE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {getBook.books.map(books =>
                  <Fragment key={books.book_id}>
                    {getSelectedBookId === books.book_id
                      ? (<UpdateBook getUpdateFormData={getUpdateFormData} handleUpdateFormChange={handleUpdateFormChange} handleCancelClick={handleCancelClick}></UpdateBook>)
                      :
                      (<ReadBook pass_book={books} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeleteClick}></ReadBook>)}
                  </Fragment>
                )}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Book;
