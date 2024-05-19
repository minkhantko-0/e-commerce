"use client";

import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

const Page = () => {
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);

  const onDropRejected = () => {
    console.log("");
  };

  const onDropAccepted = () => {
    console.log();
  };

  const isUploading = false;

  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        {
          "ring-blue-900/25 bg-blue-900/10": isDraggingOver,
        }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDraggingOver(true)}
          onDragLeave={() => setIsDraggingOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="h-full w-full flex-1 flex flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input
                type="text"
                {...getInputProps()}
              />
              {isDraggingOver ? (
                <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
              ) : isUploading ? (
                <Loader2 className="h-6 w-6 text-zinc-500 mb-2 animate-spin" />
              ) : (
                <Image className="h-6 w-6 text-zinc-500 mb-2" />
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default Page;
