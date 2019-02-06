import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList'
import 'tachyons';
import { robots } from './robots';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <CardList robots={robots} />
    , document.getElementById('root'));

serviceWorker.unregister();
