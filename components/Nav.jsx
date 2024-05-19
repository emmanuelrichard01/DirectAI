"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await getProviders();
        setProviders(res);
      } catch (error) {
        console.error("Failed to fetch providers", error);
      }
    };

    fetchProviders();
  }, []);

  const handleSignIn = useCallback((providerId) => {
    signIn(providerId);
  }, []);

  const handleSignOut = useCallback(() => {
    signOut();
  }, []);

  const handleToggleDropdown = useCallback(() => {
    setToggleDropdown((prev) => !prev);
  }, []);

  const handleCloseDropdown = useCallback(() => {
    setToggleDropdown(false);
  }, []);

  const memoizedProviders = useMemo(() => providers, [providers]);

  return (
    <header className="sticky top-0 z-50 w-full mb-16 shadow-sm bg-white border-b border-sky-500">
      <nav className="flex-between w-full py-5 px-12">
        <Link href="/" className="flex gap-2 flex-center" aria-label="Home">
          <Image
            src="/assets/images/dlogo.svg"
            alt="logo"
            width={35}
            height={35}
            className="object-contain"
          />
          <p className="logo_text">DIRECT-AI</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
          {session?.user ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>

              <button type="button" onClick={handleSignOut} className="outline_btn">
                Sign Out
              </button>

              <Link href="/profile" aria-label="Profile">
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </Link>
            </div>
          ) : (
            memoizedProviders && Object.values(memoizedProviders).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => handleSignIn(provider.id)}
                className="black_btn"
              >
                Sign in with {provider.name}
              </button>
            ))
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
          {session?.user ? (
            <div className="flex">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={handleToggleDropdown}
                aria-haspopup="true"
                aria-expanded={toggleDropdown}
              />

              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={handleCloseDropdown}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={handleCloseDropdown}
                  >
                    Create Post
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      handleCloseDropdown();
                      handleSignOut();
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            memoizedProviders && Object.values(memoizedProviders).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => handleSignIn(provider.id)}
                className="black_btn"
              >
                Sign in with {provider.name}
              </button>
            ))
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
