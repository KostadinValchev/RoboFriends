import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<h1>My First React app</h1>, document.getElementById('root'));

serviceWorker.unregister();
