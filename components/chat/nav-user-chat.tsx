"use client";

import { ChevronUp, LoaderIcon, LogOut } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar2Menu,
  Sidebar2MenuButton,
  Sidebar2MenuItem,
  useSidebar2,
} from "./chat-sideprovider";

import { signOut, useSession } from "next-auth/react";
import { User } from "next-auth";
import { guestRegex } from "@/lib/constants";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function NavUser({ user }: { user: User }) {
  const { isMobile } = useSidebar2();
  const { data, status } = useSession();
  const isGuest = guestRegex.test(data?.user?.email ?? "");
  const router = useRouter();

  return (
    <Sidebar2Menu>
      <Sidebar2MenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {status === "loading" ? (
              <Sidebar2MenuButton className="data-[state=open]:bg-sidebar-accent bg-background data-[state=open]:text-sidebar-accent-foreground h-10 justify-between">
                <div className="flex flex-row gap-2">
                  <div className="size-6 bg-zinc-500/30 rounded-full animate-pulse" />
                  <span className="bg-zinc-500/30 text-transparent rounded-md animate-pulse">
                    Loading auth status
                  </span>
                </div>
                <div className="animate-spin text-zinc-500">
                  <LoaderIcon />
                </div>
              </Sidebar2MenuButton>
            ) : (
              <Sidebar2MenuButton
                data-testid="user-nav-button"
                className="data-[state=open]:bg-sidebar-accent bg-background data-[state=open]:text-sidebar-accent-foreground h-10"
              >
                <Image
                  src={`https://avatar.vercel.sh/${user.email}`}
                  alt={user.email ?? "User Avatar"}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span data-testid="user-email" className="truncate">
                  {isGuest ? "Guest" : user?.email}
                </span>
                <ChevronUp className="ml-auto" />
              </Sidebar2MenuButton>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Image
                  src={`https://avatar.vercel.sh/${user.email}`}
                  alt={user.email ?? "User Avatar"}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span data-testid="user-email" className="truncate">
                    {isGuest ? "Guest" : user?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <LogOut />
              <button
                type="button"
                className="w-full text-start"
                onClick={() => {
                  if (status === "loading") {
                    toast.error(
                      "'Checking authentication status, please try again!'",
                    );

                    return;
                  }

                  if (isGuest) {
                    router.push("/login");
                  } else {
                    signOut({
                      redirectTo: "/ai",
                    });
                  }
                }}
              >
                {isGuest ? "Login to your account" : "Sign out"}
              </button>
        
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Sidebar2MenuItem>
    </Sidebar2Menu>
  );
}
