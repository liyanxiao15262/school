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
import Vappreciate from './Vappreciate'
import Scenery from './Scenery';
import Abroad from './Abroad';
import Bot from './foot';
import Fix from './fixed';
import NorthStone from './NorthStone';
import Talk from './qq';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><Nav /><Banner/><Introduction/><Recommend/><Policy/><NorthStone/><Inform/><Cdio/><Vappreciate/><Scenery/><Score/><Abroad/><Work/><Center/><Bot/><Fix/><Talk/></div>, document.getElementById('root'));
registerServiceWorker();
