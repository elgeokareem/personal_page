import { json, redirect } from "@remix-run/node";
import { Link, useActionData } from "@remix-run/react";
import { validateLoginRegisterData } from "../../utils/auth.utils";
import { login } from "../../utils/session.server";
import { ToastContainer, toast } from "react-toastify";

import toastcss from "react-toastify/dist/ReactToastify.css";
export const links = () => {
  return [{ rel: "stylesheet", href: toastcss }];
};

type ErrorLogin = Record<string, any>;

function badRequest(data: ErrorLogin, statusCode: number = 400) {
  return json(data, { status: statusCode });
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const project = validateLoginRegisterData(formData);

  if (project !== true) {
    return badRequest(project, project.statusCode);
  }

  // Si no hay errores, buscamos en db
  const userResponse = await login({ email, password } as {
    email: string;
    password: string;
  });

  if (userResponse.errorData) {
    return badRequest(
      { errorData: userResponse.errorData },
      userResponse.statusCode
    );
  }

  return redirect("/");
}

export default function Login() {
  const actionData = useActionData();

  if (actionData?.errorData) {
    toast.error(actionData.errorData.error);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col w-2/5 gap-10 px-6 py-12 align-middle rounded bg-slate-500">
          <div className="text-3xl text-center">LOGIN</div>

          <form method="POST" className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
            <div className="bg-red-500">
              {actionData?.errorData.errorEmail &&
                actionData.errorData.errorEmail}
            </div>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <div className="bg-red-500">
              {actionData?.errorData.errorPassword &&
                actionData.errorData.errorPassword}
            </div>

            <Link to="/auth/forgotpassword">Forgot password?</Link>

            <button
              type="submit"
              className="py-3 rounded mt-7 bg-gradient-to-r from-green-400 to-blue-500"
            >
              LOGIN
            </button>
          </form>

          <div>
            <p className="text-center">Or sign up using</p>
            <div className="flex justify-center">
              <div>twitter</div>
              <div>github</div>
            </div>
          </div>

          <div>
            Not a user? <Link to="/auth/register">Sign up</Link>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} position={"bottom-center"} />
    </>
  );
}
