import * as React from "react";
import { getRegistryItem } from "@/lib/registry";
import { BlockViewer } from "./block-view";

export async function BlockDisplay({ name }: { name: string }) {
  const item = await getCachedRegistryItem(name);

  return item ? <BlockViewer item={item} /> : null;
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});
