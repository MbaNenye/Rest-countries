function Paginate({countryPerPage,totalCountry,setCurrentPage}) {
  const pageNumbers = [];
 for (let i = 1; i <= Math.ceil(totalCountry/countryPerPage); i++)

 pageNumbers.push(i);
  return (
    <div>
        <ul className="flex">
    {pageNumbers.map(number => (
        <li className="flex rounded shadow" key={number}>
            <button className=" md:flex justify-between md:m-4 md:p-4 rounded m- p-2 font-bold" onClick={()=>setCurrentPage(number)}> {number}</button>
        </li>
    ))}
        </ul>
    
        </div>
  )
}
export default Paginate