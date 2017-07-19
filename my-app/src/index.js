import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './resize.css';
import Nav from './nav';
import Banner from './banner';
import Inform from './inform';
import Cdio from './CDIO';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Nav /><Banner/><Inform/><Cdio/></div>, document.getElementById('root'));
registerServiceWorker();
