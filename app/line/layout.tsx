import ContactToggle from "@/components/ContactToggle";

export default function LineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <main className="wrapper">{children}</main>
      <ContactToggle />
    </div>
  );
}
