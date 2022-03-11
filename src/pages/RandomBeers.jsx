import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

function RandomBeers() {

    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(()=>{
      getRandomBeer()
    },[])

    const getRandomBeer = async()=>{ 
      try{
    const random = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        console.log(random.data)
        setRandomBeer(random.data)
      
      }catch{

      }
  }

  if(!randomBeer){
    return <div>...Loading</div>
  }

  return (
    <div>
        <div className='Homebar'>
        <Link to="/">Home</Link>
        </div>
    <h1>RandomBeers</h1>
    <div>
    <img width="80px" src={randomBeer.image_url} alt="" />
    <h2>{randomBeer.name}</h2>
    <h4>{randomBeer.tagline}</h4>
    <h2>{randomBeer.attenuation_level}</h2>
    <h4>{randomBeer.first_brewed}</h4>
    <p>{randomBeer.description}</p>
    <p>{randomBeer.contributed_by}</p>
    </div>
    </div>
  )
}

export default RandomBeers