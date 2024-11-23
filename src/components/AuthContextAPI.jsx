import React, { createContext, useContext, useState } from "react";

const UserEmailContext = createContext();

export const useUserEmail = () => useContext(UserEmailContext);

export const UserEmailProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerm: false,
    loggedIn: false,
  });

  return (
    <UserEmailContext.Provider
      value={{ userEmail, setUserEmail, formData, setFormData }}
    >
      {children}
    </UserEmailContext.Provider>
  );
};
