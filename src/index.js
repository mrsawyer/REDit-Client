import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  IndexRoute,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './redux/store';

import App from './containers/App';
import CreatePost from './containers/CreatePost';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import PostList from './containers/PostList';
import Welcome from './containers/Welcome';

import MainLayout from './layouts/MainLayout';

import muiTheme from './styles/mui-theme';
import './styles/index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <Route component={MainLayout}>
          <Route path="/" component={App}>
            <IndexRoute component={Welcome} />
            <Route exact path="lessons/:lesson_id/posts" component={PostList} />
            <Route exact path="posts/new" component={CreatePost} />
          </Route>
          <Route path="login" component={Login} />
          <Route component={NotFound} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
