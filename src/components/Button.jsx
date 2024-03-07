import { Link } from "react-router-dom";

export default function Button({type, to, children, onClick}){
    if (type === "link"){
      return <Link className="relative text-slate-700 font-base" to={to}>{children}</Link>
    }
    else{
        return <button className="bg-amber-400 px-4 py-3 rounded-md font-normal text-amber-900" onClick={onClick}>{children}</button>
    }
  }