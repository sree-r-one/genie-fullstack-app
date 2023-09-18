import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Toggle } from ".";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow dark:bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto flex max-w-7xl items-center justify-between  p-2">
            {/* Left Side */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              {/* Navigation */}
              <div className="ml-6 hidden sm:inline">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "rounded-lg bg-blue-400 p-2 font-bold text-white shadow-md"
                          : "p-2 font-bold text-gray-400 hover:bg-gray-200 hover:text-gray-900 hover:dark:bg-gray-700 hover:dark:text-gray-50",
                        "rounded-md px-3 py-2 text-sm ",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="">
              {/* <h1 className="text-gray-900">Navbar</h1> */}
              <Toggle />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
