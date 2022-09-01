
const Profile = (props) => {
    return ( 
        <div class="container">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-7">
                    <h2>Edit your personal information</h2>
                </div>
                <div className="col-4"></div>
            </div>
            <form>
                <div className="row">
                <div className="col-4">
                <img src="props.user.imageUrl"> </img>
                </div> 
                <div className="col-8">

                </div>
                </div>

            </form>
        </div>
    )
}
export default Profile;