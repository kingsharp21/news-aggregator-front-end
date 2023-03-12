import './Navbar.css'
// import './App.css';
function Navbar() {
    return (
      <nav className="navbar navbar-default flex">
        <div className="container flex">
          <div className="logo-section">
            <span>Harp</span>
          </div>
          <div className="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
          <div className="profile-section flex">
            <i class="fa fa-sliders" aria-hidden="true"></i>
            <i class="fa fa-user" aria-hidden="true"></i>
            {/* <h1>profile</h1> */}
          </div>
        </div>
      </nav>
    );
}

export default Navbar