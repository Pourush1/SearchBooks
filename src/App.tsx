import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './styles/App.scss';

import BookSearch from './book-search/BookSearch';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <header className="header">
        <div className="header--content">
          <h1>My Good Reads</h1>
        </div>
      </header>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={BookSearch} />
            <Route path="*" component={NotFoundPage} /> }
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
