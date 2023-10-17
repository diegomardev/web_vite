import { useState, React } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import confetti from 'canvas-confetti'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import confetti_logo from '../../assets/images/confetti.svg'
import { IconHeart, IconHeartFilled, IconBrush, IconHeartCode, IconGhost3, IconHome, IconStar } from '@tabler/icons-react';
import { isMobile } from "react-device-detect";

//import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


let x = 0;
let clickX = 0; // Coordenada x relativa al ancho de la ventana
let clickY = 0;// Coordenada y relativa al alto de la ventana
function fireworks(){
  var duration = 5 * 1000; //5 segundos de duracion
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.5), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.5, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}
function confetti_click(){
  confetti({
      origin: {
        x: clickX,
        y: clickY
      }
    });
}
// El evento se dispara cuando se mueve el ratón
document.addEventListener('mousemove', function(event) {
  // Obtener coordenadas del evento de clic
  clickX = event.clientX / window.innerWidth; // Coordenada x relativa al ancho de la ventana
  clickY = event.clientY / window.innerHeight; // Coordenada y relativa al alto de la ventana
});

function Home() {
  //const [variable, setVariable] = useState(valorInicial);
  const [count, setCount] = useState(0)//el 0 de usestate es el valor inicial
  const [confetti_count, setConfetti] = useState(0)
  const [active, setActive] = useState(false)
  //creamos otra variable con useState

  const handleClick = () => {
    x++;
    console.log(x);
  };
  function handleClick2() {
    //confetti();
    confetti_click();
    setConfetti((confetti_count) => confetti_count + 1);
  }
  function handleClickUrl(url) {
    //confetti();
    confetti_click();
    setConfetti((confetti_count) => confetti_count + 1);
    setTimeout(() => {
      if (url) {
        window.location.href = url;
      }
    }, 500); // 2000 milisegundos = 2 segundos
  }
  function handleClick3() {
    fireworks();
    setCount((count) => count + 1);
  }
  return (
    <div className="page-container">
      <div>
        <Navbar/>
      </div>
      {isMobile ? (
        <div>
          <h1 className="read-the-docs" style={{ display: 'flex', justifyContent: 'center'}}>
            &nbsp;
            Home 
            &nbsp;
            <a onClick={() => setActive(!active)} style={{ cursor: "pointer", marginTop: "-4px" }}>
              {active ? <IconHeart className="heartbeat" size={60} color='red' fill='red'/> : <IconStar className='shake-bottom' size={60} color='#888'/>}
            </a>
          </h1>
          <p>
            Hello 👋, I'am Diego, <br />
            Welcome to my website.
          </p>
          <div>
            <a onClick={handleClick2}>
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a onClick={handleClick2}>
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <div>
            <a onClick={handleClick2}>
              <img src={confetti_logo} className='logo_confetti'/>
            </a>
          </div>
          
          <div className="card">
            <div >
              <button className="botones button_normal" onClick={handleClick}>let: {x}</button>
              <button className="botones button_normal" onClick={handleClick2}>🎉 {confetti_count}</button>
              <button className="botones button_normal" onClick={handleClick3}>🎊 {count}</button>
            </div>
          </div>
          <footer className="read-the-docs"style={{ display: 'flex', justifyContent: 'center'}}>
            <IconGhost3/>&nbsp;
            Make with &nbsp; <IconHeartCode fill='red'/> &nbsp; by &nbsp;
            <a href="https://www.linkedin.com/in/diegomarbar/" target="_blank">diegomardev</a> &nbsp;
            <IconGhost3/>
          </footer>
        </div>
      ) : (
        <div>
          <h1 className="read-the-docs" style={{ display: 'flex', justifyContent: 'center'}}>
            &nbsp;
            Home 
            &nbsp;
            <a onClick={() => setActive(!active)} style={{ cursor: "pointer", marginTop: "-4px" }}>
              {active ? <IconHeart className="heartbeat" size={60} color='red' fill='red'/> : <IconStar className='shake-bottom' size={60} color='#888'/>}
            </a>
          </h1>
          <p className='presentation_impar olivetti'>
            Hello 👋, I'am Diego,
          </p>
          <p className='presentation_par'>
            You can see all the menu <br />
            and play the games and register.
          </p>
          <div style={{ marginTop: "200px" }}>
          <button className='home_big_button' onClick={() => handleClickUrl('games')}>
          🎮 GAMES 🎮
          </button>
          <button className='home_big_button' onClick={() => handleClickUrl('apps')}>
          🎊 APPS 🎊
          </button>
          <button className='home_big_button' onClick={() => handleClickUrl('contact')}>
          🎟️ CONTACT 🎟️
          </button>            
          <button className='home_big_button' onClick={() => handleClickUrl('login')}>
          💻 LOGIN 💻
          </button>
          </div>
          <footer className="read-the-docs footer_home"style={{ display: 'flex', justifyContent: 'center'}}>
            <IconGhost3/>&nbsp;
            Make with &nbsp; <IconHeartCode fill='red'/> &nbsp; by &nbsp;
            <a href="https://www.linkedin.com/in/diegomarbar/" target="_blank">diegomardev</a> &nbsp;
            <IconGhost3/>
          </footer>
        </div>
        )}
    </div>
  );
}

export default Home