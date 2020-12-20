import React from 'react';
import {
  render,
  RenderResult,
  screen,
  fireEvent
} from '@testing-library/react';
import BookSearch from '../book-search/BookSearch';

let documentBody: RenderResult;

describe('<BookSearch />', () => {
  beforeEach(() => {
    documentBody = render(<BookSearch />);
  });

  it('renders initial BookSearch Component', () => {
    expect(
      screen.getByText(`Try searching for a topic, for example`)
    ).toBeInTheDocument();
    expect(screen.getByText(/Try searching for a topic/)).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        'Search for books to add to your reading list and press Enter'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText(/Javascript/)).toBeInTheDocument();
    // screen.debug();
    // screen.getByRole('');
  });

  it('assert for elements that is not there', () => {
    expect(screen.queryByText(/Find for Javascript/)).toBeNull();
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
