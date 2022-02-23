const Product = require('./model/product')
class FakeDb {
    constructor() {
        // ダミーデータ
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpeg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingText1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingText2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章',
                headingText3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
                },
                {
                coverImage: './assets/img/phone-cover.jpeg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'サンプルテキストだ1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingText1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingText2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章',
                headingText3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
                },
                {
                coverImage: './assets/img/phone-cover.jpeg',
                name: 'Phone Standard',
                price: 299,
                description: 'Very Normal Phone',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingText1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingText2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章',
                headingText3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
                },
                {
                coverImage: './assets/img/phone-cover.jpeg',
                name: 'Phone Special',
                price: 999,
                description: 'Special phone!',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingText1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingText2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章',
                headingText3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
                }
        ]
    }
    /**
     * DBデータを初期化
     */
    async initDb() {
        // DBデータを削除
        await this.clean();
        // DBにデータを追加
        this.pushProductsToDb();
    }
    /**
     * DBデータを削除
     */
    async clean() {
        // DBデータを削除
        await Product.deleteMany({});
    }
    /**
     * DBにデータを追加
     */
    pushProductsToDb() {
        this.products.forEach(product => {
            const newProduct = new Product(product);
            newProduct.save();
        });
    }
}

module.exports = FakeDb;
