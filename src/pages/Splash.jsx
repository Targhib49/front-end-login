import shape from "../assets/images/shape.png"
import teacher from "../assets/images/teacher.png"
import CustButton from '../assets/components/CustButton';

export default function Splash() {
    const containerStyle = {
        display: 'grid',
        gridTemplateRows: '25% 25% 30% auto',
        height: '100%',
    }
    return (
        <div className="container" style={containerStyle}>
            <div style={{display: 'grid'}}>
                <img
                    alt="shape"
                    src={shape}
                    style={{width: '50%'}}
                />
            </div>
            <div>
                <img
                    alt="shape"
                    src={teacher}
                    style={{width: '70%'}}
                />
            </div>
            <div style={{margin: '0 10%'}}>
                <p style={{fontSize: '18px', fontWeight: '600'}}>Menjadi Kompeten Bersama Sertifikasiku</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in neque adipisci modi minima ipsam dolorem qui ipsa omnis?</p>
            </div>
            <div>
                <CustButton text="Get Started"/>
            </div>
        </div>
    )
}