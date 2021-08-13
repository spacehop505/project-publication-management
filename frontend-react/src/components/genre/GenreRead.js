import React from "react";

const GenreRead = ({ api, axiosGetGenre, currentGenres, collectFromRead_SetInputUpdateData_handleOnClick }) => {
  console.log('--Read Component--');

  //----------[DELETE]----------
  // - [delete-step-0] [onClick] [DELETE]
  const axiosDelete_onClick = async (id) => {
    await api.delete(`/genre/${id}`).then(res => {
      console.log('[delete-step-0] [DELETE] axiosDelete_onClick -', res);
      axiosGetGenre();
    });
  };

  return (
    <tr>
      <td>{currentGenres.genre_id} </td>
      <td>{currentGenres.genre_name}</td>
      <td>{currentGenres.genre_description}</td>

      <td>
        <button className='btn-update' type='button' onClick={() => collectFromRead_SetInputUpdateData_handleOnClick(currentGenres)}>Update</button>
        <button className='btn-delete' type='button' onClick={() => axiosDelete_onClick(currentGenres.genre_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default GenreRead;