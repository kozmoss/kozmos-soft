// app/[locale]/(app)/products/web/[...categories]/page.tsx

import { getAllBlockIds } from "@/lib/blocks";
import { BlockDisplay } from "@/components/block-display";
import { registryCategories } from "@/contants/web";

export const dynamicParams = false;

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }));
}

interface PageProps {
  params: Promise<{
    categories?: string[];
  }>;
}

export default async function BlocksPage({ params }: PageProps) {
  const { categories } = await params;
  const blocks = await getAllBlockIds(["registry:block"], categories ?? []);

  return (
    <>
      {blocks.map((name: string) => (
        <div
          key={name}
          className="border-grid container border-b py-8 first:pt-6 last:border-b-0 md:py-12"
        >
          <BlockDisplay name={name} />
        </div>
      ))}
    </>
  );
}
