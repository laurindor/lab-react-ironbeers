import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from './Header';

export default function BeerList(){

    const [beerListState, setBeerListState]= useState([])

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res => {
            console.log('Axios full respone object', res)
            const listOfAllbeers = res.data
            setBeerListState(listOfAllbeers)
            }))
        .catch(err=>console.log(err))
    }, [])

return (
        <div>
        <Header/>
<div>
        <div style={{width: '60%', float:"left"}}>
          { beerListState.map( beer => {
            return (
              <div key={beer._id}>
              <img src= {`${beer.image_url}`}
               alt='some beer'/>
                <Link to={`/beers/${beer._id}`}>
                  <h2>{beer.name}</h2>
                </Link>
                <h3>{beer.tagline}</h3>
                <h3>created by {beer.name}</h3>
                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
              </div>
            )})
          }
        </div>
      </div>


        </div>


)



}