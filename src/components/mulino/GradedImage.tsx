import { cn } from "@/lib/utils";

type Variant = "default" | "warm" | "night" | "soft" | "hero";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  variant?: Variant;
  frameClassName?: string;
  imgClassName?: string;
  muted?: boolean;
  rounded?: string;
  ratio?: string; // e.g. "16/9", "4/5"
}

export function GradedImage({
  src,
  alt,
  variant = "default",
  frameClassName,
  imgClassName,
  muted = false,
  rounded = "rounded-none",
  ratio,
  loading = "lazy",
  ...rest
}: Props) {
  const variantClass =
    variant === "warm"
      ? "image-frame--warm"
      : variant === "night"
        ? "image-frame--night"
        : variant === "soft"
          ? "image-frame--soft"
          : variant === "hero"
            ? "image-frame--hero"
            : "";

  return (
    <div
      className={cn("image-frame", variantClass, rounded, frameClassName)}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn("img-graded", muted && "img-graded--muted", imgClassName)}
        {...rest}
      />
    </div>
  );
}
