import { MobileAccordionProps } from "@/utils/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { cn } from "@/lib/utils";

export default function MobileAccordion({
  data,
  title,
  className,
}: {
  data: MobileAccordionProps[];
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {title && <p className="font-bold text-[#333333]">{title}</p>}
      <Accordion
        className="w-full px-2.5 py-5 bg-white bg-opacity-40  rounded-[10px] outline outline-1 outline-offset-[-1px] "
        type="multiple"
        defaultValue={data.map((_, i) => i.toString())}
      >
        {data.map((item, i: number) => (
          <AccordionItem
            key={i}
            value={i.toString()}
            className="border-b border-neutral-400 last:border-b-0"
          >
            <AccordionTrigger className="text-zinc-800 font-bold ">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-800 ">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
