import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="flex flex-col h-[585px] p-3 w-60 bg-zinc-800 text-white dark:text-gray-800">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2>Dashboard</h2>
          
          </div>

         

          {/* Navigation Links */}
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <NavLink to={'tutorCollection'} className="flex items-center p-2 space-x-3 rounded-md font-semibold">
                  <span>Tutor Collection</span>
                </NavLink>
              </li>

              <li className="rounded-sm">
                <NavLink to={'studentCollection'} className="flex items-center p-2 space-x-3 rounded-md font-semibold">
                  <span>Student Collection</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink to={'courseCollection'} className="flex items-center p-2 space-x-3 rounded-md font-semibold">
                  <span>Course Collection</span>
                </NavLink>
              </li>
              

              

              <li className="rounded-sm">
                <NavLink to={'/'} className="flex items-center p-2 space-x-3 rounded-md font-semibold">
                  <span>Home</span>
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4">
        <Outlet /> {/* Placeholder for nested routes */}
      </div>
    </div>
  );
};

export default Dashboard;
