import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import SampleRead from './BookRead';
import SampleUpdate from './BookUpdate';
import Pagination from './Pagination';
import SampleCreate from './BookCreate';


const api = axios.create({
  baseURL: 'http://localhost:4000/book-management'
});

const api_genre = axios.create({
  baseURL: 'http://localhost:4000/genre-management'
});

const Book = () => {
  console.log('==BOOK==')
  const [getBook, setBook] = useState([]);
  const [getSelectedBookId, setSelectedBookId] = useState(null);

  // [PAGINATION]
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPerPage, setPerPage] = useState(5);

  //----------[UPDATE]----------
  //  [update-step-0] [UPDATE-INPUT] - [JSON]
  const [getUpdateInput_Data, setUpdateInput_Data] = useState({
    id: '',
    title: '',
    description: '',
    isbn: '',
    book_genre_id: ''
  });
  // - [update-step-1] [onClick] [COLLECT-DATA-FROM-SELECTED-ROW]
  const collectFromRead_SetInputUpdateData_handleOnClick = (currentBooks) => {
    setSelectedBookId(currentBooks.book_id);
    setUpdateInput_Data({
      id: currentBooks.book_id,
      title: currentBooks.book_title,
      description: currentBooks.book_description,
      isbn: currentBooks.book_isbn,
      book_genre_id: currentBooks.book_genre_id
    });
    console.log('collectFromRead_SetInputUpdateData_handleOnClick', currentBooks);
  };
  // - [update-step-2] [onChange] [COLLECT-DATA-FROM-INPUT]
  const collectFromInput_SetInputUpdateData_handleOnChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    const frieldValue = event.target.value;
    const newFormData = { ...getUpdateInput_Data };
    newFormData[fieldName] = frieldValue;
    setUpdateInput_Data(newFormData);
    console.log('[update-step-2] collectFromInput_SetInputUpdateData_handleOnChange -', newFormData);
  };
  // - [update-step-3] [onClick] [PUT-UPDATE]
  const axiousUpdate_HandleOnClick = async () => {
    await api.put(`/book/${getUpdateInput_Data.id}`, getUpdateInput_Data)
      .then(res => {
        cancelClick_onClick();
        axiosGetBook();
        console.log('[update-step-3] [PUT] axiousUpdate_HandleOnClick -', res);
      });
  };
  ///////////////////////[end]///////////////////////


  ///////////////////////[GET]///////////////////////
  const axiosGetBook = async () => {
    await api.get('/book').then(res => {
      setBook(res.data.content)
      console.log('[GET] axiosGetBook -', res);
    });
  };

  // - [onClick]
  const cancelClick_onClick = () => {
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
      console.log('useEffect() get fetchcurrentBooks -', res.data.content);
    }
    fetchcurrentBooks();
  }, []);

  return (
    <div className='box-0'>

      <div>
        <h1>BOOK</h1>
      </div>


      <div className='box-create'>
        <SampleCreate api={api} api_genre={api_genre} axiosGetBook={axiosGetBook}></SampleCreate>
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
            {currentPosts.map(currentBooks => (
              <Fragment key={currentBooks.book_id}>
                {getSelectedBookId === currentBooks.book_id
                  ?
                  (<SampleUpdate api_genre={api_genre}
                    axiousUpdate_HandleOnClick={axiousUpdate_HandleOnClick}
                    getUpdateInput_Data={getUpdateInput_Data}
                    collectFromInput_SetInputUpdateData_handleOnChange={collectFromInput_SetInputUpdateData_handleOnChange}
                    cancelClick_onClick={cancelClick_onClick}></SampleUpdate>
                  )
                  :
                  (<SampleRead currentBooks={currentBooks}
                    api={api}
                    axiosGetBook={axiosGetBook}
                    collectFromRead_SetInputUpdateData_handleOnClick={collectFromRead_SetInputUpdateData_handleOnClick}
                  ></SampleRead>
                  )
                }
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className='box-pagination'>
        <Pagination postsPerPage={getPerPage} totalPosts={getBook.length} paginate={paginate}></Pagination>
      </div>




    </div>

  );
};

export default Book;
