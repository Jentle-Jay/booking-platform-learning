const providers = [
  {
    name: "Glow Spa",
    businessType: "Beauty & Wellness",
    rating: 4.8,
    verified: true
  },
  {
    name: "Fresh Cut Barber",
    businessType: "Barbershop",
    rating: 4.5,
    verified: true
  },
  {
    name: "Relax Hub",
    businessType: "Massage Center",
    rating: 4.2,
    verified: false
  },
  {
    name: "Beauty Palace",
    businessType: "Makeup Studio",
    rating: 4.9,
    verified: true
  },
  {
    name: "Nail Haven",
    businessType: "Nail Salon",
    rating: 4.4,
    verified: false
  }
];

for (const provider of providers) {
  if (provider.verified === true) {
    console.log(provider.name);
  }
}

console.log("Total Providers:", providers.length);

let highestRatedProvider = providers[0];

for (const provider of providers) {
  if (provider.rating > highestRatedProvider.rating) {
    highestRatedProvider = provider;
  }
}

console.log("Highest Rated Provider:", highestRatedProvider.name);