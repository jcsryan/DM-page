import React from "react";
import Scene1 from '../assets/cody-clark-scene.jpg';
import Dav from '../assets/Dav_Color.png'
import Golem from '../assets/Golem copy.png'
import Murd from '../assets/Murd.png'
import Racer from '../assets/Racer.png'
import Racer2 from '../assets/Racer2.png'
import Rocky from '../assets/Rocky.png'
import Thaedris from '../assets/Thae_Color.png'
import Thortain from '../assets/Thorn_Color.png'
import Thortain2 from '../assets/Thortain.png'
import Zinkas from '../assets/Zinkas.png'

function Illustration(){
    return (
        
            <div className="row">
                <p>Here is a small sample of Cody's artwork.</p>
                <p>All commissions are per diem, please contact Cody directly for more information!</p>
                <div className="column">
                <img src={Murd} className="char" alt="webpage screenshot"></img> 
                <img src={Rocky} className="char" alt="webpage screenshot"></img> 
                </div>
                <div className="column">
                <img src={Dav} className="char" alt="webpage screenshot"></img> 
                <img src={Thaedris} className="char" alt="webpage screenshot"></img> 
                </div>
                <div className="column">
                <img src={Thortain} className="char" alt="webpage screenshot"></img> 
                <img src={Zinkas} className="char" alt="webpage screenshot"></img> 
                </div>
                <br></br>
                <div className="column">
                <img src={Racer} className="full" alt="webpage screenshot"></img> 
                <img src={Racer2} className="full" alt="webpage screenshot"></img> 
                </div>
                <div className="column">
                <img src={Scene1} className="scene" alt="webpage screenshot"></img> 
                <img src={Golem} className="scene" alt="webpage screenshot"></img> 
                </div>
            </div>
        
    )
};

export default Illustration;