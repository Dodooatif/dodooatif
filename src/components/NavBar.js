function NavBar () {
    return (
        <nav>
            <div className="logo">
                <img src="../images/tw.png" alt="Twixt" style={{ height: 70}}/>
            </div>
            <ul className="nav-items">
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
            </ul>
        </nav>
    )
}
export default NavBar;