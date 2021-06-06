import React, { forwardRef, useEffect, useRef, useState } from 'react'

import './_index.scss'
import UIInput from '../ui/input'

const SearchBar = forwardRef((props, ref: any) => {
  const [_timeout, _setTimeout] = useState<any>(null)
  const [query, setQuery] = useState('')
  const innerRef = useRef(null)

  const filterItems = () => {
    // console.log('filterItems')
  }

  useEffect(() => {
    clearTimeout(_timeout)
    _setTimeout(null)

    query
      ? _setTimeout(setTimeout(filterItems, 1000))
      : filterItems()
  }, [query])

  useEffect(() => {
    ref.current = {
      focus: (innerRef.current as any)?.focus
    }
  }, [ref])

  return (
    <div className="component -search-bar">
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
