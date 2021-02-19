import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { initializeApp } from './redux/appReducer'

import HeaderContainer from './Components/Header/HeaderContainer.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
/* import ProfileContainer from './Components/Profile/ProfileContainer.jsx' */
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer.jsx'));
/* import DialogsContainer from './Components/Dialogs/DialogsContainer.jsx' */
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer.jsx'));
import UsersContainer from './Components/Users/UsersContainer.jsx'
import News from './Components/News/News.jsx'
import Music from './Components/Music/Music.jsx'
import Settings from './Components/Settings/Settings.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Login from './Components/Login/Login.jsx'

import './App.scss'
import { ReactComponent as Icons } from './Icons/likeo.svg'
import Preloader from './Components/common/Preloader/Preloader'
import { withSuspense } from './hoc/withSuspense'

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="App" >
        <Icons />
        <HeaderContainer />
        <Navbar state={this.props.sideBar} />

        <div className="App-content" >
          <Route exact path='/'
            render={withSuspense(ProfileContainer)} />
          <Route path='/profile/:userId?'
            render={withSuspense(ProfileContainer)} />
          <Route path='/dialogs'
            render={withSuspense(DialogsContainer)} />
          <Route path='/news'
            render={() => <News />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <Login />} />
          <Route path='/music'
            component={Music} />
          <Route path='/settings'
            component={Settings} />
        </div>

        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  /* withRouter, */
  connect(mapStateToProps, { initializeApp })
)(App)