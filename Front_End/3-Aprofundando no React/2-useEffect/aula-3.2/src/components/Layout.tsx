import { FaGithub } from 'react-icons/fa'; // tive que instalar npm install react-icons
import './Layout.css';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="header">
        <div className="wrapper">
          <FaGithub />
          <h1>&lt;GITHUB USER SEARCH /&gt;</h1>
        </div>
      </header>

      {/* {children} */}
      <Outlet />

      <footer className="footer">
        © 2023 GitHub User Search
      </footer>

    </>
  );
}

export default Layout;
