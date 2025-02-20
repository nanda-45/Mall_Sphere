document.addEventListener('DOMContentLoaded', function () {
    // Carousel Slides Text and Images
    const carouselSlides = [
        {
            imgSrc: 'images/image1.png', // Image 1
        },
        {
            imgSrc: 'images/image2.png', // Image 2
        },
        {
            imgSrc: 'images/image3.png', // Image 3
        },
        {
            imgSrc: 'images/image4.png', // Image 4
        }
    ];

    // Function to display carousel slides
    function displayCarousel() {
        const carouselInner = document.getElementById('carouselInner');
        const carouselIndicators = document.querySelector('.carousel-indicators');
        carouselInner.innerHTML = ''; // Clear existing slides
        carouselIndicators.innerHTML = ''; // Clear existing indicators

        // Add slides to the carousel
        carouselSlides.forEach((slide, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) carouselItem.classList.add('active'); // Set the first slide as active

            carouselItem.innerHTML = ` 
                <img class="d-block w-100" src="${slide.imgSrc}" alt="Carousel Image ${index + 1}">
            `;
            carouselInner.appendChild(carouselItem);

            // Add indicators
            const indicatorItem = document.createElement('li');
            indicatorItem.setAttribute('data-bs-target', '#carouselSection');
            indicatorItem.setAttribute('data-bs-slide-to', index);
            if (index === 0) indicatorItem.classList.add('active');
            carouselIndicators.appendChild(indicatorItem);
        });

        // Initialize Bootstrap carousel after adding all the slides and indicators
        const myCarousel = new bootstrap.Carousel(document.querySelector('#carouselSection'), {
            interval: 2000, // Optional, for automatic sliding
            wrap: true, // Enable infinite looping
        });
    }

    // Function to display malls
    const malls = [
        { name: 'The Dubai Mall', image: 'https://staticassets.azureedge.net/assets/images/dubai-mall-logo-en.png', id: 'dubai_mall', location: 'Dubai' },
        { name: 'Mall of the Emirates', image: 'https://www.malloftheemirates.com/images/default-source/default-album/navigation-_desktop_-_1_.webp?sfvrsn=c2c2c500_2', id: 'mall_of_the_emirates', location: 'Dubai' },
        { name: 'Yas Mall', image: 'https://www.yasmall.ae/media/a5vfrweu/yaslogo.svg', id: 'yas_mall', location: 'Abu Dhabi' },
        { name: 'Ibn Battuta Mall', image: 'https://www.ibnbattutamall.com/assets/images/eng-logo.svg', id: 'ibn_battuta_mall', location: 'Dubai' },
        { name: 'Dubai Festival City Mall', image: 'https://i0.wp.com/mid-east.info/wp-content/uploads/2022/06/6ROA9_Qh.jpeg?fit=512%2C512&ssl=1', id: 'dubai_festival_city_mall', location: 'Dubai' },
        { name: 'The Galleria Al Maryah Island', image: 'https://www.thegalleria.ae/sites/default/files/logo-w-en.svg', id: 'the_galleria', location: 'Abu Dhabi' },
        { name: 'Marina Mall', image: 'http://marinamallchennai.com/wp-content/uploads/2020/01/LOGOMM.png', id: 'marina_mall', location: 'Abu Dhabi' },
        { name: 'Abu Dhabi Mall', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRF-rbF_4yL0xbX4iTI1DHSg1eDHdaX43LpQ&s', id: 'abu_dhabi_mall', location: 'Abu Dhabi' },
        { name: 'Al Wahda Mall', image: 'https://alwahda-mall.com/images/al-wahda-mall-logo.png', id: 'al_wahda_mall', location: 'Abu Dhabi' },
        { name: 'Bawabat Al Sharq Mall', image: 'https://www.bawabatalsharqmall.ae/media/4m1paeuh/bawabat-alsharq-mall-logo.svg?anchor=center&mode=crop', id: 'bawabat_al_sharq', location: 'Abu Dhabi' },
        { name: 'GVK One Mall (Banjara Hills)', image: 'https://gvkone.com/wp-content/uploads/2021/08/GVK_Logo_Website.png', id: 'gvk_one_mall', location: 'Hyderabad' },
        { name: 'Inorbit Mall (Hitech City)', image: 'https://www.inorbit.in/hyderabad/wp-content/uploads/sites/6/2024/02/inorbit-logo-2_1-1-e1708419594884.png', id: 'inorbit_mall', location: 'Hyderabad' },
        // { name: 'Hyderabad Central Mall (Ameerpet)', image: 'https://www.urtrips.com/wp-content/uploads/2023/11/Hyderabad-Central-Mall-1.jpg', id: 'hyderabad_central_mall', location: 'Hyderabad' },
        { name: 'Sarath City Capital Mall (Kukatpally)', image: 'https://sarathcitycapitalmall.com/wp-content/uploads/2020/04/sccm-logo-200x64-1.svg#6733', id: 'sarath_city_capital_mall', location: 'Hyderabad' },
        { name: 'LuLu Mall (Kukatpally)', image: 'https://www.hyderabad.lulumall.in/wp-content/uploads/2023/07/lulu-hyderabad-01-300x173.png', id: 'lulu_mall', location: 'Hyderabad' }
    ];

    let visibleMallsCount = 3; // Initially show 3 malls
    let filteredMalls = malls; // Start with the full list of malls

    // Function to display mall list
    function displayMalls() {
        const mallList = document.getElementById('mall-list');
        mallList.innerHTML = ''; // Clear the previous list
        const visibleMalls = filteredMalls.slice(0, visibleMallsCount); // Show only the first few malls

        visibleMalls.forEach(mall => {
            const mallItem = document.createElement('div');
            mallItem.classList.add('col-md-4', 'mb-2');
            mallItem.innerHTML = ` 
                <div class="mall-item text-center p-4">
                    <img src="${mall.image}" alt="${mall.name}" class="mall-image mb-3">
                    <h4>${mall.name}</h4>
                    <a href="shop.html?mall=${mall.id}" class="btn btn-primary mt-3">Enter Mall</a>
                </div>
            `;
            mallList.appendChild(mallItem);
        });

        // Show/Hide "View More" button based on the number of visible malls
        if (visibleMallsCount < filteredMalls.length) {
            document.getElementById('view-more-btn').style.display = 'inline-block';
        } else {
            document.getElementById('view-more-btn').style.display = 'none';
        }
    }

    // Function to handle search functionality
    document.getElementById('search-button').addEventListener('click', function () {
        const location = document.getElementById('location-select').value;
        if (location === 'default') {
            alert('Please select a location.');
            return;
        }

        filteredMalls = malls.filter(mall => mall.location.toLowerCase() === location.toLowerCase());
        visibleMallsCount = 3; // Reset to show 3 malls on search
        displayMalls();
        document.getElementById('carouselSection').style.display = 'none'; // Hide carousel
        document.getElementById('mallSection').style.display = 'block'; // Show mall section
    });

    // Function to handle "View More" functionality
    document.getElementById('view-more-btn').addEventListener('click', function () {
        visibleMallsCount += 3; // Increase the count by 3
        displayMalls(); // Re-render the mall list
    });

    // Initialize the carousel
    displayCarousel();
});