require("dotenv").config();
const Credentials = () => {
  return {
    ClientId: process.env.REACT_APP_ID,
    ClientKey: process.env.REACT_APP_Key,
  };
};
export { Credentials };

// ClientId: `${process.env.spotifyID}`,
// ClientSecret: `${process.env.spotifyKey}`,

// ClientId: "737dd3883e644ab395647a60b2abde2b",
// ClientSecret: "3be77a04c22046258065e20aab4028dc",
