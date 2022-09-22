import './styles.scss'

function Frame(){
    return(
        
        <div className="frame" >
            <div className='cicle-logo'>
                <img src={process.env.PUBLIC_URL + ' /pathU.png'}/>
                <img src={process.env.PUBLIC_URL + ' /pathL.png'}/>
            </div>
        </div>
        
    )
}

export default Frame