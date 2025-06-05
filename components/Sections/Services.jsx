import Image from "next/image";
import i1 from "@/assets/img/icons/i1.png";
import i2 from "@/assets/img/icons/i2.png";
import i3 from "@/assets/img/icons/i3.png";
import i4 from "@/assets/img/icons/i4.png";

const data = [
  {
    icon: i1,
    title: "Slack",
    desc: "Add Brass to your company’s slack to receive real-time notifications, send team mate invitations, and generate account statements.",
  },
  {
    icon: i2,
    title: "QuickBooks",
    desc: "Manage your business finance by sync your invoices and payments with quickbooks.",
  },
  {
    icon: i3,
    title: "Sage",
    desc: "Manage your business cashflow, invoices and activities by sync your account with sage.",
  },
  {
    icon: i4,
    title: "Zapier",
    desc: "Connect your Brass account to the thousands of apps on the zapier platform.",
  },
];

function Services() {
  return (
    <section className="section section_services">
      <div className="container">
        <hgroup>
          <h2>Integrations that matter</h2>
          <p className="subtitle">
            Brass is seamlessly integrated with the tools your team is already
            familiar with.
          </p>
        </hgroup>

        <div className="cards">
          {data.map((i, ind) => (
            <div className="card" key={ind}>
              <Image src={i.icon} alt={i.title} />
              <h3 className="card_title">{i.title}</h3>
              <p className="card_desc">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
