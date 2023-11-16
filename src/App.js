import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [token, setToken] = useState("9718151f0627679b306aee4739aad204eb6fe9fe826e651c6440c36c8401ffa311")

  const a = () => {
    let res = token.charAt(token.length - 1);


    let text = token.replace(res, ((parseInt(res) + 1)));

    setToken(text);
  }
  const axios = require('axios');
  const FormData = require('form-data');
  let data = new FormData();
  data.append('reaction_type', '"like"');
  data.append('value', '1');
  data.append('wish_id', '2792140873');

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://padlet.com/api/5/reactions',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data
  };

  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  useEffect(() => {
    for (let index = 0; index < 500; index++) {
      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }




    // const formData = new FormData();
    // formData.append("reaction_type","like");
    // formData.append("value", 1);
    // formData.append("wish_id","2790670557");
    // axios
    //   .post("https://padlet.com/api/5/reactions", formData, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       console.log("ok");
    //     } 
    //   })
    //   .catch((error) => {
    //     console.log("fail");
    //   });

  }, [token]);



  return (
    <div className="App">
      <header className="App-header">
        <button onClick={a}>
          test
        </button>
      </header>
    </div>
  );
}

export default App;
