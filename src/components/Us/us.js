import React from "react";
import JT from '../assets/jt.jpg'
import connor from '../assets/connor.jpg'

function Us() {
    return(
        <div className='container'>
        <div id="usid" className="us">
            <div class="John-Connor-Ryan">
                <div className="Portrait">
                </div>
                <img src={connor} alt="webpage screenshot" className="headshot"></img> 
                <h1>John Connor Ryan</h1>
                <p>I have been playing dungeons and dragons since I was in highschool. For nearly two decades I have walked the worlds
                    of Faerun and Greyhawk, I have played nearly every class for many dungeon masters. Seven years ago I moved and
                    couldn't find a game, so I made one and I fell in love with the other side of D&D. Being a dungeon master is my
                    favorite job, I have the opportunity to bring you, my players, into a fantastical world born out of my imagination. I 
                    get set a scene and a story and you get to provide the agency, it is communal storytelling in its purest form. I
                    invite anyone with even a passing curiosity about dungeons and dragons to give it a try, and hopefully, you will
                    love it as much as I do.
                </p>
            </div>
            <div class="JT">
                <div className="Portrait">
                <img src={JT} alt="webpage screenshot" className="headshot"></img>
                </div> 
                <h1>JT</h1>
                <p>I've been running 5th Edition Dungeons and Dragons games for 2+ years now. I thoroughly enjoy running 1st party
                    modules such as the Lost Mines of Phandelver, Storm Kings Thunder, and Ghost of Saltmarsh.
                    I would also like to venture out into running campaigns or one shots that are not necessarily tied to
                    Wizards of the Coasts home campaign setting (The Forgotten Realms.) I like complex combat scenarios that really make the players 
                    utilize all aspects of their party, survival is not promised.</p>
            </div>
            <div class="cody">
                <h1>Cody</h1>
            </div>
        </div>
        </div>
    )
}

export default Us;