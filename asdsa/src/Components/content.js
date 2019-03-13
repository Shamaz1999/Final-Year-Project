import React, { Component } from 'react'; 
import "./../bootstrap/bootstrapC.css"
import $ from 'jquery'
import {Link} from 'react-router-dom'

class Content extends Component {    
   
    render(){
        let im = {
            padding: "40px"
        }
        let a ={
            color: "white",
            textDecoration: "none!important",
          }
            
return(

    <div className="App" style={im}>
    <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
</div>



);

}
}
export default Content