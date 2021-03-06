import React from 'react'

import style from './Settings.module.scss'


const animals = [
  { id: 1, animal: "Dog" },
  { id: 2, animal: "Bird" },
  { id: 3, animal: "Cat" },
  { id: 4, animal: "Mouse" },
  { id: 5, animal: "Horse" }
];

function Settings() {
  return (
    <div>
      Настройки
      <ul>
        {animals.map(item => (
          <li key={item.id} className={`${style.__message} block`}>
            <div>
              {item.animal}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Settings
