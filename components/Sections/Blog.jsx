import Link from "next/link";
import Image from "next/image";

import img1 from "@/assets/img/blog/b1.jpg";
import img2 from "@/assets/img/blog/b2.jpg";
import img3 from "@/assets/img/blog/b3.jpg";

const data = [
  {
    img: img1,
    title: "Why you need to seperate busines curre...",
    desc: "The reason for them and how to open a Brass ac...",
  },
  {
    img: img2,
    title: "Working on the right idea",
    desc: "How to figure out the right business for you",
  },
  {
    img: img3,
    title: "What you need to know about business ...",
    desc: "How business credit can work for you",
  },
];

function Blog() {
  return (
    <section className="section section_blog">
      <div className="container">
        <hgroup className="text-center max-w-[700px] mx-auto mb-10">
          <h2>Go further with resources to get started</h2>
          <p className="subtitle">
            We have partnered with businesses on the same mission as ours to
            help local businesses. We have also added resources you need to
            start, run and grow your business.
          </p>
        </hgroup>

        <div className="items">
          {data.map((i, ind) => (
            <Link href="/" key={ind} className="item">
              <Image src={i.img} alt={i.title} className="item_img" />
              <div className="item_body">
                <h3 className="item_title">{i.title}</h3>
                <p className="item_desc">{i.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
