import { Navbar } from './Navbar';

type MainLayoutProps = {
  children: React.ReactNode;
  /** Contenido a ancho completo (ej. Hero), se renderiza fuera del container */
  fullWidthContent?: React.ReactNode;
};

export default function MainLayout({ children, fullWidthContent }: MainLayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="overflow-x-hidden">
        {fullWidthContent}
        <main className="container">{children}</main>
      </div>
    </div>
  );
}
