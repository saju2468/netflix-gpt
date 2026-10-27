export const CheckValidateData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password,
    );

  const errors = {};

  // If name is passed (in Sign Up mode), validate that it's not empty
  if (name !== undefined && name.trim().length === 0) {
    errors.name = "Full Name cannot be empty";
  }

  if (!isEmailValid) errors.email = "Email is not valid";
  if (!isPasswordValid) errors.password = "Password is not valid";

  return errors;
};
