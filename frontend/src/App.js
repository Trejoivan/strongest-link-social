import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AllPostsPage from './pages/AllPostsPage';
import PostPage from './pages/PostPage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import UserProfilePage from './pages/UserProfilePage';
import Header from './components/Header';
import Map from './pages/Map/Map';
import Leaderboard from './pages/Leaderboard/LeaderboardPage';
import MyPostsPage from './pages/MyPostsPage';
import WorkoutPage from './pages/WorkoutPage';
import { ChakraProvider, theme } from '@chakra-ui/react';


function App() {

  // probably better to set an auth context which I'll probably do, but just to get some conditional rendering on the minimal demo UI I have up to prove working auth decided to go with a state value
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const foundUser = JSON.parse(sessionStorage.getItem("user"));
    if (foundUser) {
      // console.log("founduser username: ", foundUser.username)
      const username = foundUser.username
      setUser(foundUser)
      console.log("user", user)
    }
  }, [])

  // HashRouter has been elevated to index.js, I find it works better like that if your routing structure gets complicated
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} />
      {/* <h1>Welcome to Strongest Link</h1> */}
      {/* <hr /> */}
      <Routes>
        <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser ={setUser}/>}>
        <Route path="register" element={<RegisterForm />}/>
        <Route path="login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} setUser ={setUser}/>}/>
        </Route>
        <Route exact path = "/my-posts" element = {<MyPostsPage/> }/>
        <Route exact path = "/posts" element = {<AllPostsPage/> }/>
        <Route exact path = "/map" element = { <ChakraProvider theme={theme}><Map /></ChakraProvider>} />
        <Route exact path = "/posts/:postID" element = {<PostPage/>}/>
        <Route exact path = "/user/:userID" element = {<UserProfilePage/>}/>
        <Route exact path = "/leaderboard" element = {<Leaderboard/>}/>
        <Route exact path = "/workouts" element = {<WorkoutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

// import './App.css';
// import { useEffect, useState } from 'react';
// import { Routes, Route} from 'react-router-dom';
// import Header from './components/Header';
// import LandingPage from './pages/LandingPage';
// import MyPostsPage from './pages/MyPostsPage';
// import AllPostsPage from './pages/AllPostsPage';
// import PostPage from './pages/PostPage';
// import RegisterForm from './components/RegisterForm';
// import LoginForm from './components/LoginForm';
// import MapPage from './pages/MapPage';
// import GymPage from './pages/GymPage';
// import WorkoutPage from './pages/WorkoutPage';

// function App() {

//   // probably better to set an auth context which I'll probably do, but just to get some conditional rendering on the minimal demo UI I have up to prove working auth decided to go with a state value
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const foundUser = JSON.parse(sessionStorage.getItem("user"));
//     if (foundUser) {
//       console.log("founduser username: ", foundUser.username)
//       const username = foundUser.username
//       setUser(username)
//     }
//   }, [user, isLoggedIn])

//   // HashRouter has been elevated to index.js, I find it works better like that if your routing structure gets complicated
//   return (
//     <div className="App">
//       <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} />
//       <h1>Welcome to Strongest Link</h1>
//       <hr />
//       <Routes>
//         <Route path="/" element={<LandingPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user}/>}>
//         <Route path="register" element={<RegisterForm />}/>
//         <Route path="login" element={<LoginForm setIsLoggedIn={setIsLoggedIn}/>}/>
//         </Route>
//         <Route exact path = "/my-posts/" element = {<MyPostsPage/> }/>
//         <Route exact path = "/posts" element = {<AllPostsPage/> }/>
//         <Route exact path = "/posts/:postID" element = {<PostPage/>}/>
//         <Route exact path = "/map" element = {<MapPage/> }/>
//         {/* leaderboard on gym page */}
//         <Route exact path = "/gym" element = {<GymPage/> }/>
//         <Route exact path = "/workouts" element = {<WorkoutPage/> }/>



//       </Routes>
//     </div>
//   );
// }

// export default App;
