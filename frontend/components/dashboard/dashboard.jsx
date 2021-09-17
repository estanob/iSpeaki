import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  let { 
    users, 
    languages,
    lessons,
    languageToStudents,
    session, 
    currentUser,
    coinIcon, 
    presentIcon,
    testIcon,
    iTalkiImg,
    levelDescriptions,
    fetchUser, 
    fetchAllUsers,
    fetchLanguages,
    fetchLanguageToStudents,
    fetchLessons,
    currentDate,
    currentTime,
  } = props;

  session = session ? session : '';
  currentDate = currentDate ? currentDate : '';
  currentTime = currentTime ? currentTime : '';
  currentUser = currentUser ? currentUser : {};
  coinIcon = coinIcon ? coinIcon : {};
  presentIcon = presentIcon ? presentIcon : {};
  testIcon = testIcon ? testIcon : {};
  iTalkiImg = iTalkiImg ? iTalkiImg : {};
  users = users ? users : [];
  languages = languages ? languages : [];
  languageToStudents = languageToStudents ? languageToStudents : [];
  lessons = lessons ? lessons : [];
  levelDescriptions = levelDescriptions ? levelDescriptions : [];
  console.log("Dashboard Props", props)

  useEffect(() => {
    fetchUser()
    fetchAllUsers()
    fetchLanguages()
    fetchLanguageToStudents()
    fetchLessons()
  }, []);

  let numCompletedLessons = 0;
  const timeNow = new Date ();
  let userLessons = currentUser.attendedLessons ? currentUser.attendedLessons : [];

  userLessons.forEach(lesson => {
    const lessonEnd = new Date (lesson.end_time);
    if (lessonEnd > timeNow) {
      numCompletedLessons++
    }
  })
  
  let currentLanguages = currentUser.languagesLearning ? currentUser.languagesLearning : [];
  const studiedLanguages = currentLanguages.map((language, i) => {
    return (
      <li key={i} style={{ marginRight: '10px', marginBottom: '10px' }}>
        {`${language.name}`}
      </li>
    )
  });

  let userName = currentUser.display_name ? <p className="display-name">{`${currentUser.display_name}`}</p> : <p className="display-name">{`${currentUser.firstName} ${currentUser.lastName}`}</p>;

  return (
    <div style={{ margin: '0 auto' }}>
      <div className="user-dashboard">
        <div className="acct-info">
          <div className="user info-box box-shadow">
            <h3 className="user-id">{`ID: ${session}`}</h3>
            <Link to={`/user/${session}`} className="profile-link">
              {userName}
            </Link>
            <div className="social-media-info">
              <Link to={`/posts/${session}`} className="profile-link">
                {`${currentUser.posts.length} Posts`}
              </Link>
              <p>{`0 Following 0 Followers`}</p>
            </div>
          </div>
          <div className="dashboard-wallet-balance info-box box-shadow">
            <span className="dashboard-ispeakee-balance left-title">
              ispeakee Balance
            </span>
            <>{coinIcon}</>
          </div>
          <div className="refer-a-friend left-title info-box box-shadow">
            <div style={{ display: 'block', width: '100%' }}>
              <span className="left-title">
                Refer a Friend
              </span>
              <p className="left-content">
                Get a friend involved and earn up to $30 ispeakee Credits per referral
              </p>
            </div>
            <>{presentIcon}</>
          </div>
          <div className="language-test left-title info-box box-shadow">
            <div style={{ display: 'block' }}>
              <span>
                ispeakee Language Test
              </span>
              <p className="left-content">
                Test Your Language Level
              </p>
            </div>
            <>{testIcon}</>
          </div>
          <div className="download-ispeakee left-title info-box box-shadow" style={{ padding: '16px 24px 0' }}>
            <div style={{ display: 'block' }}>
              <span>
                Download the ispeakee App
              </span>
              <p className="left-content">
                Learn languages, anytime, anywhere.
              </p>
            </div>
            <>{iTalkiImg}</>
          </div>
        </div>
        <div className="study-info">
          <div className="lang-skills">
            <div className="skill-lesson-box info-box box-shadow">
              <div className="skill">
                <h1 className="learning-language">Learning Language</h1>
                <ul className="lang-skills-ul">
                  {studiedLanguages}
                </ul>
              </div>
              <div className="completed-lessons">
                <Link to="/lessons/" className="completed-lessons-link">
                  <p className="completed-number">{numCompletedLessons}</p>
                  <span className="completed-text">Completed Lessons</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="languages-learning info-box box-shadow">
            <h1>Upcoming Lesson</h1>
          </div>
          <div className="my-teachers info-box box-shadow">
            <h1>My Teachers</h1>
          </div>
          <Link to="/languages" className="languages-link">
            Languages
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;