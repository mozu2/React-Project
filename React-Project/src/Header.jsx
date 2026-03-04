import { Link } from 'react-router-dom';
import './Header.css'
// @ts-check

const Header = () => {
    return (
        <div className='Header'>
            <p className='pageTitle'>掲示板サイト</p>
            <Link to='/threads/new'>
                <button className='create'>スレッドを作成作成</button>
            </Link>
        </div>
    );
}

export default Header;
