import Image from "next/image";

interface ButtonProps {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button = ({
    type,
    title,
    icon,
    variant,
    full
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`${full && 'w-full'} ${variant} flexCenter gap-3 border rounded-full`}
        >
           {icon && <Image src={icon} alt={title} width={24} height={24} />}
          <label className="cursor-pointer bold-16 whitespace-nowrap">{title}</label>
        </button>
    )
}

export default Button