import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function RandomList(){


  function BeerDetails(props){

    const [beerState, setBeerState] = useState([])
    const { beerId } = props.match.params

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(res=>{
            const beer = res.data
            setBeerState(beer)
        })
    }, [beerId])

    return(
        <div>
        <Header/>
        <img src= {`${beerState.image_url}`} alt='a beer'/>
        <h1>{beerState.name}</h1>
        <p>{beerState.tagline}</p>
        <p>{beerState.first_brewed}</p>
        <p>{beerState.attenuation_level}</p>
        <p>{beerState.description}</p>
        <p>{beerState.contributed_by}</p>
        <Link to={'/beers'}>Back to beers</Link>
      </div>
    )
}