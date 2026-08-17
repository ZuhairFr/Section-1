const user = {
    name: 'Raju',
    email: 'Raju@mail.com',
    password: 'raju123'
};
console.log(user);

console.log(user.name);
console.log(user['email']);

user.city = 'Lucknow'

console.log(user);

user.password = 'pass123';

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: 'Xiaomi',
    model: 'Civi',
    price: '70000',
    colors: ['black', 'blue', 'green']

};

console.log(smartphone.colors.at(1));

//change green to red 

smartphone.colors[2] = 'red'
smartphone.colors.push('yellow')

console.log(smartphone.colors);


const smartphoneList = [
    {
        brand: 'Xiaomi',
        model: 'Civi',
        price: '70000',
        colors: ['black', 'blue', 'green']
    },
    {
        brand: 'Samsung',
        model: 'Galaxy S25',
        price: '80000',
        colors: ['black', 'white', 'silver']
    },
    {
        brand: 'Apple',
        model: 'iPhone 16',
        price: '75000',
        colors: ['black', 'blue', 'pink']
    },
    {
        brand: 'OnePlus',
        model: '13',
        price: '65000',
        colors: ['black', 'green', 'white']
    },
    {
        brand: 'Google',
        model: 'Pixel 9',
        price: '60000',
        colors: ['black', 'blue', 'rose']
    }
];