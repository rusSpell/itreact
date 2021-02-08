import { Route } from 'react-router-dom'

import HeaderContainer from './Components/Header/HeaderContainer.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
/* import Profile from './Components/Profile/Profile.jsx' */
import DialogsContainer from './Components/Dialogs/DialogsContainer.jsx'
import News from './Components/News/News.jsx'
import Music from './Components/Music/Music.jsx'
import UsersContainer from './Components/Users/UsersContainer.jsx'
import Settings from './Components/Settings/Settings.jsx'
import Footer from './Components/Footer/Footer.jsx'

import './App.scss'
import { ReactComponent as Icons } from './Icons/likeo.svg'
import ProfileContainer from './Components/Profile/ProfileContainer.jsx'
import Login from './Components/Login/Login.jsx'

function App({state}) {
  
  return (
      <div className="App" >
        <Icons />
        <HeaderContainer />
        <Navbar state={state.sideBar} />

        <div className="App-content" >
          <Route exact path='/'
            render={() => <ProfileContainer />} />
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path='/dialogs'
            render={() => <DialogsContainer />} />
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

export default App;