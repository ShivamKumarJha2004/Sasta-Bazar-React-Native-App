export const menuData = [
    { name: 'Kart', iconUri: require('@assets/icons/shopping.png') },
    { name: 'Grocery', iconUri: require('@assets/icons/grocery.png') },
    { name: 'Travel', iconUri: require('@assets/icons/travel.png') },
    { name: 'Pay', iconUri: require('@assets/icons/pay.png') }
]

export const slipData = ['PREMIUM FINDS', "100% GENUINE BRAND", "FREE SHIPPING", "EASY RETURNS", "24/7 CUSTOMER SUPPORT"]

export const searchItems: string[] = ['Watches', 'Laptops', 'T-shirts', 'Shoes', 'Bags', 'Headphones', 'Sunglasses']

export const categoriesData = [
    { id: 1, name: "Home", image_uri: 'https://rukminim2.flixcart.com/fk-p-flap/121/121/image/18a00dd8cb47884d.jpg?q=60' },
    { id: 2, name: "Gadgets", image_uri: 'https://rukminim2.flixcart.com/fk-p-flap/121/121/image/0492397449e17ed3.jpg?q=60' },
    { id: 3, name: "Beauty", image_uri: 'https://rukminim2.flixcart.com/fk-p-flap/121/121/image/83ba03d54d13c193.jpg?q=60' },
    { id: 4, name: "Fashion", image_uri: 'https://rukminim2.flixcart.com/fk-p-flap/121/121/image/ef81f0d558e28785.jpg?q=60' },
    { id: 5, name: "Mobiles", image_uri: "https://rukminim2.flixcart.com/fk-p-flap/121/121/image/e70a833bef33e023.jpg?q=60" },
    { id: 6, name: "Vehicles", image_uri: "https://rukminim2.flixcart.com/fk-p-flap/121/121/image/f16650118eeb2d0c.jpg?q=60" },
    { id: 7, name: "Appliances", image_uri: "https://rukminim2.flixcart.com/fk-p-flap/121/121/image/0d06f7f57666ea02.jpg?q=60" },
    { id: 8, name: "Electronics", image_uri: "https://rukminim2.flixcart.com/fk-p-flap/121/121/image/4a9b5861e488272c.jpg?q=60" },
    { id: 9, name: "Sports", image_uri: "https://rukminim2.flixcart.com/fk-p-flap/121/121/image/d1093d404ba12ebb.jpg?q=60" },
    { id: 10, name: "Food", image_uri: "https://rukminim2.flixcart.com/fk-p-flap/121/121/image/916c69ce7fae622b.jpg?q=60" }
]

export const dynamicDashboardData = [
    {
        type: "ad_carousal",
        data: [
            { id: 1, image_uri: require('@assets/images/banner-min.png'), path: "/ad1" },
            { id: 2, image_uri: require('@assets/images/banner-min2.png'), path: "/ad2" },
            { id: 3, image_uri: require('@assets/images/banner-min3.png'), path: "/ad2" },
            { id: 4, image_uri: require('@assets/images/banner-min4.png'), path: "/ad2" },
        ],
    },
    {
        type: "categories",
        data: categoriesData,
    },
    {
        type: "sponser",
        data: [{
            id: 1,
            image_uri: "https://rukminim2.flixcart.com/fk-p-flap/820/180/image/c3ce8a2713d28788.jpeg?q=60",
            path: '/sponser1'
        }]
    },
    {
        type: "horizontal_list",
        title: "Best Deals",
        data: [
            { id: 1, name: "Laptop", image_uri: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70", price: 45000, discount: 10, rating: 4.5, path: "/product/1" },
            { id: 2, name: "Mobile", image_uri: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70", price: 15000, discount: 5, rating: 4.2, path: "/product/2" },
            { id: 3, name: "TV", image_uri: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/j/2/j/-original-imaghgpgdhbgxvxq.jpeg?q=70", price: 35000, discount: 15, rating: 4.0, path: "/product/3" },
            { id: 4, name: "Refrigerator", image_uri: "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/l/y/d/-original-imagqy8hjugt5hgj.jpeg?q=70", price: 25000, discount: 8, rating: 4.3, path: "/product/4" },
            { id: 5, name: "Washing Machine", image_uri: "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/i/j/w/-original-imagqy8hgwjjmmzf.jpeg?q=70", price: 20000, discount: 12, rating: 4.1, path: "/product/5" },
        ]
    },
    {
        type: "grid_list",
        title: "Top Picks",
        data: [
            { id: 1, name: "Headphones", image_uri: "https://rukminim2.flixcart.com/image/612/612/l31x2fk0/headphone/a/s/h/-original-image9ehehz8amg2.jpeg?q=70", price: 2000, discount: 5, rating: 4.0, path: "/product/6" },
            { id: 2, name: "Smart Watch", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/h/c/-original-imagrk2fhfvduvxg.jpeg?q=70", price: 3000, discount: 10, rating: 4.2, path: "/product/7" },
            { id: 3, name: "Camera", image_uri: "https://rukminim2.flixcart.com/image/612/612/kw9krrk0/dslr-camera/q/l/w/-original-imag8z5xqdstmrzu.jpeg?q=70", price: 40000, discount: 15, rating: 4.5, path: "/product/8" },
            { id: 4, name: "Speaker", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/mobile-tablet-speaker/o/t/c/stone-350-boat-original-imagg5gy5qvvzwwt.jpeg?q=70", price: 1500, discount: 8, rating: 4.1, path: "/product/9" },
        ]
    },
    {
        type: "sponser",
        data: [{
            id: 2,
            image_uri: "https://rukminim2.flixcart.com/fk-p-flap/820/180/image/621461fb9e7f5c5e.jpeg?q=60",
            path: '/sponser2'
        }]
    },
    {
        type: "horizontal_list",
        title: "Fashion",
        data: [
            { id: 1, name: "T-Shirt", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/e/0/l-st-boxhead-black-smartees-original-imagmeyw7hgkbygf.jpeg?q=70", price: 500, discount: 10, rating: 4.0, path: "/product/10" },
            { id: 2, name: "Jeans", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/h/y/g/32-jeans-knighthood-original-imaggcr7ggzj7qnt.jpeg?q=70", price: 1000, discount: 15, rating: 4.2, path: "/product/11" },
            { id: 3, name: "Shoes", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=70", price: 1500, discount: 20, rating: 4.5, path: "/product/12" },
            { id: 4, name: "Watch", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/z/1/h/-original-imagqhvgybexgkmh.jpeg?q=70", price: 2000, discount: 10, rating: 4.3, path: "/product/13" },
            { id: 5, name: "Sunglasses", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/7/m/m/-original-imagqabnwkcw8ej9.jpeg?q=70", price: 500, discount: 5, rating: 4.0, path: "/product/14" },
        ]
    },
]

export const productData = [
    { id: 1, name: "Laptop", image_uri: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70", price: 45000, discount: 10, rating: 4.5, path: "/product/1" },
    { id: 2, name: "Mobile", image_uri: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70", price: 15000, discount: 5, rating: 4.2, path: "/product/2" },
    { id: 3, name: "TV", image_uri: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/j/2/j/-original-imaghgpgdhbgxvxq.jpeg?q=70", price: 35000, discount: 15, rating: 4.0, path: "/product/3" },
    { id: 4, name: "Refrigerator", image_uri: "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/l/y/d/-original-imagqy8hjugt5hgj.jpeg?q=70", price: 25000, discount: 8, rating: 4.3, path: "/product/4" },
    { id: 5, name: "Washing Machine", image_uri: "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/i/j/w/-original-imagqy8hgwjjmmzf.jpeg?q=70", price: 20000, discount: 12, rating: 4.1, path: "/product/5" },
    { id: 6, name: "Headphones", image_uri: "https://rukminim2.flixcart.com/image/612/612/l31x2fk0/headphone/a/s/h/-original-image9ehehz8amg2.jpeg?q=70", price: 2000, discount: 5, rating: 4.0, path: "/product/6" },
    { id: 7, name: "Smart Watch", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/h/c/-original-imagrk2fhfvduvxg.jpeg?q=70", price: 3000, discount: 10, rating: 4.2, path: "/product/7" },
    { id: 8, name: "Camera", image_uri: "https://rukminim2.flixcart.com/image/612/612/kw9krrk0/dslr-camera/q/l/w/-original-imag8z5xqdstmrzu.jpeg?q=70", price: 40000, discount: 15, rating: 4.5, path: "/product/8" },
    { id: 9, name: "Speaker", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/mobile-tablet-speaker/o/t/c/stone-350-boat-original-imagg5gy5qvvzwwt.jpeg?q=70", price: 1500, discount: 8, rating: 4.1, path: "/product/9" },
    { id: 10, name: "T-Shirt", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/t/e/0/l-st-boxhead-black-smartees-original-imagmeyw7hgkbygf.jpeg?q=70", price: 500, discount: 10, rating: 4.0, path: "/product/10" },
    { id: 11, name: "Jeans", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/h/y/g/32-jeans-knighthood-original-imaggcr7ggzj7qnt.jpeg?q=70", price: 1000, discount: 15, rating: 4.2, path: "/product/11" },
    { id: 12, name: "Shoes", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=70", price: 1500, discount: 20, rating: 4.5, path: "/product/12" },
    { id: 13, name: "Watch", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/z/1/h/-original-imagqhvgybexgkmh.jpeg?q=70", price: 2000, discount: 10, rating: 4.3, path: "/product/13" },
    { id: 14, name: "Sunglasses", image_uri: "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/7/m/m/-original-imagqabnwkcw8ej9.jpeg?q=70", price: 500, discount: 5, rating: 4.0, path: "/product/14" },
]

export const orderData = [
    { id: 1, product_id: 1, user_id: 1, quantity: 1, price: 45000, discount: 10, status: "delivered", order_date: "2023-01-01", delivery_date: "2023-01-05" },
    { id: 2, product_id: 2, user_id: 1, quantity: 1, price: 15000, discount: 5, status: "delivered", order_date: "2023-02-01", delivery_date: "2023-02-05" },
    { id: 3, product_id: 3, user_id: 1, quantity: 1, price: 35000, discount: 15, status: "delivered", order_date: "2023-03-01", delivery_date: "2023-03-05" },
    { id: 4, product_id: 4, user_id: 1, quantity: 1, price: 25000, discount: 8, status: "delivered", order_date: "2023-04-01", delivery_date: "2023-04-05" },
    { id: 5, product_id: 5, user_id: 1, quantity: 1, price: 20000, discount: 12, status: "delivered", order_date: "2023-05-01", delivery_date: "2023-05-05" },
    { id: 6, product_id: 6, user_id: 1, quantity: 1, price: 2000, discount: 5, status: "delivered", order_date: "2023-06-01", delivery_date: "2023-06-05" },
    { id: 7, product_id: 7, user_id: 1, quantity: 1, price: 3000, discount: 10, status: "delivered", order_date: "2023-07-01", delivery_date: "2023-07-05" },
    { id: 8, product_id: 8, user_id: 1, quantity: 1, price: 40000, discount: 15, status: "delivered", order_date: "2023-08-01", delivery_date: "2023-08-05" },
    { id: 9, product_id: 9, user_id: 1, quantity: 1, price: 1500, discount: 8, status: "delivered", order_date: "2023-09-01", delivery_date: "2023-09-05" },
    { id: 10, product_id: 10, user_id: 1, quantity: 1, price: 500, discount: 10, status: "delivered", order_date: "2023-10-01", delivery_date: "2023-10-05" },
]