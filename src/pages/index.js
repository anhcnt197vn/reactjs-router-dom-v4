import React from 'react'
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom'

const Index = ({ routes }) => {
  const onLogout = () => {
    localStorage.removeItem('isLogin')
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={{ pathname: '/' }}>Home</Link></li>
          <li className="breadcrumb-item" style={{ display: 'flex' }}>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PlayList
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to={{ pathname: '/playlist/1' }} className="dropdown-item" href="#">Playlist 1</Link>
                <Link to={{ pathname: '/playlist/2' }} className="dropdown-item" href="#">Playlist 2</Link>
                <Link to={{ pathname: '/playlist/3' }} className="dropdown-item" href="#">Playlist 3</Link>
              </div>
            </div>
          </li>
          <li className="breadcrumb-item"><Link to={{ pathname: '/about' }}>About</Link></li>
          <li className="breadcrumb-item">
            <Link
              to={{ pathname: '/login' }}
              onClick={() => { onLogout() }}
            >
              Logout
            </Link>
          </li>
        </ol>
      </nav>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={(props) => <route.component {...props} />}
            />
          )
        })}
      </Switch>
    </div>
  )
}

export default Index