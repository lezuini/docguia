"use client";

import s from "./SignupForm.module.scss";
import { signInMedico, signUpMedico } from "@/lib/api";
import { Input } from "./Input";
import { useState } from "react";
import { BigButton } from "./BigButton";
import { Link, LogIn } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

export const SignupForm = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await signUpMedico(user, name, password);

      if (response.success) {
        toast.success("Médico registrado");

        setTimeout(() => {
          (async () => {
            const response = await signInMedico(user, password);

            if (response.success) {
              toast.success("Usuario autenticado:", response.user);

              if (typeof window !== "undefined") {
                localStorage.setItem("fullname", response.fullname);
              }

              router.push("/");
            }
          })();
        }, 1000);
      }
    } catch (error: any) {
      toast.error(`Error al registrarse: ${error.message}`);
    }
  };

  return (
    <div className={s.main}>
      <div className={s.container}>
        <h1 className="text-2xl text-gray-800 font-semibold mb-2">Registro</h1>

        <Input placeholder="Nombre Completo" value={name} setValue={setName} />
        <Input placeholder="Usuario" value={user} setValue={setUser} />
        <Input placeholder="Contraseña" value={password} setValue={setPassword} />

        <BigButton icon={<LogIn />} text="Registrarse" callback={handleSignUp} />
        <Button icon={<Link />} text="Ya tienes cuenta?" href="/login" />
      </div>
    </div>
  );
};
