import type { MetaFunction } from "@remix-run/node";
import {
  // Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
  // useLoaderData
} from "@remix-run/react";
import styles from "./tailwind.css";
import { Navbar } from "./components/menu/Navbar.menu";
import { getUser } from "./utils/session.server";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Mi Blog",
  viewport: "width=device-width,initial-scale=1"
});

export async function loader({ request }: { request: Request }) {
  const user = await getUser(request);

  const data = {
    user
  };

  return data;
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>{title ? title : "Remix Blog"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  // const { user } = useLoaderData();
  // const user = {} as any;

  return (
    <>
      <Navbar />

      <div className="px-6 py-3">{children}</div>
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
}
