import { Navbar } from './Navbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-8 px-4">{children}</main>
    </div>
  );
}
