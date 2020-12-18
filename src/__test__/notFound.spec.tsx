import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

let documentBody: RenderResult;

describe('<NotFound />', () => {
  beforeEach(() => {
    documentBody = render(<NotFoundPage />);
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
