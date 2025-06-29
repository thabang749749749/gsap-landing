const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <p>Velvet Pour</p>
        </a>

        <ul>
          {[{title: 'About Us', }]}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
