import { json } from "@remix-run/node";
import { validateLoginRegisterData } from "../../utils/auth.utils";
import { Link, useActionData } from "@remix-run/react";
import { register } from "../../utils/session.server";
import type { LoginError } from "../../../types/loginRegister.types";

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

  console.log("pasa por aqui");

  // Si no hay errores, buscamos en db
  const user = await register({ email, password } as {
    email: string;
    password: string;
  });

  console.log("user", user);

  if (user) {
    return user;
  }
}

export default function Register() {
  const actionData = useActionData<LoginError>();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-2/5 gap-10 px-6 py-12 align-middle rounded bg-slate-500">
        <div className="text-center">Register</div>

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

          <button
            type="submit"
            className="py-3 rounded mt-7 bg-gradient-to-r from-green-400 to-blue-500"
          >
            REGISTER
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
          Already a user? <Link to="/auth/login">Sign UP</Link>
        </div>
      </div>
    </div>
  );
}
