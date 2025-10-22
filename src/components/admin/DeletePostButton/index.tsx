import clsx from "clsx";
import { Trash2Icon } from "lucide-react";

type DeletePostButtonProps = {
  id: string,
  title: string,
}

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  function handleClick() {
    alert("Botão clicado");
  }

  return (
    <button className={clsx(
      "text-red-500 cursor-pointer transition",
      "[&_svg]:h-4 [&_svg]:w-4",
      "hover:scale-120",
    )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
    >
      <Trash2Icon />
    </button>
  );
}
