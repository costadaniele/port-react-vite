// @ts-nocheck
import Hero from './components/hero/Hero'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'

function App() {

  // scroll sumir
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true)
      } else {
        setshowScrollBTN(false)
      }
    });
  }, []);

  // scroll sumir
  const [showScrollBTN, setshowScrollBTN] = useState(false);

  return (
    <div id="up" className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />

      <Contact />


      <div className='divider' />
      <Footer />

      <a style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }} href='#up'>
        <button className='scrollTop icon-keyboard_arrow_up'></button>
      </a>
    </div>
  )
}

export default App
