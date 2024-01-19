import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Artists = () => {
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { id } = useParams(); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const artistResponse = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`
        );
        if (!artistResponse.ok) {
          throw new Error("Cannot fetch artist data");
        }
  
        const artistData = await artistResponse.json();
        setArtist(artistData);
  
        const tracksResponse = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistData.name}`
        );
        if (!tracksResponse.ok) {
          throw new Error("Cannot fetch tracks data");
        }
  
        const tracksData = await tracksResponse.json();
        setTracks(tracksData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [id]); 

  const albumCard = (songInfo) => (
    <div className="col-sm-auto col-md-auto text-center mb-5" key={songInfo.id}>
      <Link className='text-white text-decoration-none' to="/Albums">
        <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link className='text-white text-decoration-none' to="/Artists">
          Track: "{songInfo.title.length < 16 ? `${songInfo.title}` : `${songInfo.title.substring(0, 16)}...`}"
        </Link>
        <br />
        <Link className='text-white text-decoration-none' to="/Albums">
          Album: "{songInfo.album.title.length < 16 ? `${songInfo.album.title}` : `${songInfo.album.title.substring(0, 16)}...`}"
        </Link>
      </p>
    </div>
  );

  return (
    <div className="container-fluid">
      <Container>
        <Row>
          <Col className="col-12 col-md-10 col-lg-10 mt-5">
            <h2 className="titleMain">{artist?.name}</h2>
            <div id="followers">{artist?.nb_fan} followers</div>
            <div className="d-flex justify-content-center" id="button-container">
              <Button className="btn btn-success mr-2 mainButton d-none" id="playButton">
                PLAY
              </Button>
              <Button className="btn btn-outline-light mainButton d-none" id="followButton">
                FOLLOW
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="col-10 offset-2 col-md-10 col-lg-10 p-0">
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">Tracks</h2>
            </div>
            <div className="pt-5 mb-5">
              <Row id="apiLoaded">
                {tracks.map((track) => albumCard(track))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Artists;
