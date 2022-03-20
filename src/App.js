import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import sample from './Videos/video2.mp4';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import working_image from './Images/working_image.jpg'
import Body3 from './components/Body3';

function App() {
  return (
    <div >
      <div className='navbar_body'>
        <Header />
      </div>
      <div >
        <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
        <Body />
      </div>
      
      <div className='body1' >
        <p>Services</p>
      </div>

      <div className='body2' >
        <div className='animation1' >
          <Body1 />
        </div>
      </div>
      
      <img className='img3' src={working_image} alt="blank"></img>
      <div className='body3' >
        <Body2/>

      </div>

      <div className='body4' >
        <p className='p7'>Some of the projects delivered by us</p>
      </div>

      <div className='body5'>
        <Body3 />
      </div>

      <div className='body6'>
        <Footer />
      </div>

      
    </div>
  );
}

export default App;
