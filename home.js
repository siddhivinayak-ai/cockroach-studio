// Placeholder for interactivity and animations

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add more JavaScript functions if needed






















// Define an array of services with all necessary details
const services = [
  {
      name: "Corporate Overview Videos",
      image: "https://img.freepik.com/premium-photo/man-is-taking-picture-another-man-with-camera_905510-5149.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      description: "High-quality videos showcasing corporate profiles and vision.",
      technologies: ["Cameras", "Lighting", "Editing Software"],
      price: "$500 - $2000",
      industries: ["Corporate", "Finance", "Tech"],
  },
  {
      name: "Event Videos",
      image: "https://img.freepik.com/premium-photo/quotdiverse-group-young-professionals-dynamic-film-setquot_1168612-431349.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      description: "Capture memorable moments of any event with our expertise.",
      technologies: ["Single/Multi-camera", "Audio", "Editing Software"],
      price: "$300 - $1500",
      industries: ["Weddings", "Concerts", "Corporate Events"],
  },
  {
      name: "Motion Graphics",
      image: "https://img.freepik.com/free-vector/animation-motion-concept-illustration_114360-2549.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      description: "Engaging animations and motion graphics to bring ideas to life.",
      technologies: ["After Effects", "Illustrator", "Cinema 4D"],
      price: "$200 - $1200",
      industries: ["Marketing", "Education", "Entertainment"],
  },
  {
    name: "Podcast Shoot",
    image: "https://img.freepik.com/free-photo/two-women-with-medical-mask-conversing-radio_23-2148808725.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "Professional podcast shoots with high-quality audio and multi-angle video for engaging content.",
    technologies: ["Microphones", "Mixing Equipment", "Multi-camera Setup"],
    price: "$400 - $1500",
    industries: ["Media", "Education", "Entertainment"],
},
{
    name: "Commercial and Product Shoot",
    image: "https://img.freepik.com/free-vector/flat-design-photographer-taking-pictures-studio_23-2148265297.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "Showcase your products with visually captivating commercial shoots to enhance brand value.",
    technologies: ["DSLRs", "Studio Lighting", "Editing Software"],
    price: "$500 - $2500",
    industries: ["Retail", "E-commerce", "Manufacturing"],
},
{
    name: "Reels Shoot",
    image: "https://img.freepik.com/free-vector/video-upload-concept-illustration_114360-6773.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "Engage your audience with dynamic and trendy reel videos tailored for social media.",
    technologies: ["Smartphones", "Gimbals", "Quick Editing Apps"],
    price: "$100 - $800",
    industries: ["Social Media", "Influencer Marketing", "Entertainment"],
},
{
    name: "Model Shoot",
    image: "https://img.freepik.com/premium-photo/woman-stands-front-white-backdrop-photo-shoot_1281144-19578.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "Professional model shoots for portfolio building, brand campaigns, and social media.",
    technologies: ["DSLRs", "Studio Lighting", "Retouching Software"],
    price: "$300 - $2000",
    industries: ["Fashion", "E-commerce", "Advertising"],
},
{
    name: "YouTube Video Shoot",
    image: "https://img.freepik.com/free-vector/youtube-player-device-with-flat-design_23-2147841935.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "Full-service YouTube video production, from shooting to editing, optimized for engagement.",
    technologies: ["DSLRs", "Lighting Kits", "Final Cut Pro"],
    price: "$500 - $2000",
    industries: ["Media", "Education", "Entertainment"],
}

  // Add more services as needed
];

// Reference to the container where service cards will be added
const serviceCardsContainer = document.getElementById("serviceCardsContainer");

// Function to generate the service cards dynamically
services.forEach(service => {
  const card = document.createElement("div");
  card.classList.add("service-card");

  card.innerHTML = `
      <img src="${service.image}" alt="${service.name}">
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <p class="tech-list"><strong>Technologies Used:</strong> ${service.technologies.join(", ")}</p>
      <p class="price"><strong>Pricing:</strong> ${service.price}</p>
      <p class="industry-list"><strong>Industries Served:</strong> ${service.industries.join(", ")}</p>
      <button class="cta">Learn More</button>
      <button class="projects-btn">See Projects</button>
  `;

  // Append each card to the container
  serviceCardsContainer.appendChild(card);
});
















































const projects = [
  {
      name: "Product Showcase",
      media: "https://img.freepik.com/premium-photo/red-apple-with-green-leaf_96461-10743.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      description: "High-quality images displaying product features.",
      type: "image",
      category: "Corporate"
  },
  {
      name: "Corporate Promo",
      media: "https://img.freepik.com/free-vector/content-creator-concept-illustration_114360-3881.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      description: "A promotional video capturing the essence of a corporate brand.",
      type: "image",
      category: "Corporate"
  },
  {
      name: "Event Highlights",
      media: "https://img.freepik.com/free-vector/professional-photographer-working-studio_52683-22993.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
      description: "Highlights from a large-scale corporate event.",
      type: "image",
      category: "Event"
  },
  // Additional projects go here...


  {
    name: "Product Showcase",
    media: "https://img.freepik.com/premium-vector/3d-isometric-flat-vector-illustration-photo-studio-item-3_109064-7513.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "High-quality images displaying product features.",
    type: "image",
    category:"Fashion"
},
{
    name: "Corporate Promo",
    media: "https://img.freepik.com/premium-photo/illustration-successful-people-front-video-camera-video_756405-70994.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "A promotional video capturing the essence of a corporate brand.",
    type: "image",
    category:"Fitness"
},
{
    name: "Event Highlights",
    media: "https://img.freepik.com/premium-photo/colleagues-wearing-casual-clothes-talking-using-laptop-computer-green-screen-mock-up-chroma-key-studio-job-id-09b6122127814eb0b7e095e84de1fccc_1134901-48138.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "Highlights from a large-scale corporate event.",
    type: "image",
    category:"Fashion"
},
{
    name: "Fashion Model Shoot",
    media: "https://img.freepik.com/premium-photo/young-beautiful-woman-studio_125374-323.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "Stunning visuals from a high-end fashion model shoot.",
    type: "image",
    category:"Real Estate"
},
{
    name: "Product Advertisement",
    media: "https://img.freepik.com/premium-photo/colleagues-wearing-casual-clothes-talking-using-laptop-computer-green-screen-mock-up-chroma-key-studio-job-id-df5b5f3cf8bc46a898ead1408f4349a9_1134901-47761.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "Eye-catching product advertisement with cinematic effects.",
    type: "image",
    category: "Event"
},
{
    name: "Music Concert Coverage",
    media: "https://img.freepik.com/premium-photo/image-famous-singers-live-performance-being-streamed-online_1314467-21220.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "Exciting moments captured from a live music concert.",
    type: "image",
    category:"Real Estate"
},
{
    name: "Luxury Real Estate Tour",
    media: "https://img.freepik.com/premium-photo/artist-vlogger-make-video-packing-handmade-pottery-online-master-class-craft-ceramics-studio_1048944-30056695.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "A luxurious real estate property tour showcasing premium interiors.",
    type: "image",
    category:"Fitness"
},
{
    name: "Fitness Commercial",
    media: "https://img.freepik.com/free-photo/female-blogger-sportswear-stretching_23-2148538856.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "An inspiring fitness commercial with motivational themes.",
    type: "image",
    category: "Event"
},
{
    name: "Restaurant Promo",
    media: "https://img.freepik.com/premium-photo/food-blogger-is-shooting-video-show-her-special-food_943281-43175.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "A vibrant promotional video highlighting the best dishes at a popular restaurant.",
    type: "image",
    category:"Fitness"
},
{
    name: "Wedding Moments",
    media: "https://img.freepik.com/premium-photo/photographer-working-with-couple-beach-professional-wedding-photography_1346034-182338.jpg?ga=GA1.1.598515694.1706235890&semt=ais_hybrid",
    description: "Capturing beautiful moments from a wedding ceremony.",
    type: "image",
    category: "Event"
},
];

const projectGallery = document.getElementById('projectGallery');
const categoryTabs = document.querySelectorAll('.category-tab');

// Function to display projects based on category
function displayProjects(category) {
  projectGallery.innerHTML = ''; // Clear existing projects

  const filteredProjects = projects.filter(project => 
      category === 'all' || project.category === category
  );

  filteredProjects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      
      projectCard.innerHTML = `
          ${project.type === 'video' 
              ? `<video src="${project.media}" controls></video>` 
              : `<img src="${project.media}" alt="${project.name}">`
          }
          <h3>${project.name}</h3>
          <p>${project.description}</p>
      `;
      
      projectGallery.appendChild(projectCard);
      projectCard.style.display = 'block';
  });
}

// Function to handle tab click and set active tab
function setActiveCategory(event) {
  categoryTabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  const selectedCategory = event.target.getAttribute('data-category');
  displayProjects(selectedCategory);
}

// Set event listeners on category tabs
categoryTabs.forEach(tab => {
  tab.addEventListener('click', setActiveCategory);
});

// Initialize with all projects displayed
displayProjects('all');




function scrollGallery(direction) {
  const gallery = document.getElementById('projectGallery');
  const scrollAmount = 300; // Adjust scroll distance per click
  
  if (direction === 'left') {
      gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
      gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}




























// JavaScript for handling form submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      const formData = new FormData(contactForm);
  
      // Send form data to Google Sheets
      fetch(contactForm.action, {
        method: 'POST',
        body: formData
      })
        .then(response => response.text())
        .then(result => {
          alert('Thank you for your message!');
          contactForm.reset(); // Reset the form fields
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was a problem with your submission. Please try again.');
        });
    });
  });




























  document.addEventListener('DOMContentLoaded', () => {
    const reelContainer = document.querySelector('.reel-container');

    // Array of reel data
    const reelsData = [
        {
            videoSrc: 'video1.mp4',
            topic: 'Topic 1',
            industry: 'Entertainment',
            description: 'A thrilling reel about Topic 1.',
            technologies: 'After Effects, Premiere Pro',
            skills: 'Editing, Motion Graphics',
            category: 'category1'
        },
      
        ];

    // Function to create reel cards
    const createReelCard = (reel) => {
        const reelCard = document.createElement('div');
        reelCard.classList.add('reel-card');
        reelCard.setAttribute('data-category', reel.category);

        // Reel front side
        reelCard.innerHTML = `
            <div class="reel-card-front">
                <video src="${reel.videoSrc}" muted autoplay loop></video>
                <h3>${reel.topic}</h3>
                <p>Industry: ${reel.industry}</p>
                <div class="reel-icons">
                    <span class="heart-icon">&#x2764;</span>
                </div>
            </div>
            <div class="reel-card-back">
                <h3>${reel.topic}</h3>
                <p>${reel.description}</p>
                <p>Technologies: ${reel.technologies}</p>
                <p>Skills: ${reel.skills}</p>
            </div>
        `;

        return reelCard;
    };

    // Populate reel cards into the container
    reelsData.forEach(reel => {
        const reelCard = createReelCard(reel);
        reelContainer.appendChild(reelCard);
    });

    // Event listener for category filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.category-tab.active').classList.remove('active');
            tab.classList.add('active');
            const selectedCategory = tab.getAttribute('data-category');
            filterReelsByCategory(selectedCategory);
        });
    });

    // Function to filter reels by category
    function filterReelsByCategory(category) {
        document.querySelectorAll('.reel-card').forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});









document.querySelector('.left-btn').addEventListener('click', () => {
    document.querySelector('.reel-container').scrollBy({
      left: -250, // Scroll left by 250px
      behavior: 'smooth',
    });
  });
  
  document.querySelector('.right-btn').addEventListener('click', () => {
    document.querySelector('.reel-container').scrollBy({
      left: 250, // Scroll right by 250px
      behavior: 'smooth',
    });
  });
  