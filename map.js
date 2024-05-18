function show(){



let images = [
    {
        images:"https://cdn.dotpe.in/longtail/store-items/8031567/42op0SEB.jpeg",
        rating:"4.1",
        p_price:"7999",
        p_brand:"Fossil",
        shop_name:"flipkart"
    },

    {
        images:"https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2021/07/Best-Fossil-Watches.jpg",
        rating:"4.5",
        p_price:"11999",
        p_brand:"Fossil",
        shop_name:"flipkart"
    },

    {
        images:"https://fossil.scene7.com/is/image/FossilPartners/ME3234_9L?$sfcc_lifestyle_large$",
        rating:"4.8",
        p_price:"12890",
        p_brand:"Fossil",
        shop_name:"flipkart"
    },
    {
        images:"https://rukminim2.flixcart.com/image/850/1000/kfyasnk0/smartwatch/t/z/x/sm-r800nzsainu-sm-r800nzsiinu-android-ios-samsung-original-imafwanythasubsq.jpeg?q=90",
        rating:"4.5",
        p_price:"7999",
        p_brand:"Samsung",
        shop_name:"flipkart"
    },
    {
        images:"https://cdn.opstatics.com/store/20170907/assets/images/events/2021/03/watches/en/common/1920/style/style-1.png",
        rating:"4.5",
        p_price:"5499",
        p_brand:"oneplus",
        shop_name:"flipkart"
    },
    {
        images:"https://qph.cf2.quoracdn.net/main-qimg-c8ae9cc14bd521d7e971e8195df1be8e-lq",
        rating:"4.6",
        p_price:"21999",
        p_brand:"Luxury",
        shop_name:"flipkart"
    },
    {
        images:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT653_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR_GEO_IN?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VHdUV3VJeUQyYW5oUlVUN3ZHS1VsL3Z4OU1ucmxYekw5aGF6a2ZZcG9hazdPN2hFakIxbjdEcTdvSm41NlVxWjY4QUVCdUdBMlBPcFgrL3RBcVB1cmY5akxmSjBzTThIaWphQnAvU3pXTzIxdHhVWFZxZklidU5BYllKNWFXZGl2S1B4dHJnZWVOenUzMmROdk9lOEdvSk43K25VYm5JaE5XMFJ6MEt5SVUydE13ZlhvMEpDZW1JRkhPN0RCZ0xWV1A4WkJQQ3BvYXllL2FBdjdLS29NZz09",
        rating:"4.9",
        p_price:"89999",
        p_brand:"Apple",
        shop_name:"flipkart"
    },
    {
        images:"https://m.media-amazon.com/images/I/810JR81LIsL._SX679_.jpg",
        rating:"4.8",
        p_price:"41999",
        p_brand:"oneplus",
        shop_name:"flipkart"
    },
    {
        images:"https://m.media-amazon.com/images/I/71XMTLtZd5L._SL1500_.jpg",
        rating:"4.8",
        p_price:"329999",
        p_brand:"oneplus",
        shop_name:"flipkart"
    },
];
let show = document.getElementById('card');

show.innerHTML = images.map(cards => `<div>
<img width="300px" src="${cards.images}" alt="">
<div>${cards.rating} </div>
<div>${cards.p_price}</div>
<div>${cards.p_brand}</div>
<div> ${cards.shop_name}</div>
</div>`).join(" ");

};