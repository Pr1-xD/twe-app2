import React from 'react';
import img from './landing.png'

function Landing(props) {
    return (
        <div>
            <div >
             
            <div class="row">
                <div class="col-6">
                <br/>   
                <br/> 
                <br/>   
                <br/> 
                <br/>   
                <br/> 
                <br/>   
                <br/>
                <div className="p-5 ml-3">
                <h1 class="display-1 mt-5 text-start pf">The Weekly Edge</h1>
                <p class="text-start ops fs-5 text-muted fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio accumsan aenean urna nunc amet adipiscing.</p>
                </div> 
                </div>
                <div class="col-6">
                <img src={img} class="img-fluid mx-auto d-block" alt="..."/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Landing;