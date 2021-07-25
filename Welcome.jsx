import React, {Component} from 'react'
import './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'




class Welcome extends Component{


  render(){

    

    return( 
      <div >
    


     <footer id='fte'>

    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="footer1">
          <h2>About Us</h2>
          <p>Story</p>
          <p>Clients</p>
          <p>Testimonial</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer1">
          <h2>Services</h2>
          <p>Marketing</p>
          <p>Consulting</p>
          <p>Development</p>
          <p>Design</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer1">
          <h2>Contact Us</h2>
          <p>United State</p>
          <p>United Kingdom</p>
          <p>Australia</p>
          <p>Bangladesh</p>
          <p>Support</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer1">
          <h2>Social</h2>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Pentarest</p>
          </div>
        </div>
      </div>


      <div className="allRight">
     <p>All &copy;Right Reserver 2021 By Ahsan</p>
       </div>


    </div>


     </footer>

      </div>
    )
      
    
  }

}

export default Welcome;

