import { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {

    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className='flex'>
      <button onClick={() => {
        setshowModal(true);
      }} className='menu icon-menu flex' />

      {""}

      <div />



      <nav>
        {/* ul>(li>a)*5  */}
        <ul className='flex'>
          <li><a href="">Sobre</a></li>
          <li><a href="">Projetos</a></li>
          <li><a href="">Artigos</a></li>
          <li><a href="">Posts</a></li>
          <li><a href="">Vídeos</a></li>
        </ul>
      </nav>

      <button onClick={() => {
        //Send value to LS
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");

        //get value from LS
        setTheme(localStorage.getItem("currentMode"));
      }} className='mode flex'>
        {theme === "dark" ? (<span className='icon-moon-o'></span>) : (<span className='icon-sun'></span>)}
      </button>

      {showModal && (
        <div className='fixed'>
          <ul className="modal">
            <li>
              <button className='icon-close' onClick={() => {
                setshowModal(false);
              }} />
            </li>
            <li><a href="">Sobre</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Artigos</a></li>
            <li><a href="">Posts</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;



