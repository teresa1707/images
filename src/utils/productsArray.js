const productsArray = [
    {
        id: 1,
        name: 'Iphone 13pro',
        description: 'This is a Iphone 11xs',
        type: 'phone',
        capacity: 126,
        price: 1000,
        image: 'images/phone1.jpg',
        isHome: true,
    },
    {
        id: 2,
        name: 'Iphone 11xs',
        description: 'This is a Iphone 11xs',
        type: 'phone',
        capacity: 126,
        price: 500,
        image: 'images/phone2.jpg',
        isHome: true,
    },
    {
        id: 3,
        name: 'Iphone 12',
        description: 'This is a Iphone 11xs',
        type: 'phone',
        capacity: 126,
        price: 1500,
        image: 'images/phone3.jpg',
        isHome: true,
    },
    {
        id: 4,
        name: 'Iphone 10',
        description: 'This is a Iphone 11xs',
        type: 'phone',
        capacity: 126,
        price: 900,
        image: 'images/phone4.jpg',
    },
    {
        id: 5,
        name: 'Iphone 9',
        description: 'This is a Iphone 11xs',
        type: 'phone',
        capacity: 126,
        price: 600,
        image: 'images/phone5.jpg',
    },
    {
        id: 6,
        name: 'Iphone 9',
        description: 'This is a Iphone 11xs',
        type: 'phone',
        capacity: 126,
        price: 700,
        image: 'images/phone6.jpg',
    },
]

export const getProductsObject = (array) =>
    array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )

export default productsArray
