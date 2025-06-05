import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import img from "@/assets/img/img4.jpg";

const data = [
  {
    title: "Payments",
    desc: "Create instant, scheduled and recurring payments easily",
  },
  {
    title: "Invoices",
    desc: "Send, receive and reconcile invoices all on one platform",
  },
  {
    title: "Cashflow Support",
    desc: "Move your business forward with insight and financila resources",
  },
  {
    title: "Cross-platform availability",
    desc: "Bank everywhere. Available on iOS, Android and Slack",
  },
  {
    title: "Team banking",
    desc: "Work with your team to run your entire financial opertations",
  },
];

function TabsComponent() {
  return (
    <section className="section section_tabs">
      <div className="container">
        <h2>
          Everything you need, <br className="hidden md:block" /> less of what
          you don't.
        </h2>
        <Tabs defaultValue={0} className="tabs">
          {/* Left side tab list */}
          <div className="w-full md:w-1/2">
            <TabsList className="tabs_list">
              {data.map((i, ind) => (
                <TabsTrigger value={ind} className="tabs_trigger" key={ind}>
                  <div className="w-full">
                    <div className="tabs_title">{i.title}</div>
                    <div className="tabs_desc">{i.desc}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Right side image preview */}
          <div className="w-full md:w-1/2">
            {data.map((_, ind) => (
              <TabsContent value={ind} key={ind}>
                <Image
                  src={img}
                  alt="Payments preview"
                  className="rounded-lg m-auto"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default TabsComponent;
