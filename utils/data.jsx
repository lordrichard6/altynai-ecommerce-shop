import bcrypt from 'bcryptjs';

const data = {
    users: {
        users: [
            {
                name: 'John',
                email: 'admin@example.com',
                password: bcrypt.hashSync('123456'),
                isAdmin: true,
            },
            {
                name: 'Jane',
                email: 'user@example.com',
                password: bcrypt.hashSync('123456'),
                isAdmin: false,
            },
        ]
    },
    products: [
        {
            name: 'Standart Housemark Tee',
            slug: 'shirt01',
            category: 'Shirts',
            image: '/images/shirt01.jpg',
            price: 59,
            brand: "Levi's",
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: "Classic and comfortable cotton tee with the signature Levi's graphic across the chest"
        },
        {
            name: 'Love Unites Trefoil Tee(Gender Neutral)',
            slug: 'shirt02.',
            category: 'Shirts',
            image: '/images/shirt02.jpg',
            price: 79,
            brand: "Adidas",
            rating: 4.6,
            numReviews: 4,
            countInStock: 10,
            description: 'A popular shirt'
        },
        {
            name: 'Skylar Dress',
            slug: 'dress01',
            category: 'Dress',
            image: '/images/dress01.jpg',
            price: 89.90,
            brand: "Levi's",
            rating: 4.9,
            numReviews: 11,
            countInStock: 22,
            description: 'Simple Daisy Autumn Leaf - Orange'
        },
        {
            name: 'Over The Knee Fabric Platform Boots',
            slug: 'boots01',
            category: 'Boots',
            image: '/images/boots01.jpg',
            price: 95.90,
            brand: "Puma",
            rating: 4.2,
            numReviews: 16,
            countInStock: 12,
            description: 'AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.'
        },
        {
            name: 'Liverpool FC Club Fleece',
            slug: 'pants01',
            category: 'Pants',
            image: '/images/pants01.jpg',
            price: 69.95,
            brand: "Nike",
            rating: 4.4,
            numReviews: 8,
            countInStock: 5,
            description: 'Pants with medium waistband for women'
        },
        {
            name: 'Silk Crepe Ecru',
            slug: 'dress02',
            category: 'Dress',
            image: '/images/dress02.jpg',
            price: 169.95,
            brand: "Chanel",
            rating: 5.0,
            numReviews: 3,
            countInStock: 5,
            description: 'Pants with medium waistband for women'
        },
    ]
}

export default data;