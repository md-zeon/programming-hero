// import DaisyNav from './Components/DaisyNav/DaisyNav';
import LineChart from './Components/LineChart/LineChart';
import Navbar from './Components/Navbar/Navbar';
import Phones from './Components/Phones/Phones';
import PriceOptions from './Components/PriceOptions/PriceOptions';

function App() {


  return (
    <>
      {/* <DaisyNav /> */}
      <Navbar />
      <h1 className="text-7xl text-rose-600 text-center">Vite + React</h1>
      <PriceOptions />
      <LineChart />
      <Phones />

    </>
  )
}

export default App
