function TipInput({percent}) 
{
    return (
        <>
        <button className = "rounded-sm bg-sky-950 rounded-md p-10" onClick={clickHandler}>
            {percent}%
        </button>
        </>
    )
}

export default TipInput