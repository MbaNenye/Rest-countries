import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";

function SingleCountry() {
  const [country, setCountry] = useState([]);
  const {name} = useParams();
  useEffect(()=>{
  const getCountry = async()=>{
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const data = await res.json();
        setCountry(data);
    } catch (error) {
        console.error(error);
    }
  }
  getCountry()
  },[name])
  return (
    <>
    <section className="p-8 md:py-0 max-w-7xl mx-auto">
       {country.map((item)=>(
        <div key={item.population} className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen">
            <article>
                <img src={item.flags.svg} alt={item.name.common}/>
            </article>
            <article>
                <h1 className="font-bold text-gray-900 text-4xl dark:text-white mb-8">{item.name.official}</h1>
                <ul className="flex my-4 flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                    <li>Capital: {item.capital[0]}</li>
                    <li>Population:{item.population.toLocaleString()}</li>
                    <li>Region:{item.region}</li>
                    <li>Subregion:{item.subregion}</li>
                    <li>Currency:</li>
                </ul>
                {item.borders && 
                <>
                <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">Borders</h3>
                <ul className="flex flex-wrap items-start justify-start gap-2">
                    {item.borders.map((border, index)=>(
                        <li key={index} className="bg-white p-2 rounded text-xs tracking-wide shadow dark:bg-gray-800 dark:text-gray-400 text-gray-700">{border}</li>
                    ))}
                </ul>
                </>}

                <Link to="/" className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text0gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-800">&larr; Back to Home</Link>
            </article>
        </div>
       ))}
    </section>
    </>
  )
}
export default SingleCountry