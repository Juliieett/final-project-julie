const products = [
    
    { 
        id: 1, 
        name: 'Nike Air Max 270', 
        price: 120, 
        status: 'For Sale', 
        image: 'https://stockx.imgix.net/images/Nike-Air-Max-270-Liquid-Metal-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607664360', 
        details: 'The Nike Air Max 270 offers comfort and style with its lightweight design and responsive cushioning.',
        brand: 'Nike'
    },
    { 
        id: 13, 
        name: 'Nike React Infinity Run Flyknit', 
        price: 160, 
        status: 'For Sale', 
        image: 'https://www.runnerinn.com/f/13736/137367623/nike-react-infinity-run-flyknit-running-shoes.jpg', 
        details: 'The Nike React Infinity Run Flyknit offers a responsive ride and reliable support, designed to reduce injury and keep you running.',
        brand: 'Nike'
    },
    
    { 
        id: 2, 
        name: 'Adidas Ultraboost 21', 
        price: 180, 
        status: 'For Sale', 
        image: 'https://sneakernews.com/wp-content/uploads/2021/08/NCAA-adidas-UltraBOOST-21-2021-13.jpeg?w=1140', 
        details: 'The Adidas Ultraboost 21 features responsive cushioning and a sleek design, perfect for running and everyday wear.',
        brand: 'Adidas'
    },
    { 
        id: 14, 
        name: 'Adidas Stan Smith', 
        price: 90, 
        status: 'For Sale', 
        image: 'https://sneakernews.com/wp-content/uploads/2019/12/adidas-Stan-Smith-ADITECH-FW5249.jpg', 
        details: 'The Adidas Stan Smith is a classic tennis shoe known for its clean design and timeless appeal, crafted with premium leather.',
        brand: 'Adidas'
    },
    
    { 
        id: 3, 
        name: 'Converse Chuck Taylor All Star', 
        price: 60, 
        status: 'Sold Out', 
        image: 'https://static.ticimax.cloud/2605/Uploads/UrunResimleri/buyuk/001converse-chuck-taylor-all-star-move-h-2c50.jpg', 
        details: 'The Converse Chuck Taylor All Star is a timeless classic known for its iconic silhouette and durable canvas upper.',
        brand: 'Converse'
    },
    { 
        id: 15, 
        name: 'Converse Chuck 70', 
        price: 80, 
        status: 'For Sale', 
        image: 'https://www.zappos.com/images/z/2/5/4/3/7/5/2543755-5-4x.jpg', 
        details: 'The Converse Chuck 70 is a modern take on the iconic Chuck Taylor All Star, featuring enhanced comfort and durability.',
        brand: 'Converse'
    },
    
    { 
        id: 4, 
        name: 'Puma Future Rider Play On', 
        price: 100, 
        status: 'For Sale', 
        image: 'https://cdna.lystit.com/photos/dressinn/9a449ee0/puma-select-Multicoloured-Future-Rider-Play-On.jpeg', 
        details: 'The Puma Future Rider Play On combines retro style with modern comfort, featuring a lightweight design and shock-absorbing sole.',
        brand: 'Puma'
    },
    { 
        id: 16, 
        name: 'Puma Suede Classic', 
        price: 65, 
        status: 'For Sale', 
        image: 'https://cdn.zelenshoes.com/images/products/large/PUM352634-03_1_.jpeg', 
        details: 'The Puma Suede Classic is a versatile sneaker with a suede upper and rubber outsole, offering timeless style and comfort.',
        brand: 'Puma'
    },
    
    { 
        id: 5, 
        name: 'Vans Old Skool', 
        price: 70, 
        status: 'For Sale', 
        image: 'https://www.consortium.co.uk/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/v/a/vans-old-skool-pro-black-white-cat_1.jpg', 
        details: 'The Vans Old Skool is a classic skate shoe known for its durability, comfort, and iconic side stripe.',
        brand: 'Vans'
    },
    { 
        id: 17, 
        name: 'Vans Sk8-Hi', 
        price: 75, 
        status: 'For Sale', 
        image: 'https://cdn-occ.akinon.net/products/2020/03/10/119520/f02077c9-343d-48f1-8dd5-f8745383eeaa.jpg', 
        details: 'The Vans Sk8-Hi is a legendary high-top sneaker with durable canvas and suede uppers, providing ankle support and classic Vans style.',
        brand: 'Vans'
    },
    
    { 
        id: 6, 
        name: 'New Balance Fresh Foam 1080v11', 
        price: 150, 
        status: 'For Sale', 
        image: 'https://cdn11.bigcommerce.com/s-kk5b4m/images/stencil/1280x1280/products/49186/47591/B__48764.1645642678.jpg?c=2', 
        details: 'The New Balance Fresh Foam 1080v11 offers plush cushioning and a breathable mesh upper, making it ideal for long-distance running.',
        brand: 'New Balance'
    },
    { 
        id: 18, 
        name: 'New Balance 990v5', 
        price: 175, 
        status: 'For Sale', 
        image: 'https://sneakernews.com/wp-content/uploads/2020/10/New-Balance-990v5-Team-Red-Carbon-M990NL5-1.jpg', 
        details: 'The New Balance 990v5 is crafted in the USA with premium materials, offering superior comfort and stability for everyday wear.',
        brand: 'New Balance'
    },
    
    { 
        id: 7, 
        name: 'Skechers D\'Lites - Fresh Start', 
        price: 80, 
        status: 'For Sale', 
        image: 'https://www.skechers.ca/on/demandware.static/-/Sites-skechers-master/default/dwf27c0b7b/images/large/11931_WTRG.jpg', 
        details: 'The Skechers D\'Lites - Fresh Start combines comfort and style with a sporty design and Air-Cooled Memory Foam insole.',
        brand: 'Skechers'
    },
    {
        id: 19,
        name: 'New Balance Fresh Foam 1080v11',
        price: 150,
        status: 'For Sale',
        image: 'https://therunningoutlet.co.uk/wp-content/uploads/2021/04/NB-Mens-1080-M1080R11-back.jpg',
        details: 'The New Balance Fresh Foam 1080v11 offers luxurious comfort with Fresh Foam midsole cushioning and a breathable Hypoknit upper.',
        brand: 'New Balance'
    },
    
    
    { 
        id: 8, 
        name: 'Brooks Adrenaline GTS 21', 
        price: 160, 
        status: 'For Sale', 
        image: 'https://content.backcountry.com/images/items/1200/BRJ/BRJG01P/GRTRDECO.jpg', 
        details: 'The Brooks Adrenaline GTS 21 provides support and cushioning for runners, featuring GuideRails technology for stability.',
        brand: 'Brooks'
    },
    { 
        id: 20, 
        name: 'Brooks Ghost 13', 
        price: 130, 
        status: 'For Sale', 
        image: 'https://dbyvw4eroffpi.cloudfront.net/product-media/3FJ4/2000/2000/Brooks-Ghost-13-GTX-Womens-Running-Shoes-Black-Black-Peacock.jpg', 
        details: 'The Brooks Ghost 13 offers smooth transitions and soft cushioning, designed for neutral runners seeking a reliable daily trainer.',
        brand: 'Brooks'
    },
    
    { 
        id: 9, 
        name: 'Under Armour HOVR Phantom 2', 
        price: 140, 
        status: 'For Sale', 
        image: 'https://media1.popsugar-assets.com/files/thumbor/OJIy-2es0Qz2YvttNLb9u-WKD2k/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/12/06/097/n/1922729/b28c6277a8fbf8fb_netimgiF7EFN/i/UA-HOVR-Phantom-2-Metallic-Running-Shoes.jpg', 
        details: 'The Under Armour HOVR Phantom 2 offers a comfortable fit and responsive cushioning with UA HOVR technology, suitable for running and training.',
        brand: 'Under Armour'
    },
    { 
        id: 21, 
        name: 'Under Armour Charged Assert 8', 
        price: 70, 
        status: 'For Sale', 
        image: 'https://s7d2.scene7.com/is/image/academy/20335643?$pdp-gallery-ng$', 
        details: 'The Under Armour Charged Assert 8 features lightweight mesh uppers and Charged Cushioning for a responsive ride and support.',
        brand: 'Under Armour'
    },
    
    { 
        id: 10, 
        name: 'Reebok Classic Leather', 
        price: 85, 
        status: 'For Sale', 
        image: 'https://www.consortium.co.uk/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/r/e/reebok-classic-leather-black-1.jpg', 
        details: 'The Reebok Classic Leather is a timeless sneaker known for its soft leather upper and comfortable cushioning, perfect for everyday wear.',
        brand: 'Reebok'
    },
    { 
        id: 22, 
        name: 'Reebok Nano X', 
        price: 130, 
        status: 'For Sale', 
        image: 'https://www.traininn.com/f/13741/137414348/reebok-nano-x-shoes.jpg', 
        details: 'The Reebok Nano X is designed for cross-training, offering stability, flexibility, and durability with a comfortable fit.',
        brand: 'Reebok'
    },
    
    { 
        id: 11, 
        name: 'ASICS Gel-Kayano 27', 
        price: 160, 
        status: 'For Sale', 
        image: 'https://boutiquecourir.com/wp-content/uploads/2020/08/ASICS-GEL-Kayano27_F_1012A649_300_SR_RT.jpg', 
        details: 'The ASICS Gel-Kayano 27 offers stability and support for long-distance running, featuring GEL technology for shock absorption and FlyteFoam Propel cushioning.',
        brand: 'ASICS'
    },
    { 
        id: 23, 
        name: 'ASICS Gel-Nimbus 23', 
        price: 150, 
        status: 'For Sale', 
        image: 'https://www.runnerinn.com/f/13789/137894240/asics-gel-nimbus-23-running-shoes.jpg', 
        details: 'The ASICS Gel-Nimbus 23 provides plush comfort and responsive cushioning, designed for neutral runners seeking a smooth ride.',
        brand: 'ASICS'
    },
    
    { 
        id: 12, 
        name: 'Salomon X Ultra 3 GTX', 
        price: 160, 
        status: 'For Sale', 
        image: 'https://www.bfgcdn.com/1500_1500_90/022-0302/salomon-x-ultra-3-gtx-multisport-shoes-detail-3.jpg', 
        details: 'The Salomon X Ultra 3 GTX is a lightweight hiking shoe with GORE-TEX waterproof protection and aggressive grip for technical terrain.',
        brand: 'Salomon'
    },
    
];

export default products;
