"use client";

export const SmallName = () => {
  let storedFullname = "";

  if (typeof window !== "undefined") {
    storedFullname = localStorage.getItem("fullname") ?? "";
  }

  return <h1>¡Bienvenido de vuelta, Dr. {storedFullname}!</h1>;
};
