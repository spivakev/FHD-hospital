import React, { Component } from 'react'
import HeaderIcons from '../HeaderIcons'
import './style.css'


export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header__container header__wrapper">
          <div className="header__left">
            <HeaderIcons iconKey="logo" />
            <div className="header__title">MyData</div>
          </div>
          <div className="header__right">

            <form>
              <input className="header__search" type="text" placeholder="Поиск по медкарте" />
            </form>

            <div className="header__todo"></div>
            <div className="header__chat"></div>
            <div className="header__notification"></div>
            <div className="header__avatar"></div>
          </div>


        </div>
      </div>
    )
  }

};

//export default Header;