import { useState } from "react";
import './ThreadsNew.css';

const ThreadsNew = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const postThread = async (e) => {
        e.preventDefault();

        const titleUrl = 'https://railway.bulletinboard.techtrain.dev/threads';
        const threadResponse = await fetch(titleUrl, {
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
        const contextUrl = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;
        await fetch(contextUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post: content,
            }),
        });
        alert('スレッドを作成しました')
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
                    <button type="submit">登録する</button>
                </form>
            </div>
        </div>
    );
}

export default ThreadsNew;