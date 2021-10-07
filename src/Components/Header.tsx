import { ReactElement } from "react";
import SearchBar from "./Searchbar";

export default function Header ({ toggleSidebar }: { toggleSidebar: () => void }): ReactElement {
  return (
    <div className="flex justify-between px-4 py-4">
      <div className="w-8">
        <button onClick={toggleSidebar}>=</button>
      </div>
      <SearchBar />
      <div className="w-8">
        <button>Icon</button>
      </div>
    </div>
  )
}
