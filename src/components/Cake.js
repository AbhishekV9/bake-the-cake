
function cake (props){
    console.log(props)
    return(
        <div className="">
            <div className="box-0 ms-4"></div>
            <div className="box-1 ms-3"></div> 
            <div className="box-2 ms-2"></div>
            <div className="box-3"><p className="fs-5 text-center pt-1 fw-bold text-white">{props.id}</p></div>
        </div>
    )
}

export default cake;