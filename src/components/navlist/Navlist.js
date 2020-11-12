import React from "react";

function Navlist(props) {
    const tabs = ['About','Games','Pricing','Get in Touch', 'Who we are']
    return(
        <div>
        <ul className='navlist' >
            {tabs.map(tab => (
                <li className="nav-list" key={tab}>
                    <button id="nav-list-a" href={'#' + tab}
                    onClick={()=> props.handlePageChange(tab)}
                    className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                    }
                    >
                      {tab}
                    </button>
                </li>
            ))}
        </ul>
        </div>

    )
}

export default Navlist;