"use client";

import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import React, { useState } from 'react';

export default function NavigationWrapper() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <>
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
    </>
  );
}
