import React from 'react';
import { IBook } from '../../book-search/BookSearch';
import Book from '../Book/Book';

export interface IBookList {
  books: IBook[];
  addToWishList: (book: IBook) => void;
}

const BookList: React.FC<IBookList> = ({ books, addToWishList }) => {
  return (
    <div className="row">
      {books.map((book: IBook) => {
        return (
          <Book
            title={book.title}
            publisher={book.publisher}
            publishedDate={book.publishedDate}
            authors={book.authors}
            thumbnail={book.thumbnail}
            description={book.description}
            addToWishList={addToWishList}
          />
        );
      })}
    </div>
  );
};

export default BookList;
