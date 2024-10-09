import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
function Layout() {
    return <>
        <div className="container-fluid ">
            <Navbar />
            <div className="" style={{ backgroundColor: " #ffffcc", display: "flex", flexDirection: "column" }}>        <Outlet />
            </div>
        </div>

    </>
}
export default Layout;