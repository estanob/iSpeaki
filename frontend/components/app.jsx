import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from '../components/navbar/navbar_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from '../components/splash';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/sign_up_form_container';
import LessonShow from './lessons/show/lesson_show';
import LessonIndexContainer from './lessons/index/lesson_index_container';
import LanguageIndexContainer from './languages/index/language_index_container';
import LanguageShowContainer from './languages/show/language_show_page_container';
import PostShowContainer from './posts/post_show_container';
import ProfileContainer from './profile/profile_container';

const App = () => {
  return (
    <div style={{ display: 'grid' }}>
      <header className="inner-header">
        <NavbarContainer />
      </header>
      <Switch>
        <ProtectedRoute path='/dashboard' component={DashboardContainer} />
        <ProtectedRoute path='/lessons/:id' component={LessonShow} />
        <ProtectedRoute path='/lessons' component={LessonIndexContainer} />
        <ProtectedRoute path="/languages/:id" component={LanguageShowContainer} />
        <ProtectedRoute path="/languages" component={LanguageIndexContainer} />
        <ProtectedRoute path="/post/:id" component={PostShowContainer} />
        <ProtectedRoute path='/user/:id' component={ProfileContainer}/>
        
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />

        {/* <Route path='/404' />
        <Redirect to="/404" /> */}
      </Switch>
      <footer>
        © iSpeaki - 2021
        <br />
        Inspired by iTalki
      </footer>
    </div>
  );
};

export default App;