import React from 'react'
import beers from '../assets/beers.png'
import newbeer from '../assets/new-beer.png'
import randombeer from '../assets/random-beer.png'
import {Link} from 'react-router-dom'


export default function HomePage (){

    return(
        <nav>
      <ul>
   
        <li>
        <img src={beers} alt="allbeers"/>
          <Link to="/beers">All Beers</Link>
        </li>
        <li>
        <img src= {randombeer} alt="random"/>
          <Link to="/random-beer">Random Beer</Link>
        </li>
        <li>
        <img src= {newbeer} alt="newbeer"/>
          <Link to="/new-beer">new Beer</Link>
        </li>
      </ul>
    </nav>


    )

    }
