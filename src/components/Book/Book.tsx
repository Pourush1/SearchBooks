import React from 'react';

interface IBooksProps {
  title: string;
  authors?: string[];
  publishedDate?: string;
  thumbnail?: string;
  publisher?: string;
  description?: string;
}

const Book = ({
  title,
  authors,
  publishedDate,
  thumbnail,
  publisher,
  description
}: IBooksProps) => {
  return (
    <div className="col md-2">
      <div className="card">
        <p>{title}</p>
        <div className="card-body">
          <h1>{publishedDate}</h1>
          <h1>{publisher}</h1>
        </div>
      </div>
    </div>
  );
};

export default Book;
