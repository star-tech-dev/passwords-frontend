import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { nextTick } from '../../helpers/next-tick'
import { itemsFiltered } from '../../store/app/events'
import { $modals } from '../../store/modals/store'

import UIInput from '../ui/input'
import IconSearch from '../icons/search'
import IconCross from '../icons/cross'

import './_index.scss'

interface onKeyUpEvent extends Event {
  keyCode?: number
}

interface SearchBarOptions {
  onChange?: Function
}

const SearchBar = forwardRef((props: SearchBarOptions, ref: any) => {
  const { t } = useTranslation()
  const delay = 300
  const [_timeout, _setTimeout] = useState<any>(null)
  const [query, setQuery] = useState('')
  const innerRef = useRef(null)

  const filterItems = () => {
    if (props.onChange) {
      props.onChange(query)
      itemsFiltered()
    }
  }

  const clear = () => {
    setQuery('')
    nextTick(() => {
      (innerRef.current as any)?.focus()
    })
  }

  const onKeyUp = useCallback((e: onKeyUpEvent) => {
    if ($modals.getState().length) {
      return
    }

    let watchFocus = true
    let target = document.activeElement
    while (target) {
      if (target.classList.contains('-search-bar')) {
        watchFocus = false
        target = null
        return
      }
      target = target.parentElement
    }

    if (!watchFocus) {
      return
    }

    if (e.keyCode === 27) { // esc
      nextTick(() => {
        (innerRef.current as any)?.focus()
      })
    }
  }, [])

  const onFieldKeyUp = useCallback((e: onKeyUpEvent) => {
    if (e.keyCode === 27) { // escape
      setQuery('')
    }
  }, [])

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

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp)
    const field = document.querySelector('.component.-search-bar input') as HTMLElement
    field.addEventListener('keyup', onFieldKeyUp)
    return () => {
      document.removeEventListener('keyup', onKeyUp)
      field.removeEventListener('keyup', onFieldKeyUp)
    }
  }, [])

  return (
    <div className="component -search-bar">
      <div className="icon-parent flex center">
        {query
          ? <div className="icon-container -cross flex center" onClick={clear}>
            <IconCross />
          </div>
          : <div className="icon-container -search">
            <IconSearch/>
          </div>}
      </div>

      <UIInput
        ref={innerRef}
        value={query}
        theme="clean"
        placeholder={t('aside.sub.search_placeholder')}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} />
    </div>
  )
})

SearchBar.displayName = 'SearchBar'

export default SearchBar
