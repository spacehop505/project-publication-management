import React, { useState, useEffect } from "react";


const BookUpdate = ({ api_genre, axiousUpdate_HandleOnClick, getUpdateInput_Data, collectFromInput_SetInputUpdateData_handleOnChange, cancelClick_onClick }) => {
  console.log('--Update Component--');

  const [getGenre, setGenre] = useState({ genres: [] });

  useEffect(() => {
    const http_getcurrentGenre = async () => {
      const res = await api_genre.get('/genre');
      setGenre({ genres: res.data.content })
      console.log('await http_getcurrentGenre -', res.data.content);
    }
    http_getcurrentGenre();
  }, [api_genre]);

  return (
    <tr className="active-row">
      <td>
        {getUpdateInput_Data.id}
      </td>
      <td>
        <input type="text"
          name='title'
          value={getUpdateInput_Data.title}
          onChange={collectFromInput_SetInputUpdateData_handleOnChange}
          autoComplete='off'
          placeholder='Enter Title...' />
      </td>
      <td>
        <input type="text"
          name='description'
          value={getUpdateInput_Data.description}
          onChange={collectFromInput_SetInputUpdateData_handleOnChange}
          autoComplete='off'
          placeholder='Enter Description...' />
      </td>
      <td>
        <input type="text"
          name='isbn'
          value={getUpdateInput_Data.isbn}
          onChange={collectFromInput_SetInputUpdateData_handleOnChange}
          autoComplete='off'
          placeholder='Enter ISBN...' />
      </td>
      <td>
        <select name='book_genre_id'
          value={getUpdateInput_Data.book_genre_id}
          onChange={collectFromInput_SetInputUpdateData_handleOnChange}>
          {getGenre.genres.map((genre) => (
            <option key={genre.genre_id}
              value={genre.genre_id}>{genre.genre_name}</option>
          ))}
        </select>
      </td>
      <td>
        <button onClick={axiousUpdate_HandleOnClick} className='btn-save' type='button'>Save</button>
        <button className='btn-cancel' type='button' onClick={cancelClick_onClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default BookUpdate;