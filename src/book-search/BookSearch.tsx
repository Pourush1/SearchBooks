import React, { useEffect, useState } from 'react';
import { getBooksByType } from './book-search.service';
import BookList from '../components/BookList/BookList';
import WishList from '../components/WishList/WishList';

export interface IBook {
  title: string;
  authors?: string[];
  publishedDate?: string;
  thumbnail?: string;
  publisher?: string;
  description?: string;
}

const BookSearch = () => {
  const [bookType, updateBookType] = useState('');
  const [bookTypeToSearch, updateBookTypeToSearch] = useState('');
  const [allAvailableBooks, setAllAvailableBooks] = useState<IBook[]>([]);
  const [wishList, setWishList] = useState<IBook[]>([]);

  async function requestBooks() {
    if (bookTypeToSearch) {
      const { items } = await getBooksByType(bookTypeToSearch);
      if (items) {
        const requiredBooks: IBook[] = items.map((book: any) => {
          const { volumeInfo } = book;
          return {
            title: volumeInfo.title,
            authors: volumeInfo.authors,
            publishedDate: volumeInfo.publishedDate,
            thumbnail: volumeInfo?.imageLinks?.thumbnail,
            publisher: volumeInfo.publisher,
            description: volumeInfo.description
          };
        });
        setAllAvailableBooks(requiredBooks);
      }
    }
  }

  useEffect(() => {
    async function getAllBooks() {
      await requestBooks();
    }
    getAllBooks();
  }, [bookTypeToSearch]);

  useEffect(() => {
    if (bookType) {
      const timeOut = setTimeout(() => updateBookTypeToSearch(bookType), 500);
      return () => clearTimeout(timeOut);
    } else {
      setAllAvailableBooks([]);
    }
  }, [bookType]);

  const addToWishList = (book: IBook) => {
    let newWishList = [...wishList];
    let itemInCart = newWishList.find(
      item => item.thumbnail === book.thumbnail
    );
    if (!itemInCart) {
      let newItem = {
        title: book.title,
        publisher: book.publisher,
        thumbnail: book.thumbnail
      };
      newWishList.push(newItem);
    }
    console.log(newWishList);
    setWishList(newWishList);
  };

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
          <div className="col-md-8">
            <BookList books={allAvailableBooks} addToWishList={addToWishList} />
          </div>
          <div className="col-md-4">
            <WishList books={wishList} />
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default BookSearch;
