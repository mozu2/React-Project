import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import './ThreadPostList.css';


const ThreadPostList = () => {

    //ロード確認用
    const [load, setLoad] = useState(true);

    //スレッド投稿用
    const [thread, setThread] = useState("");

    //スレッド内投稿一覧用
    const [threadPost, setThreadPost] = useState([]);
    const { thread_id } = useParams();
    const location = useLocation();
    const threadTitle = location.state?.title



    const getThread = async () => {
        setLoad(true);
        try {
            const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`);
            const result = await response.json();
            setThreadPost(result.posts);
        } catch (error) {
            console.log('エラーが出て');
        } finally {
            setLoad(false);
        };

    };

    useEffect(() => {
        getThread();
    }, [thread_id]);


    //投稿用
    const PostThread = async (e) => {
        e.preventDefault();
        await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post: thread,
            }),
        });
        setThread("");
        getThread();
    };

    return (
        <div className="threadPostList">
            <div className="thread">
                <p className="TitleInThread">{threadTitle}</p>

                {load ? (
                    <p>ロード中です</p>
                ) : (
                    threadPost.length === 0 ? (
                        <p className="noPost">投稿がありません。❗</p>
                    ) : (
                        threadPost.map((item) => (
                            <div key={item.id} className="textThread">
                                <p>{item.post}</p>
                            </div >
                        ))
                    )
                )}
            </div>
            <div className="postForm">
                <form onSubmit={PostThread}>
                    <textarea type="text" value={thread} onChange={(e) => setThread(e.target.value)} />
                    <button type="submit"
                        disabled={thread.trim() === ""}>
                        投稿する
                    </button>
                </form>
            </div>
        </div>
    );

}

export default ThreadPostList;