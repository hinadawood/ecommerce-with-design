
const getCatalogData = () => {
  //access the database to get data
  const catalog = [
  {
    id: 1,
    name: 'A2 Full Cream Milk 1l',
    price: '2.50',
    stockAvailable: true,
    image: 'A2FullCreamMilk.png',
    brand: 'A2'
  },
  {
    id: 2,
    name: 'Dairy Farmer Full Cream Milk 1l',
    price: '3.00',
    stockAvailable: true,
    image: 'DairyFarmersFullCreamMilk.png',
    brand: 'Lion'
  },
  {
    id: 3,
    name: 'Woolworths Lite Milk',
    price: '1.50',
    stockAvailable: true,
    image: 'WoolworthsLiteMilk.png',
    isPopular: true,
    brand: 'Woolworth'
  },
  {
    id: 4,
    name: 'Nestle Condensed Milk',
    price: '2.50',
    stockAvailable: false,
    image: 'NestleCondensedMilk.png',
    brand: 'Nestle'
  },
  {
    id: 5,
    name: 'Pop Tops Apple Drink 250ml x6 pack',
    price: '4.90',
    stockAvailable: true,
    image: 'PopTopsApple.png',
    isCommon: true,
    brand: 'Pop Tops'
  },
  {
    id: 6,
    name: 'Golden Circle Mango Nectar Juice',
    price: '3.00',
    stockAvailable: true,
    image: 'GoldenCircleMango.png',
    brand: 'Golden Circle'
  },
  {
    id: 7,
    name: 'Daily Juice Pop Top Tropical',
    price: '5.00',
    stockAvailable: true,
    image: 'DailyJuicePopTopTropical.png',
    brand: 'Daily Juice'
  },
  {
    id: 8,
    name: 'Fuze Ice Tea Mango 1.25l',
    price: '2.60',
    stockAvailable: true,
    image: 'FuzeIceTea.png',
    isPopular: true,
    brand: 'Fuze'
  },
  {
    id: 9,
    name: 'Moccona Mixes Cappuccino 10 pack',
    price: '4.50',
    stockAvailable: true,
    image: 'MocconaMixes.png',
    brand: 'Moccona'
  },
  {
    id: 10,
    name: 'Maximus Sports Drink Red 1l',
    price: '2.15',
    stockAvailable: true,
    image: 'MaximusSportsDrink.png',
    brand: 'Maximus'
  },
  {
    id: 11,
    name: 'Lindt Hot Chocolate Flakes Milk 210g',
    price: '7.50',
    stockAvailable: true,
    image: 'LindtHotChocolate.png',
    isCommon: true,
    brand: 'Lindt'
  },
  {
    id: 12,
    name: 'Powerade Berry Ice 1.5l',
    price: '3.90',
    stockAvailable: true,
    image: 'PoweradeBerryIce.png',
    brand: 'Powerade'
  },
  {
    id: 13,
    name: 'Red Bull Energy Drink Sugar Free 4x250ml',
    price: 10.85,
    stockAvailable: true,
    image: 'RedBullEnergyDrink.png',
    brand: 'Red Bull'
  },
  {
    id: 14,
    name: 'Carlton Draught Lager Stubbies 24x375ml case',
    price: '55.00',
    stockAvailable: true,
    image: 'CarltonDraughtLager.png',
    brand: 'Carlton'
  },
  {
    id: 15,
    name: 'Heineken Premium Lager Stubbies 6x330ml pack',
    price: '21.50',
    stockAvailable: true,
    image: 'HeinekenPremium.png',
    isPopular: true,
    brand: 'Heineken'
  },
  {
    id: 16,
    name: 'Lipton Ice Green Team Citrus 500ml',
    price: '1.90',
    stockAvailable: false,
    image: 'LiptonIceGreenTea.png',
    brand: 'Lipton'
  },
  {
    id: 17,
    name: 'Western Star Original',
    price: '5.00',
    stockAvailable: true,
    image: 'WesternStarOriginal.png',
    brand: 'Western Star'
  },
  {
    id: 18,
    name: 'Devondale Dairy Soft Butter Blend 500g',
    price: '4.50',
    stockAvailable: true,
    image: 'DairySoft.png',
    brand: 'Devondale'
  },
  {
    id: 19,
    name: 'Schlossgold Non Alcoholic Beer 6x500ml',
    price: '11.65',
    stockAvailable: true,
    image: 'Schlossgold.png',
    brand: 'Schlossgold'
  },
  {
    id: 20,
    name: 'Almond Breeze Unsweetened Almond Milk',
    price: '1.50',
    stockAvailable: true,
    image: 'AlmondBreeze.png',
    brand: 'Breeze'
  },
  {
    id: 21,
    name: 'Woolworths Chocolate Milk',
    price: '3.60',
    stockAvailable: true,
    image: 'WoolworthsChocolateMilk.png',
    brand: 'Woolworth'
  },
  {
    id: 22,
    name: 'Devondale Moo Chocolate Milk 6x200ml',
    price: '4.80',
    stockAvailable: true,
    image: 'DevondaleMoo.png',
    brand: 'Devondale'
  },
  {
    id: 23,
    name: 'Nesquik Strawberry Flavour 250g',
    price: '2.80',
    stockAvailable: true,
    image: 'Nesquik.png',
    isCommon: true,
    brand: 'Nestle'
  },
  {
    id: 24,
    name: 'Oak Flavoured Milk Strawberry 500ml',
    price: '3.00',
    stockAvailable: true,
    image: 'Oak.png',
    brand: 'Oak'
  },
  {
    id: 25,
    name: 'Sustagen Vanilla Flavour 550g',
    price: '9.50',
    stockAvailable: true,
    image: 'Sustagen.png',
    brand: 'Sustagen'
  },
  {
    id: 26,
    name: 'Nestle Milo Plant Based 395g',
    price: '7.00',
    stockAvailable: true,
    image: 'Milo.png',
    brand: 'Milo'
  },
  {
    id: 27,
    name: 'Cadbury Drinking Chocolate 400g',
    price: '4.00',
    stockAvailable: true,
    image: 'Cadbury.png',
    brand: 'Cadbury'
  },
  {
    id: 28,
    name: 'Nescafe Blend 43 Instant Coffee 150g',
    price: '9.40',
    stockAvailable: true,
    image: 'NescafeBlend.png',
    isCommon: true,
    brand: 'Nestle'
  },
  {
    id: 29,
    name: 'Moccona Freeze Dried Instant Coffee Classic Medium Roast 400g',
    price: '16.00',
    stockAvailable: true,
    image: 'MocconaFreeze.png',
    brand: 'Moccona'
  },
  {
    id: 30,
    name: 'Nescafe Coffee Mixer Sachets Cappuccino 10 pack',
    price: '6.30',
    stockAvailable: true,
    image: 'NescafeCoffee.png',
    isPopular: true,
    brand: 'Nestle'
  },
  {
    id: 31,
    name: 'Lavazza Prontissimo Intenso Premium Instant Coffee 95g',
    price: '10.00',
    stockAvailable: true,
    image: 'Lavazza.png',
    brand: 'Lavazza'
  },
  {
    id: 32,
    name: 'Lavazza Qualita Oro Coffee Beans 1kg',
    price: '21.00',
    stockAvailable: true,
    image: 'LavazzaBeans.png',
    brand: 'Lavazza'
  },
  {
    id: 33,
    name: 'Campos Superior Coffee Beans 250g',
    price: '14.00',
    stockAvailable: true,
    image: 'Campos.png',
    brand: 'Campos'
  },
  {
    id: 34,
    name: 'Vittoria Italian Ground 200g',
    price: '4.00',
    stockAvailable: true,
    image: 'Vittoria.png',
    brand: 'Vittoria'
  },
  {
    id: 35,
    name: 'Dilmah Premium Quality Loose Leaf Tea 250g',
    price: '5.30',
    stockAvailable: false,
    image: 'Dilmah.png',
    brand: 'Dilmah'
  },
  {
    id: 36,
    name: 'Tetley Extra Strong Tea Bags 100 pack',
    price: '4.00',
    stockAvailable: true,
    image: 'Tetley.png',
    brand: 'Tetley'
  },
  {
    id: 37,
    name: 'Mount Franklin Lightly Sparkling Raspberry 10x375ml',
    price: '6.87',
    stockAvailable: true,
    image: 'Franklin.png',
    brand: 'Franklin'
  },
  {
    id: 38,
    name: 'Santa Vittoria Sparking Mineral Water 6x750ml',
    price: '8.40',
    stockAvailable: true,
    image: 'Santa.png',
    brand: 'Vittoria'
  },
  {
    id: 39,
    name: 'H2coco Pure Pink Coconut Water 750ml',
    price: '5.15',
    stockAvailable: true,
    image: 'H2coco.png',
    brand: 'H2'
  },
  {
    id: 40,
    name: 'Coca-cola Bottle 2l',
    price: '2.85',
    stockAvailable: true,
    image: 'Cocacola.png',
    isPopular: true,
    brand: 'Cocacola'
  },
]
  return catalog;
}

module.exports = { getCatalogData }
