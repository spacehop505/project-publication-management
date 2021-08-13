import React from "react";

const GenreUpdate = ({ axiousUpdate_HandleOnClick, getUpdateInput_Data, collectFromInput_SetInputUpdateData_handleOnChange, cancelClick_onClick }) => {
  console.log('--Update Component--');

  return (
    <tr className="active-row">
      <td>
        {getUpdateInput_Data.id}
      </td>
      <td>
        <input type="text"
          name='name'
          value={getUpdateInput_Data.name}
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
        <button onClick={axiousUpdate_HandleOnClick} className='btn-save' type='button'>Save</button>
        <button className='btn-cancel' type='button' onClick={cancelClick_onClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default GenreUpdate;