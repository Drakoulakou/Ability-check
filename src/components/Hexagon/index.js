import './styles.scss'

function Hexagon({ legend, number }) {
    return (
        <div className='hexagon'>
            <div className='hex'>
                <h4 className='number'>{number}<span>+</span></h4>
                <div className='fps'>FPS</div>
            </div>
            <h3 className='legend'>{legend}</h3>
        </div>
    )
}

export default Hexagon