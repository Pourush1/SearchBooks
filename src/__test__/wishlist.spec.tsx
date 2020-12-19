import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import WishList from '../components/WishList/WishList';

let documentBody: RenderResult;

describe('<Book />', () => {
  const props = {
    wishList: [
      {
        title: 'Java',
        published: '2016-11-05'
      },
      {
        title: 'Javascipt',
        published: '2017-11-05'
      }
    ]
  };

  beforeEach(() => {
    documentBody = render(<WishList {...props} />);
  });

  it('shows initial messages', () => {
    const myReadingList = screen.getByRole('heading');
    expect(myReadingList).toHaveTextContent('My Reading Wishlist');
  });

  it('renders correct number of books', () => {
    const bookList = screen.getAllByTestId('bookList');
    expect(bookList).toHaveLength(1);

    const book = screen.getAllByTestId('book');
    expect(book).toHaveLength(2);
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
