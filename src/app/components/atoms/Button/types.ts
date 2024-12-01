export type ButtonProps = {
  color?: string;
  className?: string;
  onClick?: () => void;
  title: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  variant?: 'primary' | 'link' | 'outline';
};
