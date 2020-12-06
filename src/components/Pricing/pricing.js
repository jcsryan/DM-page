import React from "react";

function Pricing() {
    return(
        <div id="pricingid" className="pricing">
        <div>
            <div>
                <h1>Pricing </h1> 
            </div>
            <div className="textmargin">
                <p>We take into account a number of variables that impact the price. Game type, game length, number of 
                    players, even new vs continuing campaigns! Rest assured though, a night of magic and intrigue with
                    your friends, family, or coworkers wont break the bank. In fact a night spent with us is comprable
                    to what each of you would spend on a movie and some snacks! We also take into account that new players
                    don't know how to create a character and need some time to understand the rules which is why we have
                    a totally free pre-game session to explain the rules and help you turn your character idea into a fully realized
                    adventurer!
                </p>
            </div>
            <div className="textmargin">
                <ul>
                    <li>Single session for new players (four to six): 25 dollars per person for a 4 hour adventure!</li>
                    <li>Campaign for new players (four to six): 25 dollars per person per session, 100$ flat fee after five sessions!</li>
                    <li>Solo or duo: Want to try out the game before inviting your friends? 20$ per hour!</li>
                    <li>Full day campaign: For those who want a longer andventure every hour over the original four will be an extra 15$.</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Pricing;