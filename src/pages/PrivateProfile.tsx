import { useEffect, useState } from 'react';
import { selectProfile } from '../features/profileSlice';
import Loader from '../components/Loader';
import PageLayout from '../layouts/templates/PageLayout';
import { useAppSelector } from '../hooks/reduxHooks';

const PivateProfile = () => {
  const profile = useAppSelector(selectProfile);

  const [imgSrc, setImgSrc] = useState<string>('');

  useEffect(() => {
    if (profile) {
      setImgSrc(
        `${import.meta.env.VITE_API_URL}/uploads/profilePicture${
          profile.profilePicture
        }`
      );
    }
  }, [profile]);

  return (
    <PageLayout mainClassName='profile'>
      {profile ? (
        <section className='profile'>
          <img
            src={imgSrc}
            alt={`Photo de profil de ${profile.firstName} ${profile.lastName}`}
            className='profile__picture'
          />
          <div className='profile__identity'>
            <h1>
              {profile.firstName} {profile.lastName}
            </h1>
            <p className='text'>{profile.city} </p>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </PageLayout>
  );
};

export default PivateProfile;
