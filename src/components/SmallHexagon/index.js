import './styles.scss'

function SmallHexagon({ numberSmallHexagon, legendSmallHexagon }) {
    return (
        <div className='small-hexagon' >
            <div className='hex'>
                <div className='small-hex'>
                    <div className='text'>{numberSmallHexagon}<span>+</span></div>
                    <div className='fps'>FPS</div>
                </div>
            </div>
            <h3 className='legend'>{legendSmallHexagon}</h3>
        </div>
    )
}

export default SmallHexagon


