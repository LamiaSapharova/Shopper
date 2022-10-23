const mongoose = require('mongoose')
var Product = require('../schemas/product/productSchema');

let tshirt = mongoose.Types.ObjectId("6312d49b070f5d74721e81b8");
let shirt = mongoose.Types.ObjectId("634d85fdc87926f35b69f661");
let trousers = mongoose.Types.ObjectId("634d86901106a3819d729984");
let jacket = mongoose.Types.ObjectId("634d86f37271615755411e7f");



const men = [
    {
        name: 'Erkek Yuvarlak Yaka Örme T-shirt',
        desc: "Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır. Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur",
        features: {
            armType: 'short',
            style: 'daily'
        },
        categories: [mongoose.Types.ObjectId('6311f4d27512f7ab2629f70f'), tshirt],
        price: 20,
        inventory: [
            {
                color: 'white',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty234/product/media/images/20211110/19/174011228/302960895/1/1_org_zoom.jpg",

                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'blue',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty523/product/media/images/20220905/12/169349850/559240493/1/1_org_zoom.jpg",

                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'green',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty405/product/media/images/20220422/11/96213019/455688520/1/1_org_zoom.jpg",

                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            }
        ]
    },
    {
        name: 'V Yaka T-shırt',
        desc: "İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır. Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur",
        features: {
            material: 'cotton',
            armType: 'short',
            style: 'daily'
        },
        categories: [mongoose.Types.ObjectId('6311f4d27512f7ab2629f70f'), tshirt],
        price: 25,
        inventory: [
            {
                color: 'white',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty4/product/media/images/20200509/14/913007/70615060/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty4/product/media/images/20200509/14/913007/70615060/2/2_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty4/product/media/images/20200509/14/913007/70615060/4/4_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
        ]
    },
    {
        name: 'Bisiklet Yaka Slim Fit Süprem Tişört',
        desc: ":%100 Pamuk Hafif, kolay kırışmayan, nefes alabilen ve terletmeyen özel kumaşıyla süprem tişörtler, bunaltıcı havaların bir numaralı kurtarıcısı. Gardırobunuza sürekli kullanılabilir bir parça eklemek istiyorsanız, slim fit süprem tişörtler yaz ve kış kombinlerinin anahtar parçalarından biri. Modunuza göre ister sweatpantlerle isterseniz denim veya spor pantolonlarla kullanarak, gün boyu rahat ve çabasız bir görünüm oluşturabilirsiniz. Manken Ölçüleri: 50/M Boy: 188 cm Göğüs: 98 cm Bel: 85 cm Basen: 99 cm",
        features: {
            material: 'cotton',
            armType: 'short',
            style: 'daily'
        },
        categories: [mongoose.Types.ObjectId('6311f4d27512f7ab2629f70f'), tshirt],
        price: 18.99,
        inventory: [
            {
                color: 'green',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty527/product/media/images/20220908/16/170853172/496842480/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty525/product/media/images/20220908/16/170853172/496842480/2/2_org_zoom.jpg",

                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'blue',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty335/product/media/images/20220217/18/51974842/390035608/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty334/product/media/images/20220217/18/51974842/390035608/2/2_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'black',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty347/product/media/images/20220301/14/60611826/400348761/2/2_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty345/product/media/images/20220301/14/60611826/400348761/1/1_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            }

        ]
    },
    {
        name: 'Pamuklu Oxford Regular Fit Gömlek',
        desc: ":%100 Pamuk Hafif, kolay kırışmayan, nefes alabilen ve terletmeyen özel kumaşıyla süprem tişörtler, bunaltıcı havaların bir numaralı kurtarıcısı. Gardırobunuza sürekli kullanılabilir bir parça eklemek istiyorsanız, slim fit süprem tişörtler yaz ve kış kombinlerinin anahtar parçalarından biri. Modunuza göre ister sweatpantlerle isterseniz denim veya spor pantolonlarla kullanarak, gün boyu rahat ve çabasız bir görünüm oluşturabilirsiniz. Manken Ölçüleri: 50/M Boy: 188 cm Göğüs: 98 cm Bel: 85 cm Basen: 99 cm",
        features: {
            material: 'cotton',
            armType: 'long',
            style: 'daily'
        },
        categories: [mongoose.Types.ObjectId('6311f4d27512f7ab2629f70f'), shirt],
        price: 28,
        inventory: [
            {
                color: 'blue',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty558/product/media/images/20221011/14/191106978/101732118/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty560/product/media/images/20221011/14/191106978/101732118/2/2_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty559/product/media/images/20221011/14/191106978/101732118/4/4_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'black',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty558/product/media/images/20221011/23/191410372/102773101/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty558/product/media/images/20221011/23/191410372/102773101/5/5_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty559/product/media/images/20221011/23/191410372/102773101/4/4_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'white',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty559/product/media/images/20221011/13/191100698/112337040/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty560/product/media/images/20221011/13/191100698/112337040/2/2_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty559/product/media/images/20221011/13/191100698/112337040/4/4_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            }

        ]
    },
    {
        name: 'US Polo Assn Erkek Gömlek',
        desc: ":%100 Pamuk Hafif, kolay kırışmayan, nefes alabilen ve terletmeyen özel kumaşıyla süprem tişörtler, bunaltıcı havaların bir numaralı kurtarıcısı. Gardırobunuza sürekli kullanılabilir bir parça eklemek istiyorsanız, slim fit süprem tişörtler yaz ve kış kombinlerinin anahtar parçalarından biri. Modunuza göre ister sweatpantlerle isterseniz denim veya spor pantolonlarla kullanarak, gün boyu rahat ve çabasız bir görünüm oluşturabilirsiniz. Manken Ölçüleri: 50/M Boy: 188 cm Göğüs: 98 cm Bel: 85 cm Basen: 99 cm",
        features: {
            material: 'cotton',
            armType: 'long',
            style: 'daily'
        },
        categories: [mongoose.Types.ObjectId('6311f4d27512f7ab2629f70f'), shirt],
        price: 28,
        inventory: [
            {
                color: 'blue',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty60/product/media/images/20210125/14/56989354/64657343/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty59/product/media/images/20210125/14/56989354/64657343/2/2_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty60/product/media/images/20210125/14/56989354/64657343/3/3_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'black',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty69/product/media/images/20210326/11/75424366/63041404/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty81/product/media/images/20210326/11/75424366/63041404/2/2_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty51/product/media/images/20210326/11/75424366/63041404/3/3_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'white',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty59/product/media/images/20210121/14/55810797/79444817/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty60/product/media/images/20210121/14/55810797/79444817/3/3_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty59/product/media/images/20210121/14/55810797/79444817/4/4_org_zoom.jpg",
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            }


        ]
    },
    {
        name: 'Buratti Erkek Siyah Çift Cepli Fermuarlı Slim Fit Kışlık Gömlek',
        desc: "Marka : Buratti Model : Gömlek Sezon : Sonbahar/Kış Materyal : % 100 Akrilik Yaka Bilgisi : Düz YakaCep Bilgisi : Çift CepliKapama Bilgisi : Fermuarlı Kol Bilgisi : Uzun Kol Kalıp Bilgisi : Slim FitManken Ölçüsü : Kilo : 82 kg / Boy : 1.84 cm / Göğüs : 98 cm / Bel : 78 cm / Basen : 95 cm / Beden : LYERLİ ÜRETİM",
        features: {
            material: 'cotton',
            armType: 'long',
            style: 'daily'
        },
        categories: [mongoose.Types.ObjectId('6311f4d27512f7ab2629f70f'), shirt],
        price: 31,
        inventory: [
            {
                color: 'black',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty533/product/media/images/20220913/14/174835996/86790252/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty533/product/media/images/20220913/14/174835996/86790252/3/3_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty532/product/media/images/20220913/14/174835996/86790252/6/6_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'grey',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty39/product/media/images/20201223/17/41256570/87005527/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty38/product/media/images/20201223/17/41256570/87005527/2/2_org_zoom.jpg",

                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            }

        ]
    },
    {
        name: 'GRIMELANGE Cargo Comfort  Pantolon',
        desc: "Modelin Ölçüleri: Boy: 1.88 cm. Göğüs: 98 Bel: 82 Kalça: 92 cm''dir. Kumaş kalitesi: %98 Pamuk %2 Likra Mankenin üzerindeki ürün L bedendir. Regular Fit: Rahat, vücudu sarmayan bir kesimdir. Kalıp olarak slim fite göre biraz daha bolluk payı vardır. Stüdyo ışıklarından dolayı fotoğraf ve ürün arasında tolerans halinde renk farklılığı görülebilir.",
        features: {
            material: 'cotton',

            style: 'relaxed'
        },
        categories: [mongoose.Types.ObjectId('6311f4d27512f7ab2629f70f'), trousers],
        price: 35,
        inventory: [
            {
                color: 'green',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty566/product/media/images/20221016/15/194991511/455794530/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty566/product/media/images/20221016/15/194991511/455794530/2/2_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'black',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty555/product/media/images/20221009/21/190099318/438979283/1/1_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            }


        ]
    },
    {
        name: 'wamoss Erkek Gri Jogger Pantolon ',
        desc: "Genel Yıkama ve Kullanma Talimatları • El isi ve boncuklu ürünler hassas programda tersten yıkanmalıdır • Baskılı ürünler zamanla dökülebilir • Yıkamada ürünü bozmamak için 30 C'yi asmayınız • Ürünü yıkarken yıkama talımatına uygun olarak yıkayınız • Renkli ürünlerde uygun deterjan kullanınız. • Denim olan ürünler ve koyu renkli ürünler açık renkli diğer ürünler ile yıkanırken boyayabilir. Birlikte yıkamayınız • Giysileri kuruturken direkt güneş ısığına maruz bırakmayınız",
        features: {
            material: 'cotton',

            style: 'relaxed'
        },
        categories: [mongoose.Types.ObjectId('6311f4d27512f7ab2629f70f'), trousers],
        price: 28,
        inventory: [
            {
                color: 'grey',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty489/product/media/images/20220726/21/150401509/136575834/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty343/product/media/images/20220301/11/60534315/159635028/2/2_org_zoom.jpg",

                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'black',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty520/product/media/images/20220831/18/167495429/184624408/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220831/18/167495429/184624408/2/2_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220831/18/167495429/184624408/3/3_org_zoom.jpg",

                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            }

        ]
    },
    {
        name: 'TRENDYOL MAN Antrasit Erkek Nervürlü Denim Ceket ',
        desc: "Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır.",
        features: {
            material: 'cotton',

            style: 'relaxed'
        },
        categories: [mongoose.Types.ObjectId('6311f4d27512f7ab2629f70f'), jacket],
        price: 28,
        inventory: [
            {
                color: 'black',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty465/product/media/images/20220701/14/133392617/195977769/6/6_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty467/product/media/images/20220701/14/133392617/195977769/2/2_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            {
                color: 'blue',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty318/product/media/images/20220202/19/42236787/126612174/3/3_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty320/product/media/images/20220202/19/42236787/126612174/5/5_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            
        ]
    },
    {
        name: 'Serseri Jeans Koyu Haki Erkek Kot Ceket',
        desc: "Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır.",
        features: {
            material: 'cotton',

            style: 'relaxed'
        },
        categories: [mongoose.Types.ObjectId('6311f4d27512f7ab2629f70f'), jacket],
        price: 28,
        inventory: [
            {
                color: 'green',
                images: [
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty203/product/media/images/20211019/9/151970479/268173875/1/1_org_zoom.jpg",
                    "https://cdn.dsmcdn.com/mnresize/1200/1800/ty11/product/media/images/20200912/20/10537570/86266056/0/0_org_zoom.jpg"
                ],
                sizeAndCount: [
                    ['s', 50],
                    ['m', 50],
                    ['l', 50],
                    ['xl', 50]
                ]
            },
            
        ]
    }
]


// Product.insertMany(men).then(function(){
//     console.log("Data inserted")  // Success
// }).catch(function(error){
//     console.log(error)      // Failure
// });



async function savedata(i){
    if(i>=10){
        return;
    }
    let p = new Product(men[i]);
    await p.save();

    savedata(i+1);
}
savedata(0);