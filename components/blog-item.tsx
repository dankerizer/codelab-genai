// import { dateFormat } from "@/lib";
import { dateFormat } from "@/lib/date";
import Link from "next/link";
import { ContentProps } from "../app/types";

export function BlogListItem({ item }: { item: ContentProps }) {
  return (
    <Link
      key={`/blog/${item.slug}`}
      href={`/blog/${item.slug}`}
      id={item.slug}
      className={` card-code border overflow-hidden border-zinc-900 dark:border-zinc-500 bg-white  relative ${item?.post_type === "article" ? "bg-white dark:bg-background" : "bg-lime-50 dark:bg-gray-500"}`}
    >
      <div
        id={item.slug}
        key={item.slug}
        className={`flex flex-col h-full w-full `}
      >
        <div className="bg-black text-zinc-50 px-4 py-2 leading-none text-xs font-mono font-bold">
          {item?.categories?.[0]?.name}
        </div>
        <div className="p-4 h-auto grow space-y-4">
          <h2 className="font-bold font-mono">{item.title}</h2>
          <p className="text-sm"> {item.subtitle}</p>
        </div>
        <div className="text-xs px-4 py-2 border-t border-gray-100">
          <time className="font-semibold leading-none">
            {dateFormat(item?.created_at)}
          </time>
        </div>
      </div>
    </Link>
  );
}
