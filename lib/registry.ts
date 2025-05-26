import { Index } from "@/__registry__";
import {  registryItemSchema } from "@/contants/z";
import { Style } from "@/contants/styles";

export const DEFAULT_REGISTRY_STYLE = "new-york" satisfies Style["name"];

const memoizedIndex: typeof Index = Object.fromEntries(
  Object.entries(Index).map(([style, items]) => [style, { ...items }]),
);

export function getRegistryComponent(
  name: string,
  style: Style["name"] = DEFAULT_REGISTRY_STYLE,
) {
  return memoizedIndex[style][name]?.component;
}

export async function getRegistryItem(
  name: string,
  style: Style["name"] = DEFAULT_REGISTRY_STYLE,
) {
  const item = memoizedIndex[style][name];

  if (!item) {
    return null;
  }

  // Fail early before doing expensive file operations.
  const result = registryItemSchema.safeParse(item);
  if (!result.success) {
    return null;
  }

  // Get meta.
  // Assume the first file is the main file.
  // const meta = await getFileMeta(files[0].path)

  // Fix file paths.

  const parsed = registryItemSchema.safeParse({
    ...result.data,

  });

  if (!parsed.success) {
    console.error(parsed.error.message);
    return null;
  }

  return parsed.data;
}

export function fixImport(content: string) {
  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g;

  const replacement = (
    match: string,
    path: string,
    type: string,
    component: string,
  ) => {
    if (type.endsWith("components")) {
      return `@/components/${component}`;
    } else if (type.endsWith("ui")) {
      return `@/components/ui/${component}`;
    } else if (type.endsWith("hooks")) {
      return `@/hooks/${component}`;
    } else if (type.endsWith("lib")) {
      return `@/lib/${component}`;
    }

    return match;
  };

  return content.replace(regex, replacement);
}

export type FileTree = {
  name: string;
  path?: string;
  children?: FileTree[];
};

