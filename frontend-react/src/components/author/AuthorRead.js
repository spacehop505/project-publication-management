import React from "react";

const AuthorRead = ({ api, axiosGetAuthor, currentAuthors, collectFromRead_SetInputUpdateData_handleOnClick }) => {
  console.log('--Read Component--');

  //----------[DELETE]----------
  // - [delete-step-0] [onClick] [DELETE]
  const axiosDelete_onClick = async (id) => {
    await api.delete(`/author/${id}`).then(res => {
      console.log('[delete-step-0] [DELETE] axiosDelete_onClick -', res);
      axiosGetAuthor();
    });
  };

  return (
    <tr>
      <td>{currentAuthors.author_id} </td>
      <td>{currentAuthors.author_name}</td>
      <td>{currentAuthors.author_bio}</td>

      <td>
        <button className='btn-update' type='button' onClick={() => collectFromRead_SetInputUpdateData_handleOnClick(currentAuthors)}>Update</button>
        <button className='btn-delete' type='button' onClick={() => axiosDelete_onClick(currentAuthors.author_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default AuthorRead;