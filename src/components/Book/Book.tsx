import React, { useEffect, useState } from 'react';
import { IBook } from '../../book-search/BookSearch';

interface IAddToWish {
  addToWishList: (book: IBook) => void;
}

const Book: React.FC<IBook & IAddToWish> = ({
  title,
  authors,
  publishedDate,
  thumbnail,
  publisher,
  description,
  addToWishList
}) => {
  return (
    <div className="col-sm-3">
      <div className="card p-3">
        <img
          className="card-img-top mb-2"
          src={thumbnail}
          alt="book cover"
        ></img>
        <p>{title}</p>
        <div className="card-body">
          <h1>{publishedDate}</h1>
          <h1>{publisher}</h1>
          <button
            onClick={() =>
              addToWishList({ title, thumbnail, publisher, publishedDate })
            }
            className="btn btn-primary"
          >
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
