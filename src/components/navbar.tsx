import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/live" >Live Data</Link>
      <Link to="/recent-data">Recent data</Link>
    </nav>
  );
};

export default Navbar;