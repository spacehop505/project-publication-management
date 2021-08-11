import React, { useState } from 'react';

import Book from './components/book/Book.js';
import Sample from './components/sample/Sample.js';
import Author from './components/author/Author.js'


function App() {

  const [getAttribute, setAttribute] = useState('author');

  const handleUpdateFormChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    setAttribute(fieldName);
    console.log(fieldName);

  };







  return (
    <div>
      <header>
        <button onClick={handleUpdateFormChange} className='btn-header' name='author'>Author</button>
        <button onClick={handleUpdateFormChange} className='btn-header' name='book'>Book</button>
        <button onClick={handleUpdateFormChange} className='btn-header' name='genre'>Genre</button>
        <button onClick={handleUpdateFormChange} className='btn-header' name='book-has-author'>Book Has Author</button>
      </header>
      <main>


        {getAttribute === 'author' ? <Author></Author>
          :
          getAttribute === 'book' ? <Book></Book>
            :
            getAttribute === 'genre' ? <Sample></Sample>
              : <Sample></Sample>}

      </main>
    </div>
  );
}

export default App;
