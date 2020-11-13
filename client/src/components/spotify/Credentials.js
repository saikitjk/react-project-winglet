require("dotenv").config();
const Credentials = () => {
  return {
    ClientId: `${process.env.spotifyID}`,
    ClientSecret: `${process.env.spotifyKey}`,
  };
};
export { Credentials };
