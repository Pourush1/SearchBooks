import React from 'react';

interface IBooksProps {
  title: string;
}

const Book = ({ title }: IBooksProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Book;
