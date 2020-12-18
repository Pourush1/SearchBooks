import React from 'react';
import {
  render,
  RenderResult,
  screen,
  fireEvent
} from '@testing-library/react';
import Book from '../components/Book/Book';

let documentBody: RenderResult;

describe('<Book />', () => {
  const mock = jest.fn(() => {});

  const props = {
    title: 'Java',
    addToWishList: mock,
    published: '2016-11-05'
  };

  beforeEach(() => {
    documentBody = render(<Book {...props} />);
  });

  it('shows initial messages', () => {
    const wishlist = screen.getAllByText('Add to WishList');
    expect(wishlist.length).toEqual(1);
  });

  it('should click wihslist button and call the mock', () => {
    fireEvent.click(screen.getByText('Add to WishList'));
    expect(mock).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Add to WishList'));
    expect(mock).toHaveBeenCalledTimes(2);
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
