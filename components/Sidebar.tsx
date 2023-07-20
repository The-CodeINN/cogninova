"use client";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='space-y-4 py-4 flex flex-col h-full text-white bg-[#111827]'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/' className='flex items-center pl-3 mb-14'>
          <div className='relative w-4 h-8 mr-4'>
            <Image fill alt='Logo' src='/logo.png' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
