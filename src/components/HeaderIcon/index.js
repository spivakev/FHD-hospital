import React from 'react'
import HeaderIconSprite from '../HeaderIconSprite'
import RoundCounter from '../RoundCounter'
import './style.css'

const HeaderIcon = (props) => {
  let iconKey = props.iconKey;
  let notificationCount = props.notificationCount;
  let counterStyle = (notificationCount > 0) ? 'header-icon__counter' : 'hide'

  return <div className="header-icon">
    <HeaderIconSprite iconKey={iconKey} />
    <div className={counterStyle} >
      <RoundCounter count={notificationCount} />
    </div>
  </div>
}

export default HeaderIcon;

