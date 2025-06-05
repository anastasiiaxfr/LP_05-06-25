import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    qw: "Who can sign up to Brass?",
    answ: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    qw: "How much do I pay to sign up at Bras",
    answ: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    qw: "What do I need to open an account?",
    answ: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    qw: "How do you ensure safekeeping of my data and money?",
    answ: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
];

function Faq() {
  return (
    <section className="section section_faq">
      <div className="container">
        <div className="row_1">
          <div>
            <h2>Some of the things you may want to know</h2>
            <p className="subtitle">
              We answered questions so you don’t have to ask them.
            </p>
          </div>
          <div>
            <Accordion
              type="single"
              collapsible
              className="faq"
              defaultValue="item-1"
            >
              {data.map((i, ind) => (
                <AccordionItem
                  value={`item-${ind}`}
                  key={ind}
                  className="faq_item"
                >
                  <AccordionTrigger className="faq_title">
                    {i.qw}
                  </AccordionTrigger>
                  <AccordionContent className="">
                    <p>{i.answ}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
