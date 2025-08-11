import React, { useState, useEffect } from "react";
import "./form.css";

interface Errors {
  user?: string;
  email?: string;
  password?: string;
}

interface User {
  user: string;
  email: string;
  password: string;
}

export default function Form() {
  const [info, setInfo] = useState<User>({ user: "", email: "", password: "" });
  const [error, setError] = useState<Errors>({});
  const [users, setUsers] = useState<User[]>([]);

  function validatePassword(password: string): boolean {
    const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{8,})/;
    return passwordRegex.test(password);
  }

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const createUser = (data: User) => {
    const newUser: User = {
      user: data.user,
      email: data.email,
      password: data.password,
    };

    return newUser;
  };

  const cleanForm = () => {
    setInfo({ user: "", email: "", password: "" });
    setError({});
  };

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!info.user.trim() || info.user.length < 3)
      newErrors.user = "Invalid name";
    if (!isValidEmail(info.email)) newErrors.email = "Invalid email";
    if (!validatePassword(info.password))
      newErrors.password = "Invalid password";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    console.log("Users updated:", users);
  }, [users]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Valid form");

      setUsers([...users, createUser(info)]);

      cleanForm();
    } else {
      console.log("Invalid form");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={info.user}
        onChange={(e) => setInfo({ ...info, user: e.target.value })}
        placeholder="User"
      />
      {error.user && <span>{error.user}</span>}

      <input
        type="text"
        value={info.email}
        onChange={(e) => setInfo({ ...info, email: e.target.value })}
        placeholder="Email"
      />
      {error.email && <span>{error.email}</span>}

      <input
        type="password"
        value={info.password}
        onChange={(e) => setInfo({ ...info, password: e.target.value })}
        placeholder="Password"
      />
      {error.password && <span>{error.password}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
