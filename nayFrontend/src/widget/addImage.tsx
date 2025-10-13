/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Image, Avatar, AvatarGroup } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { port, PUBLIC_URL } from "../config/env";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

interface Typeimage {
  data: string;
  label: string;
  imagenDefault?: string | string[] | null;
  required?: boolean;
  multiple?: boolean;
  onImagesChange?: (images: string[]) => void;
}

export const Images: React.FC<Typeimage> = ({ data, label, imagenDefault, required = true, multiple = false, onImagesChange }) => {
  const { t } = useTranslation();
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const {
    control,
    watch,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    setValue,
  } = useFormContext();

  useEffect(() => {
    if (!isSubmitting) {
      if (imagenDefault) {
        if (!multiple) {
          setImagePreviews([PUBLIC_URL + imagenDefault]);
          setValue(data, null); // No setear valor para permitir cambio
        } else {
          const img = Array.isArray(imagenDefault) ? imagenDefault as string[] : [imagenDefault]
          const result = img.map((item) => {
            return port + item
          })
          setImagePreviews(result);
          setValue(data, []); // No setear archivos para permitir cambio
        }
      } else {
        setImagePreviews([]);
        setValue(data, multiple ? [] : null);
      }
    }
  }, [imagenDefault, isSubmitting, setValue, multiple, data]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      // Solo limpiar si no hay imagenDefault
      if (!imagenDefault) {
        setImagePreviews([]);
        setValue(data, multiple ? [] : null);
      }
    }
  }, [isSubmitSuccessful, imagenDefault]);

  useEffect(() => {
    const subscription = watch((value) => {
      // Solo limpiar si no hay imagenDefault y no hay valor
      if (!value[data] && !imagenDefault) {
        setImagePreviews([]);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, imagenDefault]);

  const handleImage = async (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);

      // Limitar a 4 imágenes si es múltiple
      const limitedFiles = multiple && fileArray.length > 4 ? fileArray.slice(0, 4) : fileArray;

      try {
        const newPreviews = await Promise.all(
          limitedFiles.map((file) => {
            return new Promise<string>((resolve) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                resolve(reader.result as string);
              };
            });
          })
        );

        setImagePreviews(newPreviews);
        const finalFiles = multiple ? new DataTransfer() : null;
        if (multiple && finalFiles) {
          limitedFiles.forEach(file => finalFiles.items.add(file));
          setValue(data, finalFiles.files);
        } else {
          setValue(data, limitedFiles[0]);
        }
        onImagesChange?.(newPreviews);
      } catch (error) {
        console.error('Error reading files:', error);
      }
    } else {
      setImagePreviews([]);
      setValue(data, multiple ? [] : null);
      onImagesChange?.([]);
    }
  };

  const removeImage = (index: number) => {
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImagePreviews(newPreviews);

    // Actualizar el valor del formulario
    const currentFiles = watch(data);
    if (currentFiles && currentFiles.length > 0) {
      const dt = new DataTransfer();
      Array.from(currentFiles as FileList).forEach((file: File, i: number) => {
        if (i !== index) dt.items.add(file);
      });
      setValue(data, multiple ? (dt.files.length > 0 ? dt.files : []) : (dt.files[0] || null));
    } else {
      setValue(data, multiple ? [] : null);
    }

    onImagesChange?.(newPreviews);
  };

  return (
    <>
      <h1 className="text-2xl mb-2  mt-5 font-bold flex items-center gap-2">
        <p className="bg-gradient-to-tr from-rose-400 bg-clip-text text-transparent to-purple-600">{label}</p>
        <span className="h-8 w-8 pt-1 my-auto"><ArrowUpCircleIcon /></span>
      </h1>
      <div className="shadow-xl shadow-slate-200  pb-5 border border-gray-300 rounded-2xl">
        <div className="md:flex w-full my-2 px-3 gap-4">
          <div className=" my-4 basis-1/2">
            <label
              className={`${errors[data]
                ? "border-red-500 bg-red-50"
                : "bg-gray-50 border-gray-300"
                } flex h-full relative flex-col items-center justify-center w-full  border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100`}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-center text-sm text-gray-500">
                  <span className={`${errors[data] && "text-red-500"} italic font-semibold`}>
                    {t("Click to upload")}
                  </span>{" "}
                  {t("or drag and drop")}
                </p>
                <p className="text-xs text-center text-gray-500">
                  {multiple ? t("PNG, JPG, GIF up to 3MB (max 4 images)") : t("PNG, JPG, GIF up to 2MB")}
                </p>
              </div>
              <Controller
                name={data}
                control={control}
                rules={required ? {
                  required: t("Image is required"),
                  validate: {
                    fileType: (value) => {
                      if (!value || value.length === 0) return t("Image is required");
                      const validTypes = ["image/jpeg", "image/png", "image/gif"];
                      return (
                        Array.from(value).every((file: any) => validTypes.includes(file.type)) ||
                        t("Invalid file type")
                      );
                    },
                    fileSize: (value) => {
                      if (!value || value.length === 0) return t("Image is required");
                      return (
                        Array.from(value).every((file: any) => file.size <= 3000000) ||
                        t("File must be less than 3MB")
                      );
                    },
                  },
                } : {
                  validate: {
                    fileType: (value) => {
                      if (!value || value.length === 0) return true;
                      const validTypes = ["image/jpeg", "image/png", "image/gif"];
                      return (
                        Array.from(value).every((file: any) => validTypes.includes(file.type)) ||
                        t("Invalid file type")
                      );
                    },
                    fileSize: (value) => {
                      if (!value || value.length === 0) return true;
                      return (
                        Array.from(value).every((file: any) => file.size <= 3000000) ||
                        t("File must be less than 3MB")
                      );
                    },
                  },
                }}
                render={({ field }) => (
                  <input
                    type="file"
                    accept="image/*"
                    multiple={multiple}
                    className="absolute inset-0 w-full h-full  opacity-0 cursor-pointer"
                    onChange={(e) => {
                      handleImage(e.target.files);
                      field.onChange(multiple ? e.target.files : e.target.files?.[0]);
                    }}
                  />
                )}
              />
              {errors[data] && (
                <span className="text-red-500 absolute -bottom-6 left-0 text-xs">
                  {errors[data]?.message as string}
                </span>
              )}
            </label>
          </div>
          <div className="grow my-4 basis-1/2">
            {imagePreviews.length > 0 ? (
              <>
                <div className="space-y-4 ">
                  {/* Primera imagen - tamaño completo */}
                  <div className="relative group">
                    <div className="aspect-square lg:  overflow-hidden bg-gray-100 rounded-xl">
                      <Image
                        isBlurred
                        alt={`Vista previa 1`}
                        className="w-full h-full aspect-square  object-center object-cover"
                        src={imagePreviews[0]}
                      />
                    </div>
                    <button
                      type="button"
                      className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 z-30 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      title={t("Remove image")}
                      onClick={() => removeImage(0)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                  </div>
                </div>
              </>
            ) : (
              <div className="h-64 flex justify-center items-center bg-gray-100 rounded-2xl">
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">{t("No images selected")}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {imagePreviews.length > 1 && (
          <>
            {/* Desktop view - grid */}
            <div className="hidden md:block space-y-4 p-6">
              <div className="grid grid-cols-3 gap-2">
                {imagePreviews.slice(1).map((preview, index) => (
                  <div key={index + 1} className="relative group">
                    <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
                      <Image
                        isBlurred
                        alt={`Vista previa ${index + 2}`}
                        className="w-full h-full object-cover aspect-square"
                        src={preview}
                      />
                    </div>
                    <button
                      type="button"
                      className="absolute z-20 -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      title={t("Remove image")}
                      onClick={() => removeImage(index + 1)}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="absolute bottom-1 left-1 bg-black/50 text-white px-1.5 py-0.5 rounded text-xs">
                      {index + 2}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile view - AvatarGroup */}
            <div className="block md:hidden p-6">
              <AvatarGroup isBordered max={3} size="lg" className="justify-center">
                {imagePreviews.slice(1).map((preview, index) => (
                  <Avatar
                    key={index + 1}
                    src={preview}
                    alt={`Vista previa ${index + 2}`}
                    className="cursor-pointer"
                    onClick={() => removeImage(index + 1)}
                  />
                ))}
              </AvatarGroup>
            </div>
          </>
        )}

        <div className="text-end my-2 px-4">
          <p className="text-sm text-gray-600">
            {imagePreviews.length} {imagePreviews.length === 1 ? t("image selected") : t("images selected")}
          </p>
        </div>
      </div>
    </>
  );
};
