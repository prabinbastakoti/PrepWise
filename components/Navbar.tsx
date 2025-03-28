'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signOut } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';

const Navbar = () => {
  const handleLogout = async () => {
    await signOut();
    redirect('/sign-in');
  };

  return (
    <nav className='flex justify-between items-center'>
      <Link href='/' className='flex item-center gap-2'>
        <Image src='/logo.svg' alt='Logo' width={38} height={32} />
        <h2 className='text-primary-100'>PrepWise</h2>
      </Link>
      <button className='btn-secondary' onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
