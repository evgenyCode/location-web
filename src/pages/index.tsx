import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Locations from '../components/Locations/Locations'
import PageTemplate from '@/components/PageTemplates/PageTemplate'


const index = () => {


  const [locations, setLocations] = useState<Array<any> | null>(null);

  const fetchLocations = async ()=>{
    const locations = await axios.get("http://localhost:3001/locations/");
    console.log(locations.data.locations);
    
    setLocations(locations.data.locations)
    
  }

  useEffect(()=>{fetchLocations()}, []);

  return (
    <>
     <PageTemplate>
      <Locations  locations={locations}/>
      </PageTemplate>
    </>
  )
}

export default index