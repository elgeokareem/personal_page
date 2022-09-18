import styles from "highlight.js/styles/night-owl.css";
import { Outlet } from "@remix-run/react";

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ];
};

export default function Posts() {
  return (
    <div className="px-[30%]">
      <Outlet />
    </div>
  );
}
