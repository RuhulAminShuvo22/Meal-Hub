
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FoodSection from './FoodSection/FoodSection'




const foodDataRes = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
.then(res =>res.json() )

function App() {
  
  return (
    <>



    <Navbar></Navbar>

    <Suspense>
      <FoodSection foodDataRes ={foodDataRes} ></FoodSection>
    </Suspense>
    

    

    
     
     

     
     
    </>
  )
}

export default App
