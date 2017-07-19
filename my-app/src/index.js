import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './resize.css';
import Nav from './nav';
import Banner from './banner';
import Introduction from './Introduction';
import Recommend from './Recommend';
import Policy from './Policy';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Nav /><Banner/><Introduction />< Recommend/><Policy /></div>, document.getElementById('root'));
registerServiceWorker();
