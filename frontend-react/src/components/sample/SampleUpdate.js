import React from "react";

const SampleUpdate = ({ http_updateBook, getUpdateFormData, handleUpdateFormChange, handleCancelClick }) => {
  console.log('--Update Component--');

  return (
    <tr className="active-row">
      <td>{getUpdateFormData.id}</td>
      <td>
        <input type="text" name='title' value={getUpdateFormData.title}
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
        <button onClick={http_updateBook} className='btn-save' type='button'>Save</button>
        <button className='btn-cancel' type='button' onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default SampleUpdate;