import React from 'react'

export default function RandomList(){


    const [listState, setListState]= useState([])

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res => {
            const listOfAllProjects = res.data
            setListState(listOfAllProjects)
            }))
        .catch(err=>console.log(err))
    }, [])

    return(
      <div>
        <div style={{width: '60%', float:"left"}}>
          { listState.map( project => {
            return (
              <div key={project._id}>
                <Link to={`/projects/${project._id}`}>
                  <h3>{project.title}</h3>
                </Link>
                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
              </div>
            )})
          }
        </div>
      </div>
    )
}
}