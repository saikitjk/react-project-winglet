require("dotenv").config();
const Credentials = () => {
  return {
    ClientId: "737dd3883e644ab395647a60b2abde2b",
    ClientKey: "3be77a04c22046258065e20aab4028dc",
  };
};
export { Credentials };

//Key is in .env
//before commit, replace the key with the following:
//``````````````````````````````````
// ClientId: process.env.REACT_APP_ID,
// ClientKey: process.env.REACT_APP_Key,
//``````````````````````````````````
