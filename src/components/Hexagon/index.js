import './styles.scss'

function Hexagon({ legend, number, fpsContent }) {

    const mainClass = fpsContent ? 'number small-number' : 'number'
    const displayFps = fpsContent ? 'fps-display-none' : 'fps'

    return (
        <div className='hexagon'>
            <div className='hex'>
                <h4 className={mainClass}>
                    {number}
                    {!fpsContent && <span>+</span>}
                </h4>
                <div className={displayFps}>FPS</div>
            </div>
            <h3 className='legend'>{legend}</h3>
        </div>
    )
}

export default Hexagon