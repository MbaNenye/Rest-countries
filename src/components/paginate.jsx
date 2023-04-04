{/*function Paginate({countryPerPage,totalCountry,setCurrentPage}) {
  const pageNumbers = [];
 for (let i = 1; i <= Math.ceil(totalCountry/countryPerPage); i++)

 pageNumbers.push(i);
  return (
    <div>
        <ul className="flex">
    {pageNumbers.map(number => (
        <li className="flex rounded shadow" key={number}>
            <button className="flex justify-around  md:flex md:m-4 md:p-4 rounded m- p-2 font-bold dark:bg-white dark:text-black" onClick={()=>setCurrentPage(number)}> {number}</button>
        </li>
    ))}
        </ul>
    
        </div>
  )
}
export default Paginate*/}