import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import b1 from "@/assets/img/brands/b1.png";
import b2 from "@/assets/img/brands/b2.png";
import b3 from "@/assets/img/brands/b3.png";
import video from "@/assets/img/img3.jpg";
import { CirclePlay } from "lucide-react";

function Hero() {
  return (
    <section className="section section_hero">
      <div className="container">
        <div>
          <h1>Banking that works for your business</h1>
          <p className="subtitle">
            Do more with a business account that comes with top-end financial
            tools and integrations to help grow your business.
          </p>
          <Button asChild className="btn py-6">
            <Link href="/">Open an account in 10 minutes</Link>
          </Button>

          <div className="brands">
            <Image src={b1} alt="" />
            <Image src={b2} alt="" />
            <Image src={b3} alt="" />
          </div>
        </div>
        <div>
          <div className="imgs">
            <Image
              src={video}
              alt=""
              className="rounded-xl aspect-square object-cover"
            />
            <div className="imgs_desc">
              <CirclePlay size="40" />
              <div>
                <p>
                  <b>Play this video</b>
                </p>
                <p>To see why we built brass</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
