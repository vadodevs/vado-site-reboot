import { Navbar } from './Navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="overflow-x-hidden">{children}</div>
    </div>
  );
}
