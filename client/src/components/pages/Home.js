import React, { useEffect, useContext, useState } from "react";
import "./homeStyle.css";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Dropdown from "../spotify/Dropdown";
import Listbox from "../spotify/Listbox";
import Detail from "../spotify/Detail";
import { Credentials } from "../spotify/Credentials";

export default function Home() {
  //   //use userContext as data source
  //   //this brings user back to login if they click logout
  //   const { userData } = useContext(UserContext);
  //   const history = useHistory();
  //   useEffect(() => {
  //     if (!userData.user) history.push("./login");
  //   }, [userData]); //put userdata so logout will know

  ////////////////////////Mike's
  const spotify = Credentials();

  console.log("RENDERING APP.JS");

  const data = [
    { value: 1, name: "A" },
    { value: 2, name: "B" },
    { value: 3, name: "C" },
  ];
  const [token, setToken] = useState("");
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });
  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylistFromAPI: [],
  });
  const [tracks, setTracks] = useState({
    selectedTrack: "",
    listOfTracksFromAPI: [],
  });
  const [trackDetail, setTrackDetail] = useState(null);

  //use userContext as data source
  //this brings user back to login if they click logout
  const { userData } = useContext(UserContext);
  //const history = useHistory();

  useEffect(() => {
    console.log("This is userdata " + JSON.stringify(userData.user));

    // if (!userData.user) history.push("./login");

    ///Mike's
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);

      axios("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((genreResponse) => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items,
        });
      });
    });
    ////Mike's end here
  }, [userData, genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]); //put userdata so logout will know

  /////////////////////////Mike's starts here
  const genreChanged = (val) => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI,
    });

    axios(
      `https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    ).then((playlistResponse) => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
      });
    });

    console.log(val);
  };

  const playlistChanged = (val) => {
    console.log(val);
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI,
    });
  };

  const buttonClicked = (e) => {
    e.preventDefault();

    axios(
      `https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ).then((tracksResponse) => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items,
      });
    });
  };

  const listboxClicked = (val) => {
    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter((t) => t.track.id === val);

    setTrackDetail(trackInfo[0].track);
  }; ////mike's end here

  return (
    <div className="homePage">
      <div className="container">
        <form onSubmit={buttonClicked}>
          <Dropdown
            label="Genre :"
            options={genres.listOfGenresFromAPI}
            selectedValue={genres.selectedGenre}
            changed={genreChanged}
          />
          <Dropdown
            label="Playlist :"
            options={playlist.listOfPlaylistFromAPI}
            selectedValue={playlist.selectedPlaylist}
            changed={playlistChanged}
          />
          <div className="col-sm-6 row form-group px-0">
            <button type="submit" className="btn btn-success col-sm-12">
              Search
            </button>
          </div>
          <div className="row">
            <Listbox
              items={tracks.listOfTracksFromAPI}
              clicked={listboxClicked}
            />
            {trackDetail && <Detail {...trackDetail} />}
          </div>
        </form>
      </div>
    </div>
  );
}
