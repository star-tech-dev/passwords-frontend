import React from 'react'

import MainAside from '../../components/aside/main'
import SubAside from '../../components/aside/sub'

import './_index.scss'

interface LayoutProps {
  children?: React.ReactNode
}

function DefaultLayout ({ children }: LayoutProps) {
  return (
    <div className="layout -default">
      <div className="flex a-stretch">
        <MainAside />
        <SubAside />
        <main>
          <div className="scroll-parent">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default DefaultLayout
