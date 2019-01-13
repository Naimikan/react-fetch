import React from 'react';
import { render } from 'react-dom';

import Fetch from '../../src';

import './index.css';

const App = () => (
  <Fetch
    url="https://jsonplaceholder.typicode.com/comments"
    options={{ method: 'GET' }}
    render={({ isFetching, data, error }) => (
      <div className="wrapper">
        <h3>react-fetch</h3>
        <div className="fetch-container">
          {isFetching && (<div className="is-fetching">Loading...</div>)}
          {(!isFetching && data) && (<div className="is-done"><pre>{JSON.stringify(data, null, 2)}</pre></div>)}
          {(!isFetching && error) && (<div className="is-error"><pre>{JSON.stringify(error, null, 2)}</pre></div>)}
        </div>
      </div>
    )}
  />
);

render(<App />, document.getElementById("root"));
