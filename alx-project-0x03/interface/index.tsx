export interface HomePageProps {
  title: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}
