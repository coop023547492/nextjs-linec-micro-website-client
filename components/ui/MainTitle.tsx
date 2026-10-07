export default function MainTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-Medium-grey text-3xl font-normal text-center">
      {children}
    </h1>
  );
}
