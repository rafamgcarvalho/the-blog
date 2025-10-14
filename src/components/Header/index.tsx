'use client';

import clsx from "clsx";

export function Header() {
  return (
    <h1 className={clsx(
      'text-xl',
      'font-bold',
      'text-blue-500',
      'hover:text-blue-50',
      'transition',
      'duration-1000'
    )}
      onClick={() => alert(123)}
    >
      Texto do meu h1
    </h1>
  )
}
