import React from 'react'

function Navbar({toggle}) {
    return (
        <div className='side-bar'>
            <ul className={toggle ? 'active' : ''}>
                <li><a href="#">item1</a></li>
                <li><a href="#">item2</a></li>
                <li><a href="#">item3</a></li>
                <li><a href="#">item4</a></li>
                <li><a href="#">item5</a></li>
                <li><a href="#">item6</a></li>
            </ul>
        </div>
    )
}

export default Navbar
