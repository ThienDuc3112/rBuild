import { ReactNode } from "react";

const Button = ({ onClick, children, variant = "primary" }: {
  onClick: () => void,
  children: ReactNode,
  variant: "primary" | "secondary" | "outline"
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center gap-2";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${(variants as unknown as Record<string, string>)[variant]
        }`}
    >
      {children}
    </button>
  );
};

export default Button;
