import { useState } from "react";
import './ThreadsNew.css';
import { useNavigate } from "react-router-dom";


const ThreadsNew = () => {


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const navigate = useNavigate();

    const postThread = async (e) => {
        e.preventDefault();

        const threadResponse = await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
            }),
        });

        const threadData = await threadResponse.json();
        const threadId = await threadData.id;

        await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post: content,
            }),
        });
        alert('スレッドを作成しました')
        navigate('/')
    }




    return (
        <div>
            <h1>新規スレッドを作成</h1>
            <div className="thread">
                <form onSubmit={postThread}>
                    <label className="thread-title">タイトル:
                        <input className="title-info" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </label>
                    <br />
                    <label htmlFor="">内容
                        <textarea name="Content" value={content} rows={5} onChange={(e) => setContent(e.target.value)}></textarea>
                    </label>
                    <br />
                    <button type="submit"
                        disabled={title.trim() === "" || content.trim() === ""}>登録する</button>
                </form>
            </div>
        </div>
    );
}

export default ThreadsNew;