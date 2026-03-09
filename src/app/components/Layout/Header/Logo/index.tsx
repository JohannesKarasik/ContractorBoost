import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center h-full'>
      <Image
        src='/images/logo.png'
        alt='Contractor Boost logo'
        width={220}
        height={60}
        className='block h-11 w-auto object-contain mt-1'
        priority
      />
    </Link>
  )
}

export default Logo