"use client";

import { logoutAction } from "@/actions/login/logout-action";
import clsx from "clsx";
import { CircleXIcon, FileTextIcon, HourglassIcon, HouseIcon, LogOutIcon, MenuIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses =clsx(
    "bg-slate-900 text-slate-100 rounded-lg",
    "flex flex-col mb-8",
    "sm:flex-row sm:flex-wrap",
    !isOpen && "h-10",
    !isOpen && "overflow-hidden",
    "sm:overflow-visible sm:h-auto"
  );
  const LinkClasses = clsx(
    "[&>svg]:w-[16] [&>svg]:h-[16] px-4",
    "flex items-center justify-start gap-2 cursor-pointer",
    "transition hover:bg-slate-800 rounded-lg",
    "h-10",
    "shrink-0"
  );

  const openCloseBtnClasses = clsx(LinkClasses, "text-blue-200 italic", "sm:hidden")

  function handleLogout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    startTransition(async () => {
      await logoutAction();
    })
  }

  return (
    <nav className={navClasses}>
      <button onClick={() => setIsOpen(s => !s)} className={openCloseBtnClasses}>
        {!isOpen && (
          <>
            <MenuIcon />
            Menu
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon />
            Fechar
          </>
        )}
      </button>

      <a className={LinkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>

      <Link className={LinkClasses} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>

      <Link className={LinkClasses} href="/admin/post/new">
        <PlusIcon />
        Criar post
      </Link>

      <a onClick={handleLogout} href="#" className={LinkClasses}>
        {isPending && (
          <>
            <HourglassIcon />
            Aguarde...
          </>
        )}

        {!isPending && (
          <>
            <LogOutIcon />
            Sair
          </>
        )}
      </a>
    </nav>
  );
}
