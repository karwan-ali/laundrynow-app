import Link from 'next/link';
import Image from 'next/image';
import LoginForm from './LoginForm';

export default function Home() {
  return (
    <main className='w-screen h-screen text-sm flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center mb-6'>
        <h2 className='mb-2 text-xl font-semibold'>LaundryNow</h2>
        <Image
          alt='LaundryNow logo'
          src='/laundrynow_logo.png'
          style={{ width: 100, height: 100 }}
          width={100}
          height={100}
          priority={true}
        />
      </div>
      <LoginForm />
      <div className='flex m-6'>
        <Link className='text-blue-700 font-semibold' href='/forgot-password'>
          Forgot password?
        </Link>
      </div>
      <div className='flex'>
        <p className='px-1 text-[#C6C6C6]'>Don't have an account?</p>
        <Link className='text-blue-700 font-semibold' href='/register'>
          Sign up
        </Link>
      </div>
    </main>
  );
}
