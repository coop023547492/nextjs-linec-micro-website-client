export default function BorderLandingPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full bg-white bg-opacity-40 rounded-[20px] shadow-[3px_12px_18px_0px_rgba(7,48,72,0.05)] outline outline-1 outline-offset-[-1px] outline-white outline-opacity-50">
      {children}
    </div>
  );
}
