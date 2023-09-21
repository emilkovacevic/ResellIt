import Link from 'next/link'
import { getServerSession } from "next-auth/next"
import { options } from '@/app/api/auth/[...nextauth]/options'
import SignOut from '@/utils/SignOut'
import ToggleTheme from '../theme/ToggleTheme'

const Navbar = async () => {

  const session = await getServerSession(options)

  return (
    <nav className="sticky top-0 z-50 bg-primary py-4">
      <ul className='flex gap-4'>
        {session ?
          <SignOut />
          :
          <>
            <li>
              <Link href='/signin'>Sign In</Link>
            </li>
            <li>
              <Link href='/register' className=' text-secondary'>Register</Link>
            </li>
          </>
        }
        <li> <ToggleTheme /></li>
      </ul>
    </nav>
  )
}

export default Navbar
