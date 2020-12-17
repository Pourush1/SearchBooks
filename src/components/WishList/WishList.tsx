import React from 'react';
import { IBook } from '../../book-search/BookSearch';

interface IWishListProps {
  books: IBook[];
}

const WishList: React.FC<IWishListProps> = ({ books }) => {
  return (
    <div className="row">
      <p>My Reading Wishlist ({books.length})</p>
      <br />
      {books.map((book: IBook) => {
        return (
          <div className="col-md-6">
            <div className="card w-75">
              <img
                className="card-img-top"
                src={book.thumbnail}
                alt="book cover"
              ></img>
              <p>{book.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishList;
