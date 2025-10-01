import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/current-data" >Current Data</Link>
      <Link to="/recent-data">Recent data</Link>
    </nav>
  );
};

export default Navbar;