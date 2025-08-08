"use client"

import { Button } from "@/components/ui/button"
import ContactsCard from "@/components/contacts-card"
import { cn } from "@/lib/utils"

type Props = {
  active: string
  onChange: (key: string) => void
}

const items = [
  { key: "hello", label: "/" },
  { key: "about", label: "about" },
  { key: "skills", label: "skills" },
  { key: "projects", label: "projects" },
  { key: "404", label: "404" },
]

export default function SidebarNav({ active, onChange }: Props) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 md:grid-cols-1">
        {items.map((item, idx) => (
          <div
            key={item.key}
            className={cn(
              "border border-white/60",
              idx === 0 ? "" : "",
              idx === items.length - 1 ? "" : ""
            )}
          >
            <Button
              variant="ghost"
              className={cn(
                "md:block flex items-start h-full md:h-14 w-full justify-start rounded-none text-center text-xl text-[#DAD9D8] hover:bg-[#DAD9D8] hover:text-black",
                active === item.key ? "bg-white/10 underline" : ""
              )}
              onClick={() => onChange(item.key)}
              aria-current={active === item.key ? "page" : undefined}
            >
              {item.label}
            </Button>
          </div>
        ))}
        <div className="md:hidden flex justify-end items-end">
        <ContactsCard />
        </div>
      </div>
    </div>
  )
}
