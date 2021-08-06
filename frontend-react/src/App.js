import React from 'react';
import Author from './components/author/Author.js';
import Book from './components/book/Book.js';
function App() {
  return (
    <div>
      <header>
        <button>Author</button>
        <button>Book</button>
        <button>Genre</button>
        <button>Book Has Author</button>
      </header>
      <main>
        <Author></Author>
        <Book></Book>
      </main>
    </div>
  );
}

export default App;
