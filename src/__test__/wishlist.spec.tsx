import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import WishList from '../components/WishList/WishList';

let documentBody: RenderResult;

describe('<WishList />', () => {
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
    expect(screen.getByRole('heading')).toHaveTextContent(
      'My Reading Wishlist'
    );
    expect(screen.getByText(/My Reading/)).toBeInTheDocument();
    expect(screen.getAllByText(/Java/)).toHaveLength(2);
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getAllByRole('generic')).toHaveLength(7);
    screen.debug();
    // screen.getByRole('');
  });

  it('renders correct number of books', () => {
    expect(screen.getAllByTestId('bookList')).toHaveLength(1);
    expect(screen.getAllByTestId('book')).toHaveLength(2);
  });

  it('test contains the correct book', () => {
    const booksList = props.wishList;
    for (const book of booksList) {
      expect(screen.getByText(book.title)).toBeInTheDocument();
    }
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
