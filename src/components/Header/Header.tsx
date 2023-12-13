import React, { useEffect, useState } from 'react'
import coockie from 'js-cookie'
import styles from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {


  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(()=>{
    const savedCookie = coockie.get('jwt_token');

    if(savedCookie){

      setUserLoggedIn(true)

    }



  }, [])

  const router = useRouter();


const onLogout = ()=>{
  coockie.remove('jwt_token');
  router.push('/login');
}

  return (
    <div className={styles.wrapper}>
     <Link href="/">
     <div className={styles.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Coat_of_arms_of_%C5%A0iauliai_Grand_%28Lithuania%29.png"
           alt="Logo" className={styles.logoImage} />
        </div>
      </Link>
      <nav className={styles.navbar}>
      <li>
        <Link className={styles.link} href="login">Login</Link>
        </li>
        <li>
        <Link className={styles.link} href="add-location">Add Location</Link>
        </li>
        { isUserLoggedIn &&
        <li> 
        <button onClick={onLogout}>Log out</button>
        </li>
} 
      </nav>
    </div>
  )
}

export default Header
