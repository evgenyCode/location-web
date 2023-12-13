import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import cookie from 'js-cookie';
import styles from './styles.module.css';
import PageTemplate from '@/components/PageTemplates/PageTemplate';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';

type LocationType = {
  _id: string;
  latitude: number;
  longitude: number;
  location_photo_url: string;
  title: string;
  description: string;
};

const Location = () => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [isShowConfirmModal, setConfirmModal] = useState(false);
  const router = useRouter();

  const fetchLocation = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/locations/${id}`);
      setLocation(response.data.location);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  useEffect(() => {
    router.query.id && fetchLocation(router.query.id as string);
  }, [router.query.id]);

  const onDeleteLocation = async () => {
    try {
      const headers = {
        authorization: cookie.get('jwt_token'),
      };

      if (location) {
        await axios.delete(`http://localhost:3001/locations/${location._id}`, { headers });
        router.push('/');
        // Po sėkmingo ištrinimo galite nukreipti vartotoją į kitą puslapį, pvz.: router.push('/kitaspuslapis');
      }
    } catch (error) {
      console.error('Error deleting location:', error);
    }
  };

  return (
    <PageTemplate>
      <>
      {location && (
        <div className={styles.location}>
          <div className={styles.title}>{location.title}</div>
          <div>{location.description}</div>
          <div>
            <span className={styles.span}>Platuma: </span>
            {location.latitude}
          </div>
          <div>
            <span className={styles.span}>Ilguma: </span>
            {location.longitude}
          </div>
          <img className={styles.photo} src={location.location_photo_url} alt="Location" />
          <Button className={styles.deleteButton} text="Delete location" onClick={()=>setConfirmModal(true)} isLoading={false} />
        </div>
      )}
      {isShowConfirmModal && <Modal onConfirm={onDeleteLocation} onCancel={()=>setConfirmModal(false)}/>}
      </>
    </PageTemplate>
  );
};

export default Location;
