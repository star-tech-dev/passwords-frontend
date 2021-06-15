import React, { ComponentProps } from 'react'
import { Link } from 'react-router5'

interface NavItemProps extends ComponentProps<any> {
  children?: any,
  routeName?: string,
  className?: string
}

function NavItem (props: NavItemProps) {
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    props.onClick && props.onClick()
  }

  return (
    <div className="component -nav-item">
      {props.routeName
        ? <Link {...props}>
        {props.children}
      </Link>
        : <a {...props} href={props.href || '#'} onClick={onClick}>
        {props.children}
      </a>}
    </div>
  )
}

export default NavItem
