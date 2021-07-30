import React, { useEffect, useState } from 'react';
import Main from './main/main';
import Header from '../header/header';

import axios from 'axios';

const axiosConfig = {
  withCredentials: true,
};

const Landing = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const exec = async () => {
      setLoading(true);
      await axios
        .get('/api/user', axiosConfig)
        .then((res) => {
          if (res.status === 401) {
            setData({
              auth: false,
              data: null,
            });
          } else {
            setData({
              auth: true,
              user: res.data,
            });
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    exec();
  }, []);

  return (
    <>
      <Header auth={data.auth} user={data.user} loading={loading} />
      <Main auth={data.auth} />
    </>
  );
};

export default Landing;
