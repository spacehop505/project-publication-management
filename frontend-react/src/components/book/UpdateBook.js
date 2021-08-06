import React from "react";

const UpdateBook = ({ getUpdateFormData, handleUpdateFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>{getUpdateFormData.id}</td>
      <td>
        <input type="text" name='title' value={getUpdateFormData.title} required='required'
          onChange={handleUpdateFormChange}
          placeholder='Enter Title...' />
      </td>
      <td>
        <input type="text" name='description' value={getUpdateFormData.description} required='required'
          onChange={handleUpdateFormChange}
          placeholder='Enter Description...' />
      </td>
      <td>
        <input type="text" name='isbn' value={getUpdateFormData.isbn} required='required'
          onChange={handleUpdateFormChange}
          placeholder='Enter ISBN...' />
      </td>
      <td>
        <input type="text" name='genre' value={getUpdateFormData.genre} required='required'
          onChange={handleUpdateFormChange}
          placeholder='Enter Genre...' />
      </td>
      <td>
        <button type='submit'>Save</button>
        <button type='button' onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default UpdateBook;