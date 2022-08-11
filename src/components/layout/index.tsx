import SideNavbar from './SideNavbar'

type Props = {
  children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
  console.log('Layout rendered')
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
