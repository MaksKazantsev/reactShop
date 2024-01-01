import {makeAutoObservable} from "mobx";

export default  class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'PC'},
            {id: 2, name: 'Phones'},
            {id: 3, name: 'Laptops'},
            {id: 4, name: 'Fridges'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Xiaomi'},
            {id: 4, name: 'Infinix'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 13 Pro', price: 25000, rating: 4.9, img: 'https://c.dns-shop.ru/thumb/st1/fit/200/200/3e6294794cd185e2a2083ca7a982d91a/c201023fee63375d614103f3eb86c77160656dae59094cd22a883302c5144fbc.jpg.webp'},
            {id: 2, name: 'Iphone 14 Pro', price: 25000, rating: 4.2, img: 'https://c.dns-shop.ru/thumb/st4/fit/200/200/4f8392e1fd2ffbc67e645bb7c78b622a/3012baa9bc23995289e498d33793b6007a246987cd6e5bd96dbd15aa6cd93c2c.jpg.webp'},
            {id: 3, name: 'Iphone 11', price: 25000, rating: 3.9, img: 'https://c.dns-shop.ru/thumb/st4/fit/200/200/5366e2ee9ba1e5e4ba24534b3d05fba2/f2a5c571cc2f904e82d8b879432702032b5400bb1b0c6caf3e7006ff2322613e.jpg.webp'},
            {id: 4, name: 'Iphone 12 Mini', price: 25000, rating: 4.5, img:'https://c.dns-shop.ru/thumb/st4/fit/200/200/032009030d2bc19363e21801347a142f/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp'},
            {id: 5, name: 'Samsung Galaxy A03s', price: 25000, rating: 4.3, img:'https://c.dns-shop.ru/thumb/st1/fit/200/200/2997459443b6884ad62fce576b5b4543/22bfd8f5b7a9ca508f33f5bacf376e692a4afdeb211cfdf08c7e0556de2e6d81.jpg.webp'},
            {id: 6, name: 'Infinix Note 30 Pro', price: 25000, rating: 4.8, img:'https://c.dns-shop.ru/thumb/st4/fit/200/200/78d2cf1a4b39ea13489e67d5344ef1f7/b1c4c5719033c1978d7403001d5dbddc6880a975002855b60399d9124be6769d.jpg.webp'},
            {id: 7, name: 'Samsung Galaxy S23 Ultra', price: 25000, rating: 4.1, img: 'https://c.dns-shop.ru/thumb/st1/fit/200/200/7ceab995a362f61f5b499cb95236d24a/e1d5367813d0400023a52ec8a4ebab52d160fb28ce8331c7022a4b72ddef696b.jpg.webp'},
            {id: 8, name: 'Xiomi Black Shark 5 Pro', price: 25000, rating: 3.2, img:'https://c.dns-shop.ru/thumb/st4/fit/200/200/a1698c6e87c5e2d53ab65eee1e3830b2/6925207eefd964b47289ee583f7265edeae285f156bb59e97dd6f519f82220e5.jpg.webp'},
            {id: 9, name: 'Iphone 13 Pro', price: 25000, rating: 4.9, img: 'https://c.dns-shop.ru/thumb/st1/fit/200/200/3e6294794cd185e2a2083ca7a982d91a/c201023fee63375d614103f3eb86c77160656dae59094cd22a883302c5144fbc.jpg.webp'},
            {id: 10, name: 'Iphone 14 Pro', price: 25000, rating: 4.2, img: 'https://c.dns-shop.ru/thumb/st4/fit/200/200/4f8392e1fd2ffbc67e645bb7c78b622a/3012baa9bc23995289e498d33793b6007a246987cd6e5bd96dbd15aa6cd93c2c.jpg.webp'},
            {id: 11, name: 'Iphone 11', price: 25000, rating: 3.9, img: 'https://c.dns-shop.ru/thumb/st4/fit/200/200/5366e2ee9ba1e5e4ba24534b3d05fba2/f2a5c571cc2f904e82d8b879432702032b5400bb1b0c6caf3e7006ff2322613e.jpg.webp'},
            {id: 12, name: 'Iphone 12 Mini', price: 25000, rating: 4.5, img:'https://c.dns-shop.ru/thumb/st4/fit/200/200/032009030d2bc19363e21801347a142f/534489f34bc464e4cf68522999686645c9ac3ea0cca7faa03cef57480237d900.jpg.webp'},
            {id: 13, name: 'Samsung Galaxy A03s', price: 25000, rating: 4.3, img:'https://c.dns-shop.ru/thumb/st1/fit/200/200/2997459443b6884ad62fce576b5b4543/22bfd8f5b7a9ca508f33f5bacf376e692a4afdeb211cfdf08c7e0556de2e6d81.jpg.webp'},
            {id: 14, name: 'Infinix Note 30 Pro', price: 25000, rating: 4.8, img:'https://c.dns-shop.ru/thumb/st4/fit/200/200/78d2cf1a4b39ea13489e67d5344ef1f7/b1c4c5719033c1978d7403001d5dbddc6880a975002855b60399d9124be6769d.jpg.webp'},
            {id: 15, name: 'Samsung Galaxy S23 Ultra', price: 25000, rating: 4.1, img: 'https://c.dns-shop.ru/thumb/st1/fit/200/200/7ceab995a362f61f5b499cb95236d24a/e1d5367813d0400023a52ec8a4ebab52d160fb28ce8331c7022a4b72ddef696b.jpg.webp'},
            {id: 16, name: 'Xiomi Black Shark 5 Pro', price: 25000, rating: 3.2, img:'https://c.dns-shop.ru/thumb/st4/fit/200/200/a1698c6e87c5e2d53ab65eee1e3830b2/6925207eefd964b47289ee583f7265edeae285f156bb59e97dd6f519f82220e5.jpg.webp'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}