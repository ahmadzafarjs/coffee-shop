import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function FilterBy({options, ttle}) {
    let[filter, setFilter] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        // Update the URL search parameter when the filter changes
        setSearchParams({ ...searchParams, price: filter });
    }, [filter, setSearchParams]);
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };
  return (
    <select value={filter} onChange={handleFilterChange} className='outline-none p-2 my-3'>
      {options?.map(opt=> <option key={opt.label} value={opt.value}>{opt.label}</option>)}
    </select>
  )
}

export default FilterBy
