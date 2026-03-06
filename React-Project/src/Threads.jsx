import { useEffect, useState } from "react";
import './Threads.css'
import { Link } from "react-router-dom";
// @ts-check


const Threads = () => {

    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const getThreads = async () => {
            const url = 'https://railway.bulletinboard.techtrain.dev/threads';
            const response = await fetch(url);
            const result = await response.json();

            setThreads(result);
        };

        getThreads();

    }, []);



    return (
        <div className="threads">
            {
                threads.map((thread) => (
                    <Link to={`/threads/${thread.id}`} key={thread.id} className='title'
                        state={{ title: thread.title }}>
                        {thread.title}
                    </Link>
                ))
            }
        </div>
    );
}

export default Threads;