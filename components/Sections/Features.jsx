import Image from "next/image";
import s1 from "@/assets/img/icons/ic1.png";
import s2 from "@/assets/img/icons/ic2.png";
import s3 from "@/assets/img/icons/ic3.png";

const data = [
  {
    icon: s1,
    title: "Speed",
    desc: "Open a commercial-grade current account from anywhere in 10 minutes",
  },
  {
    icon: s2,
    title: "Security",
    desc: "Rely on bank-grade security with all your monies fully insured by NDIC",
  },
  {
    icon: s3,
    title: "Support",
    desc: "Get access to a trusted support team and resources whenever you want",
  },
];

function Features() {
  return (
    <section className="section section_services">
      <div className="container">
        <hgroup className="text-center">
          <h2>The complete financial stack for your business</h2>
          <p className="subtitle">
            Top-end financial tools to help your business with its financial
            operations and cash flow.
          </p>
        </hgroup>

        <div className="services">
          {data.map((i, ind) => (
            <div className="service" key={ind}>
              <Image src={i.icon} alt={i.title} />
              <div>
                <p>
                  <b>{i.title}</b>
                </p>
                <p>{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
