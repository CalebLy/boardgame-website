import { useState, type ChangeEvent } from "react";

interface AuthFormProp {
  title: string; // "Log in" vs "Sign Up"
  onSubmit: (data: { email: string; password: string }) => void;
  errorMessage: string | undefined;
}

export const AuthForm = (props: AuthFormProp) => {
  const { title, onSubmit, errorMessage } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <>
      <h2 className="text-white text-xl font-medium">{title}</h2>
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
        {errorMessage && (
          <p className="text-red-500 text-center w-full">{errorMessage}</p>
        )}
        <input
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-full"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary w-full"
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition font-medium w-full"
        >
          Submit
        </button>
      </form>
    </>
  );
};
