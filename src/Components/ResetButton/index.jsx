function ResetButton({handleReset}) {
    const [resetState, setResetState] =useState('')
    const handleResetStateChange = ( e ) = {
        const preResetState = e.target.value;

        setResetState(preResetState);
    
};
    
    return (
    <button 
    className="p-5" 
    onClick={clickHandler}>Reset
    </button>
    );
}
export default ResetButton;