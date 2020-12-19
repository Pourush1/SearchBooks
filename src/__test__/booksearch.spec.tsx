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

  it('renders BookSearch Component', () => {
    render(<BookSearch />);
    screen.debug();
  });
});
