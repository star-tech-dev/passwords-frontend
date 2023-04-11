import type { State as RouteState } from 'router5/dist/types/base'
import React, { useEffect } from 'react'
import { useRouter } from 'react-router5'

import MainAside from '../../components/aside/main'
import SubAside from '../../components/aside/sub'
import MobileBar from '../../components/mobile-bar'

import './_index.scss'

interface LayoutProps {
  children?: React.ReactNode
}

function DefaultLayout ({ children }: LayoutProps) {
  const $router = useRouter()

  const checkRoute = (route: RouteState) => {
    // TODO: route list for mobile view
    if (['item', 'item.edit', 'add', 'unlock'].includes(route.name) || route.name.includes('settings.')) {
      document.body.classList.remove('-hide-main')
      document.body.classList.add('-hide-sub-aside')
    } else {
      document.body.classList.remove('-hide-sub-aside')
      document.body.classList.add('-hide-main')
    }
  }

  $router.subscribe((data) => {
    checkRoute(data.route as RouteState)
  })

  const checkWindowWidth = () => {
    if (window.innerWidth > 1180) {
      document.body.classList.remove('-mode-mobile')
      document.body.classList.add('-mode-desktop')
    } else {
      document.body.classList.remove('-mode-desktop')
      document.body.classList.add('-mode-mobile')
    }
  }

  const onWindowResize = () => {
    checkWindowWidth()
    checkRoute($router.getState())
  }

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    checkRoute($router.getState())

    return () => {
      window.removeEventListener('resize', onWindowResize)
    }
  })

  return (
    <div className="layout -default">
      <div className="flex a-stretch">
        <MainAside />
        <SubAside />
        <main>
          <div className="scroll-parent">{children}</div>
        </main>
        <MobileBar />
      </div>
    </div>
  )
}

export default DefaultLayout
