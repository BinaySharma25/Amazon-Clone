// Product Data for Amazon Clone
const productsData = [
    // Electronics (12 products)
    {
        id: 1,
        title: "iPhone 14 Pro",
        price: 999.99,
        description: "Latest iPhone with advanced camera system",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
        rating: { rate: 4.8, count: 156 }
    },
    {
        id: 2,
        title: "MacBook Air M2",
        price: 1199.99,
        description: "Ultra-thin laptop with M2 chip",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        rating: { rate: 4.9, count: 89 }
    },
    {
        id: 3,
        title: "Samsung Galaxy S23",
        price: 899.99,
        description: "Android flagship with excellent camera",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1690788056245-025bd89708a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: { rate: 4.7, count: 234 }
    },
    {
        id: 4,
        title: "Sony WH-1000XM4",
        price: 349.99,
        description: "Premium noise-canceling headphones",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        rating: { rate: 4.8, count: 156 }
    },
    {
        id: 5,
        title: "Apple Watch Series 8",
        price: 399.99,
        description: "Advanced smartwatch with health features",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
        rating: { rate: 4.7, count: 89 }
    },
    {
        id: 6,
        title: "iPad Pro 12.9",
        price: 1099.99,
        description: "Professional tablet with M2 chip",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
        rating: { rate: 4.6, count: 78 }
    },
    {
        id: 7,
        title: "Dell XPS 13 Laptop",
        price: 1299.99,
        description: "Premium ultrabook with InfinityEdge display",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        rating: { rate: 4.5, count: 112 }
    },
    {
        id: 8,
        title: "Bose QuietComfort 45",
        price: 329.99,
        description: "Premium wireless noise-canceling headphones",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        rating: { rate: 4.7, count: 89 }
    },
    {
        id: 9,
        title: "Google Pixel 7 Pro",
        price: 899.99,
        description: "Android phone with exceptional camera",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        rating: { rate: 4.6, count: 134 }
    },
    {
        id: 10,
        title: "Microsoft Surface Pro 9",
        price: 999.99,
        description: "Versatile 2-in-1 laptop and tablet",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        rating: { rate: 4.4, count: 67 }
    },
    {
        id: 11,
        title: "Samsung Galaxy Buds Pro",
        price: 199.99,
        description: "Wireless earbuds with active noise cancellation",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        rating: { rate: 4.3, count: 156 }
    },
    {
        id: 12,
        title: "LG OLED C2 TV",
        price: 2499.99,
        description: "65-inch 4K OLED smart TV",
        category: "electronics",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        rating: { rate: 4.9, count: 234 }
    },
    
    // Shoes (12 products)
    {
        id: 13,
        title: "Nike Air Jordan",
        price: 189.99,
        description: "Classic basketball sneakers",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
        rating: { rate: 4.6, count: 178 }
    },
    {
        id: 14,
        title: "Adidas Yeezy Boost",
        price: 249.99,
        description: "Premium comfort sneakers",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400",
        rating: { rate: 4.5, count: 92 }
    },
    {
        id: 15,
        title: "Converse Chuck Taylor",
        price: 59.99,
        description: "Classic canvas sneakers for casual wear",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400",
        rating: { rate: 4.3, count: 156 }
    },
    {
        id: 16,
        title: "Vans Old Skool Skate Shoes",
        price: 64.99,
        description: "Iconic skate shoes with side stripe",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
        rating: { rate: 4.4, count: 78 }
    },
    {
        id: 17,
        title: "New Balance 574 Classic",
        price: 79.99,
        description: "Retro-inspired lifestyle sneakers",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
        rating: { rate: 4.6, count: 92 }
    },
    {
        id: 18,
        title: "Puma RS-X Reinvention",
        price: 94.99,
        description: "Chunky sneakers with retro design",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
        rating: { rate: 4.2, count: 67 }
    },
    {
        id: 19,
        title: "Nike Air Force 1",
        price: 99.99,
        description: "Iconic white sneakers",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
        rating: { rate: 4.7, count: 234 }
    },
    {
        id: 20,
        title: "Adidas Ultraboost 22",
        price: 189.99,
        description: "Running shoes with energy return",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400",
        rating: { rate: 4.8, count: 156 }
    },
    {
        id: 21,
        title: "Reebok Classic Leather",
        price: 74.99,
        description: "Timeless leather sneakers",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
        rating: { rate: 4.4, count: 89 }
    },
    {
        id: 22,
        title: "ASICS Gel-Kayano 29",
        price: 159.99,
        description: "Premium running shoes with gel cushioning",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
        rating: { rate: 4.6, count: 123 }
    },
    {
        id: 23,
        title: "Brooks Ghost 14",
        price: 129.99,
        description: "Neutral running shoes for daily training",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400",
        rating: { rate: 4.5, count: 78 }
    },
    {
        id: 24,
        title: "Hoka Clifton 9",
        price: 139.99,
        description: "Lightweight running shoes with maximum cushion",
        category: "shoes",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
        rating: { rate: 4.7, count: 92 }
    },
    
    // Men's Clothing (12 products)
    {
        id: 25,
        title: "Men's Denim Jacket",
        price: 79.99,
        description: "Classic denim jacket for men",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1578587018452-892b1fbf6f9e?w=400",
        rating: { rate: 4.3, count: 67 }
    },
    {
        id: 26,
        title: "Men's Casual T-Shirt",
        price: 29.99,
        description: "Comfortable cotton t-shirt for men",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        rating: { rate: 4.1, count: 89 }
    },
    {
        id: 27,
        title: "Men's Formal Shirt",
        price: 59.99,
        description: "Professional formal shirt for men",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
        rating: { rate: 4.4, count: 45 }
    },
    {
        id: 28,
        title: "Men's Hoodie",
        price: 49.99,
        description: "Warm and comfortable hoodie for men",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
        rating: { rate: 4.2, count: 78 }
    },
    {
        id: 29,
        title: "Men's Polo Shirt",
        price: 39.99,
        description: "Classic polo shirt for casual wear",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        rating: { rate: 4.3, count: 56 }
    },
    {
        id: 30,
        title: "Men's Chino Pants",
        price: 69.99,
        description: "Versatile chino pants for any occasion",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
        rating: { rate: 4.5, count: 89 }
    },
    {
        id: 31,
        title: "Men's Sweater",
        price: 54.99,
        description: "Warm knit sweater for cold weather",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
        rating: { rate: 4.4, count: 67 }
    },
    {
        id: 32,
        title: "Men's Jeans",
        price: 79.99,
        description: "Classic blue jeans for everyday wear",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        rating: { rate: 4.6, count: 123 }
    },
    {
        id: 33,
        title: "Men's Blazer",
        price: 129.99,
        description: "Professional blazer for formal occasions",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
        rating: { rate: 4.7, count: 45 }
    },
    {
        id: 34,
        title: "Men's Shorts",
        price: 34.99,
        description: "Comfortable shorts for summer",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        rating: { rate: 4.2, count: 78 }
    },
    {
        id: 35,
        title: "Men's Vest",
        price: 44.99,
        description: "Sleeveless vest for layering",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
        rating: { rate: 4.1, count: 34 }
    },
    {
        id: 36,
        title: "Men's Suit",
        price: 299.99,
        description: "Professional suit for formal events",
        category: "men's clothing",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
        rating: { rate: 4.8, count: 67 }
    },
    
    // Women's Clothing (12 products)
    {
        id: 37,
        title: "Women's Summer Dress",
        price: 59.99,
        description: "Elegant summer dress for women",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
        rating: { rate: 4.4, count: 123 }
    },
    {
        id: 38,
        title: "Women's Blouse",
        price: 39.99,
        description: "Stylish blouse for women",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
        rating: { rate: 4.3, count: 67 }
    },
    {
        id: 39,
        title: "Women's Jeans",
        price: 69.99,
        description: "Comfortable jeans for women",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        rating: { rate: 4.5, count: 92 }
    },
    {
        id: 40,
        title: "Women's Cardigan",
        price: 44.99,
        description: "Cozy cardigan for women",
        category: "women's clothing",
        image: "https://plus.unsplash.com/premium_photo-1673757092463-9f3b5fed8bfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V29tZW4ncyUyMENhcmRpZ2FufGVufDB8fDB8fHww",
        rating: { rate: 4.2, count: 56 }
    },
    {
        id: 41,
        title: "Women's Skirt",
        price: 49.99,
        description: "Elegant skirt for professional wear",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1659658380089-39e45c5cee62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4ncyUyMCUyMGRyZXNzJTIwamFja2V0fGVufDB8fDB8fHww",
        rating: { rate: 4.3, count: 78 }
    },
    {
        id: 42,
        title: "Women's Sweater",
        price: 54.99,
        description: "Warm knit sweater for women",
        category: "women's clothing",
        image: "https://plus.unsplash.com/premium_photo-1661433063633-3afe222c8baa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4ncyUyMCUyMGRyZXNzJTIwamFja2V0fGVufDB8fDB8fHww",
        rating: { rate: 4.4, count: 89 }
    },
    {
        id: 43,
        title: "Women's Jacket",
        price: 89.99,
        description: "Stylish jacket for cooler weather",
        category: "women's clothing",
        image: "https://plus.unsplash.com/premium_photo-1661433127386-3bac92c5885e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJ3MlMjAlMjBkcmVzcyUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
        rating: { rate: 4.6, count: 67 }
    },
    {
        id: 44,
        title: "Women's Pants",
        price: 59.99,
        description: "Comfortable pants for everyday wear",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: { rate: 4.5, count: 92 }
    },
    {
        id: 45,
        title: "Women's Tank Top",
        price: 24.99,
        description: "Casual tank top for summer",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1623601903065-0d5b4ae594d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdvbWVuJ3MlMjAlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
        rating: { rate: 4.2, count: 45 }
    },
    {
        id: 46,
        title: "Women's Blazer",
        price: 99.99,
        description: "Professional blazer for work",
        category: "women's clothing",
        image: "https://plus.unsplash.com/premium_photo-1715876234327-0f6d2aca2c19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdvbWVuJ3MlMjAlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
        rating: { rate: 4.7, count: 78 }
    },
    {
        id: 47,
        title: "Women's Shorts",
        price: 34.99,
        description: "Comfortable shorts for summer",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1753192108753-81be0db2f7fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJ3MlMjAlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
        rating: { rate: 4.3, count: 56 }
    },
    {
        id: 48,
        title: "Women's Dress",
        price: 79.99,
        description: "Elegant dress for special occasions",
        category: "women's clothing",
        image: "https://images.unsplash.com/photo-1721190167637-fb49b48c2417?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJ3MlMjAlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
        rating: { rate: 4.8, count: 123 }
    },
    
    // Jewelry (12 products)
    {
        id: 49,
        title: "Diamond Ring",
        price: 1299.99,
        description: "Beautiful diamond engagement ring",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
        rating: { rate: 4.9, count: 45 }
    },
    {
        id: 50,
        title: "Gold Necklace",
        price: 299.99,
        description: "Elegant gold necklace",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
        rating: { rate: 4.6, count: 78 }
    },
    {
        id: 51,
        title: "Silver Bracelet",
        price: 89.99,
        description: "Stylish silver bracelet",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1522001947148-8b4dfe064edc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
        rating: { rate: 4.4, count: 34 }
    },
    {
        id: 52,
        title: "Pearl Earrings",
        price: 149.99,
        description: "Classic pearl earrings",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1621939745912-aad97fd3a34d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
        rating: { rate: 4.7, count: 67 }
    },
    {
        id: 53,
        title: "Rose Gold Watch",
        price: 399.99,
        description: "Elegant rose gold watch",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1543295204-2ae345412549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
        rating: { rate: 4.8, count: 89 }
    },
    {
        id: 54,
        title: "Diamond Studs",
        price: 599.99,
        description: "Classic diamond stud earrings",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
        rating: { rate: 4.9, count: 56 }
    },
    {
        id: 55,
        title: "Gold Chain",
        price: 199.99,
        description: "Simple gold chain necklace",
        category: "jewelery",
        image: "https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
        rating: { rate: 4.5, count: 78 }
    },
    {
        id: 56,
        title: "Silver Ring",
        price: 79.99,
        description: "Minimalist silver ring",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
        rating: { rate: 4.3, count: 45 }
    },
    {
        id: 57,
        title: "Crystal Necklace",
        price: 129.99,
        description: "Beautiful crystal pendant necklace",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
        rating: { rate: 4.6, count: 67 }
    },
    {
        id: 58,
        title: "Gold Bangle",
        price: 249.99,
        description: "Elegant gold bangle bracelet",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
        rating: { rate: 4.7, count: 34 }
    },
    {
        id: 59,
        title: "Silver Hoop Earrings",
        price: 69.99,
        description: "Classic silver hoop earrings",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1518603651734-34dfe67da4d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
        rating: { rate: 4.4, count: 89 }
    },
    {
        id: 60,
        title: "Gold Anklet",
        price: 159.99,
        description: "Delicate gold anklet",
        category: "jewelery",
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
        rating: { rate: 4.5, count: 23 }
    }
]; 