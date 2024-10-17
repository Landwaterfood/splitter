function TipButton({percentage}) 
{
    return (
        <>
        <button className = "rounded-sm bg-sky-950">
            {percentage}%
        </button>
        </>
    )
}

export default TipButton