import React from "react";

const EditAuthor = ({ getUpdateFormData, handleUpdateFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>{getUpdateFormData.id}</td>
      <td>
        <input type="text" value={getUpdateFormData.name} name='name' required='required'
          onChange={handleUpdateFormChange}
          placeholder='Enter Name...' />
      </td>
      <td>
        <input type="text" name='bio' value={getUpdateFormData.bio} required='required'
          onChange={handleUpdateFormChange}
          placeholder='Enter Bio...' />
      </td>
      <td>
        <button type='submit'>Save</button>
        <button type='button' onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditAuthor;