import React from 'react'
import useInput from '../../hooks/useinput'

const Test = () => {
  const [name, onChangeName, setName] = useInput()
  return (
    <>
      <input
        type="text"
        placeholder="이름을 입력해주세요."
        onChange = {onChangeName}
        value={name}>
      </input>
      <div>{name}</div>
    </>
  )
}

export default Test