import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-24">
        <span className="text-lg">Hola a todos</span>
        {children}
      </div>
    </>
  );
}
