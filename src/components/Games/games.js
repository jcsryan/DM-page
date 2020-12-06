import React from "react";
import Strahd from '../assets/strahd.jpg'
import Descent from '../assets/avernus.png'
import Abyss from '../assets/abyss.png'
import Storm from '../assets/stormking.jpg'
import Ghosts from '../assets/ghosts.jpg'


function Games() {
    return(
        <div id="gamesid" className="games">
            <div className="games-info">
                <h3 id="about-name">What we offer!</h3>
                <hr></hr>
                <p>We offer Dungeons and Dragons 5e. It is the newest and most popular format for D&D. </p>
                <ul>
                    <li><span className="spantitle">Descent into Avernus</span></li>
                    <li>Venture into the nine hells and fight for the soul of Baldur's Gate in Avernus.</li>
                    <li>Battle devils and demons in the neverending Blood War!</li>
                    <li>Rise up against the leader of Avernus, Zariel and turn the tide.</li>
                    <img src={Descent} className="gametype" alt="webpage screenshot"></img> 
                    <br></br>
                    <br></br>
                    <li><span className="spantitle">Out of the Abyss </span></li>
                    <li>Below the surface of Faerun lies the twisted, maddening black of the Underdark.</li>
                    <li>Venture deep below the world to put a stop to the chaotic evils of the Abyss.</li>
                    <img src={Abyss} className="gametype" alt="webpage screenshot"></img>
                    <br></br>
                    <br></br> 
                    <li><span className="spantitle">Curse of Strahd </span></li>
                    <li>You are invited for dinner at Ravenloft, Count Strahd von Zarovich's castle.</li>
                    <li>Please mind your manners, and mind your necks, else you might end up on the menu.</li>
                    <li>Survive, discover, and destroy the vampiric menace of Barovia!</li>
                    <img src={Strahd} className="gametype" alt="webpage screenshot"></img> 
                    <br></br>
                    <br></br>
                    <li><span className="spantitle">Storm King's Thunder</span></li>
                    <li>The giants have begun their assault on the world!</li>
                    <li>Rise up to face the hulking menace before the people of the Sword Coast are destroyed!</li>
                    <li>Discover the giant's secret magics and use it against them before it's too late!</li>
                    <img src={Storm} className="gametype" alt="webpage screenshot"></img> 
                    <br></br>
                    <br></br>
                    <li><span className="spantitle">Ghosts of Saltmarsh </span></li>
                    <li>Smuggling, piracy, slave trades! Put an end to the crimes off the Sword Coast!</li>
                    <li>Though, always keep an eye on the horizon for the leviathans which live in the deep.</li>
                    <img src={Ghosts} className="gametype" alt="webpage screenshot"></img> 
                    <br></br>
                    <br></br>
                    <li><span className="spantitle">We can also homebrew a world together!</span></li>
                    <li>Do you have a world in your head? Do you imagine your own epic adventures?</li>
                    <li> We will work together to bring your universe to your table!</li>
                </ul>
                <div class="game-offer">

                </div>           

 
            </div>
            <p className="copyright">*All trademarks and intellectual property belonging to Wizards of the Coast have been legally purchased. We do not sell or distrubute WoTC properties, we only run games.*</p>
        </div>
    )
}

export default Games;