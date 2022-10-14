import './styles.scss'
function CycleFrame() {
    return (
        <div className="cycle-frame">
                <img className='logo-u' src={process.env.PUBLIC_URL + '/pathU.png'} />
                <img className='logo-l' src={process.env.PUBLIC_URL + '/pathL.png'} />
        </div>
    )
}
export default CycleFrame
