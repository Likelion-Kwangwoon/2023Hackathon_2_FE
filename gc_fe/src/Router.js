import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/loginPage/loginPage';
import LecturePage from './pages/lecturePage/lecturePage';
import MainPage from './pages/mainPage/mainPage';
import MyPage from './pages/myPage/myPage';
import SettingPage from './pages/settingPage/settingPage';
import RegisterPage from './pages/registerPage/registerPage';
import Header from './components/Header/header';
import PostingPage from './pages/postingPage/postingPage';
export default function Router () {
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route element={<Header />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/lecture' element={<LecturePage />} />
        <Route path='/setting' element={<SettingPage />} />
        <Route path='/my' element={<MyPage />} />
        <Route path='/posting' element={<PostingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}