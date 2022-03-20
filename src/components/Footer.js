import React from 'react';
import logo from '../Images/logo1.jpeg';
import  { useState } from 'react';
import { buttonstyle1,ipstyle, labelstyle, containerstyle, enquirybutton } from './styles/styles.js'
import emailjs from 'emailjs-com';

export default function Footer() {
  const [fullname, setfullname] = useState('');
    const [contact, setcontact] = useState('');
    const [email, setemail] = useState('');

    const onchange = (event) => {
        if (event.target.id === "First_name") { setfullname(event.target.value) }
        if (event.target.id === "Contact_no") { setcontact(event.target.value) }
        if (event.target.id === "emailno") { setemail(event.target.value) }
    }
    
    const onHandleClick = (e) => {
        
        if (fullname.length < 1) { alert("Please enter Full Name"); }
        else if (contact.length !== 10) { alert("Contact no. should be 10 chars"); }
        else if (contact.length < 1) { alert("Please enter Contact") }
        else if (email.length < 1) { alert("Please enter Email") }
        else {
            e.preventDefault();
            emailjs.send("service_dagk9cy","template_p9sddjq",{
                First_Name:fullname,
                emailno: email,
                Contact_no: contact,
                reply_to: "advani.dhiraj1991@gmail.com",
                },"F7Q2WU5KgIwX7gSWx").then((result) => {
                    alert("Message Sent, We will get back to you shortly", result.text);
                    },
                    (error) => {
                    alert("An error occurred, Please try again", error.text);
                    });
        }
    }

  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top border-5">
    <div className='container'>
    
    <div className="row">
      <div className="col">
        <img className="mb-2" src={logo} alt="" width="35" height="35"/><p className='p9'>WebN.com</p>
        <small className="d-block mb-3 text-muted">© 2021–2022</small>
      </div>

      <div className="col">
        <button type="button" className="btn btn-dark" disabled style={enquirybutton}>For Enquiry</button>
        
        <form className='form' >
        <div className='row' >
                    <label htmlfor="First_name" className="col-form-label " style={labelstyle}><p className='p9' >Full Name :</p></label>
                    <input type="Text" className="form-control" id="First_name" style={ipstyle} value={fullname} onChange={onchange}
                        placeholder="Full Name" required />
                </div>
                <br></br>
                <div className='row'>
                    <label htmlfor="Contact_no" className=" col-form-label" style={labelstyle}><p className='p9' >Contact No. :</p></label>
                    <input type="Text" className="form-control" id="Contact_no" style={ipstyle} value={contact} onChange={onchange}
                        placeholder="Contact No" required />
                </div>
                <br></br>
                <div className='row'>
                    <label htmlfor="emailno" className=" col-form-label" style={labelstyle}><p className='p9' >Email :</p></label>
                    <input type="email" className="form-control" id="emailno" style={ipstyle} value={email} onChange={onchange}
                        placeholder="Email ID" required />
                </div>
                <br></br><br></br>
                <div >
                    <button type="button" className="btn btn-primary btn-lg" style={buttonstyle1} onClick={onHandleClick} >Send enquiry</button>
                </div>
                <br></br>
                <br></br>
        </form>
      </div>
      
    </div>
  
  </div>
  </footer>
  )
}
