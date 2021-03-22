import React from 'react';
import { IBook } from '../../book-search/BookSearch';
import moment from 'moment';

interface IAddToWish {
  addToWishList: (book: IBook) => void;
  disableAddToWishListButton?: boolean;
  index: number;
}

const Book: React.FC<IBook & IAddToWish> = ({
  title,
  publishedDate,
  thumbnail,
  publisher,
  addToWishList,
  disableAddToWishListButton,
  index,
}) => {
  return (
    <div className="col-sm-3 pb-3" key={index}>
      <div className="card p-3">
        <img
          className="card-img-top mb-3"
          src={thumbnail}
          alt="book cover"
        ></img>
        <div className="card-body">
          <p className="font-weight-bold">{title}</p>
          <p>{moment(publishedDate).format('MMM Do YYYY')}</p>
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
