import { IconBaseProps } from "react-icons";

interface ButtonProps {
    Icon?: IconBaseProps;
    title: string;
    buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>;
}

export function Button({ Icon, title, buttonProps}: ButtonProps) {
  return (
    <button
    {...buttonProps}
    style={{ display: "flex" }}>
      {Icon && <Icon size={25} style={{marginRight:'10px'}} />}
      <span>{title}</span>
    </button>
  );
}
