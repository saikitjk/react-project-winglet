require("dotenv").config();
const Credentials = () => {
  return {
    ClientId: process.env.REACT_APP_ID,
    ClientKey: process.env.REACT_APP_Key,
  };
};
export { Credentials };

//Key is in .env
//before commit, replace the key with the following:
//``````````````````````````````````
// ClientId: process.env.REACT_APP_ID,
// ClientKey: process.env.REACT_APP_Key,
//``````````````````````````````````
