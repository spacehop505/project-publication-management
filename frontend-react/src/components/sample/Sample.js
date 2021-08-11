import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import SampleRead from './SampleRead';
import SampleUpdate from './SampleUpdate';
import Pagination from './Pagination';
import SampleCreate from './SampleCreate';
import './css/default.css';
import './css/table.css';
import './css/pagination.css';
import './css/button.css';
import './css/create.css';


const api = axios.create({
  baseURL: 'http://localhost:4000/book-management'
});

const api_genre = axios.create({
  baseURL: 'http://localhost:4000/genre-management'
});

const Sample = () => {
  const [getBook, setBook] = useState([]);
  const [getSelectedBookId, setSelectedBookId] = useState(null);
  const [getUpdateFormData, setUpdateFormData] = useState({
    id: '',
    title: '',
    description: '',
    isbn: '',
    genre: ''
  });

  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPerPage, setPerPage] = useState(5);

  // ------------------------------------------------UPDATE
  const http_updateBook = async () => {
    await api.put(`/book/${getUpdateFormData.id}`, getUpdateFormData).then(res => {
      console.log(res);
      handleCancelClick();
      http_getcurrentBooks();
    });
  };
  const handleUpdateClick = (event, currentBooks) => {
    //event.preventDefault();
    setSelectedBookId(currentBooks.book_id);
    console.log(currentBooks);
    const formValues = {
      id: currentBooks.book_id,
      title: currentBooks.book_title,
      description: currentBooks.book_description,
      isbn: currentBooks.book_isbn,
      genre: currentBooks.book_genre_id
    }
    setUpdateFormData(formValues)
  };
  const handleUpdateFormChange = (event) => {
    //event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const frieldValue = event.target.value;
    const newFormData = { ...getUpdateFormData };
    newFormData[fieldName] = frieldValue;
    setUpdateFormData(newFormData);
    console.log(getUpdateFormData);
  };

  // ------------------------------------------------DELETE 
  const http_DeleteBook = async (id) => {
    await api.delete(`/book/${id}`).then(res => {
      console.log('http_DeleteBook() delete book -', res);
      http_getcurrentBooks();
      //setCurrentPage(1);
    });
  };
  // ------------------------------------------------GET  
  const http_getcurrentBooks = async () => {
    await api.get('/book').then(res => {
      setBook(res.data.content)
      console.log('http_getcurrentBooks() get book -', res);
    });
  };

  const handleCancelClick = () => {
    setSelectedBookId(null);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = getCurrentPage * getPerPage;
  const indexOfFirstPost = indexOfLastPost - getPerPage;
  const currentPosts = getBook.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchcurrentBooks = async () => {
      const res = await api.get('/book');
      setBook(res.data.content)
      console.log('useEffect() get currentBooks -', res.data.content);
    }
    fetchcurrentBooks();
  }, []);

  return (
    <div className='box-0'>
      <div className='box-create'>
        <SampleCreate api={api} api_genre={api_genre} http_getcurrentBooks={http_getcurrentBooks}></SampleCreate>
      </div>

      <div className='box-table'>
        <table className="styled-table" autoComplete='off'>
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
            {currentPosts.map(currentBooks =>
              <Fragment key={currentBooks.book_id}>
                {getSelectedBookId === currentBooks.book_id
                  ?
                  (<SampleUpdate http_updateBook={http_updateBook} getUpdateFormData={getUpdateFormData} handleUpdateFormChange={handleUpdateFormChange} handleCancelClick={handleCancelClick}></SampleUpdate>)
                  :
                  (<SampleRead currentBooks={currentBooks} handleUpdateClick={handleUpdateClick} http_DeleteBook={http_DeleteBook}></SampleRead>)}
              </Fragment>
            )}
          </tbody>
        </table>
      </div>

      <div className='box-pagination'>
        <Pagination postsPerPage={getPerPage} totalPosts={getBook.length} paginate={paginate}></Pagination>
      </div>




    </div>

  );
};

export default Sample;
