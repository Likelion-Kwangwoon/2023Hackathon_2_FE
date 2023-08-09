import { Outlet } from 'react-router-dom';
import Header
 from '../components/Header/header';
export default function MainWrapper() {
  return (
    <>
      <Header />
      <section style={{ marginTop: '100px' }}>
        <Outlet />
      </section>
    </>
  )
}