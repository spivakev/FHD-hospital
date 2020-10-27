import React from 'react'
import MenuItem from '../MenuItem'
import './style.css'

const Sidebar = () => {

  return (
    <div className="sidebar">
      <nav className="menu">
        <MenuItem iconKey="cardiogram" text="Обзор" active />
        <MenuItem iconKey="history" text="История" />
        <MenuItem iconKey="calendar" text="Календарь" />
        <div className="menu__separator" />
        <MenuItem iconKey="happySmile" text="Общий балл" />
        <MenuItem iconKey="bodyMap" text="Карта тела" />
        <div className="menu__separator" />
        <MenuItem iconKey="sadSmile" text="Болезни" />
        <MenuItem iconKey="diagram" text="Лечение" />
        <MenuItem iconKey="roundDiagram" text="Анализы" />
        <MenuItem iconKey="molecule" text="Исследования" />
        <MenuItem iconKey="rocket" text="Направления" />
        <div className="menu__separator" />
        <MenuItem iconKey="community" text="Визиты врача" />
        <MenuItem iconKey="addCard" text="Запись к врачу" />
      </nav>
    </div>
  )
}

export default Sidebar;

