import React from 'react'
import Image from 'next/image'

const NavHeader = () => {
  return (
    <div className="nav-header">
    <div className="brand-logo">
      <a href="index.html">
        {" "}
        <Image
          className="logo-tabib"
          src="/assets/images/download.png"
          alt=""
          height={40} width={50}
        />
      </a>
      <a href="index.html">
        <Image
          className="brand-title"
          src="/assets/images/logo.png"
          alt=""
          height={30} width={150}
        />
      </a>
    </div>
  </div>
  )
}

export default NavHeader