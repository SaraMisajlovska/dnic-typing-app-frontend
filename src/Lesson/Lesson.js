import './Lesson.css';
import { Link } from 'react-router-dom';
import imageSrc from './typing.png';

const Lesson = (props) => {

    return (
        <div className="container lighter">
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-5'>
                    <h2>
                        {props.lesson.lessonName}
                    </h2>
                </div>
                <div className='col-4'></div>
            </div>
            <div className='row'>
                <div className="col-3">

                </div>
                <div className="col-6">
                    <h4>
                        {props.lesson.text}
                    </h4>
                </div>
                <div className="col-3">

                </div>
            </div>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-5'>

                    <img className='lesson' src={imageSrc} alt="Typing" />
                </div>
                <div className='col-3'></div>
            </div>
            <div className='row'>
                <div className='col-10'></div>
                <div className='col-2'>
                    <Link className='btn btn-primary'
                        onClick={() => {
                        }}
                        to={`/home`}
                    > &laquo; Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );

}
export default Lesson;