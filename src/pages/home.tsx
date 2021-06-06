import React, { useEffect } from 'react'
import { nextTick } from '../helpers/next-tick'

import Items from '../components/items'
import SearchBar from '../components/search-bar'

function HomePage () {
  const searchField = React.createRef()

  useEffect(() => {
    nextTick(() => {
      (searchField.current as any)?.focus()
    })
  }, [])

  return (
    <div className="page -home">
      <div>
        <div className="flex a-center j-between">
          <div>
            <SearchBar ref={searchField} />
          </div>
          <div>sort by:</div>
        </div>

        <div>
          <Items />
        </div>
      </div>
    </div>
  )
}

export default HomePage
