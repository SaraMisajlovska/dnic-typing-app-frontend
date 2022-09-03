import confused from './confused.png';
import './FAQs.css';
const faqs = () => {
    return (

        <div className="container-sm pt-2 lighter">
            <div className="row">
                <div className="col-6"> <div className="row pt-3">
                    <div className="col-2"></div>
                    <div className="col-9">
                        <h3>How do I enroll into a course?</h3>
                        <p>To enroll into a new course simply go to the Courses page, search for a course of your liking and click the enroll button.</p>
                    </div>
                    <div className="col-1"></div>
                </div>
                    <div className="row pt-3">
                        <div className="col-2"></div>
                        <div className="col-9">
                            <h3>How do I resume practicing?</h3>
                            <p>To resume practicing just visit the Home page and click the resume button. This will lead you to your next lesson.</p>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-2"></div>
                        <div className="col-9">
                            <h3>Can I change my personal information?</h3>
                            <p>Yes, all of your personal information, except for the username, can be easily changed by visiting the My Profile page. </p>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
                <div className='col-1'></div>
                < div className="col-5">
                    <img src={confused} alt="" className='guy' />
                    <div className='small'> Icons made by <a href="https://www.freepik.com" title="Freepik">
                        Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default faqs;