import React from 'react';
import { IBook } from '../../book-search/BookSearch';

interface IWishListProps {
  books: IBook[];
}

const WishList: React.FC<IWishListProps> = ({ books }) => {
  return (
    <div className="mb-4">
      <h4 className="m-auto py-3 text-center">
        My Reading Wishlist ({books.length})
      </h4>
      <div className="row">
        {books.map((book: IBook) => {
          return (
            <div className="col-md-6 pb-3">
              <div className="card w-75">
                <img
                  className="card-img-top"
                  src={book.thumbnail}
                  alt="book cover"
                ></img>
                <p className="font-weight-bold">{book.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
