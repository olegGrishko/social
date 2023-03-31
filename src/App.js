import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {

    /*let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount:11}
    ]*/

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path='/profile' element={<Profile posts={props.posts} />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>

                       {/* <Route path='/dialogs' render={ () => <Dialogs/>}/>
                        <Route path='/profile' render={ () => <Profile/>}/>
                        <Route path='/news' render={ () => <News/>}/>
                        <Route path='/music' render={ () => <Music/>}/>
                        <Route path='/settings' render={ () => <Settings/>}/>*/}

                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
