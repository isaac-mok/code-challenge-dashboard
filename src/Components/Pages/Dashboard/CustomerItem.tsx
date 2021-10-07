import { ReactElement } from "react";

export default function CustomerItem (props: CustomerItemProps): ReactElement {
  const { name, location } = props

  return (
    <li className="flex my-4">
      <div className="mx-4">Icon</div>
      <div>
        <p className="font-bold">{ name }</p>
        <p className="text-xs text-gray-500">{ location }</p>
      </div>
    </li>
  )
}

interface CustomerItemProps {
  name: string
  location: string
}
