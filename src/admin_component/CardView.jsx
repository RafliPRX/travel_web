/* eslint-disable react/prop-types */
import './cardview.css';
import './card.css';
import PropType from 'prop-types'
const Card_view = ({
    nama,
    email,
    role,
    Image,
    role_func,
}) => {
    
    return (
        <>
            <div className="Card">
                <div className="container">
                 <div className="wrapper">
                   <div className="banner-image">
                    <img src={Image} alt="" />
                   </div>
                   <h1 className='NAME'> {nama}</h1>
                   <p className='DETAIL'>{email} <br/>
                     {role}</p>
                  </div>
                  <div className="button-wrapper"> 
                  <button className="btn outline">DELETE</button>
                    <button onClick={() => role_func()} className="btn fill">ROLE</button>
                  </div>
                    </div>
            </div>
        </>
    )
}

Card_view.PropType = {
    nama: PropType.string,
    email: PropType.string,
    role: PropType.string,
    Image: PropType.string,
    role_func: PropType.func,
}
export default Card_view