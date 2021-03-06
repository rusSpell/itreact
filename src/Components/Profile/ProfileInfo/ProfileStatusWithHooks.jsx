import React, { useState, useEffect } from 'react'
import style from './ProfileStatus.module.scss'

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false)
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const [status, setStatus] = useState(props.status)
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  
  return (
    <div>
      {
        props.isOwner ?
          !editMode &&
          <div>
            Статус: <span onDoubleClick={activateEditMode}>{!props.status ? 'изменить' : props.status}</span>
          </div> :
          <div>
            Статус: <span >{!props.status ? 'пусто' : props.status}</span>
          </div>
      }
      {editMode &&
        <div>
          <input autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          >
          </input>
        </div>
      }
    </div>
  )

}

export default ProfileStatusWithHooks
