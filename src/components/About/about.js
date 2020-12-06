import React from "react";
import Gametime from "../assets/gametime.jpg";

function About() {
    return(
        <div id="aboutid" className="about">
            
            <div className="about-info">
                <h1 id="about-name">What is Dungeons and Dragons?</h1>
                <div className="textmargin"> <p>
    Dungeons and Dragons is a hobby in its golden age. There has never been a better time to gather with your friends and lose yourself
    in an adventure in the worlds of Faerun, Greyhawk, Dragonlance, and countless others. If you have never played it might just look like
    a group of people sitting around a table yelling and throwing dice at one another but it is so much more. Your campaign, your story, is a
    living thing that you craft together with your dungeon master and your friends. The world lives and breathes and changes in grand and subtle
    ways around you based on how you decide to interact with it and its many peoples. Battles rage and empires rise and fall and your party tips
    the scales of these conflicts. Mad necromancers enslave towns and use the inhabitants as test subjects in twisted arcane experiments, and 
    you and your friends are their only hope. Legions of dark abominations flood out of the deep caves of the world, intent on the destruction 
    and enslavement of those who live on the surface, and you have been hired to stem the tide. 
    </p></div>
        <div className="gamephoto">
        <img src={Gametime} className="gametime" alt="webpage screenshot"></img>
        </div>
 <div>
 <p>
     Pick your class, your skills, your spells and take up arms against the innumerable foes you are about to face! 
 </p>
 <div className="textmargin">
 <ul>
     <li><span className="spantitle">Barbarian</span>: A brutal warrior that uses their rage and strength to overpower any enemy!</li>
     <li><span className="spantitle">Bard</span>: A suave, clever magician whos power echoes in the music of the world inspiring and strengthening your friends!</li>
     <li><span className="spantitle">Cleric</span>: A champion of one of the gods of the pantheon who calls forth a higher power in their service!</li>
     <li><span className="spantitle">Druid</span>: A walker of deep nature who summons their power from the natural world itself!</li>
     <li><span className="spantitle">Fighter</span>: A master of martial combat you fight on the front lines with an assortment of weapons and armor!</li>
     <li><span className="spantitle">Monk</span>: A practitioner of martial arts you focus the power of your body into fluid defense and devastating attacks!</li>
     <li><span className="spantitle">Paladin</span>: A holy crusader, you bind your life to a purpose and command stunning physical and magical attacks in service of that oath.</li>
     <li><span className="spantitle">Ranger</span>: A steady hand and knowledge of the natural world make you a fierce foe!</li>
     <li><span className="spantitle">Rogue</span>: Through stealth and quick thinking you deliver vicious blows to unsuspecting enemies!</li>
     <li><span className="spantitle">Sorcerer</span>: Your blood sings with power, user it to rain down devastating magic on those who would do your friends harm!</li>
     <li><span className="spantitle">Warlock</span>: You sought magic at any cost, and you found it! Incredible dark magics are yours to command, but at what cost?</li>
     <li><span className="spantitle">Wizard</span>: You have spent your life learning spells though study and application, that determination makes you a force to be reckoned with!</li>
    
 </ul>
 </div>
 </div>
 <hr></hr>

 <div class="superlatives">
     <div>
         <h1>What the players are saying!</h1>
         <div class="quotes">
             <p>"This DM has is a natural story teller. He keeps your attention with fantastic role play challenging combat encounters and clever puzzles. 
                You will be engaged from start to finish with each session."</p>
            <p>"This guy tells a great story and keeps every player engaged! If you're looking for a full fledged epic tale, or a deep dark dungeon dive, this is your guy! 
                Great NPCs, memorable rivals, and locations that feel alive!"</p>
            <p>"Personable, clever and quick-witted, this DM paints pictures in your mind to create an immersive world with vivid characters everywhere you look. 
                The exceptional storytelling, attention to detail and entertaining role play of this DM will make your sessions feel alive in ways they never have before. 
                But beware! Once you’ve stepped into one of this DM’s worlds, you won’t want to come back to yours!"</p>
            <p>"A fantastic, adaptive story teller! You will be swept up in the content before you know what's happened to you."</p>
         </div>
     </div>
 </div>
 </div>
 </div>
    )
}

export default About;