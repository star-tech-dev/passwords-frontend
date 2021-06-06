import React, { useEffect, useState } from 'react'
import { nextTick } from '../helpers/next-tick'

import Items from '../components/items'
import SearchBar from '../components/search-bar'

function HomePage () {
  const [searchQuery, setSearchQuery] = useState('')
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
            <SearchBar ref={searchField} onChange={(query: string) => setSearchQuery(query)} />
          </div>
          <div>sort by: default</div>
        </div>

        <div>
          <Items searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
