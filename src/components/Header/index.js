import React, { Component } from 'react'
import HeaderIcons from '../HeaderIcons'
import Avatar from '../Avatar'
import './style.css'
import avatar from '../../img/avatar.png'


export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header__container header__wrapper">
          <div className="header__left">
            <HeaderIcons iconKey="logo" />
            <div className="header__title">My Data</div>
          </div>
          <div className="header__right">

            <form className="header__form">
              <input className="header__search" type="text" placeholder="Поиск по медкарте" />
            </form>

            <div className="header__todo header__icon">
              <HeaderIcons iconKey="todo" />
            </div>
            <div className="header__chat header__icon">
              <HeaderIcons iconKey="chat" />
            </div>
            <div className="header__notification header__icon">
              <HeaderIcons iconKey="notification" />
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
