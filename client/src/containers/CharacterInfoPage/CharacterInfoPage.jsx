import { useParams } from 'react-router';
import React, { useState, useEffect, Suspense } from 'react';
import { getApiResource } from '../../utils/network';
import ErrorMessage from '../../components/ErrorMessage';
import CharacterInfo from '../../components/CharacterInfoPage/CharacterInfo/CharacterInfo';
import CharacterImage from '../../components/CharacterInfoPage/CharacterImage/CharacterImage';
import CharacterLinkBack from '../../components/CharacterInfoPage/CharacterLinkBack';
import UiLoading from '../../components/UI/UiLoading';
import { CHARACTERS, IMG_PORTRAIT_INCREDIBLE } from '../../constants/apiConstants';
import s from './CharacterInfoPage.module.css';

const CharacterComics = React.lazy(() => import('../../components/CharacterInfoPage/CharacterComics'));

const CharacterInfoPage = () => {
  const [errorApi, setErrorApi] = useState(false);
  const [characterInfo, setCharacterInfo] = useState(null);
  const [characterName, setCharacterName] = useState(null);
  const [characterImg, setCharacterImg] = useState(null);
  const [characterComics, setCharacterComics] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${CHARACTERS}/${id}`);
      if (res) {
        setErrorApi(false);
        setCharacterInfo(
          res.data.results[0].description === ''
            ? 'There is no information about this character...'
            : res.data.results[0].description,
        );
        setCharacterName(res.data.results[0].name);
        setCharacterImg(res.data.results[0].thumbnail.path + `/${IMG_PORTRAIT_INCREDIBLE}`);
        res.data.results[0].comics.available && setCharacterComics(res.data.results[0].comics.items);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      {errorApi ? (
        <ErrorMessage />
      ) : (
        <div className={s.page__wrapper}>
          <CharacterLinkBack />
          <div className={s.block__wrapper}>
            <span className={s.character__name}>{characterName}</span>
            <div className={s.container}>
              <CharacterImage characterImg={characterImg} characterName={characterName} />
              {characterInfo && <CharacterInfo characterInfo={characterInfo} />}
              {characterComics && (
                <Suspense fallback={<UiLoading />}>
                  <CharacterComics characterComics={characterComics} />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterInfoPage;
