// lib/registry.ts
import { Index } from "@/__registry__";
import { registryItemSchema } from "@/contants/z";
import { Style } from "@/contants/styles";

export const DEFAULT_REGISTRY_STYLE = "new-york" satisfies Style["name"];

const memoizedIndex: typeof Index = Object.fromEntries(
  Object.entries(Index).map(([style, items]) => [style, { ...items }]),
);

export function getRegistryComponent(
  name: string,
  style: Style["name"] = DEFAULT_REGISTRY_STYLE,
) {
  try {
    const component = memoizedIndex[style]?.[name]?.component;
    
    if (!component) {
      console.warn(`Component not found: ${name} in style ${style}`);
      return null;
    }
    
    return component;
  } catch (error) {
    console.error(`Error getting registry component ${name}:`, error);
    return null;
  }
}

export async function getRegistryItem(
  name: string,
  style: Style["name"] = DEFAULT_REGISTRY_STYLE,
) {
  try {
    // Check if style exists
    if (!memoizedIndex[style]) {
      console.error(`Style not found: ${style}`);
      return null;
    }
    
    const item = memoizedIndex[style][name];

    if (!item) {
      console.warn(`Registry item not found: ${name} in style ${style}`);
      return null;
    }

    // Validate schema
    const result = registryItemSchema.safeParse(item);
    if (!result.success) {
      console.error(`Schema validation failed for ${name}:`, result.error.message);
      return null;
    }

    const parsed = registryItemSchema.safeParse({
      ...result.data,
    });

    if (!parsed.success) {
      console.error(`Final parsing failed for ${name}:`, parsed.error.message);
      return null;
    }

    return parsed.data;
  } catch (error) {
    console.error(`Error getting registry item ${name}:`, error);
    return null;
  }
}

// Debug function
export function debugRegistry() {
  console.log("🗂️ Registry Debug Info:");
  console.log("Available styles:", Object.keys(memoizedIndex));
  
  for (const [style, items] of Object.entries(memoizedIndex)) {
    console.log(`  ${style}:`, Object.keys(items));
  }
}