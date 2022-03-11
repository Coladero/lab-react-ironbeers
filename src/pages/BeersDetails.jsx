import { Link, useNavigate, useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'

function BeersDetails() {

  const [beerDetail,setBeerDetail] = useState(null)
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    getDetails()
  })

  const getDetails = async () =>{
    try{
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    // console.log(detailsBeer.data)
    setBeerDetail(response.data)
  }catch{
    navigate("/error")
  }
  }
  if(!beerDetail){
    return <div>...Loading</div>
  }


  return (
    
    <div>
        <div className='Homebar'>
        <Link to="/">Home</Link>
        </div>
    
    <h1>Beers</h1>
    <img width="80px" src={beerDetail.image_url} alt="" />
    <h2>{beerDetail.name}</h2>
    <h4>{beerDetail.tagline}</h4>
    <h2>{beerDetail.attenuation_level}</h2>
    <h4>{beerDetail.first_brewed}</h4>
    <p>{beerDetail.description}</p>
    <p>{beerDetail.contributed_by}</p>
    </div>
  )
}

export default BeersDetails