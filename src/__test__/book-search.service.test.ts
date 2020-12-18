import React from 'react';
import { getBooksByType } from '../book-search/book-search.service';

it('getBooks return items', () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        })
    })
  );
  expect.assertions(2);

  return getBooksByType('java').then(data => {
    expect(data.items.length).toBeGreaterThan(4);
    expect(data.items.length).toEqual(10);
  });
});
