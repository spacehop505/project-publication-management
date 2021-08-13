import React, { useState } from 'react';

import Book from './components/book/Book.js';
import Author from './components/author/Author.js';
import Genre from './components/genre/Genre.js';
import BookHasAuthor from './components/book-has-author/BookHasAuthor.js';

const App = () => {
  const [getAttribute, setAttribute] = useState('author');

  const handleUpdateFormChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    setAttribute(fieldName);
  };
  const [getActive, setActive] = useState({ activeIndex: 1 });


  return (
    <div>
      <header>
        <button onClick={handleUpdateFormChange}
          className={'author' === getAttribute ? "btn-header-active" : "btn-header-inactive"}
          name='author'>Author</button>

        <button onClick={handleUpdateFormChange}
          className={'book' === getAttribute ? "btn-header-active" : "btn-header-inactive"}
          name='book'>Book</button>

        <button onClick={handleUpdateFormChange}
          className={'genre' === getAttribute ? "btn-header-active" : "btn-header-inactive"}
          name='genre'>Genre</button>
        <button onClick={handleUpdateFormChange}
          className={'book-has-author' === getAttribute ? "btn-header-active" : "btn-header-inactive"}
          name='book-has-author'>Book Has Author</button>
      </header>
      <main>

        {getAttribute === 'author' ? <Author></Author>
          :
          getAttribute === 'book' ? <Book></Book>
            :
            getAttribute === 'genre' ? <Genre></Genre>
              : <BookHasAuthor></BookHasAuthor>
        }

      </main>
    </div>
  );
}

export default App;
