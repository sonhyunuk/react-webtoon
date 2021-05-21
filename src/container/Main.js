import React, { useEffect, useState } from 'react';
import Header from '../component/Header'
import Gnb from '../component/Gnb'
import Footer from '../component/Footer'
import axios from 'axios';
import WebtoonList from '../component/WebtoonList';

const Main = () => {
    const [webtoonList, setWebtoonList] = useState([]);
    const [dday, setDday] = useState('mon');

    useEffect(() => {
        axios.get('dummy/webtoon_list.json')
            .then(res =>console.log(res.data.webtoonList))
            .then(res => setWebtoonList(res.data.webtoonList))
            .catch(error => console.log(error))

    }, []);
    return (
        <div>
            <Header />
            <Gnb />
            <WebtoonList list={webtoonList.filter(webtoon => (
                dday === webtoon.day
            ))
            } />
            <Footer />
        </div>
    );
}
export default Main;