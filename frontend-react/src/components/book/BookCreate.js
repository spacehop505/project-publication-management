import React, { useState, useEffect } from "react";

const BookCreate = ({ api, api_genre, axiosGetBook }) => {
    console.log('--Create Component--');

    const [getGenre, setGenre] = useState([]);

    //----------[CREATE]----------
    //  [create-step-0] [CREATE-INPUT] - [JSON]
    const [getCreateFormData, setCreateFormData] = useState({
        title: '',
        description: '',
        isbn: '',
        genre_id: ''
    });
    // - [create-step-1] [onChange] [COLLECT-DATA-FROM-INPUT]
    const collectFromInput_SetInputCreateData_handleOnChange = (event) => {
        const fieldName = event.target.getAttribute('name');
        const frieldValue = event.target.value;
        const newFormData = { ...getCreateFormData };
        newFormData[fieldName] = frieldValue;
        setCreateFormData(newFormData);
        console.log('[create-step-1] collectFromInput_SetInputCreateData_handleOnChange -', newFormData);
    };
    // - [create-step-2] [onClick] [POST-CREATE]
    const axiosCreate_onClick = async () => {
        await api.post('/book', getCreateFormData).then(res => {
            axiosGetBook();
            setCreateFormData({
                title: '',
                description: '',
                isbn: '',
                genre_id: getGenre[0].genre_id
            });
            console.log('[create-step-2] [POST] axiosCreate_onClick -', res);
        });
    };

    useEffect(() => {
        const axiosGetGenreUseEffect = async () => {
            await api_genre.get('/genre').then(res => {
                setGenre(res.data.content);
                setCreateFormData({
                    title: '',
                    description: '',
                    isbn: '',
                    genre_id: res.data.content[0].genre_id
                });
                console.log('useEffect() axiosGetGenreUseEffect() -', res.data.content);
            });
        };
        axiosGetGenreUseEffect();
    }, [api_genre]);

    return (
        <table className="styled-table" >
            <thead>
                <tr>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>ISBN</th>
                    <th>GENRE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" >
                    <td>
                        <input type="text" name='title'
                            value={getCreateFormData.title}
                            onChange={collectFromInput_SetInputCreateData_handleOnChange}
                            autoComplete='off'
                            placeholder='Enter Title...' />
                    </td>
                    <td>
                        <input type="text" name='description'
                            value={getCreateFormData.description}
                            onChange={collectFromInput_SetInputCreateData_handleOnChange}
                            autoComplete='off'
                            placeholder='Enter Description...' />
                    </td>
                    <td>
                        <input type="text" name='isbn'
                            value={getCreateFormData.isbn}
                            onChange={collectFromInput_SetInputCreateData_handleOnChange}
                            autoComplete='off'
                            placeholder='Enter ISBN...' />
                    </td>
                    <td>
                        <select name='genre_id'
                            value={getCreateFormData.genre_id}
                            onChange={collectFromInput_SetInputCreateData_handleOnChange}>
                            {getGenre.map(genre => (
                                <option key={genre.genre_id} value={genre.genre_id}>{genre.genre_name}</option>
                            ))}
                        </select >
                    </td>
                    <td>
                        <button type='button' onClick={axiosCreate_onClick}>Create</button>
                    </td>
                </tr>
            </tbody>
        </table>

    );
};

export default BookCreate;