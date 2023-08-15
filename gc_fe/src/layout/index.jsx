import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import * as S from './style';

export default function MainWrapper() {
  return (
    <>
      <Header />
      <S.Section>
        <Outlet />
      </S.Section>
    </>
  )
}