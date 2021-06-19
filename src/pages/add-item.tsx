import React, { useState } from 'react'
import { useRoute } from 'react-router5'
import { createItem } from '../store/items/events'
import { isAllFieldsEmpty } from '../helpers/validator'

function AddItemPage () {
  const { router } = useRoute()
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [note, setNote] = useState('')

  const create = async (e: React.FormEvent) => {
    e.preventDefault()
    const item = {
      group: null,
      name,
      url,
      username,
      password,
      note
    }

    if (isAllFieldsEmpty(item, ['group'])) {
      alert('Cannot save empty item.')
    } else {
      const res = await createItem(item)
      router.navigate('item', { id: res._id })
    }
  }

  return (
    <div className="page -add-item">
      <div>Add newItem:</div>
      <form onSubmit={create}>
        <div>
          <div>name</div>
          <input type="text" name="name" value={name} autoFocus={true} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
        </div>
        <div>
          <div>url</div>
          <input type="text" name="url" value={url} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}/>
        </div>
        <div>
          <div>username</div>
          <input type="text" name="username" value={username} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
        </div>
        <div>
          <div>password</div>
          <input type="text" name="password" value={password} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
        </div>
        <div>
          <div>note</div>
          <textarea name="note" value={note} onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNote(e.target.value)}/>
        </div>
        <div>
          <button type="submit">create</button>
        </div>
      </form>
    </div>
  )
}

export default AddItemPage
