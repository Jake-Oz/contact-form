import type { ButtonHTMLAttributes } from "react";

const Submit = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="bg-DarkGreen hover:bg-green-950 text-white w-full rounded-md h-12 disabled:bg-slate-500"
    >
      Submit
    </button>
  );
};

export default Submit;
