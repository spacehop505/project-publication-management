import React, { useState } from "react";


const SampleCreate = ({ api, api_genre, http_getcurrentBooks }) => {
    console.log('--Create Component--');

    const http_createBook = async () => {
        await api.post('/book', getCreateFormData)
            .then(res => {
                console.log(res);
                http_getcurrentBooks();
                setCreateFormData({
                    title: '',
                    description: '',
                    isbn: '',
                    genre: ''
                })
            }).catch(err =>
                console.log('ERROR', err)
            );
    };

    const handleCreateOnChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const frieldValue = event.target.value;
        const newFormData = { ...getCreateFormData };
        newFormData[fieldName] = frieldValue;
        setCreateFormData(newFormData);
        console.log('handleCreateOnChange', getCreateFormData);
    };


    const [getCreateFormData, setCreateFormData] = useState({
        title: '',
        description: '',
        isbn: '',
        genre: ''
    });


    const [getGenre, setGenre] = useState({ genres: [] });



    const http_getcurrentGenre = async () => {
        await api_genre.get('/genre').then(res => {
            setGenre({ genres: res.data.content })
            console.log('http_getcurrentGenre() get book -', res.data);
            console.log('get book -', getGenre);
        });
    };





    return (
        <div className='box-create' >
            <table className="styled-table" >
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
                    <tr className="active-row" >
                        <td></td>
                        <td>
                            <input type="text" value={getCreateFormData.title} onChange={handleCreateOnChange} name='title' autoComplete='off' placeholder='Enter Title...' />
                        </td>
                        <td>
                            <input type="text" value={getCreateFormData.description} onChange={handleCreateOnChange} name='description' autoComplete='off' placeholder='Enter Description...' />
                        </td>
                        <td>
                            <input type="text" value={getCreateFormData.isbn} onChange={handleCreateOnChange} name='isbn' autoComplete='off' placeholder='Enter ISBN...' />
                        </td>
                        <td>
                            <select onClick={http_getcurrentGenre} name='genre' onChange={handleCreateOnChange}>
                                <option value='0'>Default</option>
                                {getGenre.genres.map(genre => (
                                    <option value={genre.genre_id} >{genre.genre_name}</option>
                                ))}
                            </select >



                        </td>

                        <td>
                            <button type='button' onClick={http_createBook}>Create</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default SampleCreate;