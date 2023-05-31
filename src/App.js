
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homelayout from './HomeLayout';
import Serving_page from './page/Home/Serving_page';
import Blog from './page/Home/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Getapi from './page/Home/ApiCheck/Getapi';


function App() {
  return (
   <>
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route exact path="/" element={<Homelayout/>}/>
      <Route exact path='/#about' element={<Serving_page/>}/>
      <Route exact path="/blog" element={<Blog/>}/>
      <Route exact path="/contact-us" element={<Getapi/>}/>

    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
