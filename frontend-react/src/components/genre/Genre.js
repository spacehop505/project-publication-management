import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import SampleRead from './GenreRead';
import SampleUpdate from './GenreUpdate';
import Pagination from './Pagination';
import SampleCreate from './GenreCreate';

const api = axios.create({
  baseURL: 'http://localhost:4000/genre-management'
});

const Genre = () => {
  console.log('==GENRE==')
  const [getBook, setBook] = useState([]);
  const [getSelectedBookId, setSelectedBookId] = useState(null);

  // [PAGINATION]
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPerPage, setPerPage] = useState(5);

  //----------[UPDATE]----------
  //  [update-step-0] [UPDATE-INPUT] - [JSON]
  const [getUpdateInput_Data, setUpdateInput_Data] = useState({
    id: '',
    name: '',
    description: ''
  });
  // - [update-step-1] [onClick] [COLLECT-DATA-FROM-SELECTED-ROW]
  const collectFromRead_SetInputUpdateData_handleOnClick = (currentGenres) => {
    setSelectedBookId(currentGenres.genre_id);
    setUpdateInput_Data({
      id: currentGenres.genre_id,
      name: currentGenres.genre_name,
      description: currentGenres.genre_description,
    });
    console.log('[update-step-1] collectFromRead_SetInputUpdateData_handleOnClick', currentGenres);
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
    await api.put(`/genre/${getUpdateInput_Data.id}`, getUpdateInput_Data)
      .then(res => {
        cancelClick_onClick();
        axiosGetGenre();
        console.log('[update-step-3] [PUT] axiousUpdate_HandleOnClick -', res);
      });
  };
  ///////////////////////[end]///////////////////////


  ///////////////////////[GET]///////////////////////
  const axiosGetGenre = async () => {
    await api.get('/genre').then(res => {
      setBook(res.data.content)
      console.log('[GET] axiosGetGenre -', res);
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
    const fetchcurrentGenre = async () => {
      const res = await api.get('/genre');
      setBook(res.data.content)
      console.log('useEffect() get fetchcurrentGenre -', res.data.content);
    }
    fetchcurrentGenre();
  }, []);

  return (
    <div className='box-0'>

      <div>
        <h1>GENRE</h1>
      </div>

      <div className='box-create'>
        <SampleCreate api={api} axiosGetGenre={axiosGetGenre}></SampleCreate>
      </div>

      <div className='box-table'>
        <table className="styled-table" autoComplete='off'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map(currentGenres => (
              <Fragment key={currentGenres.genre_id}>
                {getSelectedBookId === currentGenres.genre_id
                  ?
                  (<SampleUpdate
                    axiousUpdate_HandleOnClick={axiousUpdate_HandleOnClick}
                    getUpdateInput_Data={getUpdateInput_Data}
                    collectFromInput_SetInputUpdateData_handleOnChange={collectFromInput_SetInputUpdateData_handleOnChange}
                    cancelClick_onClick={cancelClick_onClick}></SampleUpdate>
                  )
                  :
                  (<SampleRead currentGenres={currentGenres}
                    api={api}
                    axiosGetGenre={axiosGetGenre}
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

export default Genre;
