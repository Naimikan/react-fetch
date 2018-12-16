import React from 'react';
import { render } from 'react-dom';

import { Fetch } from '../../src';

const App = () => (
  <Fetch
    url="https://jsonplaceholder.typicode.com/comments"
    options={{ method: 'GET' }}
  />
);

render(<App />, document.getElementById("root"));
