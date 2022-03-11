import axios from 'axios'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NewBeer() {
  
  const [name, setName] = useState()
  const [tagline, setTagline] = useState()
  const [description, setDescription] = useState()
  const [first_brewed, setFirst_brewed ] = useState()
  const [brewers_tips, setBrewers_tips ] = useState()
  const [attenuation_level, setAttenuation_level ] = useState()
  const [contributed_by, setContributed_by ] = useState()
  
  const navigate = useNavigate

  const handleSubmit = async (event) =>{
    event.preventDefault()
    const newBeer = {name,tagline,description,first_brewed, brewers_tips,attenuation_level,contributed_by}
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new",newBeer)
    navigate("/beers")
  }

  return (
      
    <div>
        <div className='Homebar'>
            <Link to="/">Home</Link>
        </div>
        <h1>Add you favorite beer</h1>

      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input 
      type="text"
      name='name' 
      value={name} 
      onChange={(e) =>setName(e.target.value)}
      />
      <label htmlFor="tagline">Tagline: </label>
            <input 
      type="text"
      name='tagline' 
      value={tagline} 
      onChange={(e) =>setTagline(e.target.value)}
      />
      <label htmlFor="description">Description: </label>
            <input 
      type="text"
      name='description ' 
      value={description} 
      onChange={(e) =>setDescription(e.target.value)}
      />
      <label htmlFor="first_brewed ">Fist brewed: </label>
            <input 
      type="text"
      name='first_brewed ' 
      value={first_brewed} 
      onChange={(e) =>setFirst_brewed(e.target.value)}
      />
      <label htmlFor="brewers_tips ">Brewers tips: </label>
            <input 
      type="text"
      name='brewers_tips ' 
      value={brewers_tips} 
      onChange={(e) =>setBrewers_tips(e.target.value)}
      />
      <label htmlFor="attenuation_level ">Attenuation level: </label>
            <input 
      type="number"
      name='attenuation_level ' 
      value={attenuation_level} 
      onChange={(e) =>setAttenuation_level(e.target.value)}
      />
      <label htmlFor="contributed_by ">Create by: </label>
            <input 
      type="text"
      name='contributed_by ' 
      value={contributed_by} 
      onChange={(e) =>setContributed_by(e.target.value)}
      />
      
    <button>Add new Beer</button>
      </form>


    <h1>NewBeer</h1>
    
    
    </div>
  )
}

export default NewBeer