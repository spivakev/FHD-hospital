import React from 'react'
import SidebarIconSprite from '../SidebarIconSprite'
import './style.css'

const MenuItem = (props) => {
  let text = props.text
  let iconKey = props.iconKey
  let iconColor;

  let styleClass = "menu-item";
  if (props.active) {
    styleClass += " menu-item--active"
    iconColor = '#ffffff';
  }


  return (
    <div className={styleClass}>
      <span className="menu-item__icon">
        <SidebarIconSprite iconKey={iconKey} color={iconColor} />
      </span>
      <span className="menu-item__text">{text}</span>
    </div>
  )
}

export default MenuItem;