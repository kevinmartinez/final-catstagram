import React from 'react'
import { Router, Switch } from 'react-router-dom'
//import { createBrowserHistory } from 'history';
import App from '../App'
import Main from '../components/Main'
import PhotoGrid from '../containers/PhotoGrid'
import Simple from '../containers/Simple'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Login from '../containers/Login'
// TODO: Bring stuff from index.js over here
// export const history = createBrowserHistory();
// import NotFound from '../components/NotFound';

const AppRouter = () => (
  <App>
    {/* Nested routes when using react-redux-router makes the <Router /> element unusable,
      instead we must connect with  <ConnectedRouter /> from react-router-redx
      at the moment this is declared in index js TODO: refactor that */}
    <Switch>
      <PublicRoute path="/" component={Login} exact={true} />
      <PrivateRoute exact path="/posts" component={PhotoGrid} />
      <PrivateRoute exact path="/post/:postId" component={Simple} />
    </Switch>
  </App>
)
/* <PrivateRoute path="/posts" component={App} />
        <PrivateRoute path="/add" component={AddPost} />
        <PrivateRoute path="/post/:id" component={Post} /> */
export default AppRouter

// import React from 'react';
// import { Router, Route, Switch } from 'react-router-dom';

// export const history = createHistory();

// // import NotFound from '../components/NotFound';

// const AppRouter = () => (
//   <Router history={history}>
//     <div className='container'>
//       <Switch>
//         <PublicRoute path="/" component={Login} exact={true} />
//         <PrivateRoute path="/posts" component={App} />
//         <PrivateRoute path="/add" component={AddPost} />
//         <PrivateRoute path="/post/:id" component={Post} />
//       </Switch>
//     </div>
//   </Router>
// )

// export default AppRouter;

// /*

//     <Switch>
//       <Route exact path="/" component={PhotoGrid} />
//       <Route exact path="/post/:postId" component={Single} />
//     </Switch>
// */
