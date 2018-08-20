import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import AppRouter from './router/Router'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import reducer from './reducers/index' // Or wherever you keep your reducers
import { auth } from './firebase'
import { getPosts } from './actions/posts'
import { getPostComments } from './actions/comments'
import { login, logout } from './actions/auth'
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware, thunk, logger)))
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducer)
    })
  }
}

let isRendered = false
const renderApp = () => {
  if (!isRendered) {
    ReactDOM.render(
      <Provider store={store}>
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root')
    )
    isRendered = true
  }
}

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('login user id: ', user.uid)
    console.log('name: ', user.displayName)
    store.dispatch(login(user.uid))
    store.dispatch(getPosts())
    store.dispatch(getPostComments())
    renderApp()
    // if (history.location.pathname === '/') {
    //   history.push('/posts')
    // }
  } else {
    console.log('logout')
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})

// ReactDOM.render(
//   <Provider store={store}>
//     {/* ConnectedRouter will use the store from Provider automatically */}
//     <ConnectedRouter history={history}>
//       <AppRouter />
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(NextApp)
  })
}

// store.dispatch(getPosts())

// ReactDOM.render(template, document.getElementById('root'));
// registerServiceWorker();
