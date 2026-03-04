import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

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
    <div>
      <h1>新着スレッド</h1>
      <div className='threads'>
        {threads.map((thread) => (
          <p key={thread.id} className='title'>{thread.title}</p>
        ))}
      </div>
    </div>
  )

}
export default App
