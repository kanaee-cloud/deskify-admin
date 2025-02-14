import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <ul>
        <li>
          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`
            }
          >
            Packages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/laptop"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`
            }
          >
            Laptop
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar