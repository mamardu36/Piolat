"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function DesktopNav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <nav aria-label="Navigation principale" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {mainNav.map((item) => (
          <li key={item.href} className="group relative">
            <Link
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative flex h-11 items-center gap-1 px-3 text-[0.9375rem] font-medium transition-colors hover:text-blue",
                "after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:bg-blue after:transition-transform",
                isActive(item.href) && "text-blue after:scale-x-100",
              )}
            >
              {item.label}
              {item.children && <ChevronDown aria-hidden className="size-4 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />}
            </Link>
            {item.children && (
              <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="min-w-64 rounded-md border border-line bg-white p-2 shadow-[0_12px_32px_-12px_rgb(28_33_39/0.25)]">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        aria-current={pathname === c.href ? "page" : undefined}
                        className={cn(
                          "block rounded-sm px-3 py-2.5 text-[0.9375rem] hover:bg-mist hover:text-blue",
                          pathname === c.href && "text-blue",
                        )}
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
