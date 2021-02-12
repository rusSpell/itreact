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


  const [count, setCount] = useState(0);

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>Статус ы: {props.status}</span>
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
      
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>

    </div>
  )

}

export default ProfileStatusWithHooks
