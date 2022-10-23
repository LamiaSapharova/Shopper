var Product = require('../schemas/product/productSchema');
var Review  = require('../schemas/product/reviewSchema');
const mongoose = require('mongoose');
const Discount = require('../schemas/product/discountSchema');
const Categories = require('../schemas/product/productCategorySchema');
var produts = [{name:'Bisiklet Yaka Erkek T-shirt',
desc: ["Rebuwo bisiklet yaka erkek t-shirt aradığınız tüm özelliklere sahip. Rahat, esnek, yumuşak, hafif ve kırışmayan kumaşı ter tutmaz ve hızlı kurur. Fit kalıba sahiptir. Tasarımı ve rahat kalıbı görünümünüze spor şıklığı katar. Egzersiz esnasında veya günlük hayatta kullanıma uygundur. Renk Çeşitleri: Beyaz, Siyah Ürün İçeriği: %100 polyester kumaştan üretilmiştir. Yıkama Önerileri: 40° sıcaklıkta, ters çevirerek benzer renklerle ağartıcı kullanmadan yıkayınız. Ütüleme: Ürünü ters çevirerek düşük ısıda ütüleyiniz. Türkiye’de üretilmiştir.","Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.","Kampanya fiyatından satılmak üzere 10 adetten fazla stok sunulmuştur.","İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.","İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.","Sponsorlu ürünler reklam niteliğinde olup satıcıları tarafından öne çıkartılmaktadır."],
features: {
    material: "cotton"
},
categories:['men','tshirt'],
inventory:[{
    color: 'black',
    images:['https://cdn.dsmcdn.com/ty202/product/media/images/20211018/19/151812492/267947573/0/0_org_zoom.jpg',
"https://cdn.dsmcdn.com/ty203/product/media/images/20211018/19/151812492/267947573/1/1_org_zoom.jpg"],
sizeAndCount:[['s',10],['m',10],['l',10],['xl',10]]
},
{
    color: 'white',
    images:["https://cdn.dsmcdn.com/ty203/product/media/images/20211018/19/151812338/267947364/0/0_org_zoom.jpg","https://cdn.dsmcdn.com/ty202/product/media/images/20211018/19/151812338/267947364/1/1_org_zoom.jpg"],
sizeAndCount:[['s',10],['m',10],['l',10],['xl',10]] 
}
],
price: 50,
brand_id: mongoose.Types.ObjectId('63070905bb1c0dbf0940cc03'),
reviews: []
}];

async function savepr(i,arr){
    if(i>= arr.length) return
    prod = new Product(arr[i]);
   await prod.save((e)=>{
        if(e){console.log(e)}
        else{
            i = i+1;
            savepr(i,arr)}
    })
}
let i = 0;
let rev = new Review({
    author: mongoose.Types.ObjectId('63063a9de1666c2716c1d082'),
    star: 5,
    header:'good',
    body:'cox yaxsidi'
});

let rev1 = new Review({
    author: mongoose.Types.ObjectId('63063a9de1666c2716c1d082'),
    star: 4,
    header:'good',
    body:'cox yaxsidi'
});

let disc = new Discount({
    name:'Nihadin hediyyesi',
    desc: 'Menden size pay',
    discount_percent: 30,
    active: true
});

let disc1 = new Discount({
    name:'Saxta ',
    desc: 'Bu qeder pay olar?',
    discount_percent: 10,
    active: false
});
let cate = new Categories({name: 'jacket',desc: 'jacketdir'})
cate.save()