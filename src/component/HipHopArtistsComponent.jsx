import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

const HipHopArtistsComponent = () => {
  const [hipHopArtists, setHipHopArtists] = useState([]);

  const handleArtist = async (artistName, domQuerySelector) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
      );
      if (response.ok) {
        const result = await response.json();
        const songInfo = result.data;
        setHipHopArtists((prevArtists) => [...prevArtists, songInfo[0]]);
      } else {
        console.log('Errore nel recupero dei dati');
      }
    } catch (error) {
      console.error('Errore:', error);
    }
  };


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setHipHopArtists([]);
  
    const hipHopArtistsList = ['eminem', 'snoopdogg', 'lilwayne', 'drake', 'kanyewest'];
  
    const shuffledHipHopArtists = shuffleArray(hipHopArtistsList);
    const randomHipHopArtists = shuffledHipHopArtists.slice(0, 2);
  
    randomHipHopArtists.forEach(async (artist) => {
      await handleArtist(artist, '#hipHopSection');
    });
  }, []);
  

  return (
    <Col className="col-10">
      <div id="hiphop">
        <h2>#HipHop</h2>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
          id="hipHopSection"
        >
          {hipHopArtists.map((songInfo, index) => (
            <div key={index} className="col text-center" id={songInfo.id}>
              <a href={`/album_page.html?id=${songInfo.album.id}`}>
                <img
                  className="img-fluid"
                  src={songInfo.album.cover_medium}
                  alt={songInfo.title}
                />
              </a>
              <p>
                <a href={`/album_page.html?id=${songInfo.album.id}`}>
                  Album: "{songInfo.album.title.length < 16
                    ? `${songInfo.album.title}`
                    : `${songInfo.album.title.substring(0, 16)}..."`
                  }"
                </a>
                <br />
                <a href={`/Artists`}>
                  Artista: {songInfo.artist.name}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default HipHopArtistsComponent;
