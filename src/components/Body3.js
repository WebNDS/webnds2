import React from 'react';
import elon from '../Images/elon.jpeg';
import beckham from '../Images/Beckham.jpg';
import {cardstyle,padding_top} from './styles/styles.js';


export default function Body3() {
  return (
    <div className='container-new-cards'>
      <div className='row'>
        <div className='col' style={padding_top}>
          
        <div className="card" style={cardstyle}>
            <img src={elon} className="card-img-top imgcard size" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Property Website</h5>
                <p className="card-text">Below Website provides us property listing in your area. More Content --Area.</p>
                <a className="a_bottom" href="https://www.republicworld.com/business-news/international-business/tesla-ceo-elon-musk-to-step-down-from-endeavor-board-of-directors-reports-articleshow.html" className="btn btn-primary">Go to website</a>
              </div>
          </div>

        </div>
        <div className='col' style={padding_top}>
          
        <div className="card" style={cardstyle}>
            <img src={beckham } className="card-img-top imgcard size" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Title2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://en.wikipedia.org/wiki/David_Beckham" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>

        </div>
        <div className='col' style={padding_top}>
          
        <div className="card" style={cardstyle}>
            <img src={elon} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Title3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}
