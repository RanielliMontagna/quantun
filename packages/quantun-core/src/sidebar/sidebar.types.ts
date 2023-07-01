import { TablerIconsProps } from '@tabler/icons-react'

export interface ISidebarRootProps {
  children: React.ReactNode
}

export interface SidebarHeaderProps {
  children: React.ReactNode
}

export interface ISidebarContextProps {
  expanded: boolean
  handleToggleExpand: () => void
}

export interface ISidebarItemProps {
  icon: (props: TablerIconsProps) => JSX.Element
  label: string
  path: string
  onClick?: () => void
  hide?: boolean
  activecolor?: string
}

export interface ISidebarFooterItemProps extends Omit<ISidebarItemProps, 'path' | 'activecolor'> {}
