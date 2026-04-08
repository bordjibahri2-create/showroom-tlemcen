"use client";

import { useState } from "react";
import { CarCard } from "./car-card";

const cars = [
  {
    id: 1,
    image: "/cars/fiat-tipo.jpg",
    brand: "Fiat",
    name: "Tipo",
    year: 2025,
    fuel: "بنزين",
    transmission: "يدوي",
    seats: 5,
    price: "3,200,000 دج",
    monthlyPayment: "17,500 دج",
  },
  {
    id: 2,
    image: "/cars/fiat-500.jpg",
    brand: "Fiat",
    name: "500",
    year: 2025,
    fuel: "بنزين",
    transmission: "أوتوماتيك",
    seats: 4,
    price: "2,800,000 دج",
    monthlyPayment: "18,500 دج",
  },
  {
    id: 3,
    image: "/cars/fiat-doblo.jpg",
    brand: "Fiat",
    name: "Doblo",
    year: 2025,
    fuel: "ديزل",
    transmission: "يدوي",
    seats: 5,
    price: "3,500,000 دج",
    monthlyPayment: "23,000 دج",
  },
  {
    id: 4,
    image: "/cars/fiat-doblo-panorama.jpg",
    brand: "Fiat",
    name: "Doblo Panorama",
    year: 2025,
    fuel: "ديزل",
    transmission: "يدوي",
    seats: 7,
    price: "3,800,000 دج",
    monthlyPayment: "25,000 دج",
  },
  {
    id: 5,
    image: "/cars/fiat-panda.jpg",
    brand: "Fiat",
    name: "Panda",
    year: 2025,
    fuel: "بنزين",
    transmission: "يدوي",
    seats: 5,
    price: "2,400,000 دج",
    monthlyPayment: "16,000 دج",
  },
  {
    id: 6,
    image: "/cars/geely-emgrand.jpg",
    brand: "Geely",
    name: "Emgrand",
    year: 2025,
    fuel: "بنزين",
    transmission: "أوتوماتيك",
    seats: 5,
    price: "3,000,000 دج",
    monthlyPayment: "20,000 دج",
  },
  {
    id: 7,
    image: "/cars/geely-coolray.jpg",
    brand: "Geely",
    name: "Coolray",
    year: 2025,
    fuel: "بنزين",
    transmission: "أوتوماتيك",
    seats: 5,
    price: "3,800,000 دج",
    monthlyPayment: "25,000 دج",
  },
  {
    id: 8,
    image: "/cars/geely-azkarra.jpg",
    brand: "Geely",
    name: "Azkarra",
    year: 2025,
    fuel: "هجين",
    transmission: "أوتوماتيك",
    seats: 5,
    price: "4,500,000 دج",
    monthlyPayment: "29,500 دج",
  },
  {
    id: 9,
    image: "/cars/livan-x3-pro.jpg",
    brand: "Livan",
    name: "X3 PRO",
    year: 2025,
    fuel: "بنزين",
    transmission: "أوتوماتيك",
    seats: 5,
    price: "2,000,000 دج",
    monthlyPayment: "13,000 دج",
  },
  {
    id: 10,
    image: "/cars/terrsam-single-cab.jpg",
    brand: "Terrsam",
    name: "Single Cab",
    year: 2025,
    fuel: "ديزل",
    transmission: "يدوي",
    seats: 3,
    price: "1,850,000 دج",
    monthlyPayment: "12,000 دج",
  },
  {
    id: 11,
    image: "/cars/terrsam-double-cab.jpg",
    brand: "Terrsam",
    name: "Double Cab",
    year: 2025,
    fuel: "ديزل",
    transmission: "يدوي",
    seats: 6,
    price: "2,000,000 دج",
    monthlyPayment: "13,000 دج",
  },
];

const brands = ["الكل", "Fiat", "Geely", "Livan", "Terrsam"];

export function CarsSection() {
  const [selectedBrand, setSelectedBrand] = useState("الكل");

  const filteredCars =
    selectedBrand === "الكل"
      ? cars
      : cars.filter((car) => car.brand === selectedBrand);

  return (
    <section id="cars" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          تشكيلة سياراتنا
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          اختر سيارتك المفضلة من بين أفضل العلامات التجارية
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                selectedBrand === brand
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
}
