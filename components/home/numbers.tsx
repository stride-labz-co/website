"use client";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Numbers() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 py-24 mt-12 px-6 lg:px-12 gap-12">
      <div>
        <h3 className="text-5xl lg:text-8xl font-semibold">
          <NumberTicker value={10} />+
        </h3>
        <p className="mt-4 text-muted-foreground">Industries Explored</p>
      </div>
      <div>
        <h3 className="text-5xl lg:text-8xl font-semibold">
          <NumberTicker value={12} />+
        </h3>
        <p className="mt-4 text-muted-foreground">Systems Designed</p>
      </div>
      <div>
        <h3 className="text-5xl lg:text-8xl font-semibold">
          <NumberTicker value={99} />+
        </h3>
        <p className="mt-4 text-muted-foreground">Client Satisfaction</p>
      </div>
      <div>
        <h3 className="text-5xl lg:text-8xl font-semibold">
          <NumberTicker value={500} />+
        </h3>
        <p className="mt-4 text-muted-foreground">Hours Invested</p>
      </div>
    </div>
  );
}
