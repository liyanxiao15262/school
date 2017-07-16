import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Introduction from './Introduction';
import Recommend from './Recommend';
import Policy from './Policy';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
    <Introduction />
    <Recommend />
    <Policy />
</div>, document.getElementById('root'));
registerServiceWorker();
