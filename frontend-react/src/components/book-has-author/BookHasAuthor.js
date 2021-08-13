import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import SampleRead from './BookHasAuthorRead';
import SampleUpdate from './BookHasAuthorUpdate';
import Pagination from './Pagination';
import SampleCreate from './BookHasAuthorCreate';

const api = axios.create({
  baseURL: 'http://localhost:4000/book-has-author-management'
});

const api_book = axios.create({
  baseURL: 'http://localhost:4000/book-management'
});

const api_author = axios.create({
  baseURL: 'http://localhost:4000/author-management'
});

const BookHasAuthor = () => {
  console.log('==BOOK-HAS-AUTHOR==')
  const [getBookHasAuthor, setBookHasAuthor] = useState([]);
  const [getSelectedBookId, setSelectedBookId] = useState([null, null]);

  // [PAGINATION]
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPerPage, setPerPage] = useState(10);

  //----------[UPDATE]----------
  //  [update-step-0] [UPDATE-INPUT] - [JSON]
  const [getUpdateInput_Data, setUpdateInput_Data] = useState({
    many_book_id: '',
    many_author_id: '',
    new_many_book_id: '',
    new_many_author_id: ''
  });
  // - [update-step-1] [onClick] [COLLECT-DATA-FROM-SELECTED-ROW]
  const collectFromRead_SetInputUpdateData_handleOnClick = (currentBookHasAuthor) => {
    setSelectedBookId([currentBookHasAuthor.many_book_id, currentBookHasAuthor.many_author_id]);
    setUpdateInput_Data({
      many_book_id: currentBookHasAuthor.many_book_id,
      many_author_id: currentBookHasAuthor.many_author_id,
      old_many_book_id: currentBookHasAuthor.many_book_id,
      old_many_author_id: currentBookHasAuthor.many_author_id
    });
    console.log('[update-step-1] collectFromRead_SetInputUpdateData_handleOnClick', currentBookHasAuthor);
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
    console.log('getUpdateInput_Data -', getUpdateInput_Data);
    await api.put(`/book-has-author/`, getUpdateInput_Data)
      .then(res => {
        cancelClick_onClick();
        axiosGetBookHasAuthor();
        console.log('[update-step-3] [PUT] axiousUpdate_HandleOnClick -', res);
      });
  };
  ///////////////////////[end]///////////////////////


  ///////////////////////[GET]///////////////////////
  const axiosGetBookHasAuthor = async () => {
    await api.get('/book-has-author').then(res => {
      setBookHasAuthor(res.data.content)
      console.log('[GET] axiosGetBookHasAuthor -', res);
    });
  };

  // - [onClick]
  const cancelClick_onClick = () => {
    setSelectedBookId([null, null]);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = getCurrentPage * getPerPage;
  const indexOfFirstPost = indexOfLastPost - getPerPage;
  const currentPosts = getBookHasAuthor.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchcurrentBookHasAuthor = async () => {
      const res = await api.get('/book-has-author');
      setBookHasAuthor(res.data.content)
      console.log('useEffect() get fetchcurrentBookHasAuthor -', res.data.content);
    }
    fetchcurrentBookHasAuthor();
  }, []);

  return (
    <div className='box-0'>

      <div>
        <h1>BOOK HAS AUTHOR</h1>
      </div>


      <div className='box-create'>
        <SampleCreate api={api} api_book={api_book} api_author={api_author} axiosGetBookHasAuthor={axiosGetBookHasAuthor}></SampleCreate>
      </div>

      <div className='box-table'>
        <table className="styled-table" autoComplete='off'>
          <thead>
            <tr>
              <th>BOOK ID</th>
              <th>BOOK TITLE</th>
              <th>AUTHOR ID</th>
              <th>AUTHOR NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map(currentBookHasAuthor => (
              <Fragment key={currentBookHasAuthor.book_id}>
                {getSelectedBookId[0] === currentBookHasAuthor.many_book_id && getSelectedBookId[1] === currentBookHasAuthor.many_author_id
                  ?
                  (<SampleUpdate api_book={api_book} api_author={api_author}
                    axiousUpdate_HandleOnClick={axiousUpdate_HandleOnClick}
                    getUpdateInput_Data={getUpdateInput_Data}
                    collectFromInput_SetInputUpdateData_handleOnChange={collectFromInput_SetInputUpdateData_handleOnChange}
                    cancelClick_onClick={cancelClick_onClick}></SampleUpdate>
                  )
                  :
                  (<SampleRead currentBookHasAuthor={currentBookHasAuthor}
                    api={api}
                    axiosGetBookHasAuthor={axiosGetBookHasAuthor}
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
        <Pagination postsPerPage={getPerPage} totalPosts={getBookHasAuthor.length} paginate={paginate}></Pagination>
      </div>




    </div>

  );
};

export default BookHasAuthor;
