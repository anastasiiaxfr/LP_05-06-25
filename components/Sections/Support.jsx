import Image from "next/image";
import img from "@/assets/img/img1.jpg";

function Support() {
  return (
    <section className="section section_support">
      <div className="row w-full">
        <Image src={img} alt="" className="w-full object-cover" />
      </div>
      <div className="container">
        <div className="row">
          <div className="hidden md:block">&nbsp;</div>
          <div className="pt-10 md:p-10 lg:p-20">
            <p className="topheading">SUPPORT WHEN YOU NEED IT</p>
            <h2>Our support team is your team</h2>
            <p className="mb-5">
              Our support team are a mix of bankers and growth experts ready to
              help you. With a Brass account, you get a team that is genuinely
              seeking to understand your business and provide solutions for its
              financial operations.
            </p>
            <p>
              We are committed to going beyond issue resolution to becoming your
              partner in the growing and smooth running of your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
