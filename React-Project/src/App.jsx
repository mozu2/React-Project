
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ThreadsNew from './ThreadsNew';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/threads/new' element={<ThreadsNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}
export default App;
