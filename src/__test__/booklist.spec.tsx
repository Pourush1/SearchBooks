import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import BookList from '../components/BookList/BookList';

let documentBody: RenderResult;

describe('<BookList />', () => {
  const props = {
    allAvailableBooks: [
      {
        title: 'Java',
        published: '2016-11-05'
      },
      {
        title: 'Javascipt',
        published: '2017-11-05'
      }
    ],
    wishList: [
      {
        title: 'Java',
        published: '2016-11-05'
      }
    ],
    addToWishList: () => {}
  };

  beforeEach(() => {
    documentBody = render(<BookList {...props} />);
  });

  it('renders correct number of books', () => {
    const bookContainer = screen.getAllByTestId('bookContainer');
    expect(bookContainer).toHaveLength(1);

    // const book = screen.getAllByTestId('book');
    // expect(book).toHaveLength(2);
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
