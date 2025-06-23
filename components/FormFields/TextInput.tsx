/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";
import * as React from "react";
import Image from "next/image";

interface TextInputProps<T extends FieldValues> {
  control?: Control<T>;
  name?: Path<T>;
  label?: string;
  placeholder: string;
  type?: string;
  className?: string;
  readonly?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  iconClassName?: string;
  iconAlt?: string;
  endIcon?: string;
  endIconClassName?: string;
  endIconAlt?: string;
}

const TextInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className,
  readonly,
  value,
  icon,
  onChange,
  iconClassName,
  iconAlt = "Icon",
  endIcon,
  endIconClassName,
  endIconAlt = "Arrow",
}: TextInputProps<T>) => {
  const inputElement = (field?: any) => (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center justify-center">
          <Image
            src={icon}
            alt={iconAlt}
            width={20}
            height={20}
            className={iconClassName}
          />
        </div>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        disabled={readonly}
        className={`w-[350px] px-4 py-6 border border-[#373737] text-[#373737] rounded-[50px] bg-transparent ${
          icon ? "pl-10" : ""
        } ${endIcon ? "pr-10" : ""}`}
        value={field ? field.value : value}
        onChange={
          field
            ? (e) => {
                if (type === "number") {
                  field.onChange(parseInt(e.target.value, 10));
                } else {
                  field.onChange(e.target.value);
                }
              }
            : onChange
        }
        {...(field ? { ...field, onChange: undefined } : {})}
      />
      {endIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center justify-center">
          <Image
            src={endIcon}
            alt={endIconAlt}
            width={35}
            height={35}
            className={endIconClassName}
          />
        </div>
      )}
    </div>
  );

  if (control && name) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className={className}>
            {label && (
              <FormLabel className="text-[#373737] text-sm font-medium mb-1 block">
                {label}
              </FormLabel>
            )}
            <FormControl>{inputElement(field)}</FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <FormItem className={className}>
      {label && (
        <FormLabel className="text-[#373737] text-sm font-medium mb-1 block">
          {label}
        </FormLabel>
      )}
      {inputElement()}
    </FormItem>
  );
};

export default TextInput;
