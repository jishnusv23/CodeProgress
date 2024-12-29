import { useNavigate } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div className="notfound">
      <h1>404 Page Not Found</h1>
      <button className="back-button" onClick={()=>navigate('/')}>Go Back to Home</button>
    </div>
  );
};

export default NotFound;
