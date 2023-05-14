import PropTypes from "prop-types";
import userImg from "../../assets/icons/user.svg";
import "./adminLayout.scss";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <div className="admin-layout__start">
        <div className="admin-layout__start--user-information d-flex align-items-center">
         
        
         <img src={userImg} alt="User Img" width={40} height={40} />

          <div>
            <h5 className="admin-layout__start--user-name">
              Shodiyor Shukurov
            </h5>
            <p className="admin-layout__start--user-role">Adminstrator</p>
          </div>
        </div>
      </div>
      <div className="admin-layout__end">{children}</div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.object,
};

export default AdminLayout;
