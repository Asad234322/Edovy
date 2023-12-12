import Header from './Components/Header/Header'
import Banner from './Components/pages/Banner'
import FindCourses from './Components/pages/FindCourses'
import Category from './Components/pages/Category'
import ImagesSlider from './Components/pages/ImagesSlider'
import Slider2 from './Components/pages/Slider2'
import Footer from './Components/pages/Footer'
import './App.css'

function App() {


  return (
    <>
      <div className="container">
        <Header />
        <div className="main-container">
          <Banner />
          <FindCourses />
          <Category />
          <ImagesSlider />
          <Slider2 />
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
