
const Header = () => {
  return (
    <header className="absolute w-[77.5%] right-0">
      <nav className="">
        <ul className="flex font-cinzel text-white px-10 py-8 items-center justify-evenly">
          <li className="hidden lg:block"><a href="">About us</a></li>
          <li className="hidden lg:block"><a href="">Projects</a></li>
          <li><a href=""><img className="w-44 " src="/logo.png" alt="logo" /></a></li>
          <li className="hidden lg:block"><a href="">Amenities</a></li>
          <li className="hidden lg:block"><a href="">Contact Us</a></li>
          <li className="hidden lg:block"><a href="">Gallery</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
