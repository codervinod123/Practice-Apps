const Filter=({filterData})=>{
    return(
        <div className="bg-gray-300 h-12 justify-center flex ">
           {
            filterData.map((filterName)=>{
                return(
                    <button key={filterName.id}>{filterName.title}</button>
                )
            })
           }
        </div>
    )
}
export default Filter;