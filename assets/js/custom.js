// RESPONSIVE HEADER
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
openMenu.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(0)";
});
closeMenu.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(100%)";
});
// FAQ
function toggleAccordion(index) {
  var accordions = document.getElementsByClassName("accordion");
  for (var i = 0; i < accordions.length; i++) {
    var content = accordions[i].getElementsByClassName("accordion-content")[0];
    var svg = accordions[i].querySelector(".accordion-header svg");
    if (i === index) {
      content.style.display =
        content.style.display === "block" ? "none" : "block";
      if (accordions[i].classList.contains("bg-faq-card-item")) {
        svg.classList.toggle("rotate-180");
      }
      accordions[i].classList.add("bg-faq-card-item");
    } else {
      content.style.display = "none";
      svg.classList.remove("rotate-180");
      accordions[i].classList.remove("bg-faq-card-item");
    }
  }
}
toggleAccordion(0);
//vdo section
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("playBtn").addEventListener("click", toggleVideo);
  document.getElementById("closeBtn").addEventListener("click", toggleVideo);
  function toggleVideo(event) {
    event.preventDefault();
    var video = document.getElementById("video");
    if (video) {
      if (event.target.id === "playBtn") {
        video.play();
      } else if (event.target.id === "closeBtn") {
        video.pause();
      }
      document.getElementById("videoContainer").classList.toggle("hidden");
    } else {
      console.error("Video element not found.");
    }
  }
});

//fetch partent page card

// Function to create and append patent cards to the container
function displayPatents(data) {
  const container = document.getElementById("patents-container");
  container.innerHTML = ""; // Clear existing content

  data.forEach((patent) => {
    const patentCard = document.createElement("div");
    patentCard.classList.add(
      "p-12",
      "border",
      "rounded-lg",
      "border-b-600",
      "bg-gd-tertiary"
    );

    patentCard.innerHTML = `
      <div class="flex items-center justify-between gap-6 mb-12">
        <h3 class="font-semibold text-4xl leading-[64px] text-tropical-indigo">${patent.id}</h3>
        <img src="assets/img/patents-card-img1.png" alt="patents-card-img" />
      </div>
      <h4 class="text-2xl font-medium leading-8 text-w-500">Patent No. ${patent.patent_number}</h4>
      <p class="mt-4 text-base text-w-100">${patent.description}</p>
    `;

    container.appendChild(patentCard);
  });
}

// Fetch data from the JSON file and display patents
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    displayPatents(data);
  })
  .catch((error) => {
    console.error("Error fetching the data:", error);
  });

// const contentData = {
//   2023: `
//             <div class="flex justify-between">
//               <div class="flex flex-col justify-between gap-[144px] p-12">
//                 <a
//                   class="inline-block px-4 py-2 text-sm font-medium leading-5 border text-tropical-indigo border-tropical-indigo"
//                   href="/"
//                   ><p>2023</p></a
//                 >
//                 <div>
//                   <h2 class="text-2xl font-medium leading-8 text-w-500">
//                     #1 Product on Product Hunt
//                   </h2>
//                   <p
//                     class="text-base not-italic font-normal leading-6 text-w-100"
//                   >
//                     Founded in 2016 by experienced data scientists, engineers,
//                     and consultants, Neurolinx AI is dedicated to maximizing the
//                     business potential of data and AI.
//                   </p>
//                 </div>
//               </div>
//               <img
//                 class="p-12"
//                 src="assets/img/product-img-1.png"
//                 alt="product-img"
//               />
//             </div>
//         `,
//   2022: `
//             <div
//               class="flex flex-col items-center p-6 bg-gray-800 rounded-lg md:flex-row"
//             >
//               <!-- Year -->
//               <div
//                 class="flex items-center justify-center mb-4 md:mb-0 md:mr-6"
//               >
//                 <div class="px-3 py-1 text-white bg-purple-700 rounded-full">
//                   <span class="text-base font-medium leading-6">2023</span>
//                 </div>
//               </div>
//               <!-- Text Content -->
//               <div class="flex-1">
//                 <h2 class="mb-2 text-2xl font-medium">
//                   #1 Product on Product Hunt
//                 </h2>
//                 <p class="text-base leading-6">
//                   Founded in 2016 by experienced data scientists, engineers, and
//                   consultants, Neurolinx AI is dedicated to maximizing the
//                   business potential of data and AI.
//                 </p>
//               </div>
//               <!-- Image Content -->
//               <div class="mt-4 md:mt-0 md:ml-6">
//                 <img
//                   src="assets/img/product-img-1.jpg"
//                   alt="#1 Product"
//                   class="w-32 h-32 md:w-40 md:h-40"
//                 />
//               </div>
//             </div>
//         `,
//   2021: `
//            <div
//               class="flex flex-col items-center p-6 bg-gray-800 rounded-lg md:flex-row"
//             >
//               <!-- Year -->
//               <div
//                 class="flex items-center justify-center mb-4 md:mb-0 md:mr-6"
//               >
//                 <div class="px-3 py-1 text-white bg-purple-700 rounded-full">
//                   <span class="text-base font-medium leading-6">2023</span>
//                 </div>
//               </div>
//               <!-- Text Content -->
//               <div class="flex-1">
//                 <h2 class="mb-2 text-2xl font-medium">
//                   #1 Product on Product Hunt
//                 </h2>
//                 <p class="text-base leading-6">
//                   Founded in 2016 by experienced data scientists, engineers, and
//                   consultants, Neurolinx AI is dedicated to maximizing the
//                   business potential of data and AI.
//                 </p>
//               </div>
//               <!-- Image Content -->
//               <div class="mt-4 md:mt-0 md:ml-6">
//                 <img
//                   src="assets/img/product-img-1.jpg"
//                   alt="#1 Product"
//                   class="w-32 h-32 md:w-40 md:h-40"
//                 />
//               </div>
//             </div>
//         `,
//   2020: `
//             <div
//               class="flex flex-col items-center p-6 bg-gray-800 rounded-lg md:flex-row"
//             >
//               <!-- Year -->
//               <div
//                  class="flex items-center justify-center mb-4 md:mb-0 md:mr-6"
//               >
//                 <div class="px-3 py-1 text-white bg-purple-700 rounded-full">
//                   <span class="text-base font-medium leading-6">2023</span>
//                 </div>
//               </div>
//               <!-- Text Content -->
//               <div class="flex-1">
//                 <h2 class="mb-2 text-2xl font-medium">
//                   #1 Product on Product Hunt
//                 </h2>
//                 <p class="text-base leading-6">
//                   Founded in 2016 by experienced data scientists, engineers, and
//                   consultants, Neurolinx AI is dedicated to maximizing the
//                   business potential of data and AI.
//                 </p>
//               </div>
//               <!-- Image Content -->
//               <div class="mt-4 md:mt-0 md:ml-6">
//                 <img
//                   src="assets/img/product-img-1.jpg"
//                   alt="#1 Product"
//                   class="w-32 h-32 md:w-40 md:h-40"
//                 />
//               </div>
//             </div>
//         `,
//   2018: `
//            <div
//               class="flex flex-col items-center p-6 bg-gray-800 rounded-lg md:flex-row"
//             >
//               <!-- Year -->
//               <div
//                 class="flex items-center justify-center mb-4 md:mb-0 md:mr-6"
//               >
//                 <div class="px-3 py-1 text-white bg-purple-700 rounded-full">
//                   <span class="text-base font-medium leading-6">2023</span>
//                 </div>
//               </div>
//               <!-- Text Content -->
//               <div class="flex-1">
//                 <h2 class="mb-2 text-2xl font-medium">
//                   #1 Product on Product Hunt
//                 </h2>
//                 <p class="text-base leading-6">
//                   Founded in 2016 by experienced data scientists, engineers, and
//                   consultants, Neurolinx AI is dedicated to maximizing the
//                   business potential of data and AI.
//                 </p>
//               </div>
//               <!-- Image Content -->
//               <div class="mt-4 md:mt-0 md:ml-6">
//                 <img
//                   src="assets/img/product-img-1.jpg"
//                   alt="#1 Product"
//                   class="w-32 h-32 md:w-40 md:h-40"
//                 />
//               </div>
//             </div>
//         `,
//   2016: `
//             <div
//               class="flex flex-col items-center p-6 bg-gray-800 rounded-lg md:flex-row"
//             >
//               <!-- Year -->
//               <div
//                 class="flex items-center justify-center mb-4 md:mb-0 md:mr-6"
//               >
//                 <div class="px-3 py-1 text-white bg-purple-700 rounded-full">
//                   <span class="text-base font-medium leading-6">2023</span>
//                 </div>
//               </div>
//               <!-- Text Content -->
//               <div class="flex-1">
//                 <h2 class="mb-2 text-2xl font-medium">
//                  cfhgijgdewjkferhkerghkerjghrei
//                 </h2>
//                 <p class="text-base leading-6">
//                   Founded in 2016 by experienced data scientists, engineers, and
//                   consultants, Neurolinx AI is dedicated to maximizing the
//                   business potential of data and AI.
//                 </p>
//               </div>
//               <!-- Image Content -->
//               <div class="mt-4 md:mt-0 md:ml-6">
//                 <img
//                   src="assets/img/product-img-1.jpg"
//                   alt="#1 Product"
//                   class="w-32 h-32 md:w-40 md:h-40"
//                 />
//               </div>
//             </div>
//         `,
// };

// function showContent(year) {
//   const contentBox = document.getElementById("content-box");
//   contentBox.innerHTML = contentData[year];
// }

// // Initialize with the default content for 2023
// document.addEventListener("DOMContentLoaded", () => {
//   showContent("2023");
// });
