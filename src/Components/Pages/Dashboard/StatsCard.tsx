import { ReactElement } from "react";
import cn from 'classnames'

export default function StatsCard (props: StatsCardProps): ReactElement {
  const { em = false, stat, name } = props
  
  const computed = {
    bg: function () {
      return em
        ? 'bg-blue-500'
        : 'bg-white'
    },
    statsClass: function () {
      return em
        ? 'text-white'
        : 'text-blue-500'
    },
    nameClass: function () {
      return em
        ? 'text-white'
        : 'text-gray-500'
    }
  }

  return (
    <div className={cn(computed.bg(), 'shadow-lg rounded-2xl flex justify-between px-8 py-6')}>
      <div className="mr-8">
        <p className={cn('text-4xl', computed.statsClass())}>{stat}</p>
        <p className={computed.nameClass()}>{name}</p>
      </div>
      <div>Icon</div>
    </div>
  )
}

interface StatsCardProps {
  em?: boolean
  stat: string
  name: string
}
