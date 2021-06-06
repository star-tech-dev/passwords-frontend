import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { nextTick } from '../../helpers/next-tick'

import UIInput from '../ui/input'
import IconSearch from '../icons/search'
import IconCross from '../icons/cross'

import './_index.scss'

interface SearchBarOptions {
  onChange?: Function
}

const SearchBar = forwardRef((props: SearchBarOptions, ref: any) => {
  const delay = 300
  const [_timeout, _setTimeout] = useState<any>(null)
  const [query, setQuery] = useState('')
  const innerRef = useRef(null)

  const filterItems = () => {
    if (props.onChange) {
      props.onChange(query)
    }
  }

  const clear = () => {
    setQuery('')
    nextTick(() => {
      (innerRef.current as any)?.focus()
    })
  }

  useEffect(() => {
    clearTimeout(_timeout)
    _setTimeout(null)

    query
      ? _setTimeout(setTimeout(filterItems, delay))
      : filterItems()
  }, [query])

  useEffect(() => {
    ref.current = {
      focus: (innerRef.current as any)?.focus
    }
  }, [ref])

  return (
    <div className="component -search-bar">
      <div className="icon-parent flex center">
        {query
          ? <div className="clear flex center" onClick={clear}>
            <IconCross />
          </div>
          : <IconSearch/>}
      </div>

      <UIInput
        ref={innerRef}
        value={query}
        theme="clean"
        placeholder="Start typing to search..."
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} />
    </div>
  )
})

SearchBar.displayName = 'SearchBar'

export default SearchBar
