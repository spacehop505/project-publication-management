import React from "react";

const ReadOnlyAuthor = ({ pass_authors, handleUpdateClick, handleDeleteClick }) => {
  return (
    <tr >
      <td>{pass_authors.author_id} </td>
      <td>{pass_authors.author_name}</td>
      <td>{pass_authors.author_bio}</td>
      <td>
        <button type='button' onClick={(event) => handleUpdateClick(event, pass_authors)}>Update</button>
        <button type='button' onClick={(event) => handleDeleteClick(event, pass_authors.author_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyAuthor;