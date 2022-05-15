function validateUsername(email: string) {
  if (email.length < 3) {
    return "Username must be at least 3 characters";
  }

  if (email.length === 0) {
    return "Username must not be empty";
  }
}

function validatePassword(password: string) {
  if (typeof password !== "string" || password.length < 5) {
    return "Password must be greater than 5 characters";
  }
}

export function validateLoginRegisterData(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const fieldErrors = {
    email,
    password,
    errorEmail: validateUsername(email),
    errorPassword: validatePassword(password)
  };

  if (fieldErrors.errorEmail || fieldErrors.errorPassword) {
    return { errorData: fieldErrors, statusCode: 400 };
  }

  return true;
}
