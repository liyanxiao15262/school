import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './resize.css';
import Nav from './nav';
import Banner from './banner';
import Inform from './inform';
import Cdio from './CDIO';
import Introduction from './Introduction';
import Recommend from './Recommend';
import Policy from './Policy';
import Score from './score';
import Work from './work';
import Center from './center';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Nav /><Banner/><Introduction/><Recommend/><Policy/><Inform/><Cdio/><Score/><Work/><Center/></div>, document.getElementById('root'));
registerServiceWorker();
