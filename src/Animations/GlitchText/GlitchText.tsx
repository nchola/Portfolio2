
import { FC, CSSProperties } from "react";

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

interface CustomCSSProperties extends CSSProperties {
  "--after-duration": string;
  "--before-duration": string;
  "--after-shadow": string;
  "--before-shadow": string;
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const inlineStyles: CustomCSSProperties = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "-2px 0 #ff0000" : "none",
    "--before-shadow": enableShadows ? "2px 0 #00ffff" : "none",
  };

  const baseClasses = "relative mx-auto select-none cursor-pointer font-cormorant font-bold";

  const pseudoClasses = !enableOnHover
    ? "after:content-[attr(data-text)] after:absolute after:top-0 after:left-[2px] after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)] after:animate-glitch-after " +
      "before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-2px] before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] before:animate-glitch-before"
    : "after:content-[''] after:absolute after:top-0 after:left-[2px] after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:opacity-0 " +
      "before:content-[''] before:absolute before:top-0 before:left-[-2px] before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:opacity-0 " +
      "hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:[text-shadow:var(--after-shadow)] hover:after:animate-glitch-after " +
      "hover:before:content-[attr(data-text)] hover:before:opacity-100 hover:before:[text-shadow:var(--before-shadow)] hover:before:animate-glitch-before";

  const combinedClasses = `${baseClasses} ${pseudoClasses} ${className}`;

  return (
    <h2 style={inlineStyles} data-text={children} className={combinedClasses}>
      {children}
    </h2>
  );
};

export default GlitchText;
