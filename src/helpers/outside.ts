import { useEffect } from 'react'

export function useOutside (ref: any, cb: Function) {
  useEffect(() => {
    function handleClickOutside (event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
