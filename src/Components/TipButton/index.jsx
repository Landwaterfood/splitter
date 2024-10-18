function TipButton({percent, clickHandler}) 
{
    return (
        <button 
        className = " text-white bg-teal-800 rounded-md px-7 py-3 m-1" 
        onClick={clickHandler}>
            {percent}%
        </button>
    )
}
export default TipButton