import HyperText from "@/components/magicui/hyper-text";

export function HyperTextDemo({number}) {
  return (
    <HyperText
      className="text-4xl font-bold text-white dark:text-white"
      text={`${number}`}
    />
  );
}
