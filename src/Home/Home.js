import './Home.css';
import { Link } from 'react-router-dom';
import stats from './stats.png'
import stats2 from './stats2.png'

const Home = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <h3 className="text-center">Pick up where you left off</h3>
                </div>
                <div className="col-lg-6">
                    <h3 className="text-center">Your stats over time</h3>
                </div>
            </div>
            <div className="row p-3">
                <div className='col-lg-1'></div>
                <div className="col-lg-4">
                    <div className="card text-center">
                        <img className="card-img-top course" src={props.selectedCourse.imageUrl} alt="Course" />
                        <div className="card-body">
                            <h4 className="card-title">{props.selectedCourse.courseName}</h4>
                            <p className="card-text">{props.selectedCourse.description}</p>
                            <Link className='btn btn-primary'
                                onClick={() => {
                                }}
                                to={`/lesson`}
                            > Resume &raquo;
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2'></div>
                <div className="col-lg-4">
                    <div className="card text-center">
                        <img className="card-img-top stats" src={stats} alt="User Stats" />
                        <img className="card-img-top stats" src={stats2} alt="User Stats Contd." />
                    </div>
                </div>
                <div className='col-lg-1'></div>
            </div>
        </div>
    );

}
export default Home;