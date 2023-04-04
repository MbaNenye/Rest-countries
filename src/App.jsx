import { BrowserRouter, Routes,Route } from "react-router-dom"
import Countries from "./components/countries"
import Error from "./components/error"
import SingleCountry from "./components/singlecountry"

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Countries/>}></Route>
      <Route path="/:name" element={<SingleCountry/>}></Route>
      <Route path="*" element={<Error/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
