import React from 'react'
import { ISidebarContextProps } from './sidebar.types'

const SidebarContext = React.createContext({} as ISidebarContextProps)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleToggleExpand = () => setExpanded((current) => !current)

  return (
    <SidebarContext.Provider value={{ expanded, handleToggleExpand }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error('useSidebar() must be used within a <SidebarProvider />')
  }

  return context
}
