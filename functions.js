function greetProvider(name) {
  return `Welcome ${name}`;
}

function calculateBookingPrice(servicePrice) {
  const bookingFee = 20;
  return servicePrice + bookingFee;
}

console.log(calculateBookingPrice(200));

function checkVerification(provider) {
  if (provider.verified) {
    return "Verified Provider";
  } else {
    return "Verification Required";
  }
}

const provider = {
  name: "Glow Spa",
  verified: true
};

console.log(checkVerification(provider));