import { NextApiRequest, NextApiResponse } from "next"

const products = [
  {
    "id": "123897917321239",
    "sku": "nkl-2314",
    "name": "Lennox - Black Shadow",
    "type": "pant",
    "description": "Lennox is our signature slim fit, fitted through the thigh.",
    "color": "black",
    "price": 80.00
  },
  {
    "id": "123897917321240",
    "sku": "njks-3893",
    "name": "High Rise Laurel Canyon",
    "type": "pant",
    "description": "The High Rise Laurel Canyon is a vintage PAIGE style that has made a big comeback.",
    "color": "white",
    "price": 225.00
  },
  {
    "id": "123897917321241",
    "sku": "nsks-3728",
    "name": "The Nines - Collection Genevieve",
    "type": "pant",
    "description": "The Nines is our everyday elevated collection that allows you to feel confident, empowered and dressed to the nines, no matter what",
    "color": "white",
    "price": 269.00
  },
  {
    "id": "123897917321242",
    "sku": "dkwl-8394",
    "name": "Anessa Short - Vintage Moss Taupe",
    "type": "short",
    "description": "Anessa is the chic, polished short that will complete your warm weather wardrobe.",
    "color": "brown",
    "price": 179.00
  },
  {
    "id": "123897917321243",
    "sku": "djsl-9382",
    "name": "Dani Short - Lived in Crisp White",
    "type": "short",
    "description": "Modern meets vintage with the Dani high-waisted short. This effortlessly cool style is designed with an ultra high-rise and slightly A-line silhouette.",
    "color": "white",
    "price": 169.00
  },
  {
    "id": "123897917321244",
    "sku": "dksl-0293",
    "name": "Mayslie Dress - Black",
    "type": "dress",
    "description": "An easy, everyday dress for those moments when you want to look a little more polished.",
    "color": "black",
    "price": 229.00
  },
  {
    "id": "123897917321245",
    "sku": "kdsj-3782",
    "name": "Mayslie Dress - Cactus",
    "type": "dress",
    "description": "An easy, everyday dress for those moments when you want to look a little more polished.",
    "color": "green",
    "price": 229.00
  },
  {
    "id": "123897917321246",
    "sku": "jdwk-8377",
    "name": "Romy - Vintage Ivy Green",
    "type": "pant",
    "description": "Trouser-dressing continues to trend and we love this easy-going, yet elevated version.",
    "color": "green",
    "price": 209.00
  },
  {
    "id": "123897917321247",
    "sku": "jjdk-3663",
    "name": "Amber - Seawater Distressed",
    "type": "pant",
    "description": "Your new everyday jean. Crafted in PAIGE Vintage denim with a mid-rise waist, this straight leg pair creates a streamlined look in the perfect medium blue wash with natural distressing",
    "color": "blue",
    "price": 219.00
  },
  {
    "id": "223897917321247",
    "sku": "kdkk-3829",
    "name": "Mayslie Short - Vintage Pink Blush",
    "type": "short",
    "description": "This adorable, blush hued short is designed with a mid-rise, slightly relaxed silhouette and is finished with utility patch pockets and a casual frayed hem.",
    "color": "pink",
    "price": 169.00
  },
  {
    "id": "123897917321248",
    "sku": "dywh-3876",
    "name": "Hoxton Ankle - Lana",
    "type": "pant",
    "description": "Always elevated and perfect for everyday wear, this high-rise ankle-length skinny comes in one of our bestselling dark washes of all time.",
    "color": "blue",
    "price": 189.00
  },
  {
    "id": "123897917321249",
    "sku": "twgs-3442",
    "name": "Rosalee Dress - White",
    "type": "dress",
    "description": "The Rosalee Dress is our founder's favorite dress of the season thanks to all of it's feminine design details.",
    "color": "white",
    "price": 209.00
  },
  {
    "id": "123897917321250",
    "sku": "yetr-9846",
    "name": "Alana Flat - Ochre Leather",
    "type": "shoe",
    "description": "Alana is the perfect everyday flat for spring and summer.",
    "color": "brown",
    "price": 66.90
  },
  {
    "id": "123897917321251",
    "sku": "jsyy-3844",
    "name": "Lilah Boot - Black Leather",
    "type": "shoe",
    "description": "Meet Lilah, your new go-to warm weather bootie.",
    "color": "black",
    "price": 250.90
  },
  {
    "id": "123897917321252",
    "sku": "ueii-3009",
    "name": "Delia Sandal - Black Leather",
    "type": "shoe",
    "description": "Flat sandals are an off-duty staple and our new Delia sandal is the feminine pair you’ll be living in this spring and summer.",
    "color": "black",
    "price": 159.90
  },
  {
    "id": "123897917321253",
    "sku": "hddh-2098",
    "name": "Kenneth Crew - Deep Anchor",
    "type": "shirt",
    "description": "Made with supremely soft cotton slub jersey in classic navy, this crew neck tee features a single chest pocket and a longer torso with a curved hem.",
    "color": "blue",
    "price": 79.00
  },
  {
    "id": "123897917321254",
    "sku": "dhhq-2003",
    "name": "Landon Shirt - Porcelain Dawn",
    "type": "shirt",
    "description": "Made from lightweight and breathable rayon yarns, the Landon Shirt is your new favorite shirt in an elevated, blue geometric print.",
    "color": "blue",
    "price": 149.00
  },
  {
    "id": "123897917321255",
    "sku": "dhhw-2334",
    "name": "Adam - Tortoise",
    "type": "eyewear",
    "description": "We're proud to introduce our first-ever, sustainable eyewear collection for men and women.",
    "color": "brown",
    "price": 250.00
  },
  {
    "id": "123897917321256",
    "sku": "sdde-3884",
    "name": "Normandie - Burnett",
    "type": "pant",
    "description": "Our tried-and-true straight fit comes in an easy light blue wash that feels fresh for the season.",
    "color": "blue",
    "price": 199.00
  },
  {
    "id": "123897917321257",
    "sku": "sdde-3884",
    "name": "Normandie - Burnett",
    "type": "pant",
    "description": "Our tried-and-true straight fit comes in an easy light blue wash that feels fresh for the season.",
    "color": "blue",
    "price": 199.00
  },
  {
    "id": "123897917321258",
    "sku": "djjw-839",
    "name": "Cash Crew Neck Tee - Fresh White",
    "type": "shirt",
    "description": "This is the perfect everyday white tee that will last for years.",
    "color": "white",
    "price": 69.00
  }
];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products);
}

export default handler;
