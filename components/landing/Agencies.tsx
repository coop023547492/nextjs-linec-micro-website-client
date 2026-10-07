import { AGENT_DATA } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function Agencies() {
  return (
    <section className="wrapper flex flex-col gap-5">
      <h5 className="text-Light-grey text-center md:text-left text-lg font-bold">
        หน่วยงานที่เกี่ยวข้อง
      </h5>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {AGENT_DATA.map((agent) => (
          <Link
            href={agent.link}
            target="_blank"
            rel="noopener noreferrer"
            key={agent.id}
            className="group flex flex-col items-center gap-2.5 p-2 rounded-lg "
          >
            <div className="overflow-hidden rounded-lg ">
              <Image
                src={agent.logo}
                alt={agent.name}
                width={120}
                height={96}
                className="w-auto h-auto object-cover "
              />
            </div>
            <p className="text-zinc-800 text-base text-center ">{agent.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
