import React from 'react';
import Slider from '../inc/Slider';
import VMC from '../inc/VMC';

function AboutUs(){

    return (

        <div>

        <Slider/>

        <section className = "section">
            <div className = "container">
                <div className ="row">
                    <div className ="col-md-12 text-center">
                        <h3 className ="main-heading">
                            Our Company
                        </h3>
                        <div className="underline mx-auto">

                        </div>
                        <p>
                           Vamos is a Ride-Sharing Application. It is Cheap, Fun and Convenient! 
                        </p>
                        
                    </div>

                </div>

            </div>
            
        </section>
        <VMC/>
        </div>
    );

}

export default AboutUs;