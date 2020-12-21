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
    <div className="row" data-testid="bookContainer">
      {allAvailableBooks.map((book: IBook, index: number) => {
        const disableAddToWishListButton = wishList.find(
          bookInWishList => bookInWishList.thumbnail === book.thumbnail
        )
          ? true
          : false;
        return (
          <Book
            key={index}
            index={index}
            title={book.title}
            publisher={book.publisher}
            publishedDate={book.publishedDate}
            thumbnail={book.thumbnail}
            addToWishList={addToWishList}
            disableAddToWishListButton={disableAddToWishListButton}
          />
        );
      })}
    </div>
  );
};

export default BookList;
