"use client";

import * as React from "react";
import Image from "next/image";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { ImperativePanelHandle } from "react-resizable-panels";
import {  registryItemSchema } from "@/contants/z";
import { z } from "zod";

import { Button } from "./ui/button";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Separator } from "./ui/separator";

import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Style } from "@/contants/styles";
import { useTranslations } from "next-intl";

type BlockViewerContext = {
  item: z.infer<typeof registryItemSchema>;
  view: "preview";
  style?: Style["name"];
  setStyle: (style: Style["name"]) => void
  resizablePanelRef: React.RefObject<ImperativePanelHandle> | null;
};

const BlockViewerContext = React.createContext<BlockViewerContext | null>(null);

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext);
  if (!context) {
    throw new Error(
      "useBlockViewer must be used within a BlockViewerProvider.",
    );
  }
  return context;
}

function BlockViewerProvider({
  item,
  children,
}: Pick<BlockViewerContext, "item"> & {
  children: React.ReactNode;
}) {
  const [style, setStyle] =
    React.useState<BlockViewerContext["style"]>("new-york");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const resizablePanelRef = React.useRef<any>(null);


  return (
    <BlockViewerContext.Provider
      value={{
        item,
        view: "preview",
        style,
        setStyle,
        resizablePanelRef,
      }}
    >
      <div
        id={item.name}
        data-view={"preview"}
        className="group/block-view-wrapper flex min-w-0 flex-col items-stretch gap-4"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "930px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  );
}

function BlockViewerToolbar() {
  const { item, resizablePanelRef } = useBlockViewer();
  const t = useTranslations("Web.view");

  return (
    <div className="flex w-full items-center gap-2 md:pr-[14px]">
      <Separator orientation="vertical" className="mx-2 hidden h-4 lg:flex" />
      <a
        href={`#${item.name}`}
        className="text-sm font-medium underline-offset-2 hover:underline"
      >
        {t(`${item.description}`)}
      </a>
      <div className="ml-auto hidden items-center gap-2 md:flex">
        <div className="hidden h-7 items-center gap-1.5 rounded-md border p-[2px] shadow-none lg:flex">
          <ToggleGroup
            type="single"
            defaultValue="100"
            onValueChange={(value) => {
              if (resizablePanelRef?.current) {
                resizablePanelRef.current.resize(parseInt(value));
              }
            }}
          >
            <ToggleGroupItem
              value="100"
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Desktop"
            >
              <Monitor className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="60"
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Tablet"
            >
              <Tablet className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="30"
              className="h-[22px] w-[22px] min-w-0 rounded-sm p-0"
              title="Mobile"
            >
              <Smartphone className="h-3.5 w-3.5" />
            </ToggleGroupItem>
            <Separator orientation="vertical" className="h-4" />
            <Button
              size="icon"
              variant="ghost"
              className="h-[22px] w-[22px] rounded-sm p-0"
              asChild
              title="Open in New Tab"
            ></Button>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}



function BlockViewerView() {
  const { item, style, resizablePanelRef } = useBlockViewer();

  return (
    <div className="group-data-[view=code]/block-view-wrapper:hidden md:h-[--height]">
      <div className="grid w-full gap-4">
        <ResizablePanelGroup direction="horizontal" className="relative z-10">
          <ResizablePanel
            ref={resizablePanelRef}
            className="relative aspect-[4/2.5] rounded-xl border bg-background md:aspect-auto"
            defaultSize={100}
            minSize={30}
          >
            <Image
              src={`/r/styles/${style}/${item.name}-light.png`}
              alt={item.name}
              data-block={item.name}
              width={1440}
              height={900}
              className="object-cover dark:hidden md:hidden md:dark:hidden"
            />
            <Image
              src={`/r/styles/${style}/${item.name}-dark.png`}
              alt={item.name}
              data-block={item.name}
              width={1440}
              height={900}
              className="hidden object-cover dark:block md:hidden md:dark:hidden"
            />
            <iframe
              src={`/view/styles/${style}/${item.name}`}
              height={item.meta?.iframeHeight ?? 930}
              className="relative z-20 hidden w-full bg-background md:block"
            />
          </ResizablePanel>
          <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

function BlockViewer({ item, ...props }: Pick<BlockViewerContext, "item">) {
  return (
    <BlockViewerProvider item={item} {...props}>
      <BlockViewerToolbar />
      <BlockViewerView />
    </BlockViewerProvider>
  );
}

export { BlockViewer };
