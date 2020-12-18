import React from 'react';
import { IBook } from '../../book-search/BookSearch';
import Book from '../Book/Book';

export interface IBookList {
  allAvailableBooks: IBook[];
  wishList: IBook[];
  addToWishList: (book: IBook) => void;
}

const BookList: React.FC<IBookList> = ({
  allAvailableBooks,
  addToWishList,
  wishList
}) => {
  return (
    <div className="row">
      {allAvailableBooks.map((book: IBook) => {
        const disableAddToWishListButton = wishList.find(
          bookInWishList => bookInWishList.thumbnail === book.thumbnail
        )
          ? true
          : false;
        return (
          <Book
            title={book.title}
            publisher={book.publisher}
            publishedDate={book.publishedDate}
            authors={book.authors}
            thumbnail={book.thumbnail}
            description={book.description}
            addToWishList={addToWishList}
            disableAddToWishListButton={disableAddToWishListButton}
          />
        );
      })}
    </div>
  );
};

export default BookList;
