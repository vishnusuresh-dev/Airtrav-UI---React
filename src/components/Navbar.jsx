import logo from '../assets/logo.png'
import notification from '../assets/notification.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 bg-black">

      <div className="flex items-center gap-2">
        <img src={logo} alt="Airtrav Logo" className="h-8 w-auto" />
        <h1 className="text-white text-xl font-bold">Airtrav</h1>
      </div>

      <ul className="flex gap-6 text-[#F4F5F6] font-inter mt-2">
        <li><a href="#">Things To Do</a></li>
        <li><a href="#">Tour</a></li>
        <li><a href="#">Blog</a></li>
      </ul>

      <div className='block'>
        <ul className="flex gap-6 text-white">
          <li><a href="#">USD</a></li>
          <li><a href="#">FAQ</a></li>
          <div>
            <a href='#'>
              <img src={notification} alt="Airtrav Logo" className='mt-1'/>
            </a>
          </div>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar