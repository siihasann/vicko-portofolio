import React from "react";

interface MagicButtonProps {
  title?: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  rounded?: boolean;
  children?: React.ReactNode;
}

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  rounded = false,
  children,
}: MagicButtonProps) => {
  return (
    <button
      className={`relative inline-flex h-12 w-full overflow-hidden 
                  ${rounded ? "rounded-full h-20 w-20 bg-white" : "rounded-lg"} p-[1px] focus:outline-none`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center 
                    ${rounded ? "rounded-full bg-white" : "rounded-lg"} 
                    bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        <span 
          className={`absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100`}
        />
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
        {children}
      </span>
    </button>
  );
};

export default MagicButton;