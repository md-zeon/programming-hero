import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <h2>Meal DB Website</h2>
      <p>A DataBase of meals all over the world</p>
      {
        navigation.state === "loading"  ? <p>Loading...</p> : <Outlet />
      }
      <Footer />
    </>
  )
}

export default App
