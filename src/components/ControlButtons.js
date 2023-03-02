const ControlButtons = ({setPause,setReset,setStart,isPause,isActive})=>{
    const Start = (
            <button onClick={setStart} className="btn second">Start</button>
    );
    const OtherButtons =(
        <div className="flex grid-gap-20">
            <button onClick={setReset} className="btn first">
                Reset
            </button>
            <button onClick={setPause}  className={isPause ? 'btn third' : 'btn fourth'}>
                {isPause ? "Resume" : "Pause"}
            </button>
        </div>
    )
    return (
        <>
            {isActive ? OtherButtons : Start}
        </>
    )
}
export default ControlButtons