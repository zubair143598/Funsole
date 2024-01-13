import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'About Us', href: '#Team', current: false },
  { name: 'Services', href: '#project', current: false },
  { name: 'Careers', href: '#', current: false },
  { name: 'Blogs', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Navbar = () => {
  return (
    <Disclosure as="nav" className="">
    {({ open }) => (
      <>
        <div className=" max-w-7xl ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex mt-9 flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0  items-center">
                <a href="">

                <img
                  className=" w-[165px] "
                  src="./assists/logo.png"
                  alt="Your Company"
                  />
                  </a>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={ ' text-white mt-4 hover:text-yellow-300 rounded-md text-[26px]  font-medium'
                      }
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a className='text-white mt-4 hover:text-yellow-300 rounded-md text-[24px] font-bold' href="">+923369628075</a>
                  <button className='uppercase mt-2 text-black hover:text-white rounded-md text-[24px] font-bold bg-yellow-300 px-5 py-2 '>Contact Us</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={'bg-gray-900 text-white ext-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                }
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
                
              </Disclosure.Button>
            ))}
             <a className='text-white hover:text-yellow-300 rounded-md text-[24px] font-bold' href="">+923369628075</a>
                  <button className='uppercase text-black hover:text-white rounded-md text-[24px] font-bold bg-yellow-300 px-4 py-1 '>Contact Us</button>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}

export default Navbar