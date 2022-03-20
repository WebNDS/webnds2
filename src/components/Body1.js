import React from 'react'
import body_image from '../Images/team_body2.jpeg'
import {margintop} from './styles/styles.js'

export default function Body1() {
  return (
    <div className='container-new-body1'>
        <div className='row'>
          <div className='col' style={margintop}>
            <img src={body_image} className="img2" alt="Blank"></img>
          </div>
          <div className='col'>
           
            <p className='p3'> Websites starting @4500 rs. </p>
            <ul>
              <li className='l1'><p className='p4'> Get 1 free domain </p></li>
              <li className='l1'><p className='p4'> Personalised Service </p></li>
              <li className='l1'><p className='p4'> Get an enquiry option with page </p></li>
              <li className='l1'><p className='p4'> Website Promotion </p></li>
              <li className='l1'><p className='p4'> 8GB worth storage </p></li>
              <li className='l1'><p className='p4'> High Speed Bandwidth </p></li>
            </ul>
          </div>
      </div>
    </div>
  )
}
