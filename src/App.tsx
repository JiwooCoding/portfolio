import HomePage from './components/homePage/HomePage'
import './global.scss'
import MyInfo from './components/myInfo/MyInfo'
import MyProject from './components/myProject/MyProject'
import Footer from './components/footer/Footer'
import Header from './components/header/NavBar/Header'


function App() {

  return (
    <div>
      <Header/>
        <main className='container'>
          <HomePage/>
          <MyInfo/>
          <MyProject/>
        </main>
        <Footer/>
    </div>
  )
}

export default App
