import React, { useEffect, useState } from 'react';
import { getBooksByType } from './book-search.service';
import Book from '../components/Book/Book';

interface IBook {
  volumeInfo: {
    title: string;
    publisher?: string;
    authors: string[];
    description: string;
    publishedDate: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

const BookSearch = () => {
  const [bookType, updateBookType] = useState('');
  const [bookTypeToSearch, updateBookTypeToSearch] = useState('');
  const [allAvailableBooks, setAllAvailableBooks] = useState<IBook[]>([]);
  async function requestBooks() {
    if (bookTypeToSearch) {
      const allBooks = await getBooksByType(bookTypeToSearch);
      setAllAvailableBooks(allBooks.items);
    }
  }

  useEffect(() => {
    async function getAllBooks() {
      await requestBooks();
    }
    getAllBooks();
  }, [bookTypeToSearch]);

  return (
    <>
      <div className="book--container">
        <div className="search-params">
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                updateBookTypeToSearch(bookType);
              }}
            >
              <input
                className="full-width"
                autoFocus
                name="gsearch"
                type="search"
                value={bookType}
                placeholder="Search for books to add to your reading list and press Enter"
                onChange={e => updateBookType(e.target.value)}
              />
            </form>

            {!bookType && (
              <div className="empty">
                <p>
                  Try searching for a topic, for example
                  <a
                    onClick={() => {
                      updateBookType('Javascript');
                    }}
                  >
                    {' '}
                    "Javascript"
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {allAvailableBooks.length ? (
        <div className="row">
          {allAvailableBooks.map(book => {
            return (
              <Book
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                publishedDate={book.volumeInfo.publishedDate}
                thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                description={book.volumeInfo.description}
                publisher={book.volumeInfo.publisher}
              />
            );
          })}
        </div>
      ) : (
        <h1>Empty right now</h1>
      )}

      {/* {<pre>{JSON.stringify(allAvailableBooks, null, 4)}</pre>} */}
    </>
  );
};

export default BookSearch;
