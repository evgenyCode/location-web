import React from 'react'
import Location from '../Loaction/Location';
import styles from './Loacations.module.css'


type LocationsType = {
  locations: Array<any> | null;
}


const Locations: React.FC<LocationsType> = ({locations}) => {
  return (
    <div className={styles.wrapper}>

      {locations && locations.map((location)=>(<div key={location._id}><Location location={location}/></div>))}
      
    </div>
  )
}

export default Locations
