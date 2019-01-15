import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { persistor, store } from './store/storeConfig';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/ListTheme';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <App/>
        </MuiThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
