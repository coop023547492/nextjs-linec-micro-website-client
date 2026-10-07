import FooterImage from "./FooterImage";
import FooterMenu from "./FooterMenu";

export default function FooterContainre() {
  return (
    <footer className="flex flex-col items-center w-full">
      <FooterImage />
      <FooterMenu />
    </footer>
  );
}
