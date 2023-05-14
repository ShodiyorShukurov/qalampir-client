import { Link } from "react-router-dom";
import not from "../../assets/images/not-found.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4 mt-5">
          <img className="img-not" src={not} alt="Not Found" height={400} />
          <Link className="btn btn-primary d-block mt-3" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
