import './styles.scss'

function Mark({ className, image, subtitle, subtitleNumber, selected, marks }) {
    return (
        <div className={`mark-wrapper ${className}`}>
            <img src={image} />       
            <div className='mark'></div>
            <div>{subtitle} {subtitleNumber}</div>
            <div className='graph'>
                {marks.map((mark, i) => (
                    <div key={i} className={`bar ${selected === i ? 'active' : ''}`}>
                        <div className='title'>
                            <div>{mark.title}</div>
                            {mark.subtitle && <div className='subtitle'>{mark.subtitle}</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Mark