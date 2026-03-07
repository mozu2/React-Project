import { useEffect, useState } from "react";
import './Threads.css'
import { Link, useSearchParams } from "react-router-dom";
// @ts-check


const Threads = () => {

    const [threads, setThreads] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    //URLのoffset取得用
    const offset = Number(searchParams.get("offset")) || 0;
    //ページ数
    const count = (offset / 10) + 1;

    useEffect(() => {
        const getThreads = async () => {
            const url = `https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`;
            const response = await fetch(url);
            const result = await response.json();

            setThreads(result);
        };

        getThreads();
        window.scrollTo(0, 0);

    }, [offset]);



    const clickOffset = (newOffset) => {
        setSearchParams({ offset: newOffset });
    }


    return (
        <div className="threads">
            <button onClick={() => clickOffset(0)} className="latestButton">
                最新ページへ
            </button>
            {
                threads.map((thread) => (
                    <Link to={`/threads/${thread.id}?title=${thread.title}`} key={thread.id} className='title'
                        state={{ title: thread.title }}>
                        {thread.title}
                    </Link>
                ))
            }
            <div className="pagesButton">
                <button onClick={() => {
                    clickOffset(Math.max(0, offset - 10));
                }} disabled={offset === 0}>
                    前に
                </button>
                <button onClick={() => {
                    clickOffset(offset + 10);
                }}>
                    次に
                </button>
            </div>
            <p className="pages">{count} ページ</p>
        </div >
    );
}

export default Threads;