import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/loginPage/index'
import LecturePage from './pages/lecturePage/index';
import MainPage from './pages/mainPage/index';
import MyPage from './pages/myPage/index';
import SettingPage from './pages/settingPage/index';
import RegisterPage from './pages/registerPage/index';
import MainWrapper from './layout/index';
import PostingPage from './pages/postingPage/index';
export default function Router () {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route element={<MainWrapper />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/lecture/:postId' element={<LecturePage />} />
        <Route path='/setting' element={<SettingPage />} />
        <Route path='/my' element={<MyPage />} />
        <Route path='/posting' element={<PostingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}