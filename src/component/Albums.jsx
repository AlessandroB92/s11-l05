import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Albums = () => {
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = new Headers({
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
        });

        const albumResponse = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`, {
          headers: headers,
        });

        if (!albumResponse.ok) {
          throw new Error("Cannot fetch album data");
        }

        const albumData = await albumResponse.json();
        setAlbum(albumData);

        const tracksResponse = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/album/${id}/tracks`, {
          headers: headers,
        });

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

  const trackCard = (trackInfo) => (
    <div className="py-3 trackHover" key={trackInfo.id}>
      <Link to="/Albums" className="card-title trackHover px-3" style={{ color: 'white' }}>
        {trackInfo.title}
      </Link>
      <small className="duration" style={{ color: 'white' }}>
        {`${Math.floor(parseInt(trackInfo.duration) / 60)}:${
          parseInt(trackInfo.duration) % 60 < 10
            ? '0' + (parseInt(trackInfo.duration) % 60)
            : parseInt(trackInfo.duration) % 60
        }`}
      </small>
    </div>
  );

  return (
    <div className="container-fluid">
      <Container>
        <Row>
          <Col className="col-12 col-md-10 col-lg-10 mt-5">
            <h2 className="titleMain">{album?.title}</h2>
            <div id="followers">{album?.artist?.name} followers</div>
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
                {tracks.map((track) => trackCard(track))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Albums;
