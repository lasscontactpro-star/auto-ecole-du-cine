import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | AnchorProps;

const variantClasses = {
  primary:
    "bg-[#E91E8C] text-white hover:bg-[#c91578] border-[#E91E8C] border",
  outline:
    "bg-transparent text-[#E91E8C] border border-[#E91E8C] hover:bg-[#E91E8C] hover:text-white",
  ghost:
    "bg-transparent text-white border border-white hover:bg-white/10",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm font-semibold rounded-lg",
  md: "px-6 py-3 text-base font-bold rounded-xl",
  lg: "px-8 py-4 text-lg font-bold rounded-xl",
};

export function Button({ variant = "primary", size = "md", ...props }: Props) {
  const classes = `inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E91E8C] focus:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${(props as { className?: string }).className ?? ""}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as AnchorProps;
    return (
      <a href={href} {...rest} className={classes} />
    );
  }

  const { className: _c, ...rest } = props as ButtonProps;
  return <button {...rest} className={classes} />;
}
