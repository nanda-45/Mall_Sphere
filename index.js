document.addEventListener('DOMContentLoaded', function () {
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
    ];

    let visibleMallsCount = 3; // Initially show 3 malls
    let filteredMalls = malls; // Start with the full list of malls

    // Function to display malls
    function displayMalls() {
        const mallList = document.getElementById('mall-list');
        mallList.innerHTML = ''; // Clear the previous list
        const visibleMalls = filteredMalls.slice(0, visibleMallsCount); // Show only the first few malls

        visibleMalls.forEach(mall => {
            const mallItem = document.createElement('div');
            mallItem.classList.add('col-md-4', 'mb-4');
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

    // Handle View More Button
    document.getElementById('view-more-btn').addEventListener('click', function() {
        visibleMallsCount += 3; // Show 3 more malls
        displayMalls(); // Update the mall list
    });

    // Handle Search Button
    document.getElementById('search-button').addEventListener('click', function() {
        const selectedLocation = document.getElementById('location-select').value.toLowerCase();

        // Filter malls based on the selected location
        filteredMalls = malls.filter(mall => mall.location.toLowerCase().includes(selectedLocation));
        visibleMallsCount = 3; // Reset to show first 3 results
        displayMalls(); // Update the display with filtered malls
    });


    // Initial display
    displayMalls();
});