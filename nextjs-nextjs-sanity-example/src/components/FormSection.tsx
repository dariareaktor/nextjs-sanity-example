"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { FormData } from "@/types/FormData";

type FormSectionProps = FormData;

export const FormSection: React.FC<FormSectionProps> = ({ title, fields }) => {
  const form = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <section className="w-full mx-auto max-w-5xl py-8">
      <h2 className="text-center text-2xl font-bold mb-6">{title}</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-lg mx-auto space-y-6"
        >
          {fields.map((field, index) => (
            <FormField
              key={index}
              name={field.label}
              control={form.control}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    {field.type === "textarea" ? (
                      <textarea
                        {...formField}
                        placeholder={field.placeholder}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      <input
                        {...formField}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full p-2 border rounded"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-gray-600 text-white font-bold rounded hover:bg-gray-700"
          >
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};
