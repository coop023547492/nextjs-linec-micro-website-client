import FooterContainre from "@/components/footer/FooterContainre";
import HeroBgSub from "@/components/landing/HeroBgSub";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroBgSub>{children}</HeroBgSub>
      <FooterContainre />
      <ScrollToTop />
    </>
  );
}
