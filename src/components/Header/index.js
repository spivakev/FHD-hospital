import React, { Component } from 'react'
import HeaderIconSprite from '../HeaderIconSprite'
import HeaderIcon from '../HeaderIcon'
import Avatar from '../Avatar'
import './style.css'
import avatar from '../../img/avatar.png'


export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header__container header__wrapper">
          <div className="header__left">
            <HeaderIconSprite iconKey="logo" />
            <div className="header__title">My Data</div>
          </div>
          <div className="header__right">

            <form className="header__form">
              <input className="header__search" type="text" placeholder="Поиск по медкарте" />
            </form>

            <div className="header__todo header__icon">
              <HeaderIcon iconKey="todo" notificationCount="5" />
            </div>
            <div className="header__chat header__icon">
              <HeaderIcon iconKey="chat" notificationCount="2" />
            </div>
            <div className="header__notification header__icon">
              <HeaderIcon iconKey="notification" notificationCount="1" />
            </div>
            <div className="header__avatar">
              <Avatar src={avatar} size="52" />
            </div>
          </div>

        </div>
      </div>
    )
  }

};
