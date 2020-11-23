require("dotenv").config();

export const API_BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

export const Yelp_Token = process.env.REACT_APP_API_YELP;
//Key is in .env
//before commit, replace the key with the following:
//``````````````````````````````````
//Yelp_Token = process.env.REACT_APP_API_YELP;
//``````````````````````````````````
