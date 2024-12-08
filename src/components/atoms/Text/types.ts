export type TextProps = {
  children: string;
  className?: string;
  color?: 'red-500' | 'blue-500' | 'white';
  error?: boolean;
  variant: 'body' | 'buttonText' | 'h1' | 'h2' | 'h3';
};
