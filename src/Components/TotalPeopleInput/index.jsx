function TotalPeopleInput({handlePeopleChange}) {

    return(
        <input 
        type="text" 
        placeholder="Total People"
        onChange={handlePeopleChange} 
        className="rounded-sm bg-sky-50"/>
    )
}

export default TotalPeopleInput