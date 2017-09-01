import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  { createStore, Store } from 'redux';
import { default as todoApp, AppState } from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store: Store<AppState>  = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
