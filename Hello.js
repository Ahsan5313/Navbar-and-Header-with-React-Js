// import { useState } from 'react'
import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'




class Hello extends Component {

  render() {

    return (
      <div>
            
      <nav class="navbar navbar-expand-lg ">
        <div className='container'>
        <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ml-auto " id="navbarNav">
        <ul class=" navbar-nav m-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
        </div>
    </nav>



      </div>
    )
  }
}

export default Hello;


  // function Hello(){

  //   const [count, countUpdate] = useState(0)


  // return(

  //   <div>
      
  //     <br></br>
  //     <br></br>
  //     <br></br>

  //      <h2>Clicking Me {count} </h2>
  //      <button className='btn btn-danger' onClick={() => {countUpdate(count + 1)}}>Click Me</button>

  // </div>

  // )      
  // }

  // export default Hello;


