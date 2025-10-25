"use client";

import { uploadImageAction } from "@/actions/post/upload/upload-image-actions";
import { Button } from "@/components/Button";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/constants";
import { ImageUp } from "lucide-react";
import { useRef, useTransition } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();

  function handleChooseFile() {
    if(!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();
    
    if(!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if(!file) return;

    if(file.size > IMAGE_UPLOADER_MAX_SIZE) {
      toast.error("Imagem muito grande.");

      fileInput.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async() => {
      const result = await uploadImageAction(formData);

      if(result.error) {
        toast.error(result.error);

        fileInput.value = "";
        return;
      }

      //TODO: continuar depois
      toast.success(result.url);
    })

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-2 py-4">
      <Button onClick={handleChooseFile} type="button" className="self-start">
        <ImageUp />
        Enviar uma imagem
      </Button>

      <input
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
      />
    </div>
  );
}
