import { BigButton } from "@/components/BigButton";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-12 flex flex-col gap-4">
      <p className="text-center pb-4 text-gray-500">Página no encontrada</p>

      <div className="max-w-60 ml-auto mr-auto">
        <BigButton icon={<ArrowLeft />} href="/" text="Regresar al Dashboard" />
      </div>
    </div>
  );
}
