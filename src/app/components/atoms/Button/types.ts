export type ButtonProps = {
  variant?: 'primary' | 'link' | 'outline';
  color?: string;
  title: string;
  onClick?: () => void;
};
