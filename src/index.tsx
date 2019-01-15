import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Home from "./components/Home";
//test
const store = createStore(reducers,applyMiddleware(thunk));

// just for testing


ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root') as HTMLElement
);
//registerServiceWorker();

