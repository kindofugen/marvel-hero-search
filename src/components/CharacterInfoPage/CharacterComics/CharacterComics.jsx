import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getApiResource } from '../../../utils/network';
import { COMICS, IMG_PORTRAIT_UNCANNY } from '../../../constants/apiConstants';
import s from './CharacterComics.module.css';

const CharacterComics = ({ characterComics }) => {
  console.log(characterComics);
  const [comicsName, setComicsName] = useState(characterComics[0].name);
  const [comicsImage, setComicsImage] = useState(null);
  const [count, setCount] = useState(0);
  const comicsIDs = characterComics.map((comics) => {
    const uri = comics.resourceURI;
    const id = uri.slice(uri.lastIndexOf(`${COMICS}/`) + `${COMICS}/`.length);
    return id;
  });
  const [currentComics, setCurrentComics] = useState(comicsIDs[0]);

  const getResourse = async (resourse, id) => {
    const res = await getApiResource(`${resourse}/${id}`);
    console.log(res);
    if (res) {
      setComicsImage(res.data.results[0].images[0].path);
    } else {
      //setComicsImage(res.data.results[0].images[0].path);
    }
  };

  const handleGetNext = () => {
    if (count === comicsIDs.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setCurrentComics(count);
    setComicsName(characterComics[count === 0 ? count + 1 : count + 1].name);
    getResourse(COMICS, comicsIDs[count === 0 ? count + 1 : count + 1]);
  };

  useEffect(() => {
    getResourse(COMICS, currentComics);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img src={`${comicsImage}/${IMG_PORTRAIT_UNCANNY}`} alt={comicsName} />
        <span>{comicsName}</span>
      </div>
      <button className={s.comics__button} onClick={handleGetNext}>
        Next Issue
      </button>
    </div>
  );
};

CharacterComics.propTypes = {
  characterComics: PropTypes.array,
};

export default CharacterComics;
