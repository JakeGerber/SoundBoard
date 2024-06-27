import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
        <h1>Welcome to the Layout</h1>
        <Link to="/new-card">Go to some path</Link>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
      );
  };
  

export default Layout;
