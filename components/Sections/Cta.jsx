import Link from "next/link";
import { Button } from "@/components/ui/button";

function Cta() {
  return (
    <section className="section section_cta">
      <div className="container">
        <div className="text-center mx-auto max-w-[700px]">
          <h2>Get started for free in 10 minutes</h2>
          <p className="subtitle">
            Get all the best financial products for your business growth for
            free. Open the last current account you will ever need for your
            business
          </p>
          <Button asChild className="btn py-6">
            <Link href="/">Get started in minutes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
