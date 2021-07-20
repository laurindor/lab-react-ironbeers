import React from 'react'

import {Link} from 'react-router-dom'


export default function HomePage (){

    return(
        <nav>
      <ul>
   
        <li>
        <img src="/src/assets/beers.png" alt="allbeers"/>
          <Link to="/beers">All Beers</Link>
        </li>
        <li>
        <img src="../assets/random-beer.png" alt="random"/>
          <Link to="/random-beer">Random Beer</Link>
        </li>
        <li>
        <img src="../assets/new-beer.png" alt="newbeer"/>
          <Link to="/new-beer">new Beer</Link>
        </li>
      </ul>
    </nav>


    )

    }
