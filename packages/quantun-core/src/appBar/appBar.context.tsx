import { createContext, useContext } from 'react'
import { useDisclosure } from '@mantine/hooks'

interface IAppBarContext {
  drawerOpened: boolean
  toggleDrawer: () => void
  closeDrawer: () => void
}

export const AppBarContext = createContext({} as IAppBarContext)

export function AppBarProvider({ children }: { children: React.ReactNode }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)

  return (
    <AppBarContext.Provider
      value={{
        drawerOpened,
        toggleDrawer,
        closeDrawer,
      }}
    >
      {children}
    </AppBarContext.Provider>
  )
}

export function useAppBarContext() {
  if (!AppBarContext) {
    throw new Error('useAppBarContext must be used within a AppBarProvider')
  }

  return useContext(AppBarContext)
}
