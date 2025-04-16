import React from "react";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { BlocksNav } from "@/components/block-nav";


const title = "Ideas Beyond the Horizon";
const description =
  "From sleek designs to intelligent systems, we craft digital experiences powered by creativity and code. Web, mobile, and AI—built to inspire.";


export default function WebLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
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
