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
          "name": "GVK One Mall (Banjara Hills)",
          "shops": [
            // Sportswear
            {
              "name": "Nike",
              "category": "Sports",
              "floor": "Ground Floor",
              "logo": "https://i.pinimg.com/736x/a7/15/be/a715beeaceeba3b6fdbcb29717032cc8.jpg",
              "offers": [
                { "offer": "15% Off on Sneakers", "previousPrice": 300, "offerPrice": 255 },
                { "offer": "Free Shipping on Orders Above ₹1000", "previousPrice": 50, "offerPrice": 0 },
                { "offer": "10% Off on Running Shoes", "previousPrice": 500, "offerPrice": 450 },
                { "offer": "20% Off on Sports Gear", "previousPrice": 600, "offerPrice": 480 },
                { "offer": "Buy 2 Get 1 Free on T-Shirts", "previousPrice": 200, "offerPrice": 200 },
                { "offer": "Free Gym Accessories with Purchase of Sportswear", "previousPrice": 150, "offerPrice": 0 }
              ]
            },
            {
              "name": "Adidas",
              "category": "Sports",
              "floor": "First Floor",
              "logo": "https://i.pinimg.com/736x/8c/b0/8a/8cb08a963150553f12dc40795e5cb4a3.jpg",
              "offers": [
                { "offer": "15% Off on Sportswear", "previousPrice": 300, "offerPrice": 255 },
                { "offer": "Buy 1 Get 1 Free on T-Shirts", "previousPrice": 250, "offerPrice": 250 },
                { "offer": "10% Off on Shoes", "previousPrice": 500, "offerPrice": 450 },
                { "offer": "Free Sports Accessories with Purchase Above ₹2000", "previousPrice": 100, "offerPrice": 0 },
                { "offer": "20% Off on Selected Sports Equipment", "previousPrice": 600, "offerPrice": 480 },
                { "offer": "Free Gym Bag with Purchase of Sports Shoes", "previousPrice": 150, "offerPrice": 0 }
              ]
            },
            {
              "name": "Reebok",
              "category": "Sports",
              "floor": "First Floor",
              "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46nLVTBmZHlEvvLTmkYnD0rSaDmbIyIV08w&s",
              "offers": [
                { "offer": "10% Off on Sportswear", "previousPrice": 350, "offerPrice": 315 },
                { "offer": "Buy 1 Get 1 Free on Running Shoes", "previousPrice": 400, "offerPrice": 400 },
                { "offer": "15% Off on Fitness Gear", "previousPrice": 250, "offerPrice": 212.5 },
                { "offer": "Free Water Bottle with Sportswear Purchase Above ₹1500", "previousPrice": 100, "offerPrice": 0 },
                { "offer": "20% Off on Sports Accessories", "previousPrice": 300, "offerPrice": 240 }
              ]
            },
            {
              "name": "Puma",
              "category": "Sports",
              "floor": "First Floor",
              "logo": "https://w7.pngwing.com/pngs/21/658/png-transparent-puma-logo-icon-thumbnail.png",
              "offers": [
                { "offer": "Buy 1 Get 1 Free on T-Shirts", "previousPrice": 150, "offerPrice": 150 },
                { "offer": "25% Off on Shoes", "previousPrice": 450, "offerPrice": 337.5 },
                { "offer": "30% Off on Tracksuits", "previousPrice": 700, "offerPrice": 490 },
                { "offer": "10% Off on Footwear", "previousPrice": 500, "offerPrice": 450 },
                { "offer": "Free Gym Wear with Purchase Above ₹3000", "previousPrice": 200, "offerPrice": 0 },
                { "offer": "Free Sports Bag with Footwear Purchase", "previousPrice": 100, "offerPrice": 0 }
              ]
            },
            {
              "name": "Under Armour",
              "category": "Shopping",
              "floor": "First Floor",
              "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDefRQlVmVeX6EadillqUWbTOquohjeOnUiQ&s",
              "offers": [
                { "offer": "20% Off on Sports Apparel", "previousPrice": 600, "offerPrice": 480 },
                { "offer": "Buy 1 Get 1 Free on Running Shoes", "previousPrice": 450, "offerPrice": 450 },
                { "offer": "Free Gym Accessories with Sportswear Purchase Above ₹2000", "previousPrice": 150, "offerPrice": 0 },
                { "offer": "10% Off on Activewear", "previousPrice": 350, "offerPrice": 315 }
              ]
            },
      
            // Lifestyle Apparel
            {
              "name": "Zara",
              "category": "Shopping",
              "floor": "Second Floor",
              "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyXGc69cDel26MHRUk9AMJUuNDMN9FcDx8Q&s",
              "offers": [
                { "offer": "20% Off on New Collection", "previousPrice": 500, "offerPrice": 400 },
                { "offer": "Buy 1 Get 1 Free on Accessories", "previousPrice": 150, "offerPrice": 150 },
                { "offer": "30% Off on Winter Collection", "previousPrice": 600, "offerPrice": 420 },
                { "offer": "Free Gift with Any Purchase Above ₹2000", "previousPrice": 100, "offerPrice": 0 },
                { "offer": "Buy 2, Get 1 Free on T-Shirts", "previousPrice": 300, "offerPrice": 300 },
                { "offer": "10% Off on Footwear", "previousPrice": 450, "offerPrice": 405 }
              ]
            },
            {
              "name": "H&M",
              "category": "Fashion",
              "floor": "First Floor",
              "logo": "https://seekvectors.com/files/download/f033dff3321b85263f70d5a1bd5adffd.jpg",
              "offers": [
                { "offer": "30% Off on Winter Wear", "previousPrice": 200, "offerPrice": 140 },
                { "offer": "Free Shipping on Orders Above ₹1000", "previousPrice": 50, "offerPrice": 0 },
                { "offer": "Buy 1 Get 1 Free on T-Shirts", "previousPrice": 250, "offerPrice": 250 },
                { "offer": "40% Off on Selected Accessories", "previousPrice": 300, "offerPrice": 180 },
                { "offer": "15% Off on Footwear", "previousPrice": 500, "offerPrice": 425 },
                { "offer": "Buy 2, Get 1 Free on Dresses", "previousPrice": 450, "offerPrice": 450 }
              ]
            },
            {
              "name": "Gap",
              "category": "Luxury",
              "floor": "Second Floor",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Gap_logo.svg/800px-Gap_logo.svg.png",
              "offers": [
                { "offer": "Buy 1 Get 1 Free on T-Shirts", "previousPrice": 200, "offerPrice": 200 },
                { "offer": "15% Off on Jeans", "previousPrice": 400, "offerPrice": 340 },
                { "offer": "20% Off on Summer Collection", "previousPrice": 500, "offerPrice": 400 },
                { "offer": "Buy 2 Get 1 Free on Hoodies", "previousPrice": 450, "offerPrice": 450 }
              ]
            },
            {
              "name": "Forever 21",
              "category": "Beauty",
              "floor": "First Floor",
              "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46edFQtEoCHjM0nIMB03fNZ1cruuLcicw7g&s",
              "offers": [
                { "offer": "10% Off on New Arrivals", "previousPrice": 500, "offerPrice": 450 },
                { "offer": "Buy 1 Get 1 Free on Dresses", "previousPrice": 400, "offerPrice": 400 },
                { "offer": "Free Shipping on Orders Above ₹1500", "previousPrice": 50, "offerPrice": 0 },
                { "offer": "30% Off on Accessories", "previousPrice": 300, "offerPrice": 210 }
              ]
            },
            {
              "name": "United Colors of Benetton",
              "category": "Clothing",
              "floor": "Second Floor",
              "logo": "https://w7.pngwing.com/pngs/386/806/png-transparent-benetton-hd-logo.png",
              "offers": [
                { "offer": "25% Off on Winter Collection", "previousPrice": 500, "offerPrice": 375 },
                { "offer": "Buy 2 Get 1 Free on T-Shirts", "previousPrice": 250, "offerPrice": 250 },
                { "offer": "Free Shipping on Orders Above ₹1000", "previousPrice": 50, "offerPrice": 0 }
              ]
            },
      
            // Electronics
            {
              "name": "Apple Store",
              "category": "Electronics",
              "floor": "Second Floor",
              "logo": "https://w7.pngwing.com/pngs/695/105/png-transparent-apple-logo-business-apple-logo-outline-heart-logo-computer-wallpaper-thumbnail.png",
              "offers": [
                { "offer": "10% Off on iPhones", "previousPrice": 1000, "offerPrice": 900 },
                { "offer": "Buy iPad, Get Free AirPods", "previousPrice": 150, "offerPrice": 0 },
                { "offer": "15% Off on Accessories", "previousPrice": 200, "offerPrice": 170 },
                { "offer": "Free Screen Protector with iPhone Purchase", "previousPrice": 50, "offerPrice": 0 },
                { "offer": "10% Off on MacBooks", "previousPrice": 1200, "offerPrice": 1080 },
                { "offer": "Free Apple Watch Strap with MacBook Purchase", "previousPrice": 100, "offerPrice": 0 }
              ]
            },
            {
              "name": "Samsung",
              "category": "Electronics",
              "floor": "Second Floor",
              "logo": "https://w7.pngwing.com/pngs/990/838/png-transparent-samsung-electronics-samsung-galaxy-samsung-logo-text-logo-black-thumbnail.png",
              "offers": [
                { "offer": "20% Off on Smartphones", "previousPrice": 500, "offerPrice": 400 },
                { "offer": "Free Wireless Earbuds with Smartphone Purchase", "previousPrice": 200, "offerPrice": 200 },
                { "offer": "10% Off on Tablets", "previousPrice": 350, "offerPrice": 315 },
                { "offer": "Free Delivery on All Orders Above ₹5000", "previousPrice": 50, "offerPrice": 0 },
                { "offer": "5% Off on Accessories", "previousPrice": 100, "offerPrice": 95 },
                { "offer": "Free Screen Protector with Mobile Purchase", "previousPrice": 50, "offerPrice": 0 }
              ]
            },
            {
              "name": "Sony",
              "category": "Electronics",
              "floor": "Second Floor",
              "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKy5XoaVlGtKFib4LPY3BePtsyv5DSv1KwA&s",
              "offers": [
                { "offer": "10% Off on Smart TVs", "previousPrice": 1500, "offerPrice": 1350 },
                { "offer": "Free Soundbar with TV Purchase", "previousPrice": 300, "offerPrice": 0 },
                { "offer": "15% Off on Headphones", "previousPrice": 100, "offerPrice": 85 },
                { "offer": "Free Delivery on All Orders Above ₹2000", "previousPrice": 50, "offerPrice": 0 }
              ]
            },
            {
                "name": 'Hard Rock Cafe',
                "category": 'Food',
                "floor": 'Ground Floor',
                "logo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqc5kU6PCwMxIsIPNFhIAv9GjDR-d_TH764A&s',
                "offers": [
                    { offer: '10% Off on Total Bill', previousPrice: 1000, offerPrice: 900 },
                    { offer: 'Buy 1 Get 1 Free on Drinks', previousPrice: 300, offerPrice: 0 },
                    { offer: 'Free Appetizer with Main Course', previousPrice: 200, offerPrice: 0 },
                    { offer: '20% Off on Family Meals', previousPrice: 1200, offerPrice: 960 },
                    { offer: 'Free Dessert with Any Purchase Above ₹1500', previousPrice: 150, offerPrice: 0 }
                ]
            },
            {
                "name": 'Starbucks',
                "category": 'Food',
                "floor": 'First Floor',
                "logo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTWV4otuEm2RFVsa0A2rATJwLrW4-eBcZHg&s',
                "offers": [
                    { offer: 'Buy 1 Get 1 Free on Coffee', previousPrice: 250, offerPrice: 250 },
                    { offer: '20% Off on All Snacks', previousPrice: 150, offerPrice: 120 },
                    { offer: 'Free Cake with Any Coffee Purchase Above ₹500', previousPrice: 100, offerPrice: 0 },
                    { offer: '10% Off on Cold Beverages', previousPrice: 200, offerPrice: 180 },
                    { offer: 'Free Gift Card with Purchase Above ₹1000', previousPrice: 100, offerPrice: 0 }
                ]
            },
            {
                "name": 'KFC',
                "category": 'Food',
                "floor": 'Second Floor',
                "logo": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTWV4otuEm2RFVsa0A2rATJwLrW4-eBcZHg&s',
                "offers": [
                    { offer: '30% Off on Family Bucket', previousPrice: 800, offerPrice: 560 },
                    { offer: 'Buy 1 Get 1 Free on Zinger Burgers', previousPrice: 150, offerPrice: 150 },
                    { offer: 'Free Fries with Any Meal', previousPrice: 100, offerPrice: 0 },
                    { offer: 'Buy 2, Get 1 Free on Wings', previousPrice: 200, offerPrice: 200 },
                    { offer: '20% Off on All Combo Meals', previousPrice: 350, offerPrice: 280 }
                ]
            }
          ]
        },
        
inorbit_mall: {
    "name": "Inorbit Mall Hyderabad",
    "shops": [
        {
            "name": "American Eagle",
            "category": "Clothing",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBry3f7Wyanbj0UKWC7OViMJsHmGa6CnxxA&s",
            "offers": [
                { "offer": "10% Off on New Arrivals", "previousPrice": 1200, "offerPrice": 1080 },
                { "offer": "Buy 1 Get 1 Free on T-Shirts", "previousPrice": 600, "offerPrice": 600 },
                { "offer": "Free Shipping on Orders Above ₹1000", "previousPrice": 50, "offerPrice": 0 },
                { "offer": "20% Off on Winter Collection", "previousPrice": 1500, "offerPrice": 1200 },
                { "offer": "Flat 30% Off on Selected Items", "previousPrice": 800, "offerPrice": 560 }
            ]
        },
        {
            "name": "Biba",
            "category": "Clothing",
            "floor": "Second Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSORBlbiaoTdCEyhHQtKiKj-Mb7GajDYqEg&s",
            "offers": [
                { "offer": "15% Off on Ethnic Wear", "previousPrice": 2000, "offerPrice": 1700 },
                { "offer": "Buy 2, Get 1 Free on Kurtas", "previousPrice": 1200, "offerPrice": 1200 },
                { "offer": "Free Gift with Purchases Above ₹1500", "previousPrice": 500, "offerPrice": 0 },
                { "offer": "20% Off on Dupattas", "previousPrice": 800, "offerPrice": 640 },
                { "offer": "30% Off on Selected Sarees", "previousPrice": 3000, "offerPrice": 2100 }
            ]
        },
        {
            "name": "H&M",
            "category": "Clothing",
            "floor": "First Floor",
            "logo": "https://seekvectors.com/files/download/f033dff3321b85263f70d5a1bd5adffd.jpg",
            "offers": [
                { "offer": "20% Off on Winter Collection", "previousPrice": 1500, "offerPrice": 1200 },
                { "offer": "Free Shipping on Orders Above ₹1000", "previousPrice": 50, "offerPrice": 0 },
                { "offer": "Buy 2, Get 1 Free on T-Shirts", "previousPrice": 800, "offerPrice": 800 },
                { "offer": "30% Off on Selected Tops", "previousPrice": 900, "offerPrice": 630 },
                { "offer": "10% Off on Jeans", "previousPrice": 1500, "offerPrice": 1350 }
            ]
        },
        {
            "name": "Nike",
            "category": "Sports",
            "floor": "Second Floor",
            "logo": "https://i.pinimg.com/736x/a7/15/be/a715beeaceeba3b6fdbcb29717032cc8.jpg",
            "offers": [
                { "offer": "15% Off on Sneakers", "previousPrice": 3000, "offerPrice": 2550 },
                { "offer": "Free Shipping on Orders Above ₹1000", "previousPrice": 50, "offerPrice": 0 },
                { "offer": "10% Off on Running Shoes", "previousPrice": 3500, "offerPrice": 3150 },
                { "offer": "Buy 2, Get 1 Free on T-Shirts", "previousPrice": 1000, "offerPrice": 1000 },
                { "offer": "20% Off on Sports Gear", "previousPrice": 2000, "offerPrice": 1600 }
            ]
        },
        {
            "name": "Adidas",
            "category": "Sports",
            "floor": "Second Floor",
            "logo": "https://i.pinimg.com/736x/8c/b0/8a/8cb08a963150553f12dc40795e5cb4a3.jpg",
            "offers": [
                { "offer": "10% Off on Shoes", "previousPrice": 4500, "offerPrice": 4050 },
                { "offer": "Buy 1, Get 1 Free on T-Shirts", "previousPrice": 800, "offerPrice": 800 },
                { "offer": "15% Off on Sportswear", "previousPrice": 2000, "offerPrice": 1700 },
                { "offer": "Buy 2, Get 1 Free on Tracks", "previousPrice": 1000, "offerPrice": 1000 },
                { "offer": "Free Gym Bag with Purchases Above ₹3000", "previousPrice": 250, "offerPrice": 0 }
            ]
        },
        {
            "name": "Reebok",
            "category": "Sports",
            "floor": "First Floor",
            "logo": "https://www.citypng.com/public/uploads/preview/download-reebok-old-white-logo-png-7017516947742172ufwnug5v4.png",
            "offers": [
                { "offer": "20% Off on Sports Shoes", "previousPrice": 3000, "offerPrice": 2400 },
                { "offer": "Buy 2, Get 1 Free on Fitness Gear", "previousPrice": 1200, "offerPrice": 1200 },
                { "offer": "Free Water Bottle with Purchase Above ₹2000", "previousPrice": 250, "offerPrice": 0 },
                { "offer": "15% Off on Yoga Mats", "previousPrice": 800, "offerPrice": 680 },
                { "offer": "10% Off on Running Shoes", "previousPrice": 4000, "offerPrice": 3600 }
            ]
        },
        {
            "name": "MAC",
            "category": "Cosmetics",
            "floor": "First Floor",
            "logo": "https://w7.pngwing.com/pngs/694/991/png-transparent-mac-cosmetics-logo-m-a-c-cosmetics-rouge-lipstick-thumbnail.png",
            "offers": [
                { "offer": "Buy 1 Get 1 Free on Lipsticks", "previousPrice": 1200, "offerPrice": 1200 },
                { "offer": "10% Off on All Makeup Products", "previousPrice": 1500, "offerPrice": 1350 },
                { "offer": "15% Off on Face Products", "previousPrice": 1000, "offerPrice": 850 },
                { "offer": "Free Makeup Bag with Purchases Above ₹2000", "previousPrice": 500, "offerPrice": 0 },
                { "offer": "Buy 2, Get 1 Free on Foundations", "previousPrice": 1800, "offerPrice": 1800 }
            ]
        },
        {
            "name": "The Body Shop",
            "category": "Cosmetics",
            "floor": "First Floor",
            "logo": "https://e7.pngegg.com/pngimages/183/731/png-clipart-logo-the-body-shop-cosmetics-brand-others-text-trademark.png",
            "offers": [
                { "offer": "15% Off on Skincare", "previousPrice": 1000, "offerPrice": 850 },
                { "offer": "Buy 2, Get 1 Free on Body Care Products", "previousPrice": 600, "offerPrice": 600 },
                { "offer": "20% Off on Shower Gels", "previousPrice": 500, "offerPrice": 400 },
                { "offer": "10% Off on Fragrances", "previousPrice": 800, "offerPrice": 720 },
                { "offer": "Free Sample with Any Purchase Above ₹1000", "previousPrice": 50, "offerPrice": 0 }
            ]
        },
        {
            "name": "Nykaa Luxe",
            "category": "Cosmetics",
            "floor": "Ground Floor",
            "logo": "https://cdn.sanity.io/images/ei17ewl3/production/4a8789744bfd2e6f517f8da985c76202e600fe54-1000x775.jpg",
            "offers": [
                { "offer": "10% Off on All Cosmetics", "previousPrice": 800, "offerPrice": 720 },
                { "offer": "Free Gift with Purchase Above ₹1500", "previousPrice": 200, "offerPrice": 0 },
                { "offer": "Flat 25% Off on Premium Skincare", "previousPrice": 1500, "offerPrice": 1125 },
                { "offer": "20% Off on Haircare Products", "previousPrice": 1200, "offerPrice": 960 },
                { "offer": "Buy 2, Get 1 Free on Selected Products", "previousPrice": 600, "offerPrice": 600 }
            ]
        },
        {
            "name": "Aptronix",
            "category": "Electronics",
            "floor": "Second Floor",
            "logo": "https://gvkone.com/wp-content/uploads/2021/08/GVKWB_Aptronix.png",
            "offers": [
                { "offer": "5% Off on Smartphones", "previousPrice": 20000, "offerPrice": 19000 },
                { "offer": "Free Screen Protector with Mobile Purchase", "previousPrice": 50, "offerPrice": 0 },
                { "offer": "10% Off on Smart Watches", "previousPrice": 5000, "offerPrice": 4500 },
                { "offer": "Free Earphones with Mobile Purchase", "previousPrice": 300, "offerPrice": 0 },
                { "offer": "15% Off on Accessories", "previousPrice": 1500, "offerPrice": 1275 }
            ]
        },
        {
            "name": "Samsung Experience Store",
            "category": "Electronics",
            "floor": "Second Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFImYpSbagBR0GTixrNYqqQ3MulO45b7a_ew&s",
            "offers": [
                { "offer": "10% Off on Smartphones", "previousPrice": 40000, "offerPrice": 36000 },
                { "offer": "Free Wireless Earbuds with Smartphone Purchase", "previousPrice": 2000, "offerPrice": 0 },
                { "offer": "20% Off on TVs", "previousPrice": 35000, "offerPrice": 28000 },
                { "offer": "Free Power Bank with Purchases Above ₹25000", "previousPrice": 1000, "offerPrice": 0 },
                { "offer": "10% Off on Tablets", "previousPrice": 25000, "offerPrice": 22500 }
            ]
        },
        {
            "name": "Reliance Digital",
            "category": "Electronics",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMghx0NnQfrSfPfcXT80uNiHOShkNL9Dg8A&s",
            "offers": [
                { "offer": "20% Off on Laptops", "previousPrice": 50000, "offerPrice": 40000 },
                { "offer": "Free Home Delivery on Orders Above ₹5000", "previousPrice": 100, "offerPrice": 0 },
                { "offer": "15% Off on Mobile Accessories", "previousPrice": 2000, "offerPrice": 1700 },
                { "offer": "5% Off on Home Appliances", "previousPrice": 8000, "offerPrice": 7600 },
                { "offer": "Buy 1, Get 1 Free on Selected Products", "previousPrice": 2000, "offerPrice": 2000 }
            ]
        },
        {
            "name": "Burger King",
            "category": "Food",
            "floor": "Food Court",
            "logo": "https://i.pinimg.com/736x/ca/38/ca/ca38cabfc7f07d97a422859b91df07cd.jpg",
            "offers": [
                { "offer": "Buy 1 Get 1 Free on Burgers", "previousPrice": 150, "offerPrice": 150 },
                { "offer": "Combo Meal at ₹299", "previousPrice": 450, "offerPrice": 299 },
                { "offer": "20% Off on All Orders Above ₹500", "previousPrice": 500, "offerPrice": 400 },
                { "offer": "Free Fries with Any Burger Purchase", "previousPrice": 80, "offerPrice": 0 },
                { "offer": "Buy 2 Drinks, Get 1 Free", "previousPrice": 120, "offerPrice": 120 }
            ]
        },
        {
            "name": "Domino’s Pizza",
            "category": "Food",
            "floor": "Food Court",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDC8fgIHEv1gCrsCekfZlOHqoxqOlaXpx-KA&s",
            "offers": [
                { "offer": "20% Off on Large Pizzas", "previousPrice": 800, "offerPrice": 640 },
                { "offer": "Buy 1, Get 1 Free on Medium Pizzas", "previousPrice": 600, "offerPrice": 600 },
                { "offer": "Free Drink with Pizza", "previousPrice": 50, "offerPrice": 0 },
                { "offer": "Flat ₹100 Off on Orders Above ₹500", "previousPrice": 500, "offerPrice": 400 },
                { "offer": "10% Off on Pasta Orders", "previousPrice": 250, "offerPrice": 225 }
            ]
        },
        {
            "name": "Haldiram’s",
            "category": "Food",
            "floor": "Food Court",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbY9YHMSg9yVIW_ti-XJAf2osBE74YKOJ83w&s",
            "offers": [
                { "offer": "15% Off on Snacks", "previousPrice": 300, "offerPrice": 255 },
                { "offer": "Combo Meal at ₹199", "previousPrice": 350, "offerPrice": 199 },
                { "offer": "Buy 2 Sweets, Get 1 Free", "previousPrice": 500, "offerPrice": 500 },
                { "offer": "10% Off on Chaats", "previousPrice": 100, "offerPrice": 90 },
                { "offer": "Free Drink with Snacks Purchase Above ₹300", "previousPrice": 30, "offerPrice": 0 }
            ]
        },
        {
            "name": "Marks & Spencer",
            "category": "Fashion",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_x9Cs2xXrWfOUwOsnDUggCO4We-vE2yBLdA&s",
            "offers": [
              { "offer": "20% Off on Women's Dresses", "previousPrice": 3500, "offerPrice": 2800 },
              { "offer": "Buy 2, Get 1 Free on Socks", "previousPrice": 300, "offerPrice": 300 },
              { "offer": "10% Off on Men's Shirts", "previousPrice": 1800, "offerPrice": 1620 },
              { "offer": "Free Gift with Purchase Above ₹5000", "previousPrice": 150, "offerPrice": 0 },
              { "offer": "25% Off on Blazers", "previousPrice": 5000, "offerPrice": 3750 }
            ]
          },
          {
            "name": "PANTALOONS",
            "category": "Shopping",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmy-5byt4r-FVcRiUidN-Dg585iRyYGaRZg&s",
            "offers": [
              { "offer": "Buy 1, Get 1 Free on Men’s T-shirts", "previousPrice": 800, "offerPrice": 800 },
              { "offer": "20% Off on Jeans", "previousPrice": 2000, "offerPrice": 1600 },
              { "offer": "15% Off on Women's Tops", "previousPrice": 1200, "offerPrice": 1020 },
              { "offer": "30% Off on Men's Jackets", "previousPrice": 3000, "offerPrice": 2100 },
              { "offer": "Free Alterations with Any Purchase Above ₹3000", "previousPrice": 0, "offerPrice": 0 }
            ]
          },
          {
            "name": "Forest Essentials",
            "category": "Luxury",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpRlsvL_ER_9BQE78UteU59fCdtLkfcdhyg&s",
            "offers": [
              { "offer": "20% Off on Skincare Kits", "previousPrice": 3500, "offerPrice": 2800 },
              { "offer": "Buy 1 Get 1 Free on Bath Products", "previousPrice": 1200, "offerPrice": 1200 },
              { "offer": "Free Travel Size with Any Purchase Above ₹2000", "previousPrice": 300, "offerPrice": 0 },
              { "offer": "15% Off on Facial Serums", "previousPrice": 1500, "offerPrice": 1275 },
              { "offer": "Free Gift with Purchase Above ₹3000", "previousPrice": 500, "offerPrice": 0 }
            ]
          },
          {
            "name": "Nykaa On Trend",
            "category": "Beauty",
            "floor": "First Floor",
            "logo": "https://dtbtob4osa700.cloudfront.net/BrandsImages/21072024184852410_brlo.png",
            "offers": [
              { "offer": "15% Off on Beauty Essentials", "previousPrice": 1200, "offerPrice": 1020 },
              { "offer": "Free Gift with Purchase Above ₹1500", "previousPrice": 200, "offerPrice": 0 },
              { "offer": "Buy 1 Get 1 Free on Select Skincare Products", "previousPrice": 800, "offerPrice": 800 },
              { "offer": "20% Off on Face Masks", "previousPrice": 500, "offerPrice": 400 },
              { "offer": "Flat 25% Off on Hair Care Range", "previousPrice": 1200, "offerPrice": 900 }
            ]
          },
    ]
},
// hyderabad_central_mall: {
//     name: 'Hyderabad Central Mall (Ameerpet)',
//     shops: [
//         {
//             name: 'Levi\'s',
//             category: 'Fashion',
//             floor:'Ground Floor',
//             logo: 'https://w7.pngwing.com/pngs/581/271/png-transparent-levi%C2%B4s-store-frolunda-torg-levi-strauss-co-brand-sweater-levi-text-label-rectangle-thumbnail.png',
//             offers: [
//                 { offer: '25% Off on Jeans', previousPrice: 180, offerPrice: 135 },
//                 { offer: 'Buy 2 Get 1 Free on T-Shirts', previousPrice: 300, offerPrice: 300 },
//                 { offer: 'Free Belt with Jeans Purchase', previousPrice: 50, offerPrice: 0 },
//                 { offer: '15% Off on Casual Wear', previousPrice: 220, offerPrice: 187 },
//                 { offer: '20% Off on Jackets', previousPrice: 500, offerPrice: 400 }
//             ]
//         },
//         {
//             name: 'Pantaloons',
//             category: 'Fashion',
//             floor:'First Floor',
//             logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmy-5byt4r-FVcRiUidN-Dg585iRyYGaRZg&s',
//             offers: [
//                 { offer: '15% Off on Dresses', previousPrice: 100, offerPrice: 85 },
//                 { offer: 'Free Accessories with Any Purchase Above ₹500', previousPrice: 50, offerPrice: 0 },
//                 { offer: 'Buy 2 Get 1 Free on T-Shirts', previousPrice: 200, offerPrice: 200 },
//                 { offer: '30% Off on Selected Styles', previousPrice: 350, offerPrice: 245 },
//                 { offer: 'Buy 1, Get 1 Free on Footwear', previousPrice: 400, offerPrice: 400 }
//             ]
//         },
//         {
//             name: 'Croma',
//             category: 'Electronics',
//             floor:'Second Floor',
//             logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBb-ZSLaAUHjrhpDayixEUOpfwROxX50DONw&s',
//             offers: [
//                 { offer: '10% Off on Laptops', previousPrice: 600, offerPrice: 540 },
//                 { offer: 'Free Delivery on Purchases Above ₹5000', previousPrice: 100, offerPrice: 0 },
//                 { offer: '15% Off on Smart TVs', previousPrice: 1000, offerPrice: 850 },
//                 { offer: 'Buy 1, Get 1 Free on Headphones', previousPrice: 200, offerPrice: 200 },
//                 { offer: '5% Off on Gaming Consoles', previousPrice: 400, offerPrice: 380 }
//             ]
//         }
//     ]
// },
sarath_city_capital_mall: {
    name: 'Sarath City Capital Mall (Kukatpally)',
    "shops": [
        {
          "name": "APTRONIX",
          "category": "Electronics",
          "floor": "Second Floor",
          "logo": "https://gvkone.com/wp-content/uploads/2021/08/GVKWB_Aptronix.png",
          "offers": [
            { "offer": "10% Off on Smartphones", "previousPrice": 20000, "offerPrice": 18000 },
            { "offer": "Free Screen Protector with Mobile Purchase", "previousPrice": 50, "offerPrice": 0 },
            { "offer": "5% Off on Laptop Accessories", "previousPrice": 1500, "offerPrice": 1425 },
            { "offer": "Buy 1, Get 1 Free on Headphones", "previousPrice": 1500, "offerPrice": 1500 },
            { "offer": "20% Off on Tablets", "previousPrice": 25000, "offerPrice": 20000 }
          ]
        },
        {
          "name": "RELIANCE DIGITAL",
          "category": "Electronics",
          "floor": "First Floor",
          "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMghx0NnQfrSfPfcXT80uNiHOShkNL9Dg8A&s",
          "offers": [
            { "offer": "15% Off on Laptops", "previousPrice": 45000, "offerPrice": 38250 },
            { "offer": "Free Bluetooth Speaker with TV Purchase", "previousPrice": 3000, "offerPrice": 0 },
            { "offer": "Buy 2 Get 1 Free on Mobile Accessories", "previousPrice": 1200, "offerPrice": 1200 },
            { "offer": "5% Off on Home Appliances", "previousPrice": 15000, "offerPrice": 14250 },
            { "offer": "Free Delivery on Orders Above ₹5000", "previousPrice": 50, "offerPrice": 0 }
          ]
        },
        {
          "name": "CROMA",
          "category": "Electronics",
          "floor": "First Floor",
          "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBb-ZSLaAUHjrhpDayixEUOpfwROxX50DONw&s",
          "offers": [
            { "offer": "25% Off on Refrigerators", "previousPrice": 30000, "offerPrice": 22500 },
            { "offer": "10% Off on Washing Machines", "previousPrice": 15000, "offerPrice": 13500 },
            { "offer": "Free Installation with AC Purchase", "previousPrice": 2000, "offerPrice": 0 },
            { "offer": "Free Gift on Mobile Purchase Above ₹10000", "previousPrice": 500, "offerPrice": 0 },
            { "offer": "15% Off on Air Purifiers", "previousPrice": 8000, "offerPrice": 6800 }
          ]
        },
        {
          "name": "Samsung",
          "category": "Electronics",
          "floor": "Second Floor",
          "logo": "https://w7.pngwing.com/pngs/990/838/png-transparent-samsung-electronics-samsung-galaxy-samsung-logo-text-logo-black-thumbnail.png",
          "offers": [
            { "offer": "10% Off on Smartphones", "previousPrice": 50000, "offerPrice": 45000 },
            { "offer": "Free Wireless Earbuds with Smartphone Purchase", "previousPrice": 3000, "offerPrice": 0 },
            { "offer": "Free Screen Protector with Purchase Above ₹20000", "previousPrice": 500, "offerPrice": 0 },
            { "offer": "15% Off on Tablets", "previousPrice": 25000, "offerPrice": 21250 },
            { "offer": "5% Off on Smartwatches", "previousPrice": 15000, "offerPrice": 14250 }
          ]
        },
        {
          "name": "HP",
          "category": "Electronics",
          "floor": "Second Floor",
          "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQxw01qa8NdZRsTuelCH-bMXjydR_OuZBCQ&s",
          "offers": [
            { "offer": "10% Off on Laptops", "previousPrice": 45000, "offerPrice": 40500 },
            { "offer": "Free Laptop Bag with Laptop Purchase", "previousPrice": 1500, "offerPrice": 0 },
            { "offer": "20% Off on Printers", "previousPrice": 12000, "offerPrice": 9600 },
            { "offer": "Free Shipping on Orders Above ₹5000", "previousPrice": 200, "offerPrice": 0 },
            { "offer": "5% Off on Computer Accessories", "previousPrice": 2000, "offerPrice": 1900 }
          ]
        },
        {
          "name": "DELL",
          "category": "Electronics",
          "floor": "First Floor",
          "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEI3emva-aZUkW1xSN2J0aaw6oaVXwLWqE9Q&s",
          "offers": [
            { "offer": "15% Off on Laptops", "previousPrice": 60000, "offerPrice": 51000 },
            { "offer": "Free Laptop Case with Laptop Purchase", "previousPrice": 2000, "offerPrice": 0 },
            { "offer": "Buy 1, Get 1 Free on Laptop Accessories", "previousPrice": 1500, "offerPrice": 1500 },
            { "offer": "5% Off on Monitors", "previousPrice": 12000, "offerPrice": 11400 },
            { "offer": "Free Data Recovery for All Laptops", "previousPrice": 3000, "offerPrice": 0 }
          ]
        },
        {
          "name": "JBL",
          "category": "Electronics",
          "floor": "Second Floor",
          "logo": "https://i.pinimg.com/736x/39/54/97/395497967270d03a4ad8ec674d8a8891.jpg",
          "offers": [
            { "offer": "10% Off on Speakers", "previousPrice": 5000, "offerPrice": 4500 },
            { "offer": "Free Bluetooth Headphones with Speaker Purchase", "previousPrice": 3000, "offerPrice": 0 },
            { "offer": "15% Off on Earphones", "previousPrice": 2000, "offerPrice": 1700 },
            { "offer": "Buy 2 Get 1 Free on Audio Accessories", "previousPrice": 1500, "offerPrice": 1500 },
            { "offer": "20% Off on Home Theater Systems", "previousPrice": 25000, "offerPrice": 20000 }
          ]
        },
        {
          "name": "LENOVO",
          "category": "Electronics",
          "floor": "First Floor",
          "logo": "https://www.citypng.com/public/uploads/preview/hd-lenovo-black-logo-transparent-background-701751694772190gyqemmsai8.png",
          "offers": [
            { "offer": "5% Off on Laptops", "previousPrice": 45000, "offerPrice": 42750 },
            { "offer": "Free Wireless Mouse with Laptop Purchase", "previousPrice": 1000, "offerPrice": 0 },
            { "offer": "10% Off on Tablets", "previousPrice": 25000, "offerPrice": 22500 },
            { "offer": "Free 1-Year Extended Warranty with Laptops", "previousPrice": 3000, "offerPrice": 0 },
            { "offer": "20% Off on Desktop PCs", "previousPrice": 30000, "offerPrice": 24000 }
          ]
        },
        {
          "name": "ASUS",
          "category": "Electronics",
          "floor": "Second Floor",
          "logo": "https://e7.pngegg.com/pngimages/279/150/png-clipart-asus-global-pte-ltd-%E5%8D%8E%E7%A1%95-zenfone-3-deluxe-zs550kl-business-business-angle-text.png",
          "offers": [
            { "offer": "10% Off on Laptops", "previousPrice": 55000, "offerPrice": 49500 },
            { "offer": "Free Laptop Bag with Laptop Purchase", "previousPrice": 1500, "offerPrice": 0 },
            { "offer": "15% Off on Motherboards", "previousPrice": 10000, "offerPrice": 8500 },
            { "offer": "Free Shipping on Orders Above ₹5000", "previousPrice": 200, "offerPrice": 0 },
            { "offer": "Buy 2, Get 1 Free on Accessories", "previousPrice": 1000, "offerPrice": 1000 }
          ]
        },
        {
            "name": "ARROW",
            "category": "Fashion",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1BKsWkD1iAV7eGOUVvvOhi-_-X5czSYDJg&s",
            "offers": [
              { "offer": "15% Off on Shirts", "previousPrice": 2500, "offerPrice": 2125 },
              { "offer": "Buy 1, Get 1 Free on Ties", "previousPrice": 500, "offerPrice": 500 },
              { "offer": "10% Off on Suits", "previousPrice": 10000, "offerPrice": 9000 },
              { "offer": "Free Alteration Service with Suit Purchase", "previousPrice": 1500, "offerPrice": 0 },
              { "offer": "20% Off on Jeans", "previousPrice": 3000, "offerPrice": 2400 }
            ]
          },
          {
            "name": "Being Human",
            "category": "Fashion",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3gdROrEMuitGtv1PPINZJadioggmDztoEw&s",
            "offers": [
              { "offer": "15% Off on T-shirts", "previousPrice": 1200, "offerPrice": 1020 },
              { "offer": "Buy 2, Get 1 Free on Casual Shirts", "previousPrice": 1800, "offerPrice": 1200 },
              { "offer": "10% Off on Jeans", "previousPrice": 2500, "offerPrice": 2250 },
              { "offer": "Free Shipping on Orders Above ₹2000", "previousPrice": 50, "offerPrice": 0 },
              { "offer": "20% Off on Jackets", "previousPrice": 3500, "offerPrice": 2800 }
            ]
          },
          {
            "name": "H&M",
            "category": "Fashion",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJi-xjZ12Mvmd3v1ZY808iMLKvpNGHD7vMgg&s",
            "offers": [
              { "offer": "10% Off on New Collection", "previousPrice": 2000, "offerPrice": 1800 },
              { "offer": "Buy 1, Get 1 Free on T-shirts", "previousPrice": 500, "offerPrice": 500 },
              { "offer": "15% Off on Winter Collection", "previousPrice": 3500, "offerPrice": 2975 },
              { "offer": "Free Shipping on Orders Above ₹1500", "previousPrice": 50, "offerPrice": 0 },
              { "offer": "30% Off on Denim Jeans", "previousPrice": 2200, "offerPrice": 1540 }
            ]
          },
          {
            "name": "Marks & Spencer",
            "category": "Fashion",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_x9Cs2xXrWfOUwOsnDUggCO4We-vE2yBLdA&s",
            "offers": [
              { "offer": "20% Off on Women's Dresses", "previousPrice": 3500, "offerPrice": 2800 },
              { "offer": "Buy 2, Get 1 Free on Socks", "previousPrice": 300, "offerPrice": 300 },
              { "offer": "10% Off on Men's Shirts", "previousPrice": 1800, "offerPrice": 1620 },
              { "offer": "Free Gift with Purchase Above ₹5000", "previousPrice": 150, "offerPrice": 0 },
              { "offer": "25% Off on Blazers", "previousPrice": 5000, "offerPrice": 3750 }
            ]
          },
          {
            "name": "PANTALOONS",
            "category": "Shopping",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmy-5byt4r-FVcRiUidN-Dg585iRyYGaRZg&s",
            "offers": [
              { "offer": "Buy 1, Get 1 Free on Men’s T-shirts", "previousPrice": 800, "offerPrice": 800 },
              { "offer": "20% Off on Jeans", "previousPrice": 2000, "offerPrice": 1600 },
              { "offer": "15% Off on Women's Tops", "previousPrice": 1200, "offerPrice": 1020 },
              { "offer": "30% Off on Men's Jackets", "previousPrice": 3000, "offerPrice": 2100 },
              { "offer": "Free Alterations with Any Purchase Above ₹3000", "previousPrice": 0, "offerPrice": 0 }
            ]
          },
          {
            "name": "WESTSIDE",
            "category": "Shopping",
            "floor": "First Floor",
            "logo": "https://www.westside.com/cdn/shop/files/w-logo.png?height=628&pad_color=fff&v=1687335574&width=1200",
            "offers": [
              { "offer": "25% Off on Women’s Dresses", "previousPrice": 2500, "offerPrice": 1875 },
              { "offer": "Buy 2, Get 1 Free on Men’s Casual Wear", "previousPrice": 1500, "offerPrice": 1000 },
              { "offer": "20% Off on Women's Shoes", "previousPrice": 2000, "offerPrice": 1600 },
              { "offer": "Free Gift with Purchase Above ₹3000", "previousPrice": 500, "offerPrice": 0 },
              { "offer": "15% Off on All Accessories", "previousPrice": 800, "offerPrice": 680 }
            ]
          },
          {
            "name": "Allen Solly",
            "category": "Clothing",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGi4TY1_uql9UAcGn1UfbJQhtxYSert-rMBw&s",
            "offers": [
              { "offer": "20% Off on Men’s Trousers", "previousPrice": 2000, "offerPrice": 1600 },
              { "offer": "Buy 1, Get 1 Free on Men’s Casual Shirts", "previousPrice": 1500, "offerPrice": 1500 },
              { "offer": "10% Off on Women’s Dresses", "previousPrice": 2500, "offerPrice": 2250 },
              { "offer": "30% Off on Winter Wear", "previousPrice": 3000, "offerPrice": 2100 },
              { "offer": "Free Alterations on All Formal Wear Purchases", "previousPrice": 0, "offerPrice": 0 }
            ]
          },
          {
            "name": "Adidas",
            "category": "Sports",
            "floor": "Second Floor",
            "logo": "https://i.pinimg.com/736x/8c/b0/8a/8cb08a963150553f12dc40795e5cb4a3.jpg",
            "offers": [
              { "offer": "10% Off on Sports Shoes", "previousPrice": 3500, "offerPrice": 3150 },
              { "offer": "Free Fitness Tracker with Purchase Above ₹5000", "previousPrice": 3000, "offerPrice": 0 },
              { "offer": "15% Off on Workout Gear", "previousPrice": 2500, "offerPrice": 2125 },
              { "offer": "Buy 1, Get 1 Free on Gym Shorts", "previousPrice": 800, "offerPrice": 800 },
              { "offer": "30% Off on Training Bags", "previousPrice": 1500, "offerPrice": 1050 }
            ]
          },
          {
            "name": "Puma",
            "category": "Sports",
            "floor": "Second Floor",
            "logo": "https://www.citypng.com/public/uploads/preview/puma-black-logo-png-701751694774568gw2on2y0un.png",
            "offers": [
              { "offer": "15% Off on Jogging Shoes", "previousPrice": 2500, "offerPrice": 2125 },
              { "offer": "Buy 2, Get 1 Free on Sports Tees", "previousPrice": 600, "offerPrice": 600 },
              { "offer": "Free Delivery on Orders Above ₹3000", "previousPrice": 50, "offerPrice": 0 },
              { "offer": "10% Off on Compression Wear", "previousPrice": 1200, "offerPrice": 1080 },
              { "offer": "Buy 1, Get 1 Free on Sports Caps", "previousPrice": 700, "offerPrice": 700 }
            ]
          },
          {
            "name": "Reebok",
            "category": "Sports",
            "floor": "Second Floor",
            "logo": "https://www.citypng.com/public/uploads/preview/download-reebok-old-white-logo-png-7017516947742172ufwnug5v4.png",
            "offers": [
              { "offer": "25% Off on Running Shoes", "previousPrice": 4500, "offerPrice": 3375 },
              { "offer": "Free Pair of Socks with Any Sports Footwear Purchase", "previousPrice": 150, "offerPrice": 0 },
              { "offer": "Buy 1, Get 1 Free on Workout T-shirts", "previousPrice": 800, "offerPrice": 800 },
              { "offer": "30% Off on Fitness Gear", "previousPrice": 2500, "offerPrice": 1750 },
              { "offer": "20% Off on Sports Pants", "previousPrice": 1800, "offerPrice": 1440 }
            ]
          },
          {
            "name": "Decathlon",
            "category": "Sports",
            "floor": "Second Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YmAvnZgBsuPfALnEgJjQ5MA8BGtKFISa8A&s",
            "offers": [
              { "offer": "10% Off on All Running Shoes", "previousPrice": 3000, "offerPrice": 2700 },
              { "offer": "Buy 2, Get 1 Free on Gym Gloves", "previousPrice": 600, "offerPrice": 600 },
              { "offer": "Free Sports Water Bottle with Purchase Above ₹1500", "previousPrice": 300, "offerPrice": 0 },
              { "offer": "15% Off on Yoga Mats", "previousPrice": 1200, "offerPrice": 1020 },
              { "offer": "20% Off on Sports Backpacks", "previousPrice": 2000, "offerPrice": 1600 }
            ]
          },
          {
            "name": "Forest Essentials",
            "category": "Luxury",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpRlsvL_ER_9BQE78UteU59fCdtLkfcdhyg&s",
            "offers": [
              { "offer": "20% Off on Skincare Kits", "previousPrice": 3500, "offerPrice": 2800 },
              { "offer": "Buy 1 Get 1 Free on Bath Products", "previousPrice": 1200, "offerPrice": 1200 },
              { "offer": "Free Travel Size with Any Purchase Above ₹2000", "previousPrice": 300, "offerPrice": 0 },
              { "offer": "15% Off on Facial Serums", "previousPrice": 1500, "offerPrice": 1275 },
              { "offer": "Free Gift with Purchase Above ₹3000", "previousPrice": 500, "offerPrice": 0 }
            ]
          },
          {
            "name": "Kama Ayurveda",
            "category": "Luxury",
            "floor": "First Floor",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/8/85/Kama_Ayurveda_Logo.png",
            "offers": [
              { "offer": "25% Off on Ayurvedic Skincare", "previousPrice": 4000, "offerPrice": 3000 },
              { "offer": "Buy 2, Get 1 Free on Hair Care Products", "previousPrice": 800, "offerPrice": 800 },
              { "offer": "Free Gift with Purchase Above ₹2000", "previousPrice": 400, "offerPrice": 0 },
              { "offer": "10% Off on Body Oils", "previousPrice": 1800, "offerPrice": 1620 },
              { "offer": "Free Travel Kit on Orders Above ₹3500", "previousPrice": 0, "offerPrice": 0 }
            ]
          },
          {
            "name": "Nykaa Luxe",
            "category": "Beauty",
            "floor": "Ground Floor",
            "logo": "https://cdn.sanity.io/images/ei17ewl3/production/4a8789744bfd2e6f517f8da985c76202e600fe54-1000x775.jpg",
            "offers": [
              { "offer": "15% Off on Luxury Perfumes", "previousPrice": 2500, "offerPrice": 2125 },
              { "offer": "Buy 1, Get 1 Free on Skin Care Kits", "previousPrice": 2000, "offerPrice": 2000 },
              { "offer": "Free Mini Perfume with Any Purchase Above ₹3000", "previousPrice": 500, "offerPrice": 0 },
              { "offer": "20% Off on Makeup Products", "previousPrice": 1500, "offerPrice": 1200 },
              { "offer": "Free Shipping on Orders Above ₹1500", "previousPrice": 50, "offerPrice": 0 }
            ]
          }
      ]
},
lulu_mall: {
    name: 'LuLu Mall (Kukatpally)',
    shops:[
        {
          "name": "Beaute & Nutrie",
          "category": "Beauty",
          "floor": "Ground Floor",
          "logo": "https://www.hyderabad.lulumall.in/wp-content/uploads/2023/08/Beaute-Nutrie.jpg",
          "offers": [
            { "offer": "20% Off on Skincare Products", "previousPrice": 1000, "offerPrice": 800 },
            { "offer": "Buy 1 Get 1 Free on Lipsticks", "previousPrice": 1200, "offerPrice": 1200 },
            { "offer": "Flat 15% Off on All Fragrances", "previousPrice": 1500, "offerPrice": 1275 },
            { "offer": "10% Off on Makeup Kits", "previousPrice": 2000, "offerPrice": 1800 },
            { "offer": "Free Skincare Sample with Every Purchase", "previousPrice": 200, "offerPrice": 0 }
          ]
        },
        {
          "name": "Sugar Cosmetics",
          "category": "Beauty",
          "floor": "First Floor",
          "logo": "https://1000logos.net/wp-content/uploads/2021/05/SUGAR-Cosmetics-logo.png",
          "offers": [
            { "offer": "Buy 2 Get 1 Free on Lipsticks", "previousPrice": 500, "offerPrice": 500 },
            { "offer": "10% Off on All Cosmetics", "previousPrice": 800, "offerPrice": 720 },
            { "offer": "Free Makeup Bag with ₹1500 Purchase", "previousPrice": 500, "offerPrice": 0 },
            { "offer": "Flat 20% Off on Eyeliners and Mascara", "previousPrice": 800, "offerPrice": 640 },
            { "offer": "Buy 1 Get 1 Free on Nail Polishes", "previousPrice": 200, "offerPrice": 200 }
          ]
        },
        {
          "name": "Nykaa On Trend",
          "category": "Beauty",
          "floor": "First Floor",
          "logo": "https://dtbtob4osa700.cloudfront.net/BrandsImages/21072024184852410_brlo.png",
          "offers": [
            { "offer": "15% Off on Beauty Essentials", "previousPrice": 1200, "offerPrice": 1020 },
            { "offer": "Free Gift with Purchase Above ₹1500", "previousPrice": 200, "offerPrice": 0 },
            { "offer": "Buy 1 Get 1 Free on Select Skincare Products", "previousPrice": 800, "offerPrice": 800 },
            { "offer": "20% Off on Face Masks", "previousPrice": 500, "offerPrice": 400 },
            { "offer": "Flat 25% Off on Hair Care Range", "previousPrice": 1200, "offerPrice": 900 }
          ]
        },
        {
          "name": "MYOP",
          "category": "Beauty",
          "floor": "Second Floor",
          "logo": "https://dtbtob4osa700.cloudfront.net/BrandsImages/14122023103113835_brlo.png",
          "offers": [
            { "offer": "Buy 1, Get 1 Free on Face Masks", "previousPrice": 600, "offerPrice": 600 },
            { "offer": "10% Off on Skincare Kits", "previousPrice": 1500, "offerPrice": 1350 },
            { "offer": "Free Sample with Every Facial Kit Purchase", "previousPrice": 150, "offerPrice": 0 },
            { "offer": "15% Off on All Makeup Brushes", "previousPrice": 1000, "offerPrice": 850 },
            { "offer": "Flat ₹200 Off on Orders Above ₹1000", "previousPrice": 1000, "offerPrice": 800 }
          ]
        },
        {
          "name": "Bata",
          "category": "Shopping",
          "floor": "First Floor",
          "logo": "https://w7.pngwing.com/pngs/207/567/png-transparent-bata-hd-logo-thumbnail.png",
          "offers": [
            { "offer": "Flat 25% Off on Footwear", "previousPrice": 1200, "offerPrice": 900 },
            { "offer": "Buy 1 Get 1 Free on Slippers", "previousPrice": 500, "offerPrice": 500 },
            { "offer": "30% Off on Select Sandals", "previousPrice": 1000, "offerPrice": 700 },
            { "offer": "Buy 2, Get 1 Free on Kids' Footwear", "previousPrice": 600, "offerPrice": 600 },
            { "offer": "Flat 10% Off on Online Orders", "previousPrice": 1500, "offerPrice": 1350 }
          ]
        },
        {
          "name": "Neemans",
          "category": "Shopping",
          "floor": "First Floor",
          "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5lpwpNoOr0eFy1-yCja5Lu1wLUZJ41S35g&s",
          "offers": [
            { "offer": "20% Off on All Footwear", "previousPrice": 1500, "offerPrice": 1200 },
            { "offer": "Flat 10% Off on Online Orders", "previousPrice": 1500, "offerPrice": 1350 },
            { "offer": "Free Shipping on Orders Above ₹1000", "previousPrice": 100, "offerPrice": 0 },
            { "offer": "Buy 1 Get 1 Free on Casual Shoes", "previousPrice": 2000, "offerPrice": 2000 },
            { "offer": "Buy 2, Get 1 Free on Flip Flops", "previousPrice": 500, "offerPrice": 500 }
          ]
        },
        {
          "name": "Mochi",
          "category": "Shopping",
          "floor": "Second Floor",
          "logo": "https://mir-s3-cdn-cf.behance.net/projects/404/3a2bb7186283759.Y3JvcCw4MDgsNjMyLDAsMA.png",
          "offers": [
            { "offer": "Buy 1, Get 1 Free on Select Footwear", "previousPrice": 1000, "offerPrice": 1000 },
            { "offer": "Flat 15% Off on All Shoes", "previousPrice": 2000, "offerPrice": 1700 },
            { "offer": "Buy 2, Get 1 Free on Sandals", "previousPrice": 800, "offerPrice": 800 },
            { "offer": "Flat 10% Off on Winter Footwear", "previousPrice": 1200, "offerPrice": 1080 },
            { "offer": "Buy 1 Get 1 Free on Selected Kids' Footwear", "previousPrice": 500, "offerPrice": 500 }
          ]
        },
        {
          "name": "Chicking",
          "category": "Food",
          "floor": "Food Court",
          "logo": "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022015/chicking_logo.png?itok=a4qFAbyV",
          "offers": [
            { "offer": "Buy 1, Get 1 Free on Chicken Meals", "previousPrice": 500, "offerPrice": 500 },
            { "offer": "Combo Meal at ₹299", "previousPrice": 450, "offerPrice": 299 },
            { "offer": "Free Fries with Any Combo", "previousPrice": 100, "offerPrice": 0 },
            { "offer": "20% Off on Family Meal Deals", "previousPrice": 800, "offerPrice": 640 },
            { "offer": "Buy 1, Get 1 Free on Chicken Wings", "previousPrice": 250, "offerPrice": 250 }
          ]
        },
        {
          "name": "Hottey Smokey",
          "category": "Food",
          "floor": "Food Court",
          "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYSuIzDah01z5_X07U9g9qnBJxbEJp5tpew&s",
          "offers": [
            { "offer": "20% Off on BBQ Meals", "previousPrice": 600, "offerPrice": 480 },
            { "offer": "Combo Pack at ₹399", "previousPrice": 550, "offerPrice": 399 },
            { "offer": "Free Soft Drink with BBQ Combo", "previousPrice": 50, "offerPrice": 0 },
            { "offer": "Buy 1 Get 1 Free on Grilled Chicken", "previousPrice": 450, "offerPrice": 450 },
            { "offer": "Family Meal Pack at ₹899", "previousPrice": 1200, "offerPrice": 899 }
          ]
        },
        {
          "name": "Juice O Juice",
          "category": "Food",
          "floor": "Food Court",
          "logo": "https://www.hyderabad.lulumall.in/wp-content/uploads/2023/08/Untitled-28-1.png",
          "offers": [
            { "offer": "Buy 1 Get 1 Free on Fresh Juices", "previousPrice": 250, "offerPrice": 250 },
            { "offer": "Free Topping with Any Smoothie", "previousPrice": 50, "offerPrice": 0 },
            { "offer": "20% Off on Healthy Smoothies", "previousPrice": 300, "offerPrice": 240 },
            { "offer": "Combo Offer: Juice + Salad at ₹350", "previousPrice": 500, "offerPrice": 350 },
            { "offer": "Free Drink with Any Sandwich Purchase", "previousPrice": 100, "offerPrice": 0 }
          ]
        },
        {
          "name": "Wow Momo / Wow China",
          "category": "Food",
          "floor": "Food Court",
          "logo": "https://www.hyderabad.lulumall.in/wp-content/uploads/2023/08/Untitled-9-1.png",
          "offers": [
            { "offer": "20% Off on Momo Combos", "previousPrice": 300, "offerPrice": 240 },
            { "offer": "Buy 1, Get 1 Free on Dimsums", "previousPrice": 200, "offerPrice": 200 },
            { "offer": "Combo Pack with Soup at ₹399", "previousPrice": 600, "offerPrice": 399 },
            { "offer": "Free Drink with Every Momo Plate", "previousPrice": 50, "offerPrice": 0 },
            { "offer": "20% Off on All Chinese Dishes", "previousPrice": 350, "offerPrice": 280 }
          ]
        },
        {
          "name": "Al Baik",
          "category": "Food",
          "floor": "Food Court",
          "logo": "https://www.hyderabad.lulumall.in/wp-content/uploads/2023/08/Untitled-53.png",
          "offers": [
            { "offer": "Buy 1, Get 1 Free on Fried Chicken", "previousPrice": 400, "offerPrice": 400 },
            { "offer": "Combo Meal at ₹350", "previousPrice": 500, "offerPrice": 350 },
            { "offer": "Free Fries with Chicken Meal", "previousPrice": 100, "offerPrice": 0 },
            { "offer": "20% Off on Family Meal Combos", "previousPrice": 800, "offerPrice": 640 },
            { "offer": "Buy 1 Get 1 Free on Chicken Wraps", "previousPrice": 250, "offerPrice": 250 }
          ]
        },
        {
            "name": "ZARA",
            "category": "Fashion",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyXGc69cDel26MHRUk9AMJUuNDMN9FcDx8Q&s",
            "offers": [
              { "offer": "30% Off on Spring Collection", "previousPrice": 3000, "offerPrice": 2100 },
              { "offer": "Buy 2 Get 1 Free on Accessories", "previousPrice": 1000, "offerPrice": 1000 },
              { "offer": "Flat 15% Off on Women's Wear", "previousPrice": 1500, "offerPrice": 1275 },
              { "offer": "Free Shipping on Orders Above ₹2000", "previousPrice": 100, "offerPrice": 0 },
              { "offer": "Buy 1, Get 1 Free on Select Tops", "previousPrice": 1200, "offerPrice": 1200 }
            ]
          },
          {
            "name": "H&M",
            "category": "Fashion",
            "floor": "Second Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGz1ghgWygI35RatkZtCYoQFP7IgM0psDrw&s",
            "offers": [
              { "offer": "20% Off on Men's Collection", "previousPrice": 2500, "offerPrice": 2000 },
              { "offer": "Flat 50% Off on Sale Items", "previousPrice": 3500, "offerPrice": 1750 },
              { "offer": "Buy 1 Get 1 Free on T-Shirts", "previousPrice": 800, "offerPrice": 800 },
              { "offer": "15% Off on Kids' Fashion", "previousPrice": 1200, "offerPrice": 1020 },
              { "offer": "Buy 2, Get 1 Free on Denim Jeans", "previousPrice": 1800, "offerPrice": 1800 }
            ]
          },
          {
            "name": "Levi's",
            "category": "Clothing",
            "floor": "Ground Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcW6jo1iLCyeiLUVMEwERewIQRhVjgtHIPmA&s",
            "offers": [
              { "offer": "Flat 25% Off on All Jeans", "previousPrice": 3000, "offerPrice": 2250 },
              { "offer": "Buy 1, Get 1 Free on Select T-Shirts", "previousPrice": 800, "offerPrice": 800 },
              { "offer": "20% Off on Women's Wear", "previousPrice": 1500, "offerPrice": 1200 },
              { "offer": "Free Tote Bag with ₹1500 Purchase", "previousPrice": 500, "offerPrice": 0 },
              { "offer": "Buy 2 Get 1 Free on Casual Shirts", "previousPrice": 1200, "offerPrice": 1200 }
            ]
          },
          {
            "name": "Allen Solly",
            "category": "Clothing",
            "floor": "First Floor",
            "logo": "https://crystalpng.com/wp-content/uploads/2023/03/allen-solly-logo.png",
            "offers": [
              { "offer": "30% Off on Formal Shirts", "previousPrice": 2500, "offerPrice": 1750 },
              { "offer": "Buy 1 Get 1 Free on Casual Wear", "previousPrice": 1000, "offerPrice": 1000 },
              { "offer": "Flat 20% Off on Pants and Trousers", "previousPrice": 1200, "offerPrice": 960 },
              { "offer": "Free Shirt with ₹2000 Purchase", "previousPrice": 1500, "offerPrice": 0 },
              { "offer": "15% Off on Women's Collection", "previousPrice": 1800, "offerPrice": 1530 }
            ]
          },
          {
            "name": "Nike",
            "category": "Sports",
            "floor": "Second Floor",
            "logo": "https://i.pinimg.com/736x/a7/15/be/a715beeaceeba3b6fdbcb29717032cc8.jpg",
            "offers": [
              { "offer": "20% Off on Running Shoes", "previousPrice": 5000, "offerPrice": 4000 },
              { "offer": "Buy 1 Get 1 Free on Sports Wear", "previousPrice": 1500, "offerPrice": 1500 },
              { "offer": "Flat 30% Off on Select Sports Accessories", "previousPrice": 1000, "offerPrice": 700 },
              { "offer": "Free Water Bottle with Any Sports Gear Purchase", "previousPrice": 300, "offerPrice": 0 },
              { "offer": "Buy 2, Get 1 Free on Socks", "previousPrice": 200, "offerPrice": 200 }
            ]
          },
          {
            "name": "Adidas",
            "category": "Sports",
            "floor": "First Floor",
            "logo": "https://i.pinimg.com/736x/8c/b0/8a/8cb08a963150553f12dc40795e5cb4a3.jpg",
            "offers": [
              { "offer": "15% Off on Running Shoes", "previousPrice": 4500, "offerPrice": 3825 },
              { "offer": "Buy 1, Get 1 Free on T-Shirts", "previousPrice": 1000, "offerPrice": 1000 },
              { "offer": "Flat 25% Off on Sports Bags", "previousPrice": 1500, "offerPrice": 1125 },
              { "offer": "Free Leggings with Purchase Above ₹2000", "previousPrice": 800, "offerPrice": 0 },
              { "offer": "30% Off on Select Jogging Gear", "previousPrice": 2500, "offerPrice": 1750 }
            ]
          },
          {
            "name": "Samsung",
            "category": "Electronics",
            "floor": "Ground Floor",
            "logo": "https://w7.pngwing.com/pngs/990/838/png-transparent-samsung-electronics-samsung-galaxy-samsung-logo-text-logo-black-thumbnail.png",
            "offers": [
              { "offer": "10% Off on Mobile Phones", "previousPrice": 25000, "offerPrice": 22500 },
              { "offer": "Flat 15% Off on LED TVs", "previousPrice": 50000, "offerPrice": 42500 },
              { "offer": "Buy 1, Get 1 Free on Accessories", "previousPrice": 1500, "offerPrice": 1500 },
              { "offer": "20% Off on Home Appliances", "previousPrice": 10000, "offerPrice": 8000 },
              { "offer": "Free Earbuds with ₹20000 Purchase", "previousPrice": 3500, "offerPrice": 0 }
            ]
          },
          {
            "name": "Croma",
            "category": "Electronics",
            "floor": "First Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBb-ZSLaAUHjrhpDayixEUOpfwROxX50DONw&s",
            "offers": [
              { "offer": "Flat 25% Off on Laptops", "previousPrice": 40000, "offerPrice": 30000 },
              { "offer": "15% Off on Smartwatches", "previousPrice": 5000, "offerPrice": 4250 },
              { "offer": "Buy 2, Get 1 Free on Phone Accessories", "previousPrice": 1000, "offerPrice": 1000 },
              { "offer": "Free Delivery on Orders Above ₹10000", "previousPrice": 100, "offerPrice": 0 },
              { "offer": "Up to 30% Off on Home Appliances", "previousPrice": 15000, "offerPrice": 10500 }
            ]
          },
          {
            "name": "Reliance Digital",
            "category": "Electronics",
            "floor": "Second Floor",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUW51UZSXoUPzn_ojuaR5NrCcIO2nuHf8iZA&s",
            "offers": [
              { "offer": "Flat 20% Off on Smartphones", "previousPrice": 18000, "offerPrice": 14400 },
              { "offer": "Buy 1 Get 1 Free on USB Drives", "previousPrice": 500, "offerPrice": 500 },
              { "offer": "10% Off on Home Theatres", "previousPrice": 25000, "offerPrice": 22500 },
              { "offer": "Free HDMI Cable with Every Purchase Above ₹15000", "previousPrice": 1000, "offerPrice": 0 },
              { "offer": "Buy 2, Get 1 Free on Headphones", "previousPrice": 2500, "offerPrice": 2500 }
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



