export type FormData = {
  _type: "module.form";
  title: string;
  fields: {
    label: string;
    type: "text" | "email" | "textarea";
    placeholder: string;
  }[];
};
