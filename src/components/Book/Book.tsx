import React, { useState } from 'react';
import { IBook } from '../../book-search/BookSearch';

interface IAddToWish {
  addToWishList: (book: IBook) => void;
  disableAddToWishListButton: boolean;
}

const Book: React.FC<IBook & IAddToWish> = ({
  title,
  authors,
  publishedDate,
  thumbnail,
  publisher,
  addToWishList,
  disableAddToWishListButton
}) => {
  return (
    <div className="col-sm-3 pb-3">
      <div className="card p-3">
        <img
          className="card-img-top mb-3"
          src={thumbnail}
          alt="book cover"
        ></img>
        <div className="card-body">
          <p className="font-weight-bold">{title}</p>
          <p>{publishedDate}</p>
          <p>{publisher}</p>
          <button
            onClick={() =>
              addToWishList({ title, thumbnail, publisher, publishedDate })
            }
            className="btn btn-primary"
            disabled={disableAddToWishListButton}
          >
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
