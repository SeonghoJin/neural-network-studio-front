import React, {useEffect, useState} from 'react';
import Main from './main/main';
import Header from '../header/header';

import axios from "axios";

const axiosConfig = {
    withCredentials: true
}

const Landing = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        const exec = async () => {
            setLoading(true);
            const response = await axios.get(
                "/api/user",
                axiosConfig,
            );
            setLoading(false);
            if(response.status === 401){
                setData({
                    auth: false,
                    data: null,
                })
            }else{
                setData({
                    auth: true,
                    user: response.data
                })
            }
        }
        exec();
    }, [])

    return (
        <>
            <Header auth={data.auth} user={data.user} loading={loading}/>
            <Main auth={data.auth}/>
        </>
    )
}


export default Landing;
