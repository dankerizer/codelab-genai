import { getData } from "@/lib/fetch";
// import Image from "next/image";
import { ApiResponse, ContentProps, PaginationResponse } from "./types";
import { Section } from "./components/section";
import { Button } from "./components/button";
import { ScrollArea } from "./components/scroll-area";
import { BlogListItem } from "./components/blog-item";
import { SocialIcons } from "./components/social-icon";

export default async function Home() {
  const response =
  await getData<ApiResponse<PaginationResponse<ContentProps>>>("content");
const posts = response.data.data;

  return (
    <div className="page bg-background dark:bg-background  bg-repeat max-h-screen flex flex-col justify-center h-full md:h-[calc(100vh-80px)] ">
      <Section className="">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16  justify-items-stretch ">
          <div className="sidebar w-full md:w-1/2  flex flex-col ">
            <div className="flex-grow space-y-6">
              <h2 className="landing-heading font-s">
                Teman Belajar <mark>Web Programming</mark> <br />
                untuk <mark>Pemula</mark>
              </h2>
              <p className="text-lg md:text-xl  dark:text-zinc-300 ">
                Bangun Pengetahuan yang Dibutuhkan untuk Meningkatkan Kariermu
                Hanya dengan 1 Jam per Hari. Website belajar coding dan membuat
                web aplikasi{" "}
              </p>
              <Button size="lg" className="text-lg font-bold w-f">
                Mulai
              </Button>
            </div>
            <SocialIcons />
          </div>
          <div className="content w-full md:w-1/2 ">
            <ScrollArea className="h-full md:h-[600px] w-full ">
              <div className="px-6 lg:px-4 flex flex-col gap-12">
                {" "}
                {posts?.map((item) => (
                  <BlogListItem item={item} key={item.slug} />
                ))}
              </div>
            </ScrollArea>
            {/* <Image
              src="/ilustrations/programmer-light.png"
              alt="Programmer"
              width={500}
              height={500}
              className="rounded-md "
            /> */}
          </div>
        </div>
      </Section>
    </div>
  );
}
