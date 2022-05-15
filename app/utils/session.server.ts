import bcrypt from "bcrypt";
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { db } from "./db.server";

export async function login({
  email,
  password
}: {
  email: string;
  password: string;
}) {
  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    return { errorData: { error: "User not found" }, statusCode: 404 };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return { errorData: { error: "Credentials not valid" }, statusCode: 400 };
  }

  return {};
}

export async function register({
  email,
  password
}: {
  email: string;
  password: string;
}) {
  console.log("entra a register");
  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);

  try {
    await db.user.create({
      data: {
        email,
        password: passwordHashed
      }
    });

    return true;
  } catch (error) {
    console.log("errpr in register", error);
    return false;
  }
}

// Get session secret
const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("SESSION_SECRET environment variable is not set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "remix-run-session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 60,
    httpOnly: true
  }
});

// Create a session middleware
export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  console.log("session", session);
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

export function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUser(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");

  if (!userId) {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      where: {
        id: userId
      }
    });

    return user;
  } catch (error) {
    return null;
  }
}
