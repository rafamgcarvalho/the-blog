import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import { BanIcon, BugIcon, CheckIcon } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
  return (
    <div className="flex flex-col gap-6">
      <InputText labelText="Nome" placeholder="Digite seu nome" />
      <InputText labelText="Sobrenome" placeholder="Digite seu sobrenome" />
      <InputText disabled labelText="Nome" placeholder="Digite seu nome" />
    </div>
  );
}
