import React, { useEffect, useState } from 'react';
import Header from '../component/Header'
import Gnb from '../component/Gnb'
import Footer from '../component/Footer'
import axios from 'axios';

const Main = () => {
    const [webtoonData, setWebtoonData] = useState();

    useEffect(() => {
        axios('http://localhost:3001/api/')
            .then(res => setWebtoonData(res.data))
            
    },[]);
    return (
        <div>
            <Header />
            {webtoonData}
            <Gnb />
            <Footer />
        </div>
    );
}
export default Main;