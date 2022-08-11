import { Disclosure } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  MdOutlineLogout,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineShoppingBag,
  MdOutlineSpaceDashboard,
  MdSearch,
} from 'react-icons/md'
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames'
import Link from 'next/link'
import { AppAuthentication } from '../../lib/authentication'

const handleLogout = () => {
  const appAuth = new AppAuthentication()
  appAuth.logout()
}

const SideNavbar = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  })

  const Sidedata = [
    {
      label: 'Home',
      icon: <MdOutlineSpaceDashboard />,
    },

    {
      label: 'Items',
      icon: <MdOutlineShoppingBag />,
    },
    {
      label: 'Search',
      icon: <MdSearch />,
    },
    {
      label: 'Settings',
      icon: <MdOutlineSettings />,
    },
    {
      label: 'More',
      icon: <MdOutlineMoreHoriz />,
    },
  ]

  const SideNavbarComponent = (props: { label: string; icon?: any }) => {
    return (
      <div>
        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
          <span className="text-2xl text-gray-600 group-hover:text-white ">
            {props.icon}
          </span>
          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
            {/* {!isTabletOrMobileDevice ?  {props.label} : ''}{' '} */}
            {props.label}
          </h3>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Inventory Dashboard
            </h1>

            <div className=" my-4 border-b border-gray-100 pb-4">
              <Link href="/">
                <a>
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      {!isTabletOrMobileDevice ? ' Home ' : ''}{' '}
                    </h3>
                  </div>
                </a>
              </Link>
              <Link href="/item">
                <a>
                  <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineShoppingBag className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      {!isTabletOrMobileDevice ? ' Items ' : ''}{' '}
                    </h3>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdSearch className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      {!isTabletOrMobileDevice ? ' Search ' : ''}{' '}
                    </h3>
                  </div>
                </a>
              </Link>
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  {!isTabletOrMobileDevice ? ' Settings ' : ''}{' '}
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  {!isTabletOrMobileDevice ? ' More ' : ''}{' '}
                </h3>
              </div>
            </div>
            {/* logout */}
            <div
              className=" m-4 absolute inset-x-0 bottom-0"
              onClick={() => {
                handleLogout()
              }}
            >
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}

export default SideNavbar
