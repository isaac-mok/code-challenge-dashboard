import { ReactElement } from "react";

export default function SearchBar (): ReactElement {
  return (
    <div className="w-60 lg:w-96 bg-white rounded-full border border-gray-500 py-2 px-4 flex">
      <div className="pr-4">Icon</div>
      <input placeholder="Search here" className="flex-1" size={1}></input>
    </div>
  )
}
