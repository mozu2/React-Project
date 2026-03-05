import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './ThreadPostList.css';

const ThreadPostList = () => {
    const [threadPost, setThreadPost] = useState([]);
    const { thread_id } = useParams();
    useEffect(() => {
        const getThread = async () => {
            const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`);
            const result = await response.json();
            setThreadPost(result.posts);
        };

        getThread();

    }, [thread_id]);

    return (
        <div>
            <h1>一覧</h1>
            {
                threadPost.length === 0 ? (
                    <p className="noPost">投稿がありません。❗</p>
                ) :
                    (
                        threadPost.map((item) => (
                            <div key={item.id}>
                                <p>{item.post}</p>
                            </div >
                        ))
                    )}
        </div>
    );

}

export default ThreadPostList;