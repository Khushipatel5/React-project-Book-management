import { Link } from "react-router-dom"

function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#ebebe0" }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-3" >
            <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREB-13hzrZvWeFB80JmFcpGjSkAIbjCNd4sg&s" style={{ height: 50, width: 50, border: "red" }}></img>

          </div>
          <a className="nav-link active ms-3 fs-3" aria-current="page" href="#" >BooksStore</a>


          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item" >
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book">Book</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newbook">New Book</Link>
            </li>


          </ul>

        </div>
      </div>
    </nav>
  </>
}
export default Navbar