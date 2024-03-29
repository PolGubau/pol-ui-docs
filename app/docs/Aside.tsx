"use client";

import { allDocs } from "contentlayer/generated";
import { usePathname } from "next/navigation";
import React from "react";
import { Sidebar, SidebarCollapse, SidebarItem, useBoolean } from "pol-ui";
import { TbFishHook, TbHelpSquareRounded, TbLayout } from "react-icons/tb";
export const allDocsSorted = allDocs?.sort((a, b) =>
  a.order && b.order ? a.order - b.order : a.title.localeCompare(b.title)
);
export const allComponents = allDocsSorted?.filter(
  (d) => d.doc_type === "component"
);

export const allHooks = allDocsSorted?.filter((d) => d.doc_type === "hook");

export const allHelpers = allDocsSorted?.filter((d) => d.doc_type === "helper");

export const allBase = allDocsSorted?.filter((d) => d.doc_type === "base");

const Aside = () => {
  // some docs have a order field, so we sort them by that, otherwise alphabetically

  const pathname = usePathname();
  const isActive = (path: string) => {
    const pathnameSame = pathname === "/docs/" + path;
    return pathnameSame;
  };

  const { value, toggle } = useBoolean(false);
  return (
    <section className="h-auto">
      <div className="sticky top-[75px]">
        <Sidebar
          onOpenChange={toggle}
          open={value}
          className="h-[92vh] bg-secondary-50 dark:bg-secondary-900"
        >
          {allBase?.map((docs) => {
            return (
              <SidebarItem
                active={isActive(docs.path)}
                key={docs._id}
                href={"/docs/" + docs.path}
                className=" bg-secondary-50 dark:bg-secondary-900"
              >
                {docs.title}
              </SidebarItem>
            );
          })}

          <SidebarCollapse badge="Components" icon={TbLayout}>
            {allComponents?.map((c) => {
              return (
                <SidebarItem
                  key={c._id}
                  active={isActive(c.path)}
                  href={"/docs/" + c.path}
                  className=" bg-secondary-50 dark:bg-secondary-900"
                >
                  {c.title}
                </SidebarItem>
              );
            })}
          </SidebarCollapse>
          <SidebarCollapse badge="Hooks" icon={TbFishHook}>
            {allHooks?.map((c) => {
              return (
                <SidebarItem
                  key={c._id}
                  active={isActive(c.path)}
                  href={"/docs/" + c.path}
                  className=" bg-secondary-50 dark:bg-secondary-900"
                >
                  {c.title}
                </SidebarItem>
              );
            })}
          </SidebarCollapse>
          <SidebarCollapse badge="Helpers" icon={TbHelpSquareRounded}>
            {allHelpers?.map((c) => {
              return (
                <SidebarItem
                  key={c._id}
                  active={isActive(c.path)}
                  href={"/docs/" + c.path}
                  className=" bg-secondary-50 dark:bg-secondary-900"
                >
                  {c.title}
                </SidebarItem>
              );
            })}
          </SidebarCollapse>
        </Sidebar>
      </div>
    </section>
  );
};

export default Aside;
