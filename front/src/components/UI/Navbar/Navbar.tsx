"use client";

import React from "react";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";

const NavbarComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Store", "Contact"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="sticky top-0 h-max max-w-full rounded-b-3xl px-4 py-2 lg:px-8 lg:py-4 shadow-lg z-50 bg-black bg-opacity-40 border-none"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/images/Whispering Winds-Logotype no name.png"
            alt="ACME Logo"
            className="w-44 "
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white sfThin" href="/home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-white sfThin" href="/about" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white sfThin" href="/store">
            Store
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white sfThin" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          <Link className=" text-white sfThin" href="/login">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-black text-white"
            href="/login/register"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-ful text-white sfThin" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
