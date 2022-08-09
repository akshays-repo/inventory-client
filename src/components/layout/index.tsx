import SideNavbar from './SideNavbar'

type Props = {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <nav>
    
        <SideNavbar />
      </nav>
      <main>{children}</main>
    </div>
  )
}
export default AppLayout
