import classNames from "classnames";
import { AnchorHTMLAttributes, ReactElement, useMemo } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import route from "../routes";

export default function Sidebar (props: SidebarProps): ReactElement {
  return (
    <div className={classNames('bg-blue-500 h-full min-w-[16rem] lg:min-w-0 xl:min-w-[16rem] pl-2', props.isShown ? 'block' : 'hidden')}>
      <div className="flex py-4 text-white mb-6 ml-4">
        <div className="mr-4">Logo</div>
        <div className="font-bold lg:hidden xl:block">Brand Name</div>
      </div>
      <nav>
        <SidebarLink href={route.dashboard}>
          <div className="mr-4">Icon</div>
          <div className="lg:hidden xl:block">Dashboard</div>
        </SidebarLink>
        <SidebarLink href={route.customers}>
          <div className="mr-4">Icon</div>
          <div className="lg:hidden xl:block">Customers</div>
        </SidebarLink>
        <SidebarLink href={route.message}>
          <div className="mr-4">Icon</div>
          <div className="lg:hidden xl:block">Message</div>
        </SidebarLink>
        <SidebarLink href={route.help}>
          <div className="mr-4">Icon</div>
          <div className="lg:hidden xl:block">Help</div>
        </SidebarLink>
        <SidebarLink href={route.settings}>
          <div className="mr-4">Icon</div>
          <div className="lg:hidden xl:block">Settings</div>
        </SidebarLink>
        <SidebarLink href={route.password}>
          <div className="mr-4">Icon</div>
          <div className="lg:hidden xl:block">Password</div>
        </SidebarLink>
        <SidebarLink href={route.signout}>
          <div className="mr-4">Icon</div>
          <div className="lg:hidden xl:block">Sign Out</div>
        </SidebarLink>
      </nav>
    </div>
  )
}

interface SidebarProps {
  isShown: boolean
}

function SidebarLink (props: AnchorHTMLAttributes<HTMLAnchorElement>): ReactElement {
  const href = typeof props.href !== 'undefined' ? props.href : ''
  const dynamicLocation = useLocation()
  const isActive = useMemo(() => {
    return dynamicLocation.pathname === href
  }, [dynamicLocation, href])

  const compute = {
    className: function (): string {
      return isActive
        ? 'flex text-blue-500 pl-4 py-4 bg-white rounded-l-full'
        : 'flex text-white pl-4 py-4'
    }
  }

  return (
    <Link to={href} className={compute.className()}>{props.children}</Link>
  )
}
