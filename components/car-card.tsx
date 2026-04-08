import { Fuel, Settings, Users } from "lucide-react";
import Image from "next/image";

interface CarCardProps {
  image: string;
  brand: string;
  name: string;
  year: number;
  fuel: string;
  transmission: string;
  seats: number;
  price: string;
  monthlyPayment: string;
}

export function CarCard({
  image,
  brand,
  name,
  year,
  fuel,
  transmission,
  seats,
  price,
  monthlyPayment,
}: CarCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={`${brand} ${name} ${year}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {brand}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-4 text-xl font-bold text-card-foreground">
          {name} {year}
        </h3>

        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Fuel className="h-4 w-4" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Settings className="h-4 w-4" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{seats} مقاعد</span>
          </div>
        </div>

        <div className="mb-6 border-t border-border pt-4">
          <div className="mb-2 text-2xl font-bold text-primary">{price}</div>
          <div className="text-sm text-muted-foreground">
            القسط الشهري:{" "}
            <span className="font-semibold text-accent">{monthlyPayment}</span>
          </div>
        </div>

        <a
          href="#contact"
          className="block w-full rounded-lg bg-primary py-3 text-center font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          اختر هذه السيارة
        </a>
      </div>
    </div>
  );
}
