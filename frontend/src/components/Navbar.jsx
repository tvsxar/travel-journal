import exitIcon from "../assets/exit-outline.svg";
import addIcon from "../assets/add-outline.svg";

function Navbar({ handleLogout }) {
  return (
    <nav className="flex items-center justify-between select-none border-b-2 border-gray-200 py-4 px-4 sm:px-12 lg:px-25">
      <div className="font-bold text-lg sm:text-2xl">
        Journ
        <span className="text-cyan-500 drop-shadow-[0_0_4px_rgba(34,211,238,0.7)]">
          ee
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="cursor-pointer bg-cyan-500 rounded-xl p-2
         hover:bg-cyan-500/70 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)] 
         active:scale-105"
        >
          <img src={addIcon} alt="exitIcon" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button onClick={handleLogout}
          className="cursor-pointer bg-red-500/80 rounded-xl p-2
         hover:bg-red-500/50 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.7)] 
         active:scale-105"
        >
          <img
            src={exitIcon}
            alt="exitIcon"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
