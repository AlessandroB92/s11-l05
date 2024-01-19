// MySide.jsx
import React, { useState } from "react";
import { Navbar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaHome, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../img/Spotify_Logo.png";
import SearchResults from "./SearchResults"; // Assicurati di importare correttamente il componente SearchResults

const MySide = () => {
  // Stato per immagazzinare i risultati della ricerca
  const [searchResults, setSearchResults] = useState([]);

  // Funzione di ricerca
  const search = async () => {
    let div = document.querySelector("#searchResults .row");
    div.innerHTML = "";
    let searchQuery = document.querySelector("#searchField").value;

    if (searchQuery.length > 2) {
      document.querySelector("#searchResults").style.display = "block";

      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
              "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
            },
          }
        );

        if (response.ok) {
          let result = await response.json();
          let songs = result.data;
          for (let x = 0; x < result.data.length; x++) {
            div.innerHTML += albumCard(result.data[x]);
          }
          setSearchResults(songs); // Aggiorno lo stato con i risultati della ricerca
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      document.querySelector("#searchResults").style.display = "none";
    }
  };

  // Funzione per creare la card dell'album
  const albumCard = (songInfo) => {
    return `
      <div class="col text-center" id=${songInfo.id}>
        <a href="/album_page.html?id=${songInfo.album.id}">
          <img class="img-fluid" src=${songInfo.album.cover_medium} alt="1" />
        </a>
        <p>
          <a href="/album_page.html?id=${songInfo.album.id}">
            Album: "${songInfo.album.title.length < 16
              ? `${songInfo.album.title}`
              : `${songInfo.album.title.substring(0, 16)}...`}"
          </a>
          <br />
          <a href="/artist_page.html?id=${songInfo.artist.id}">
            Artista: ${songInfo.artist.name}
          </a>
        </p>
      </div>`;
  };

  return (
    <div className="col-2">
      <Navbar
        expand="md"
        className="navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="nav-container mt-4">
          <Navbar.Brand className="ms-2">
            <img src={Logo} alt="Spotify_Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup" className="mt-5 me-2">
            <Nav className="navbar-nav">
              <ul className="text-secondary">
                <li className="m-2">
                  <Link className="nav-link" to="/">
                    <FaHome className="fs-3 mx-2" /> Home
                  </Link>
                </li>
                <li className="m-2">
                  <Link className="nav-link" to="/">
                    <FaBookOpen className="fs-3 mx-2" /> Your Library
                  </Link>
                </li>
                <li>
                  <InputGroup className="mt-3 p-2">
                    <FormControl
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      type="button"
                      id="button-addon1"
                      onClick={search}
                    >
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div>
          <Button className="signup-btn mx-3" type="button">
            Sign Up
          </Button>
          <Button className="login-btn mx-3" type="button">
            Login
          </Button>
          <div>
            <Link className="text-white text-decoration-none m-3" to="#">
              Cookie Policy
            </Link>
            |
            <Link className="text-white text-decoration-none m-3" to="#">
              Privacy
            </Link>
          </div>
        </div>
      </Navbar>

      {/* Mostra i risultati della ricerca utilizzando il componente SearchResults */}
      {searchResults.length > 0 && (
        <SearchResults searchResults={searchResults} />
      )}
    </div>
  );
};

export default MySide;
