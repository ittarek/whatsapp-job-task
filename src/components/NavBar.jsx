const NavBar = () => {
  return (

      <div className="navbar  justify-center items-center gap-5  w-full   bg-[#1A9050]">
        {/* dropdown by filter */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost normal-case  text-xl bg-[#4472C5] ">
            <a className="">Filter</a>
          </label>
          <ul
            tabIndex={0}
            className="mt-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#ED7D31] w-32 font-bold"
          >
            <li>
              <a>New</a>
            </li>
            <li>
              <a>Old</a>
            </li>
            <li>
              <a>New</a>
            </li>
          </ul>
        </div>

{/* search bar */}
        <div className="flex  ">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered  md:w-auto "
            />
        
          </div> <div className=" relative bg-[#30D195] -ml-11 h-12 w-12 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
      </div>

  );
};

export default NavBar;
