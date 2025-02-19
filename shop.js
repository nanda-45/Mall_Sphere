document.addEventListener('DOMContentLoaded', function () {
    // Get mall ID from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const mallId = urlParams.get('mall');

    // Check for invalid mallId
    if (!mallId) {
        alert('Mall ID is missing!');
        return;
    }


const malls = {
    dubai_mall: {
        name: 'The Dubai Mall',
        shops: [
            {
                name: 'Apple Store',
                category: 'Electronics',
                floor:'First Floor',
                logo: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg',
                offers: [
                    { offer: '15% Off on iPads', previousPrice: 500, offerPrice: 425 },
                    { offer: 'Free AirPods with iPhone Purchase', previousPrice: 1000, offerPrice: 1000 },
                    { offer: '20% Off on Accessories', previousPrice: 80, offerPrice: 64 },
                    { offer: 'Free Charging Cable with MacBook', previousPrice: 150, offerPrice: 150 }
                ]
            },
            {
                name: 'Nike',
                category: 'Sports',
                floor:'Second Floor',
                logo: 'https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg',
                offers: [
                    { offer: '30% Off on Running Shoes', previousPrice: 150, offerPrice: 105 },
                    { offer: 'Buy 2 T-Shirts Get 1 Free', previousPrice: 60, offerPrice: 60 },
                    { offer: '10% Off on Sportswear', previousPrice: 100, offerPrice: 90 },
                    { offer: 'Free Water Bottle with Sports Gear', previousPrice: 50, offerPrice: 50 }
                ]
            },
            {
                name: 'Chanel',
                category: 'Luxry',
                floor:'Second Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAM0MS6YR7S7lx1Muow5AHgTvrOdJ5hkryQQ&s',
                offers: [
                    { offer: '30% Off on Handbags', previousPrice: 500, offerPrice: 350 },
                    { offer: 'Buy 1 Get 1 for Shoes', previousPrice: 300, offerPrice: 300 },
                    { offer: 'Free Shipping on Orders Above 500', previousPrice: 500, offerPrice: 500 },
                    { offer: 'Buy 2 Perfumes Get 1 Free', previousPrice: 120, offerPrice: 120 }
                ]
            }
        ]
    },

    mall_of_the_emirates: {
        name: 'Mall of the Emirates',
        shops: [
            {
                name: 'H&M',
                category: 'Fashion',
                floor:'Second Floor',
                logo: 'https://w7.pngwing.com/pngs/279/64/png-transparent-hm-fashion-clothes-clothing-brands-and-logos-icon.png',
                offers: [

                    { offer: '15% Off on Jackets', previousPrice: 80, offerPrice: 68 },
                    { offer: 'Buy 2 Jeans Get 1 Free', previousPrice: 120, offerPrice: 120 },
                    { offer: '30% Off on Dresses', previousPrice: 100, offerPrice: 70 },
                    { offer: 'Free Belt with Skirt Purchase', previousPrice: 50, offerPrice: 50 }
                ]
            },
            {
                name: 'Sony',
                category: 'Electronics',
                floor:'Second Floor',
                logo: 'https://w7.pngwing.com/pngs/455/531/png-transparent-%E7%B4%A2%E5%B0%BC-logo-sony-television-business-sony-television-text-logo-thumbnail.png',
                offers: [
        
                    { offer: '5% Off on Sony Cameras', previousPrice: 500, offerPrice: 475 },
                    { offer: 'Free HDMI Cable with TV', previousPrice: 300, offerPrice: 300 },
                    { offer: '20% Off on Headphones', previousPrice: 100, offerPrice: 80 },
                    { offer: 'Free Delivery on Orders Above 200', previousPrice: 200, offerPrice: 200 }
                ]
            },
            {
                name: 'Zara',
                category: 'Fashion',
                floor:'Second Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyXGc69cDel26MHRUk9AMJUuNDMN9FcDx8Q&s',
                offers: [
            
                    { offer: '10% Off on New Collection', previousPrice: 200, offerPrice: 180 },
                    { offer: 'Free Belt with Jeans', previousPrice: 70, offerPrice: 70 },
                    { offer: '30% Off on Dresses', previousPrice: 150, offerPrice: 105 },
                    { offer: 'Free Shipping on Orders Above 150', previousPrice: 150, offerPrice: 150 }
                ]
            }
        ]
    },

    yas_mall: {
        name: 'Yas Mall',
        shops: [
            {
                name: 'Adidas',
                category: 'Sports',
                floor:'Second Floor',
                logo: 'https://w7.pngwing.com/pngs/488/478/png-transparent-adidas-originals-t-shirt-logo-brand-adidas-angle-text-retail-thumbnail.png',
                offers: [
        
                    { offer: '25% Off on Running Shoes', previousPrice: 120, offerPrice: 90 },
                    { offer: 'Free Socks with Shoe Purchase', previousPrice: 20, offerPrice: 20 },
                    { offer: '10% Off on Sports Gear', previousPrice: 100, offerPrice: 90 },
                    { offer: 'Buy 2 Get 1 Free on Workout Shirts', previousPrice: 50, offerPrice: 50 }
                ]
            },
            {
                name: 'Lush',
                category: 'Shopping',
                floor:'Second Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxgq3rZ5Jcg-uDBCb6NcbAx6ASPBgv19cdg&s',
                offers: [
                
                    { offer: '20% Off on Bath Bombs', previousPrice: 30, offerPrice: 24 },
                    { offer: 'Free Face Mask with Purchase of 2', previousPrice: 40, offerPrice: 40 },
                    { offer: 'Buy 2 Lip Balms Get 1 Free', previousPrice: 20, offerPrice: 20 },
                    { offer: '15% Off on Hair Care Products', previousPrice: 60, offerPrice: 51 }
                ]
            },
            {
                name: 'Forever 21',
                category: 'Shopping',
                floor:'First Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOMtAsOOuDLZwjtJrU5CMnqGdX6VQ52avZw&s',
                offers: [
                    
                    { offer: '30% Off on Dresses', previousPrice: 80, offerPrice: 56 },
                    { offer: 'Free Bracelet with Skirt Purchase', previousPrice: 30, offerPrice: 30 },
                    { offer: '10% Off on New Collection', previousPrice: 200, offerPrice: 180 },
                    { offer: 'Free Shipping on Orders Above 100', previousPrice: 100, offerPrice: 100 }
                ]
            }
        ]
    },

    ibn_battuta_mall: {
        name: 'Ibn Battuta Mall',
        shops: [
            {
                name: 'Spinneys',
                category: 'Food',
                floor:'Second Floor',
                logo: 'https://images.seeklogo.com/logo-png/38/2/spinneys-logo-png_seeklogo-388092.png',
                offers: [
                
                    { offer: '10% Off on Groceries', previousPrice: 150, offerPrice: 135 },
                    { offer: 'Free Delivery on Orders Above 50', previousPrice: 50, offerPrice: 50 },
                    { offer: 'Buy 2 Get 1 Free on Snacks', previousPrice: 20, offerPrice: 20 },
                    { offer: '20% Off on Fresh Fruits', previousPrice: 30, offerPrice: 24 }
                ]
            },
            {
                name: 'Marks & Spencer',
                category: 'Shopping',
                floor:'Second Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0p9wrEAMmi3Fr5az-F8rTCUFtMAN5IwAIQ&s',
                offers: [
                    
                    { offer: '25% Off on Home Decor', previousPrice: 100, offerPrice: 75 },
                    { offer: 'Free Delivery on Orders Above 100', previousPrice: 100, offerPrice: 100 },
                    { offer: 'Buy 2 Get 1 Free on Mugs', previousPrice: 30, offerPrice: 30 },
                    { offer: '10% Off on Clothing', previousPrice: 50, offerPrice: 45 }
                ]
            },
            {
                name: 'Carrefour',
                category: 'Shopping',
                floor:'Second Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdP7dYdtDVHm7eDiHCdZaLxRpvw3HQAcFBg&s',
                offers: [
                
                    { offer: '30% Off on Electronics', previousPrice: 200, offerPrice: 140 },
                    { offer: 'Free Delivery on Orders Above 100', previousPrice: 100, offerPrice: 100 },
                    { offer: '10% Off on Furniture', previousPrice: 150, offerPrice: 135 },
                    { offer: 'Buy 2 Get 1 Free on Drinks', previousPrice: 30, offerPrice: 30 }
                ]
            }
        ]
        },


    dubai_festival_city_mall: {
        name: 'Dubai Festival City Mall',
        shops: [
            {
                name: 'Superrdry',
                category: 'Fashion',
                floor:'First Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuX_Q_k-Z-uS0DjcRLdAR4hNysq0byfT1tuw&s',
                offers: [
            
                    { offer: '15% Off All Jackets', previousPrice: 150, offerPrice: 127.5 },
                    { offer: 'Buy 1 Get 1 50% Off', previousPrice: 200, offerPrice: 150 },
                    { offer: 'Free Accessories with any purchase', previousPrice: 50, offerPrice: 0 },
                    { offer: '30% Off on Winter Collection', previousPrice: 200, offerPrice: 140 }
                ]
            },
            {
                name: 'Virgin Megastore',
                category: 'Electronics',
                floor:'Second Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiW9JL80Ag3ghyq4pDDNQ-tfy9cRBYhdD7A&s',
                offers: [
                    
                    { offer: '15% Off for Bluetooth Speakers', previousPrice: 200, offerPrice: 170 },
                    { offer: '20% Off on Gadgets', previousPrice: 300, offerPrice: 240 },
                    { offer: 'Buy 2 Get 1 Free on Accessories', previousPrice: 100, offerPrice: 100 },
                    { offer: 'Free Delivery for Orders Above 500 AED', previousPrice: 20, offerPrice: 0 }
                ]
            },
            {
                name: 'The Body Shop',
                category: 'Beauty',
                floor:'Ground Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCq78y8pmzhlytR_kPrLuHAbJu54CkEJbrQ&s',
                offers: [
                
                    { offer: 'Free Gift with every 200 AED purchase', previousPrice: 50, offerPrice: 0 },
                    { offer: '10% Off on Body Care Products', previousPrice: 100, offerPrice: 90 },
                    { offer: '25% Off on Lip Care Range', previousPrice: 40, offerPrice: 30 },
                    { offer: 'Buy 3 Get 1 Free on Bath Products', previousPrice: 100, offerPrice: 75 }
                ]
            }
        ]
    },

    the_galleria: {
        name: 'The Galleria AI Maryah Island',
        shops: [
            {
                name: 'Swarovski',
                category: 'Jewelry',
                floor:'Ground Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GoAQq9H8B5I7OyvA_qpFOrSGngTf4gIo4w&s',
                offers: [
                    
                    { offer: 'Buy 2 Get 1 Free on Necklaces', previousPrice: 500, offerPrice: 500 },
                    { offer: '10% Off on All Watches', previousPrice: 300, offerPrice: 270 },
                    { offer: 'Free Jewelry Box with Purchase Above 400 AED', previousPrice: 30, offerPrice: 0 },
                    { offer: '15% Off for VIP Members', previousPrice: 400, offerPrice: 340 }
                ]
            },
            {
                name: 'Fendi',
                category: 'Shopping',
                floor:'Second Floor',
                logo: 'https://www.citypng.com/public/uploads/preview/fendi-white-logo-transparent-background-701751694706648gqbrjia7vq.png',
                offers: [
                    
                    { offer: '25% Off on All Bags', previousPrice: 600, offerPrice: 450 },
                    { offer: 'Buy 3 Get 1 Free on Accessories', previousPrice: 150, offerPrice: 100 },
                    { offer: '15% Off for Online Orders', previousPrice: 500, offerPrice: 425 },
                    { offer: 'Free Shipping on Orders Above 1000 AED', previousPrice: 50, offerPrice: 0 }
                ]
            },
            {
                name: 'Lululemon',
                category: 'Sport',
                floor:'First Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRAkwCL-132qI9aJRzCn6VeVrqGaZELMC_g&s',
                offers: [
                    { offer: '20% Off for Suits', previousPrice: 50, offerPrice: 40 },
                    { offer: 'Free Water Bottle with every purchase above 200 AED', previousPrice: 20, offerPrice: 0 },
                    { offer: 'Buy 1 Get 1 Free on Yoga Mats', previousPrice: 100, offerPrice: 100 },
                    { offer: '30% Off on Gymwear', previousPrice: 200, offerPrice: 140 },
                    { offer: '10% Off for Students', previousPrice: 500, offerPrice: 450 },
                    { offer: 'Buy 2 Get 1 Free on Socks', previousPrice: 50, offerPrice: 50 }
                ]
            }
        ]
    },

    marina_mall: {
        name: 'Marina Mall',
        shops: [
            {
                name: 'Mac',
                category: 'Beauty',
                floor:'Ground Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGxIDq9uVRXHBk3YGaN46EbSqsyQwNIJo5g&s',
                offers: [
                    
                    { offer: 'Free Gift with 200 AED Purchase', previousPrice: 30, offerPrice: 0 },
                    { offer: '15% Off All Lipsticks', previousPrice: 80, offerPrice: 68 },
                    { offer: 'Buy 2 Get 1 Free on Makeup Brushes', previousPrice: 120, offerPrice: 80 },
                    { offer: '10% Off All Skincare Products', previousPrice: 100, offerPrice: 90 }
                ]
            },
            {
                name: 'Jacks Will',
                category: 'Shopping',
                floor:'First Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWJ1OfqgOnSd8pIDvia-Yidcol-yFpXSBTQ&s',
                offers: [
                    
                    { offer: 'Buy 3 Get 1 Free on T-Shirts', previousPrice: 200, offerPrice: 150 },
                    { offer: '15% Off All Jackets', previousPrice: 150, offerPrice: 127.5 },
                    { offer: '20% Off on Shoes', previousPrice: 120, offerPrice: 96 },
                    { offer: 'Free Hat with Any Purchase Above 500 AED', previousPrice: 50, offerPrice: 0 }
                ]
            },
            {
                name: 'Shoe Mart',
                category: 'Sport',
                floor:'Second Floor',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNleCrRFBFfF0pxDT7xazRcjk1PA3VEDVLiw&s',
                offers: [
                    { offer: 'Buy 1 Get 1 Free on Running Shoes', previousPrice: 200, offerPrice: 200 },
                    { offer: 'Free Socks with Purchase Above 150 AED', previousPrice: 15, offerPrice: 0 },
                    { offer: '30% Off on Sportswear', previousPrice: 250, offerPrice: 175 },
                    { offer: 'Buy 2 Get 1 Free on Sneakers', previousPrice: 300, offerPrice: 200 },
                    { offer: '15% Off for Gym Members', previousPrice: 100, offerPrice: 85 }
                ]
            }
        ]
    },
    abu_dhabi_mall: {
    name: 'Abu Dhabi Mall',
    shops: [
        {
            name: 'American Eagle',
            category: 'Fashion',
            floor:'Second Floor',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBry3f7Wyanbj0UKWC7OViMJsHmGa6CnxxA&s',
            offers: [

                { offer: '15% Off on All Jackets', previousPrice: 150, offerPrice: 127.5 },
                { offer: 'Buy 2 Get 1 Free on T-Shirts', previousPrice: 200, offerPrice: 150 },
                { offer: 'Free Accessories with any purchase', previousPrice: 50, offerPrice: 0 },
                { offer: '25% Off on Summer Collection', previousPrice: 200, offerPrice: 150 }
            ]
        },
        {
            name: 'Jumia',
            category: 'Shopping',
            floor:'First Floor',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNffnWPSApstIU1oRVaCESJ4TL_HSYYf4jDg&s',
            offers: [
                { offer: 'Buy 3 Get 1 Free on Clothing', previousPrice: 300, offerPrice: 225 },
                { offer: 'Free Delivery on Orders Above 300 AED', previousPrice: 20, offerPrice: 0 },
                { offer: '15% Off All Accessories', previousPrice: 100, offerPrice: 85 },
                { offer: '10% Off on Orders Above 500 AED', previousPrice: 500, offerPrice: 450 }
            ]
        },
        {
            name: 'Emax',
            category: 'Electronics',
            floor:'Second Floor',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQC-b0U6LbmkiBxEBg-W7bM9BxKFpASiMcRQ&s',
            offers: [
                { offer: 'Buy 1 Get 1 Free on Headphones', previousPrice: 200, offerPrice: 200 },
                { offer: 'Free HDMI Cable with TV Purchase', previousPrice: 30, offerPrice: 0 },
                { offer: '10% Off on Smart Watches', previousPrice: 500, offerPrice: 450 },
                { offer: 'Free Delivery for Orders Above 1000 AED', previousPrice: 50, offerPrice: 0 },
                { offer: '15% Off on Home Appliances', previousPrice: 300, offerPrice: 255 }
            ]
        }
    ]
},

al_wahda_mall: {
    name: 'AI Wahda Mall',
    shops: [
        {
            name: 'Starbucks',
            category: 'Food',
            floor:'Second Floor',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
            offers: [
                
                { offer: 'Free Pastry with Every Coffee', previousPrice: 20, offerPrice: 0 },
                { offer: '10% Off for Mobile App Orders', previousPrice: 50, offerPrice: 45 },
                { offer: '15% Off on Large Coffee', previousPrice: 30, offerPrice: 25 },
                { offer: 'Buy 2 Get 1 Free on Cold Drinks', previousPrice: 40, offerPrice: 40 }
            ]
        },
        {
            name: 'Tiffany',
            category: 'Luxury',
            floor:'Second Floor',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0Ixfc2RXojFOvyr7Nc9XsgpsRKdSqFm6Pg&s',
            offers: [
                
                { offer: '15% Off on Jewelry Collections', previousPrice: 500, offerPrice: 425 },
                { offer: 'Free Gift with Every Purchase Above 1000 AED', previousPrice: 50, offerPrice: 0 },
                { offer: '20% Off for VIP Members', previousPrice: 200, offerPrice: 160 },
                { offer: 'Buy 2 Get 1 Free on Rings', previousPrice: 150, offerPrice: 100 }
            ]
        }
    ]
},

    bawabat_al_sharq: {
        name: "Sarit Mall Nairobi Centre",
        shops: [
            {
                name: "Sepora",
                category: "Beauty",
                floor:'Ground Floor',
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PWj2a0JBVf396Ni0-xKhzj3SaFTfsewyfg&s",
                offers: [
                    { offer: "10% Off for Jasmine Fragrance", previousPrice: 50, offerPrice: 40 },
                    { offer: "Buy 1 Get 1 Free Small Sized Fragrance", previousPrice: 100, offerPrice: 100 },
                    { offer: "Buy 3 Get 1 Free on Makeup Kits", previousPrice: 200, offerPrice: 150 },
                    { offer: "Free Beauty Consultation with Purchase", previousPrice: 30, offerPrice: 0 },
                    { offer: "15% Off on Skincare Products", previousPrice: 80, offerPrice: 68 },
                    { offer: "Free Shipping on Orders Above 300 AED", previousPrice: 20, offerPrice: 0 }
                ]
            }
        ]
    },   
    gvk_one_mall: {
    name: 'GVK One Mall (Banjara Hills)',
    shops: [
        {
            name: 'Zara',
            category: 'Fashion',
            floor:'Second Floor',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyXGc69cDel26MHRUk9AMJUuNDMN9FcDx8Q&s',
            offers: [
                { offer: '20% Off on New Collection', previousPrice: 500, offerPrice: 400 },
                { offer: 'Buy 1 Get 1 Free on Accessories', previousPrice: 150, offerPrice: 150 },
                { offer: '30% Off on Winter Collection', previousPrice: 600, offerPrice: 420 },
                { offer: 'Free Gift with Any Purchase Above ₹2000', previousPrice: 100, offerPrice: 0 },
                { offer: 'Buy 2, Get 1 Free on T-Shirts', previousPrice: 300, offerPrice: 300 }
            ]
        },
        {
            name: 'H&M',
            category: 'Fashion',
            floor:'First Floor',
            logo: 'https://seekvectors.com/files/download/f033dff3321b85263f70d5a1bd5adffd.jpg',
            offers: [
                { offer: '30% Off on Winter Wear', previousPrice: 200, offerPrice: 140 },
                { offer: 'Free Shipping on Orders Above ₹1000', previousPrice: 50, offerPrice: 0 },
                { offer: 'Buy 1 Get 1 Free on T-Shirts', previousPrice: 250, offerPrice: 250 },
                { offer: '40% Off on Selected Accessories', previousPrice: 300, offerPrice: 180 },
                { offer: '15% Off on Footwear', previousPrice: 500, offerPrice: 425 }
            ]
        },
        {
            name: 'Apple Store',
            category: 'Electronics',
            floor:'Second Floor',
            logo: 'https://w7.pngwing.com/pngs/695/105/png-transparent-apple-logo-business-apple-logo-outline-heart-logo-computer-wallpaper-thumbnail.png',
            offers: [
                { offer: '10% Off on iPhones', previousPrice: 1000, offerPrice: 900 },
                { offer: 'Buy iPad, Get Free AirPods', previousPrice: 150, offerPrice: 0 },
                { offer: '15% Off on Accessories', previousPrice: 200, offerPrice: 170 },
                { offer: 'Free Screen Protector with iPhone Purchase', previousPrice: 50, offerPrice: 0 },
                { offer: '10% Off on MacBooks', previousPrice: 1200, offerPrice: 1080 }
            ]
        }
    ]
},
inorbit_mall: {
    name: 'Inorbit Mall (Hitech City)',
    shops: [
        {
            name: 'Adidas',
            category: 'Fashion',
            floor:'Ground Floor',
            logo: 'https://w7.pngwing.com/pngs/151/641/png-transparent-adidas-logo-herzogenaurach-adidas-logo-clothing-three-stripes-adidas-angle-text-monochrome.png',
            offers: [
                { offer: '15% Off on Sportswear', previousPrice: 300, offerPrice: 255 },
                { offer: 'Buy 1, Get 1 Free on Shoes', previousPrice: 150, offerPrice: 150 },
                { offer: '20% Off on Select Sports Equipment', previousPrice: 500, offerPrice: 400 },
                { offer: '10% Off on Running Shoes', previousPrice: 600, offerPrice: 540 },
                { offer: 'Buy 2 Get 1 Free on Socks', previousPrice: 150, offerPrice: 150 }
            ]
        },
        {
            name: 'Nike',
            category: 'Fashion',
            floor:'First Floor',
            logo: 'https://i.pinimg.com/736x/a7/15/be/a715beeaceeba3b6fdbcb29717032cc8.jpg',
            offers: [
                { offer: '10% Off on Sneakers', previousPrice: 400, offerPrice: 360 },
                { offer: 'Buy 2 Get 1 Free on T-Shirts', previousPrice: 120, offerPrice: 120 },
                { offer: '15% Off on Running Shoes', previousPrice: 450, offerPrice: 382.5 },
                { offer: '20% Off on Sports Gear', previousPrice: 250, offerPrice: 200 },
                { offer: 'Buy 1, Get 1 Free on Gym Wear', previousPrice: 300, offerPrice: 300 }
            ]
        },
        {
            name: 'Samsung',
            category: 'Electronics',
            floor:'Second Floor',
            logo: 'https://w7.pngwing.com/pngs/990/838/png-transparent-samsung-electronics-samsung-galaxy-samsung-logo-text-logo-black-thumbnail.png',
            offers: [
                { offer: '20% Off on Smartphones', previousPrice: 500, offerPrice: 400 },
                { offer: 'Free Wireless Earbuds with Smartphone Purchase', previousPrice: 200, offerPrice: 200 },
                { offer: '10% Off on Tablets', previousPrice: 350, offerPrice: 315 },
                { offer: 'Free Delivery on All Orders Above ₹5000', previousPrice: 50, offerPrice: 0 },
                { offer: '5% Off on Accessories', previousPrice: 100, offerPrice: 95 }
            ]
        }
    ]
},
hyderabad_central_mall: {
    name: 'Hyderabad Central Mall (Ameerpet)',
    shops: [
        {
            name: 'Levi\'s',
            category: 'Fashion',
            floor:'Ground Floor',
            logo: 'https://w7.pngwing.com/pngs/581/271/png-transparent-levi%C2%B4s-store-frolunda-torg-levi-strauss-co-brand-sweater-levi-text-label-rectangle-thumbnail.png',
            offers: [
                { offer: '25% Off on Jeans', previousPrice: 180, offerPrice: 135 },
                { offer: 'Buy 2 Get 1 Free on T-Shirts', previousPrice: 300, offerPrice: 300 },
                { offer: 'Free Belt with Jeans Purchase', previousPrice: 50, offerPrice: 0 },
                { offer: '15% Off on Casual Wear', previousPrice: 220, offerPrice: 187 },
                { offer: '20% Off on Jackets', previousPrice: 500, offerPrice: 400 }
            ]
        },
        {
            name: 'Pantaloons',
            category: 'Fashion',
            floor:'First Floor',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmy-5byt4r-FVcRiUidN-Dg585iRyYGaRZg&s',
            offers: [
                { offer: '15% Off on Dresses', previousPrice: 100, offerPrice: 85 },
                { offer: 'Free Accessories with Any Purchase Above ₹500', previousPrice: 50, offerPrice: 0 },
                { offer: 'Buy 2 Get 1 Free on T-Shirts', previousPrice: 200, offerPrice: 200 },
                { offer: '30% Off on Selected Styles', previousPrice: 350, offerPrice: 245 },
                { offer: 'Buy 1, Get 1 Free on Footwear', previousPrice: 400, offerPrice: 400 }
            ]
        },
        {
            name: 'Croma',
            category: 'Electronics',
            floor:'Second Floor',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBb-ZSLaAUHjrhpDayixEUOpfwROxX50DONw&s',
            offers: [
                { offer: '10% Off on Laptops', previousPrice: 600, offerPrice: 540 },
                { offer: 'Free Delivery on Purchases Above ₹5000', previousPrice: 100, offerPrice: 0 },
                { offer: '15% Off on Smart TVs', previousPrice: 1000, offerPrice: 850 },
                { offer: 'Buy 1, Get 1 Free on Headphones', previousPrice: 200, offerPrice: 200 },
                { offer: '5% Off on Gaming Consoles', previousPrice: 400, offerPrice: 380 }
            ]
        }
    ]
},
sarath_city_capital_mall: {
    name: 'Sarath City Capital Mall (Kukatpally)',
    shops: [
        {
            name: 'Lifestyle',
            category: 'Fashion',
            floor:'Ground Floor',
            logo: 'https://banner2.cleanpng.com/20180712/yyv/kisspng-lifestyle-vijayawada-retail-department-store-disco-life-style-5b476459977d07.4113450015314054016205.jpg',
            offers: [
                { offer: '20% Off on Apparel', previousPrice: 250, offerPrice: 200 },
                { offer: 'Buy 1 Get 1 Free on Bags', previousPrice: 300, offerPrice: 300 },
                { offer: '10% Off on Shoes', previousPrice: 400, offerPrice: 360 },
                { offer: 'Free Gift with Any Purchase Above ₹2000', previousPrice: 100, offerPrice: 0 },
                { offer: '15% Off on Accessories', previousPrice: 150, offerPrice: 127.5 }
            ]
        },
        {
            name: 'Max Fashion',
            category: 'Fashion',
            floor:'First Floor',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIE9dpeMUn6KvdUhxUzyB44Uw9LzOQIfMdMw&s',
            offers: [
                { offer: 'Buy 2 Get 1 Free on T-Shirts', previousPrice: 180, offerPrice: 180 },
                { offer: '25% Off on Footwear', previousPrice: 200, offerPrice: 150 },
                { offer: '10% Off on Dresses', previousPrice: 300, offerPrice: 270 },
                { offer: 'Buy 1 Get 1 Free on Jeans', previousPrice: 250, offerPrice: 250 },
                { offer: 'Free Accessories with Any Purchase Above ₹1500', previousPrice: 80, offerPrice: 0 }
            ]
        },
        {
            name: 'Reliance Digital',
            category: 'Electronics',
            floor:'Second Floor',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMghx0NnQfrSfPfcXT80uNiHOShkNL9Dg8A&s',
            offers: [
                { offer: '15% Off on Electronics', previousPrice: 500, offerPrice: 425 },
                { offer: 'Free Headphones with Laptop Purchase', previousPrice: 100, offerPrice: 0 },
                { offer: '10% Off on Smartphones', previousPrice: 400, offerPrice: 360 },
                { offer: 'Free TV Wall Mount with TV Purchase', previousPrice: 50, offerPrice: 0 },
                { offer: 'Free Delivery on Orders Above ₹10000', previousPrice: 150, offerPrice: 0 }
            ]
        }
    ]
},
lulu_mall: {
    name: 'LuLu Mall (Kukatpally)',
    shops: [
        {
            name: 'H&M',
            category: 'Fashion',
            floor:'Ground Floor',
            logo: 'https://seekvectors.com/files/download/f033dff3321b85263f70d5a1bd5adffd.jpg',
            offers: [
                { offer: '30% Off on Winter Wear', previousPrice: 200, offerPrice: 140 },
                { offer: 'Free Shipping on Orders Above ₹1000', previousPrice: 50, offerPrice: 0 },
                { offer: 'Buy 1 Get 1 Free on T-Shirts', previousPrice: 250, offerPrice: 250 },
                { offer: '40% Off on Selected Accessories', previousPrice: 300, offerPrice: 180 },
                { offer: '15% Off on Footwear', previousPrice: 500, offerPrice: 425 }
            ]
        },
        {
            name: 'Zara',
            category: 'Fashion',
            floor:'First Floor',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyXGc69cDel26MHRUk9AMJUuNDMN9FcDx8Q&s',
            offers: [
                { offer: '20% Off on New Collection', previousPrice: 500, offerPrice: 400 },
                { offer: 'Buy 1 Get 1 Free on Accessories', previousPrice: 150, offerPrice: 150 },
                { offer: '30% Off on Winter Collection', previousPrice: 600, offerPrice: 420 },
                { offer: 'Free Gift with Any Purchase Above ₹2000', previousPrice: 100, offerPrice: 0 },
                { offer: 'Buy 2, Get 1 Free on T-Shirts', previousPrice: 300, offerPrice: 300 }
            ]
        },
        {
            name: 'Samsung',
            category: 'Electronics',
            floor:'Second Floor',
            logo: 'https://w7.pngwing.com/pngs/990/838/png-transparent-samsung-electronics-samsung-galaxy-samsung-logo-text-logo-black-thumbnail.png',
            offers: [
                { offer: '20% Off on Smartphones', previousPrice: 500, offerPrice: 400 },
                { offer: 'Free Wireless Earbuds with Smartphone Purchase', previousPrice: 200, offerPrice: 200 },
                { offer: '10% Off on Tablets', previousPrice: 350, offerPrice: 315 },
                { offer: 'Free Delivery on All Orders Above ₹5000', previousPrice: 50, offerPrice: 0 },
                { offer: '5% Off on Accessories', previousPrice: 100, offerPrice: 95 }
            ]
        }
    ]
}

};

    // Get mall based on the ID
    const mall = malls[mallId];
    if (!mall) {
        alert('Mall not found!');
        return;
    }

    // Set mall name in the header
    const mallNameElement = document.getElementById('mall-name');
    if (mallNameElement) {
        mallNameElement.textContent = mall.name;
    }

// Function to display shops in the selected mall
function displayShops(categoryFilter = '') {
    const shopList = document.getElementById('shop-list');
    shopList.innerHTML = ''; // Clear previous content

    // Filtered shops based on the selected category
    const filteredShops = mall.shops.filter(shop => categoryFilter === '' || shop.category.toLowerCase() === categoryFilter.toLowerCase());

    // Check if there are no shops for the selected category
    if (filteredShops.length === 0) {
        const noShopsMessage = document.createElement('div');
        noShopsMessage.classList.add('col-12', 'text-center');
        noShopsMessage.innerHTML = `<p class="text-danger">This category is not available in this mall.</p>`;
        shopList.appendChild(noShopsMessage);
    } else {
        // Display the shops as usual if there are matching categories
        filteredShops.forEach(shop => {
            const shopItem = document.createElement('div');
            shopItem.classList.add('shop-item'); // Just the shop-item class (no col-md)
            shopItem.innerHTML = `
                <div class="card text-center">
                    <img src="${shop.logo}" alt="${shop.name}" class="card-img-top offer-logo">
                    <div class="card-body">
                        <h4 class="card-title">${shop.name}</h4>
                        <h5 class="card-text">${shop.floor}</h5>
                        <button class="btn btn-primary" onclick="displayOffers('${encodeURIComponent(JSON.stringify(shop))}')">See Offers</button>
                    </div>
                </div>
            `;
            shopList.appendChild(shopItem);
        });
        
    }
}

// Function to display offers of the selected shop
window.displayOffers = function(shopString) {
    const shop = JSON.parse(decodeURIComponent(shopString));
    const offersSection = document.getElementById('offers-section');
    offersSection.innerHTML = `
        <h3 class="text-center">${shop.name} Offers</h3>
        <div class="offers-section">
            ${shop.offers.map(offer => `
                <div class="offer-card">
                    <h5>${offer.offer}</h5>
                    <p class="previous-price">Was: $${offer.previousPrice}</p>
                    <p class="offer-price">Now: $${offer.offerPrice}</p>
                    <button class="btn btn-primary">Visit Store</button>
                </div>
            `).join('')}
        </div>
        <button class="btn btn-secondary mt-4" onclick="goBackToShops()">Back to Shops</button>
    `;
    // Show offers section and hide shop list
    document.getElementById('offers-section').style.display = 'block';
    document.getElementById('shop-list').style.display = 'none';
};

// Go back to the shop list when the back button is clicked
window.goBackToShops = function() {
    document.getElementById('offers-section').style.display = 'none';
    document.getElementById('shop-list').style.display = 'flex';
};

// Initialize shop display
displayShops();

// Filter shops based on category
window.filterShops = function () {
    const categoryFilter = document.getElementById('category-filter').value;
    displayShops(categoryFilter);
    document.getElementById('offers-section').innerHTML = ''; // Clear the offers when filtering shops
};
});   



