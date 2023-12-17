'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

function getMediaPreference(): string {
  return localStorage.getItem('theme')
    || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

export default function Intro() {
  const [userTheme, setUserTheme] = useState('dark');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      setTheme(getMediaPreference())
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = userTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  const setTheme = (theme: string) => {
    setUserTheme(theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Image src="/avatar.png" alt="avatar" width={60} height={60} />
        <div>
          <button className="h-[40px] w-[40px] rounded-full fill-violet-500 dark:fill-yellow-200 stroke-violet-500 dark:stroke-yellow-200 bg-zinc-100 dark:bg-slate-500 p-2" onClick={toggleTheme} aria-label="Theme Toggler">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
              {userTheme === 'dark' ? <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
                : <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />}
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">Steven Dao</h1>
        <h2 className="text-2xl">
          Technical Lead/Full Stack Dev &&nbsp;
          <span className="relative">Ailurophilic&nbsp;<span className="hidden align-center absolute hover:visible">🐱</span></span>
          <span className="relative">Cynophilist<span className="hidden align-center absolute hover:visible">🐶</span></span>
        </h2>
        <h3 className="text-xl font-light">I make some open-source packages, mostly in Vue, Meteor & Alfred.</h3>
      </div>
    </section >
  )
}
