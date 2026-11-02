const releases = [
  { name: 'ChatBuddy', company: 'NovaLabs', type: 'chat', released: '2026-10-27', free: true },
  { name: 'PicMaker', company: 'BrightAI', type: 'image', released: '2026-10-28', free: false },
  { name: 'VoiceNote', company: 'NovaLabs', type: 'speech', released: '2026-10-28', free: true },
  { name: 'CodeHelper', company: 'DevWorks', type: 'code', released: '2026-10-29', free: false },
  { name: 'TransLate', company: 'BrightAI', type: 'translation', released: '2026-10-30', free: true },
  { name: 'SketchPad AI', company: 'NovaLabs', type: 'image', released: '2026-10-30', free: true },
];
// Question 1: Print every product

for (const product of releases) {
  console.log(product.name + " by " + product.company);
}
// Question 2: Count free products

let freeCount = 0;

for (const product of releases) {
  if (product.free === true) {
    freeCount++;
  }
}

console.log(freeCount);
// Question 3: Get image tool names

const imageTools = [];

for (const product of releases) {
  if (product.type === "image") {
    imageTools.push(product.name);
  }
}

console.log(imageTools);
  
// Question 4: Find a product

const product = releases.find(item => item.name === "VoiceNote");

if (product) {
  console.log(product);
} else {
  console.log("Not found");
}
// Question 5: Count products per company

const companyCount = {};

for (const product of releases) {
  if (companyCount[product.company]) {
    companyCount[product.company]++;
  } else {
    companyCount[product.company] = 1;
  }
}

console.log(companyCount);
// Question 6: Products released on October 30

const latestProducts = [];

for (const product of releases) {
  if (product.released === "2026-10-30") {
    latestProducts.push(product.name);
  }
}

console.log(latestProducts);

// Question 7: Sort newest release first

const sortedReleases = [...releases].sort((a, b) => {
  return b.released.localeCompare(a.released);
});

console.log(sortedReleases.map(product => product.name));

// Question 8: Get products by company

function getByCompany(releases, companyName) {
  const companyProducts = [];

  for (const product of releases) {
    if (product.company === companyName) {
      companyProducts.push(product.name);
    }
  }

  return companyProducts;
}

console.log(getByCompany(releases, "NovaLabs"));

// Question 9: Add a new product

releases.push({
  name: "StudyAI",
  company: "LearnTech",
  type: "education",
  released: "2026-11-01",
  free: true
});

console.log(releases.length);

// Question 10: Product summary

function summary(releases) {
  let free = 0;
  let paid = 0;

  for (const product of releases) {
    if (product.free === true) {
      free++;
    } else {
      paid++;
    }
  }

  return {
    total: releases.length,
    free: free,
    paid: paid
  };
}

console.log(summary(releases));