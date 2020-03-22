import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Index from '../src/pages'
// import Login from '../src/pages/login'
import Home from '../src/components/Home'
import Playlist from '../src/components/Playlist'
import About from '../src/components/About'

const routes = [
  {
    exact: false,
    path: '/',
    component: Index,
    subRoutes: [
      {
        exact: true,
        path: '/',
        component: Home,
      },
      {
        exact: false,
        path: '/playlist/:id',
        component: Playlist,
      },
      {
        exact: false,
        path: '/about',
        component: About,
      },
    ]
  },
  // {
  //   exact: false,
  //   path: '/',
  //   component: Login,
  // },
  {
    path: '*',
    component: () => {
      return (<div>No match</div>)
    }
  }
]

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          if (route.path === '/login') {
            return (
              <Route 
                key={index} 
                exact={route.exact}
                path={route.path} 
                render={() => <route.component />}
              />
            )
          } else {
            return (
              <RequireLoginRoute 
                key={index} 
                exact={route.exact} 
                path={route.path}
              >
                <route.component routes={route.subRoutes} />
              </RequireLoginRoute>
            )
          }
        })}
      </Switch>
    </Router>
  )
}

export const RequireLoginRoute = ({ children, ...props }) => {
  const isLogin = JSON.parse(localStorage.getItem('isLogin'))

  return (
    <Route
      {...props}
      render={() => {
        // return isLogin ? (
        return true ? (
          children
        ) : (
          <Redirect 
            to={{ pathname: '/' }}
          />
        )
      }}
    />
  )
}

export default App
