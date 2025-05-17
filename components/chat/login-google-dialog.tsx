"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function LoginDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const t = useTranslations("loginDialog");

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/chat" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <Image
            src={"/static/image/kozmos.png"}
            height={64}
            width={64}
            alt="kozmos"
          />

          <DialogHeader>
            <DialogTitle className="sm:text-center">{t("title")}</DialogTitle>
            <DialogDescription className="sm:text-center">
              {t("description")}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
          <span className="text-xs text-muted-foreground">{t("or")}</span>
        </div>

        <Button onClick={handleGoogleLogin} variant="outline">
          <Image
            src="/static/icons/google.svg"
            alt="Logo"
            width={18}
            height={18}
          />{" "}
          {t("continueWithGoogle")}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          {t("terms")}{" "}
          <Link
            className="underline hover:no-underline"
            href="/legal/terms-of-use"
          >
            {t("termsLink")}
          </Link>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
