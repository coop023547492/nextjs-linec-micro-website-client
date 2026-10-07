import { headNavItems } from "@/utils/menus";
import Link from "next/link";

export default function HeadNav() {
  return (
    <ul className="flex gap-5">
      {headNavItems.map((item) => (
        <li key={item.text} className="Main-dark-Blue text-base">
          <Link
            href={item.href}
            className="px-1 py-2 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:shadow-sm"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
