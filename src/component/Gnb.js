import React from 'react';
import {Link} from 'react-router-dom';

const Gnb = ({dday}) => {
    return (
        <ul className="gnb">
            <li>
                <Link to="/?day=mon" className={dday === 'mon' ? 'tab_day_on' : 'tab_day'}>월요일</Link>
            </li>
            <li>
                <Link to="/?day=tue" className={dday === 'tue' ? 'tab_day_on' : 'tab_day'}>화요일</Link>
            </li>
            <li>
                <Link to="/?day=wed" className={dday === 'wed' ? 'tab_day_on' : 'tab_day'}>수요일</Link>
            </li>
        </ul>
    )
}
export default Gnb;


