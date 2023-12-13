import React from 'react'
import styles from './Location.module.css'
import Link from 'next/link'

type LocationType = {
    _id: string,
latitude: number,
longitude: number,
location_photo_url: string,
title:string,
description: string

}

type LocationComponentType = {
    location: LocationType
}

const Location: React.FC <LocationComponentType> = ({location}) => {
  
    
  return (
    <Link className={styles.link} href={`/location/${location._id}`}>
    <div className={styles.wrapper}>
        <img className={styles.photo} src={location.location_photo_url}/>
        <div className={styles.cardTextContent}>
        <h2>{location.title}</h2>
        <p>{location.description}</p> 
        <h3>Koordinates:</h3>
        <div><span className={styles.span}>Platuma: </span>{location.latitude}</div> 
        <div><span className={styles.span}>Ilguma: </span> {location.longitude}</div> </div>
    </div>
    </Link>
  )
}

export default Location
