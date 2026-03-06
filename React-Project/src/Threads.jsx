import { useEffect, useState } from "react";
import './Threads.css'
import { Link } from "react-router-dom";
// @ts-check


const Threads = () => {

    const [threads, setThreads] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const getThreads = async () => {
            const url = `https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`;
            const response = await fetch(url);
            const result = await response.json();

            setThreads(result);
        };

        getThreads();

    }, [offset]);



    return (
        <div className="threads">
            {
                threads.map((thread) => (
                    <Link to={`/threads/${thread.id}?title=${thread.title}`} key={thread.id} className='title'
                        state={{ title: thread.title }}>
                        {thread.title}
                    </Link>
                ))
            }

            <button onClick={() => setOffset(prev => prev = 0)}>
                最新
            </button>
            <button onClick={() => setOffset(prev => Math.max(0, prev - 10))} disabled={offset === 0}>
                前に
            </button>
            <button onClick={() => setOffset(prev => prev + 10)}>
                次に
            </button>
            <p>{offset}</p>
        </div>
    );
}

export default Threads;