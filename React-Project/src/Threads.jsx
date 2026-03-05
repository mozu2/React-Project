import { useEffect, useState } from "react";
import './Threads.css'
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
                    <p key={thread.id} className='title'>{thread.title}</p>
                ))
            }
        </div>
    );
}

export default Threads;