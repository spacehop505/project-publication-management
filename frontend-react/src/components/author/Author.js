import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import ReadOnlyAuthor from './ReadAuthor';
import UpdateAuthor from './UpdateAuthor';
import './author.css';


const api = axios.create({
  baseURL: 'http://localhost:4000/author-management'
});

function Author() {
  const [getAuthor, setAuthor] = useState({ authors: [] });
  const [getSearchId, setSearchId] = useState('');

  const [getSelectedAuthorId, setSelectedAuthorId] = useState(null);

  const [getCreateFormData, setCreateFormData] = useState({
    name: '',
    bio: ''
  });

  const [getUpdateFormData, setUpdateFormData] = useState({
    id: '',
    name: '',
    bio: ''
  });

  // ------------------------------------------------CREATE
  const http_createAuthor = async () => {
    await api.post('/author', getCreateFormData).then(res => {
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
  const http_updateAuthor = async () => {
    console.log(getUpdateFormData);
    await api.put(`/author/${getUpdateFormData.id}`, getUpdateFormData).then(res => {
      console.log(res);
    });
  };

  const handleUpdateClick = (event, authors) => {
    event.preventDefault();
    setSelectedAuthorId(authors.author_id);

    const formValues = {
      id: authors.author_id,
      name: authors.author_name,
      bio: authors.author_bio
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
    await api.delete(`/author/${id}`).then(res => {
      console.log(res);
      getAuthors();
    });
  };


  // ------------------------------------------------GET  
  const getAuthors = async () => {
    await api.get('/author').then(res => {
      setAuthor({ authors: res.data.content })
      console.log(getAuthor);
    });
  };
  const getAuthorsId = async () => {
    await api.get(`/author/${getSearchId}`).then(res => {
      setAuthor({ authors: res.data.content })
      console.log(getAuthor);
      setSearchId('');
    });
  };
  const handleChangeSearchId = (event) => {
    setSearchId(event.target.value);
  };
  ///////////////////////////////////////////////////////

  const handleCancelClick = () => {
    setSelectedAuthorId(null);
  };

  useEffect(() => {
    // async function fetchData(){
    //  await api.get('authors/read/').then(res => {
    //    setAuthor({authors: res.data.content})
    //    console.log(getAuthor); }); }
    //fetchDataId();
  }, []);

  return (
    <div className='author-main'>

      <div className='author-box'>
        <h1>Create Author</h1>
        <form onSubmit={http_createAuthor} autoComplete='off'>
          <input type="text" onChange={handleCreateFormChange} name='name' required='required' placeholder='Enter Name...' />
          <input type="text" onChange={handleCreateFormChange} name='bio' required='required' placeholder='Enter Bio...' />
          <button type='submit'>Create Author</button>
        </form>
      </div>

      <div className='author-box'>
        <h1>Read Author</h1>

        <div className='get-b0'>
          <div className='get-b1'>
            <button onClick={getAuthors}>Reload Authors</button>
          </div>
          <div className='get-b1'>
            <input type="text" value={getSearchId} placeholder='Enter id...' onChange={handleChangeSearchId} />
            <button onClick={getAuthorsId}>Search By ID</button>
          </div>
        </div>

        <div className='app-container'>
          <form onSubmit={http_updateAuthor} autoComplete='off'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>BIO</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {getAuthor.authors.map(authors =>
                  <Fragment key={authors.author_id}>
                    {getSelectedAuthorId === authors.author_id
                      ? (<UpdateAuthor getUpdateFormData={getUpdateFormData} handleUpdateFormChange={handleUpdateFormChange} handleCancelClick={handleCancelClick}></UpdateAuthor>)
                      :
                      (<ReadOnlyAuthor pass_authors={authors} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeleteClick}></ReadOnlyAuthor>)}
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

export default Author;
