import './styles.scss'
import descriptions from '../../utils/descriptions'


function Mark({ className, image, subtitle, subtitleNumber, selected, marks }) {

    const markTitle = marks[selected].title;

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
                        {selected === i && <div className='triangle'></div>} {/*renders only for active bar*/}
                    </div>
                ))}
            </div>
            <div className='description'>{descriptions[markTitle]}</div>
        </div>
    )
}

export default Mark