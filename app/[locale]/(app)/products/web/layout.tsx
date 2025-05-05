import React from "react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { BlocksNav } from "@/components/block-nav";
import { useTranslations } from "next-intl";


export default function WebLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
   const t = useTranslations("Web")
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>{t("title")}</PageHeaderHeading>
        <PageHeaderDescription>{t("description")}</PageHeaderDescription>
      </PageHeader>
      <div id="products" className="border-grid scroll-mt-24 border-b">
        <div className="container-wrapper">
          <div className="container flex items-center py-4">
            <BlocksNav />
          </div>
        </div>
      </div>
      <div className="container-wrapper flex-1">{children}</div>
    </>
  );
}
