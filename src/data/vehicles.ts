import type { Vehicle } from "../types";

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Ford Ranger Raptor",
    brand: "Ford",
    category: "Picape",
    engine: "3.0 V6 Biturbo",
    power: 397,
    torque: 583,
    traction: "4x4",
    transmission: "Automático 10 marchas",
    averagePrice: 448600,
    highlight: "Alta performance off-road",
    idealUse: "Off-road e performance",
    image: "/ranger.png",
  },
  {
    id: 2,
    name: "Ford Mustang Mach-E",
    brand: "Ford",
    category: "SUV Elétrico",
    engine: "Elétrico",
    power: 487,
    torque: 860,
    traction: "AWD",
    transmission: "Automático",
    averagePrice: 486000,
    highlight: "Tecnologia elétrica e desempenho",
    idealUse: "Tecnologia e cidade",
    image: "/mache.png",
  },
];