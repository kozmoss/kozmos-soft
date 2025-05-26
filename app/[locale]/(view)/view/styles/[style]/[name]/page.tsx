/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllBlockIds } from "@/lib/blocks";
import { absoluteUrl, cn } from "@/lib/utils";
import { Style, styles } from "@/contants/styles";

import { getRegistryComponent, getRegistryItem } from "@/lib/registry";

interface PageProps {
  params: Promise<{
    style: Style["name"];
    name: string;
  } | any>;
}

const getCachedRegistryItem = React.cache(
  async (name: string, style: Style["name"]) => {
    return await getRegistryItem(name, style);
  },
);

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { name, style } = await params;
  const item = await getCachedRegistryItem(name, style);

  if (!item) {
    return {};
  }

  const title = item.name;
  const description = item.description;
  return {
    title: `${item.name}${item.description ? ` - ${item.description}` : ""}`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`tr/products/web/${style}/${item.name}`),
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const blockIds = await getAllBlockIds();
  return styles
    .map((style) =>
      blockIds.map((name) => ({
        style: style.name,
        name,
      })),
    )
    .flat();
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    style: Style["name"];
    name: string;
  }>;
}) {
  const { name, style } = await params;
  const item = await getCachedRegistryItem(name, style);
  const Component = getRegistryComponent(name, style);


  console.log(item,"itemmssss")
  console.log(Component,"compoents")


  if (!item || !Component) {
    return notFound();
  }

  return (
    <>
      <div className={cn("themes-wrapper bg-background", item.meta?.container)}>
        <Component />
      </div>
    </>
  );
}
