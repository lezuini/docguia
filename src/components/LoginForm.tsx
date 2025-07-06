"use client";

import s from "./LoginForm.module.scss";
import { signInMedico } from "@/lib/api";
import { Input } from "./Input";
import { useState } from "react";
import { BigButton } from "./BigButton";
import { Link, LogIn } from "lucide-react";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

export const LoginForm = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await signInMedico(user, password);

      if (response.success) {
        toast.success("Usuario autenticado");

        if (typeof window !== "undefined") {
          localStorage.setItem("fullname", response.fullname);
        }

        router.push("/");
      }
    } catch (error: any) {
      toast.error(`Error al iniciar sesión: ${error.message}`);
    }
  };

  return (
    <div className={s.main}>
      <div className={s.container}>
        <h1 className="text-2xl text-gray-800 font-semibold mb-2">Inicio de sesión</h1>

        <Input placeholder="Usuario" value={user} setValue={setUser} />
        <Input placeholder="Contraseña" value={password} setValue={setPassword} />
        <BigButton icon={<LogIn />} text="Entrar" callback={handleLogin} />
        <Button icon={<Link />} text="No tienes cuenta?" href="/signup" />
      </div>
    </div>
  );
};
