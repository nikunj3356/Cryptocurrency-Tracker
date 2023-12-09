import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-3 h-16 flex drop-shadow-[0_2px_2px_rgba(155,155,155,0.25)] box-border border-b-2 border-solid border-[#d8d8d8]">
      <div className="flex w-full justify-between items-center">
        <div className="font-medium text-[#4a4a4a]">Crypto Currency Tracker</div>
        <Link to={`/`}>
          <HomeIcon sx={{ color: "#4a4a4a" }} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
