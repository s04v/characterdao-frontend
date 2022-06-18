import React from 'react';
// import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import Edit from "./pages/Edit";
// import Character from "./pages/Character";
// import Directory from "./pages/Directory";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CheckAuth from "./helpers/CheckAuth";


const Home = React.lazy(() => import('./pages/Home'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Edit = React.lazy(() => import('./pages/Edit'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Character = React.lazy(() => import('./pages/Character'));
const Directory = React.lazy(() => import ('./pages/Directory'));



function App() {
  return (
    <div className="App">
        <React.Suspense >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/create' element={<CheckAuth><Edit /></CheckAuth>} />
                    <Route path='/edit/:id' element={<CheckAuth><Edit edit/></CheckAuth>} />
                    <Route path='/profile' element={<CheckAuth><Profile /></CheckAuth>} />
                    <Route path='/directory' element={<Directory />} />
                    <Route path='/character/:id' element={<Character />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    </div>
  );
}

export default App;
