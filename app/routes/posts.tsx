import styles from "highlight.js/styles/github-dark-dimmed.css";
import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ];
};

export default function Posts() {
  return (
    <div className="px-6 py-3">
      <Outlet />
    </div>
  );
}
