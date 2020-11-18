require("dotenv").config();
const Credentials = () => {
  return {
    ClientId: process.env.REACT_APP_ID,
    ClientKey: process.env.REACT_APP_Key,
  };
};
export { Credentials };
