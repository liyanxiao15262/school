import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './resize.css';
import Nav from './nav';
import Banner from './banner';
import Inform from './inform';
import Introduction from './Introduction';
import Recommend from './Recommend';
import Policy from './Policy';
import Vappreciate from './Vappreciate';
import Scenery from './Scenery';
import Abroad from './Abroad';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Nav /><Banner/><Introduction/><Recommend/><Policy/><Inform/></div>, document.getElementById('root'));
registerServiceWorker();
