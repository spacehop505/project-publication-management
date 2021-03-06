import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import SampleRead from './AuthorRead';
import SampleUpdate from './AuthorUpdate';
import Pagination from './Pagination';
import SampleCreate from './AuthorCreate';

const api = axios.create({
  baseURL: 'http://localhost:4000/author-management'
});

const Author = () => {
  console.log('==AUTHOR==')
  const [getAuthor, setAuthor] = useState([]);
  const [getSelectedAuthorId, setSelecteduthorId] = useState(null);

  // [PAGINATION]
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPerPage, setPerPage] = useState(5);

  //----------[UPDATE]----------
  //  [update-step-0] [UPDATE-INPUT] - [JSON]
  const [getUpdateInput_Data, setUpdateInput_Data] = useState({
    id: '',
    name: '',
    bio: ''
  });
  // - [update-step-1] [onClick] [COLLECT-DATA-FROM-SELECTED-ROW]
  const collectFromRead_SetInputUpdateData_handleOnClick = (currentAuthors) => {
    setSelecteduthorId(currentAuthors.author_id);
    setUpdateInput_Data({
      id: currentAuthors.author_id,
      name: currentAuthors.author_name,
      bio: currentAuthors.author_bio,
    });
    console.log('[update-step-1] collectFromRead_SetInputUpdateData_handleOnClick', currentAuthors);
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
    await api.put(`/author/${getUpdateInput_Data.id}`, getUpdateInput_Data)
      .then(res => {
        cancelClick_onClick();
        axiosGetAuthor();
        console.log('[update-step-3] axiousUpdate_HandleOnClick -', res);
      });
  };
  ///////////////////////[end]///////////////////////


  ///////////////////////[GET]///////////////////////
  const axiosGetAuthor = async () => {
    await api.get('/author').then(res => {
      setAuthor(res.data.content)
      console.log('[GET] axiosGetAuthor -', res);
    });
  };

  // - [onClick]
  const cancelClick_onClick = () => {
    setSelecteduthorId(null);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = getCurrentPage * getPerPage;
  const indexOfFirstPost = indexOfLastPost - getPerPage;
  const currentPosts = getAuthor.slice(indexOfFirstPost, indexOfLastPost);


  useEffect(() => {
    const fetchcurrentGenre = async () => {
      const res = await api.get('/author');
      setAuthor(res.data.content)
      console.log('useEffect() get fetchcurrentGenre -', res.data.content);
    }
    fetchcurrentGenre();
  }, []);

  return (
    <div className='box-0'>

      <div>
        <h1>AUTHOR</h1>
      </div>

      <div className='box-create'>
        <SampleCreate api={api} axiosGetAuthor={axiosGetAuthor}></SampleCreate>
      </div>

      <div className='box-table'>
        <table className="styled-table" autoComplete='off'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>BIO</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map(currentAuthors => (
              <Fragment key={currentAuthors.author_id}>
                {getSelectedAuthorId === currentAuthors.author_id
                  ?
                  (<SampleUpdate
                    axiousUpdate_HandleOnClick={axiousUpdate_HandleOnClick}
                    getUpdateInput_Data={getUpdateInput_Data}
                    collectFromInput_SetInputUpdateData_handleOnChange={collectFromInput_SetInputUpdateData_handleOnChange}
                    cancelClick_onClick={cancelClick_onClick}></SampleUpdate>
                  )
                  :
                  (<SampleRead currentAuthors={currentAuthors}
                    api={api}
                    axiosGetAuthor={axiosGetAuthor}
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
        <Pagination postsPerPage={getPerPage} totalPosts={getAuthor.length} paginate={paginate}></Pagination>
      </div>

    </div>

  );
};

export default Author;
