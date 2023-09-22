import Link from 'next/link'
import { getServerSession } from "next-auth/next"
import { options } from '@/app/api/auth/[...nextauth]/options'
import SignOut from '@/utils/SignOut'
import ToggleTheme from '../theme/ToggleTheme'

const Navbar = async () => {

  const session = await getServerSession(options)

  return (
    <nav className="sticky top-0 z-50 bg-secondary py-4 text-secondary-foreground  shadow-md">
      <ul className='flex gap-4 justify-between'>
        <li>
          <ul className='flex gap-4 justify-between px-2'>
            <li className='cursor-pointer'><ToggleTheme /></li>
            <li><Link href='/' className='font-bold text-lg'>Resell IT</Link></li>
          </ul>
        </li>
        {session ?
          <li>
            <ul className='flex gap-4 justify-between'>
              <li><Link href='/account'>Account</Link></li>
              <li><SignOut /></li>
              <li><Link href='/new-post' className='hover:bg-accent bg-primary font-extrabold text-primary-foreground py-[22px] px-4'>ADD NEW</Link></li>
            </ul>
          </li>
          :
          <li>
            <ul className='flex gap-4 justify-between'>
              <li> <Link href='/signin'>Sign In</Link></li>
              <li><Link href='/register' >Register</Link></li>
              <li><Link href='/new-post' className='hover:bg-accent hover:text-accent-foreground bg-primary font-extrabold text-primary-foreground py-[22px] px-4'>ADD NEW</Link></li>
            </ul>
          </li>
        }
      </ul>
    </nav>
  )
}

export default Navbar
