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
import LoginModalContainer from './session_form/login_modal_container';
// import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/sign_up_form_container';
import LessonShowContainer from './lessons/show/lesson_show_container';
import LessonIndexContainer from './lessons/index/lesson_index_container';
import LanguageIndexContainer from './languages/index/language_index_container';
import LanguageShowContainer from './languages/show/language_show_page_container';
import PostShowContainer from './posts/post_show_container';
import PostIndexContainer from './posts/index/post_index_container';
import ProfileContainer from './profile/profile_container';
import TeacherIndexContainer from './teachers/teachers_page/teacher_index_container';
import TeacherShowContainer from './teachers/teacher_show/teacher_show_container';
import ErrorPage from './error_page';
// import ReactNotification, { store } from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';

const App = () => {
  return (
    <div style={{ display: 'grid', backgroundColor: '#fafafc' }}>
      <header className="inner-header">
        <NavbarContainer />
        {/* <ReactNotification />
        <NotificationsPage /> */}
      </header>
      <Switch>
        <ProtectedRoute path='/dashboard' component={DashboardContainer} />
        <ProtectedRoute path='/lessons/:id' component={LessonShowContainer} />
        <ProtectedRoute path='/lessons' component={LessonIndexContainer} />
        <ProtectedRoute path="/languages/:id" component={LanguageShowContainer} />
        <ProtectedRoute path="/languages" component={LanguageIndexContainer} />
        <ProtectedRoute path="/post/:id" component={PostShowContainer} />
        <ProtectedRoute path="/posts/:id" component={PostIndexContainer} />
        <ProtectedRoute path="/teacher/:id" component={TeacherShowContainer} />
        <ProtectedRoute path="/contacts/teacher" component={TeacherIndexContainer} />
        <ProtectedRoute path='/user/:id' component={ProfileContainer}/>
        
        {/* <AuthRoute path="/login" component={LoginModalContainer} /> */}
        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        <AuthRoute exact path="/" component={Splash} />

        <Route path='/404' component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
      <footer>
        © iSpeakee - 2021
        <br />
        Inspired by iTalki
      </footer>
    </div>
  );
};

// function NotificationsPage() {
//   const handleOnClickDefault = () => {
//     store.addNotification({
//       title: "This is a test notification",
//       message: "This is a notification",
//       type: "success",

//     })
//   }

//   return (
//     <div>
//       <button onClick={handleOnClickDefault}>
//         default
//       </button>
//     </div>
//   )
// }

export default App;