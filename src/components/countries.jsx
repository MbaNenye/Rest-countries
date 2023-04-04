import { useState, useEffect } from "react";
import Article from "./article";
import Paginate from "./paginate";
function Countries() {
  const [countries, setCountries] = useState([])
  const [searchText, setSearchText] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [countryPerPage, setCountryPerPage] = useState(21)
  const regions = [
    {name:"Europe",},
    {name:"Asia",},
    {name:"Africa",},
    {name:"Australia",},
    {name:"Americas",},
    {name:"Antarctica",},
  ]

  useEffect(()=>{
    const fetchCountries = async()=>{
    try {
      const res = await fetch('https://restcountries.com/v3.1/all')
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error)
    }
  }
  fetchCountries()
  },[]);

  const lastIndex = currentPage * countryPerPage;
  const firstIndex = lastIndex - countryPerPage;
  const paging = countries.slice(firstIndex, lastIndex);
  async function searchCountry(){
    const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`);
    const data = await res.json()
    setCountries(data);
  }
  const filterRegion= async(region)=>{
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json()
    setCountries(data);
  }
  const handleSearchCountry =(e)=>{
  e.preventDefault();
  searchCountry()
  }
  const handleFilter =(e)=>{
  e.preventDefault
  filterRegion();
  }
  return (
    <>{!countries ? <h1 className="text-gray-800 font-bold uppercase flex items-center justify-center text-center h-screen dark:text-white"> Loading...</h1> : 
    <section className="container mx-auto p-8">
       <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <form  onSubmit={handleSearchCountry} autoComplete="off" className="max-w-4xl md:flex-1">
          <input type="text" name="search" id="search" placeholder="Search Country" required value={searchText} onChange={(e)=>setSearchText(e.target.value)} className="py-4 px-4 text-gray-600 placeholder-gray-600 w-full shadow rounded outline-none mb-8 dark::text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all duration-200"/>
        </form>
        <form onSubmit={handleFilter} className="mb-4">
          <select name="filter-by-region" id="filter-by-region" className="w-52 py-3 px-4 outline-none shadow rounded text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700" value={regions.name} onChange={(e)=> filterRegion(e.target.value)}>
           {regions.map((region, index)=>(
          <option key={index} value={region.name}>{region.name}</option>
           ))}
          </select>
        </form>
       </div>
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paging.map((country) =>(
        <Article key={country.name.common} {...country}/>
      ))}
           <Paginate countryPerPage={countryPerPage} totalCountry={countries.length} setCurrentPage={setCurrentPage}/>
      </div>
 
      </section>
    
      }</>
  )
}
export default Countries