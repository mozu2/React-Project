
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ThreadsNew from './ThreadsNew';
import ThreadPostList from './ThreadPostList';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/threads/new' element={<ThreadsNew />} />
          <Route path='/threads/:thread_id' element={<ThreadPostList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}
export default App;
