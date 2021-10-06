import React from 'react';
import { Newspaper,Film,VectorPen } from 'react-bootstrap-icons';

function Feature() {
    return (
        <div className="text-center">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="w-50 mx-auto">
            <h2 className="fs-4 pf">Featuring</h2>
            <h2 className="fs-1 pf">In Every Edition</h2>
            <h2 className="fs-4 pf">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio accumsan aenean urna nunc amet adipiscing.</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <div class="container w-75">
                <div class="row">
                
                <div class="col ">
                    <div class="row">
                    <div class="col"><Newspaper color="royalblue" size={70} />
                    <br/><br/><br/>
                    <VectorPen color="royalblue" size={70} />
                    <br/><br/><br/>
                    <VectorPen color="royalblue" size={70} /></div>
                    <div class="col">
                        <h3 className="text-start">News</h3>
                        <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio accumsan aenean urna nunc amet adipiscing.</p>
                        </div>
                    </div>    
                </div>
                <div class="col">
                <div class="row">
                    <div class="col"><Film color="royalblue" size={70} />
                    <br/><br/><br/>
                    <VectorPen color="royalblue" size={70} /><br/><br/><br/>
                    <VectorPen color="royalblue" size={70} /></div>
                    <div class="col">B</div>
                    </div>
                </div>
                

                </div>
            </div>


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Feature;