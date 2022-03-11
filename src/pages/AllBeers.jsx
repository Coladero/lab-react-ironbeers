import axios from 'axios'
import{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function AllBeers() {

  const [allBeers, SetAllBeers] = useState(null)

  useEffect(()=>{
    getAllBeers()
  },[])

  const getAllBeers = async () =>{
    const beers = await axios.get("https://ih-beers-api2.herokuapp.com/beers/")
    // console.log(beers.data)
    SetAllBeers(beers.data)
  }
  if (!allBeers){
    return <div>...Loading</div>
  }
  return (
    <div>
        <div className='Homebar'>
          <Link to="/">Home</Link>
        </div>
    <h1>AllBeers</h1>

    {allBeers.map((eachBeer)=>{
      return(
        <div key={eachBeer._id}>
        <img width="50px" src={eachBeer.image_url} alt="" />
        <Link to={`/beer/${eachBeer._id}/details`}>{eachBeer.name}</Link>
        <h4>{eachBeer.tagline}</h4>
        <p><strong>Create by: </strong>{eachBeer.name}</p>

        </div>
      )
    })}
    
    </div>
  )
}

export default AllBeers