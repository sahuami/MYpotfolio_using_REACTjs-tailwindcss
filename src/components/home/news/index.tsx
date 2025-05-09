import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const articles = [
  {
    id: 1,
    title: "The 5 Ways To Improve Your Credibility Working From Home",
    date: "MARCH 1, 2023",
    excerpt:
      "As a small-business owner, it’s important to find high-quality information and educational resources you can trust to...",
    image: "/images/news/image-to.jpeg", 
  },
  {
    id: 2,
    title: "Fintech Startup Will Finance The Women-Owned Businesses",
    date: "MARCH 1, 2023",
    excerpt:
      "As a small-business owner, it’s important to find high-quality information and educational resources you can trust to...",
    image: "/images/news/img2.jpeg", 
  },
  {
    id: 3,
    title: "4 Ways Businesses Can Conduct Productive Time Management",
    date: "MARCH 1, 2023",
    excerpt:
      "As a small-business owner, it’s important to find high-quality information and educational resources you can trust to...",
    image: "/images/news/image-to.jpeg", 
  },
];

const NewsSection = () => {
  return (
    <section className="container md:py-10 mb-16">
      <div className="font-dmSans">
        <h2 className="text-[42px] text-[#2D3958] font-bold mb-4">
          Latest news for businesses and startups
        </h2>
        <p className="mb-20 text-[18px] font-dmSans text-[#7B88A8]">
          Breaking news and analysis on business, including and finance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="overflow-hidden hover:shadow-lg">
              <div className="image-full w-full">
                <Image
                  src={article.image}
                  fill
                  sizes="(max-width: 1900px) 100vw"
                  alt={article.title}
                  className=""
                />
              </div>
              <div className="p-6 space-y-6">
                {/* Admin section */}
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Image
                    src="/images/news/img.jpeg"
                    alt="Admin Icon"
                    width={32}
                    height={32}
                    className="rounded-full mr-2"
                  />
                  <span className="mr-2 text-[14px] font-bold text-blue-500">
                    ADMIN
                  </span>
                  <span>•</span>
                  <span className="ml-2 text-[#7B88A8] font-semibold">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-lg text-[#2D3958] font-semibold my-2">
                  {article.title}
                </h3>
                <p className="text-lg text-[#7B88A8]">{article.excerpt}</p>
                <Link
                  href="#"
                  className="items-end mt-4 inline-block border border-blue-500 px-6 py-4 font-bold rounded-xl text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Button className="md:text-lg bg-blue-500 text-white px-7 py-6 md:px-8 md:py-7 rounded hover:text-blue-600 hover:bg-white mt-8">
          Visit our blog
        </Button>
      </div>
    </section>
  );
};

export default NewsSection;
