import React, { useState } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import styles from './styles.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useRouter } from 'next/router';
import Button from '@/components/Button/Button';
import PageTemplate from '@/components/PageTemplates/PageTemplate';

const AddLocation = () => {
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [location_photo_url, setLocation_photo_url] = useState('');

  const router = useRouter();

  const onAddLocation = async () => {
    try {
      // Taisyta klaida - naudojama teisinga sintaksė reguliavimo išraiškai
      const textPattern = /.{5,}/;

      // Patikrinimas, ar pavadinimas atitinka reikalavimus
      if (!textPattern.test(title)) {
        return;
      }

      setLoading(true);
      const body = {
        title: title,
        description: description,
        latitude: latitude,
        longitude: longitude,
        location_photo_url: location_photo_url,
      };

      const headers = {
        authorization: cookie.get('jwt_token'),
      };

      const response = await axios.post(`${process.env.SERVER_URL}/locations`, body, { headers });

      setLoading(false);

      if (response.status === 201) {
        router.push('/');
      }
    } catch (error) {
      // Išvedama klaida į konsolę
      console.error("Error adding location:", error);
      
      // Taisyta klaida - setLoading(false) vietoje setLoading(flase)
      setLoading(false);
    }
  };

  return (
    
      <PageTemplate>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Add Location</h1>
        <div className={styles.form}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Pavadinimas (mažiausiai 5 simboliai)'
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Aprašymas'
          />
          <input
            value={latitude}
            type="number"
            onChange={(e) => setLatitude(Number(e.target.value))}
            placeholder='Platuma'
          />
          <input
            value={longitude}
            type="number"
            onChange={(e) => setLongitude(Number(e.target.value))}
            placeholder='Ilguma'
          />
          <input
            value={location_photo_url}
            onChange={(e) => setLocation_photo_url(e.target.value)}
            placeholder='Nuotraukos URL'
          />
          {/* Įtraukiamas Button komponentas, jei jis sukurtas */}
          <Button text="Add location" onClick={onAddLocation} isLoading={isLoading} />
        </div>
      </div>
      </PageTemplate>
  
  );
};

export default AddLocation;
