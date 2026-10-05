/* ============================================================
   BRISK CAFÉ — script.js  v4 (Premium Art Direction)
   Vanilla JS · Pure Menu Data Source of Truth
   ============================================================ */

'use strict';

/* ── Disable browser scroll restoration so every page load starts at top ── */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

/* ── Strip any hash from URL on load (prevents jump-to-anchor on refresh) ── */
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

/* ──────────────────────────────────────────────────────────
   MENU DATA — SOURCE OF TRUTH
   All prices in EGP
   ────────────────────────────────────────────────────────── */

const menuData = {

  hotCoffee: [
    { id: 'hc1', name: 'Espresso', desc: 'Concentrated shot of pure, bold coffee essence', prices: { single: 65, double: 75 }, img: 'Espresso.jpg' },
    { id: 'hc2', name: 'Macchiato', desc: 'Espresso marked with a dash of velvety milk foam', prices: { double: 89 }, img: 'Macchiato.jpg' },
    { id: 'hc4', name: 'Cappuccino', desc: 'Classic balance of espresso, milk & thick foam', prices: { medium: 79, large: 89 }, img: 'Cappuccino.jpg' },
    { id: 'hc5', name: 'Latte', desc: 'Smooth espresso with silky steamed milk', prices: { medium: 79, large: 89 }, img: 'Hot Latte.jpg' },
    { id: 'hc6', name: 'Flat White', desc: 'Velvety microfoam over a double ristretto', prices: { medium: 79, large: 89 }, img: 'Flat White.jpg' },
    { id: 'hc7', name: 'Cortado', desc: 'Equal parts espresso and steamed milk', prices: { medium: 79, large: 89 }, img: 'Cortado.jpg' },
    { id: 'hc8', name: 'Mocha', desc: 'Espresso with rich chocolate and steamed milk', prices: { medium: 109, large: 119 }, img: 'Hot Mocha.jpg' },
    { id: 'hc9', name: 'White Mocha', desc: 'White chocolate bliss with smooth espresso', prices: { medium: 109, large: 119 }, img: 'Hot White Mocha.jpg' },
    { id: 'hc10', name: 'Nutella Coffee', desc: 'Espresso meets creamy hazelnut spread', prices: { medium: 109, large: 119 }, img: 'Nutella Coffee.jpg' },
    { id: 'hc11', name: 'Hot Spanish Latte', desc: 'Sweetened condensed milk with rich espresso', prices: { medium: 119, large: 129 }, img: 'Spanish Latte.jpg' },
    { id: 'hc13', name: 'Hot Americano', desc: 'Espresso pulled long with hot water', prices: { medium: 75, large: 85 }, img: 'Hot Americano.jpg' }
  ],

  iceCoffee: [
    { id: 'ic1', name: 'Ice Latte', desc: 'Chilled espresso over fresh milk and ice', prices: { medium: 119, large: 129 }, img: 'Ice Latte.jpg' },
    { id: 'ic3', name: 'Ice Americano', desc: 'Chilled long espresso with a clean finish', prices: { medium: 110, large: 120 }, img: 'Ice Americano.jpg' },
    { id: 'ic4', name: 'Ice Mocha', desc: 'Cold chocolate coffee — rich and refreshing', prices: { medium: 129, large: 149 }, img: 'Ice Mocha.jpg' },
    { id: 'ic5', name: 'Ice Caramel Macchiato', desc: 'Layered caramel, milk, espresso over ice', prices: { medium: 129, large: 139 }, img: 'Ice Caramel Macchiato.jpg' },
    { id: 'ic6', name: 'Ice Spanish Latte', desc: 'Condensed milk and espresso, refreshingly cold', prices: { medium: 129, large: 139 }, img: 'Ice Spanish Latte.jpg' },
    { id: 'ic7', name: 'Ice White Mocha', desc: 'Silky white chocolate coffee on the rocks', prices: { medium: 139, large: 149 }, img: 'Ice White Mocha.jpg' },
    { id: 'ic8', name: 'Ice Chicken White Mocha', desc: 'A BRISK signature blend — bold and creamy', prices: { medium: 139, large: 149 }, img: 'Ice-Chicken-White-Mocha.jpg' }
  ],

  warmDrinks: [
    { id: 'wd1', name: 'Hot Cider', desc: 'Spiced apple warmth in every sip', prices: { medium: 99, large: 114 }, img: 'Hot Cider.jpg' },
    { id: 'wd2', name: 'Hot Chocolate', desc: 'Velvety premium chocolate, a cup of pure comfort', prices: { medium: 140, large: 170 }, img: 'Hot Chocolate.jpg' }
  ],

  mojito: [
    { id: 'mj1', name: 'Apple Mojito', desc: 'Crisp apple with fresh mint and lemon', prices: { medium: 109, large: 120 }, img: 'Apple Mojito.jpg' },
    { id: 'mj2', name: 'Strawberry Mojito', desc: 'Sweet strawberry bursting with cool mint', prices: { medium: 109, large: 120 }, img: 'Strawberry Mojito.jpg' },
    { id: 'mj3', name: 'Pineapple Mojito', desc: 'Tropical sunshine with a minty finish', prices: { medium: 109, large: 120 }, img: 'Pineapple Mojito.jpg' },
    { id: 'mj4', name: 'Kiwi Mojito', desc: 'Tangy kiwi lifted by fresh mint', prices: { medium: 109, large: 120 }, img: 'Kiwi Mojito.jpg' },
    { id: 'mj5', name: 'Blueberry Mojito', desc: 'Antioxidant-rich berries with cooling mint', prices: { medium: 109, large: 120 }, img: 'Blueberry Mojito.jpg' },
    { id: 'mj6', name: 'Raspberry Mojito', desc: 'Tart raspberry balanced with lime and mint', prices: { medium: 109, large: 120 }, img: 'Raspberry Mojito.jpg' },
    { id: 'mj7', name: 'Mango Mojito', desc: 'Juicy tropical mango with a fresh mint twist', prices: { medium: 109, large: 120 }, img: 'Mango Mojito.jpg' },
    { id: 'mj8', name: 'Peach Mojito', desc: 'Sun-ripened peach with cool mint and lime', prices: { medium: 109, large: 120 }, img: 'Peach Mojito.jpg' },
    { id: 'mj9', name: 'Passion Fruit Mojito', desc: 'Exotic passion fruit with sparkling mint', prices: { medium: 114, large: 135 }, img: 'Passion Fruit Mojito.jpg' },
    { id: 'mj10', name: 'Mix Berry Mojito', desc: 'Wild berry medley bursting with freshness', prices: { medium: 119, large: 140 }, img: 'Mix Berry Mojito.jpg' },
    { id: 'mj11', name: 'Pink Lemon Mojito', desc: 'Blush pink lemonade with fresh crushed mint', prices: { medium: 119, large: 140 }, img: 'Pink Lemon Mojito.jpg' },
    { id: 'mj12', name: 'Blue Passion Mojito', desc: 'Passion fruit with electric blue butterfly pea', prices: { medium: 119, large: 140 }, img: 'Default.jpg' },
    { id: 'mj13', name: 'Pineapple Lemon Mint', desc: 'Bright citrus and tropical pineapple blend', prices: { medium: 124, large: 145 }, img: 'Pineapple Lemon Mint.jpg' },
    { id: 'mj14', name: 'Dark Soda', desc: 'Deep cola-style soda with mysterious depth', prices: { medium: 119, large: 129 }, img: 'Default.jpg' },
    { id: 'mj15', name: 'Blue Piña Colada', desc: 'Tropical coconut and pineapple, sky blue hue', prices: { medium: 119, large: 129 }, img: 'Default.jpg' },
    { id: 'mj16', name: 'Strawberry Cloud', desc: 'Dreamy strawberry with a frothy cloud top', prices: { medium: 119, large: 129 }, img: 'Default.jpg' },
    { id: 'mj17', name: 'Blue Mars', desc: 'A celestial blend of blue citrus and soda', prices: { medium: 124, large: 145 }, img: 'Default.jpg' }
  ],

  smoothies: [
    { id: 'sm1', name: 'Mango Smoothie', desc: 'Pure tropical mango, thick and vibrant', prices: { medium: 114, large: 124 }, img: 'Mango Smoothie.jpg' },
    { id: 'sm2', name: 'Strawberry Smoothie', desc: 'Farm-fresh strawberries blended smooth', prices: { medium: 114, large: 124 }, img: 'Strawberry Smoothie.jpg' },
    { id: 'sm3', name: 'Apple Smoothie', desc: 'Crisp apple blended to silky perfection', prices: { medium: 114, large: 124 }, img: 'Apple Smoothie.jpg' },
    { id: 'sm4', name: 'Watermelon Smoothie', desc: 'Hydrating summer fruit, cool and refreshing', prices: { medium: 114, large: 124 }, img: 'Watermelon Smoothie.jpg' },
    { id: 'sm5', name: 'Lemon Smoothie', desc: 'Bright citrus tang blended with light sweetness', prices: { medium: 114, large: 124 }, img: 'Lemon Smoothie.jpg' },
    { id: 'sm6', name: 'Lemon Mint Smoothie', desc: 'Zesty lemon with cooling fresh mint', prices: { medium: 114, large: 124 }, img: 'Lemon Mint Smoothie.jpg' },
    { id: 'sm7', name: 'Blueberry Smoothie', desc: 'Rich, antioxidant-packed wild blueberries', prices: { medium: 114, large: 124 }, img: 'Blueberry Smoothie.jpg' },
    { id: 'sm8', name: 'Peach Smoothie', desc: 'Velvet-soft peach, naturally sweet', prices: { medium: 119, large: 129 }, img: 'Peach Smoothie.jpg' },
    { id: 'sm9', name: 'Pineapple Smoothie', desc: 'Bold tropical pineapple in every sip', prices: { medium: 119, large: 129 }, img: 'Pineapple Smoothie.jpg' },
    { id: 'sm10', name: 'Kiwi Smoothie', desc: 'Tangy kiwi blended to a vibrant green', prices: { medium: 124, large: 134 }, img: 'Kiwi Smoothie.jpg' },
    { id: 'sm12', name: 'Passion Fruit Smoothie', desc: 'Exotic passion, velvety and intensely flavoured', prices: { medium: 124, large: 134 }, img: 'Passion Fruit Smoothie.jpg' },
  ],

  frappe: [
    { id: 'fr1', name: 'Caramel Frappé', desc: 'Blended coffee with buttery caramel drizzle', prices: 129, img: 'Caramel Frappe.jpg' },
    { id: 'fr2', name: 'Lotus Frappé', desc: 'Iced blended latte with lotus caramel spread', prices: 139, img: 'Lotus Frappe.jpg' },
    { id: 'fr3', name: 'White Mocha Frappé', desc: 'White chocolate blended with smooth espresso', prices: 139, img: 'White Mocha Frappe.jpg' },
    { id: 'fr4', name: 'Mix Berry Frappé', desc: 'Wild berry medley blended ice-cold', prices: 139, img: 'Mix Berry Frappe.jpg' },
    { id: 'fr5', name: 'Salted Caramel Frappé', desc: 'Sweet-salty caramel harmony, perfectly blended', prices: 139, img: 'Salted Caramel Frappé.jpg' }
  ],

  shakes: [
    { id: 'sh1', name: 'Vanilla Shake', desc: 'Classic, smooth vanilla blended milkshake', prices: { medium: 120, large: 130 }, img: 'Vanilla Shake.jpg' },
    { id: 'sh2', name: 'Chocolate Shake', desc: 'Rich, velvety chocolate blended milkshake', prices: { medium: 120, large: 130 }, img: 'Chocolate Shake.jpg' },
    { id: 'sh3', name: 'Mango Shake', desc: 'Fresh tropical mango blended into a thick shake', prices: { medium: 120, large: 130 }, img: 'Mango Shake.jpg' },
    { id: 'sh4', name: 'Strawberry Shake', desc: 'Luscious strawberries blended into a creamy shake', prices: { medium: 120, large: 130 }, img: 'Strawberry Shake.jpg' },
    { id: 'sh5', name: 'Nutella Shake', desc: 'Rich & creamy milkshake blended with authentic Nutella', prices: { medium: 139, large: 149 }, img: 'Nutella Shake.jpg' },
    { id: 'sh6', name: 'Oreo Shake', desc: 'Creamy milkshake blended with crushed Oreo cookies', prices: { medium: 129, large: 139 }, img: 'Oreo Shake.jpg' },
    { id: 'sh7', name: 'Peach Shake', desc: 'Smooth and refreshing milkshake made with juicy peach', prices: { medium: 129, large: 139 }, img: 'Peach Shake.jpg' },
    { id: 'sh8', name: 'Caramel Shake', desc: 'Golden caramel blended into a rich creamy milkshake', prices: { medium: 129, large: 139 }, img: 'Caramel Shake.jpg' },
    { id: 'sh9', name: 'Lotus Shake', desc: 'Velvety milkshake blended with spiced Lotus Biscoff', prices: { medium: 139, large: 149 }, img: 'Lotus Shake.jpg' },
    { id: 'sh10', name: 'Pistachio Shake', desc: 'Premium pistachio milkshake with a rich nutty flavor', prices: { medium: 149, large: 159 }, img: 'Pistachio Shake.jpg' },
    { id: 'sh11', name: 'Twix Shake', desc: 'Delicious blend of caramel, biscuit, and rich chocolate', prices: { medium: 149, large: 159 }, img: 'Twix Shake.jpg' },
    { id: 'sh12', name: 'KitKat Shake', desc: 'Crispy wafer and chocolate blended into a thick shake', prices: { medium: 149, large: 159 }, img: 'KitKat Shake.jpg' },
    { id: 'sh13', name: 'Kinder Shake', desc: 'Rich and velvety milkshake made with Kinder chocolate', prices: { medium: 149, large: 159 }, img: 'Kinder Shake.jpg' },
    { id: 'sh14', name: 'Blueberry Shake', desc: 'Fruity and sweet blueberry flavor blended to perfection', prices: { medium: 129, large: 139 }, img: 'Blueberry Shake.jpg' },
    { id: 'sh15', name: 'M&M’s Shake', desc: 'Colorful M&M candies blended into a rich shake', prices: { medium: 149, large: 159 }, img: 'M&M Shake.jpg' },
    { id: 'sh16', name: 'Galaxy Shake', desc: 'Silky smooth Galaxy milk chocolate blended shake', prices: { medium: 149, large: 159 }, img: 'Galaxy Shake.jpg' },
    { id: 'sh17', name: 'Neurs Shake', desc: 'BRISK signature specialty shake — ask your barista!', prices: { medium: 149, large: 159 }, img: 'Default.jpg' },
    { id: 'sh18', name: 'Snickers Shake', desc: 'Rich caramel, peanut, and chocolate blended shake', prices: { medium: 149, large: 159 }, img: 'Snickers Shake.jpg' },
    { id: 'sh19', name: 'Salted Caramel Shake', desc: 'Perfect balance of sweet caramel and a touch of sea salt', prices: { medium: 149, large: 159 }, img: 'Caramel Shake.jpg' }
  ],

  bobaSmootie: [
    { id: 'bs1', name: 'Strawberry Smoothie Boba Strawberry', desc: 'Strawberry smoothie with strawberry boba pearls', prices: { medium: 129, large: 139 }, img: 'Strawberry Smoothie Boba Strawberry.jpg' },
    { id: 'bs2', name: 'Apple Smoothie Boba Apple', desc: 'Crisp apple smoothie with apple boba pearls', prices: { medium: 129, large: 139 }, img: 'Apple Smoothie Boba Apple.jpg' },
    { id: 'bs3', name: 'Passion Smoothie Boba Passion', desc: 'Exotic passion fruit smoothie with passion boba', prices: { medium: 129, large: 139 }, img: 'Passion Smoothie Boba Passion.jpg' },
    { id: 'bs4', name: 'Peach Smoothie Boba Peach', desc: 'Velvety peach smoothie with chewy peach boba', prices: { medium: 129, large: 139 }, img: 'Peach Smoothie Boba Peach.jpg' },
    { id: 'bs5', name: 'Mango Smoothie Boba Mango', desc: 'Tropical mango smoothie with mango boba pearls', prices: { medium: 129, large: 139 }, img: 'Mango Smoothie Boba Mango.jpg' }
  ],

  bobaMilkShake: [
    { id: 'bm1', name: 'Milk Strawberry Boba Strawberry', desc: 'Creamy strawberry milkshake with strawberry boba', prices: { medium: 139, large: 149 }, img: 'Milk Strawberry Boba Strawberry.jpg' },
    { id: 'bm2', name: 'Milk Mango Boba Mango', desc: 'Lush mango milkshake loaded with mango boba', prices: { medium: 139, large: 149 }, img: 'Milk Mango Boba Mango.jpg' },
    { id: 'bm3', name: 'Milk Peach Boba Peach', desc: 'Smooth peach milkshake with chewy peach boba', prices: { medium: 139, large: 149 }, img: 'Milk Peach Boba Peach.jpg' },
    { id: 'bm4', name: 'Milk Passion Boba Passion', desc: 'Exotic passion fruit milkshake with passion boba', prices: { medium: 139, large: 149 }, img: 'Milk Passion Boba Passion.jpg' },
    { id: 'bm5', name: 'Milk Blueberry Boba Blueberry', desc: 'Rich blueberry milkshake with blueberry boba', prices: { medium: 139, large: 149 }, img: 'Milk Blueberry Boba Blueberry.jpg' }
  ],

  bobaSoft: [
    { id: 'bf1', name: 'Boba Soft Passion', desc: 'Passion fruit soft boba drink', prices: { medium: 129, large: 139 }, img: 'Boba Soft Passion.jpg' },
    { id: 'bf2', name: 'Boba Soft Strawberry', desc: 'Strawberry flavoured soft boba drink', prices: { medium: 129, large: 139 }, img: 'Boba Soft Strawberry.jpg' },
    { id: 'bf3', name: 'Boba Soft Blueberry', desc: 'Blueberry flavoured soft boba drink', prices: { medium: 129, large: 139 }, img: 'Boba Soft Blueberry.jpg' },
    { id: 'bf4', name: 'Boba Soft Mango', desc: 'Mango flavoured soft boba drink', prices: { medium: 129, large: 139 }, img: 'Boba Soft Mango.jpg' },
    { id: 'bf5', name: 'Boba Soft Green Apple', desc: 'Green apple flavoured soft boba drink', prices: { medium: 129, large: 139 }, img: 'Boba Soft Green Apple.jpg' }
  ],

  matcha: [
    { id: 'ma1', name: 'Hot Matcha', desc: 'Pure Japanese matcha whisked into warm milk', prices: 109, img: 'Hot Matcha.jpg' },
    { id: 'ma2', name: 'Hot Honey Matcha', desc: 'Matcha elevated with golden raw honey', prices: 119, img: 'Hot Honey Matcha.jpg' },
    { id: 'ma3', name: 'Ice Matcha', desc: 'Vibrant green matcha served cold over ice', prices: 119, img: 'Ice Matcha.jpg' },
    { id: 'ma4', name: 'Ice Matcha Coconut', desc: 'Matcha meets tropical coconut milk', prices: 139, img: 'Ice Matcha Coconut.jpg' },
    { id: 'ma5', name: 'Ice Matcha Strawberry', desc: 'Matcha and strawberry — earthy meets sweet', prices: 139, img: 'Ice Matcha Strawberry.jpg' },
    { id: 'ma6', name: 'Ice Matcha Caramel', desc: 'Matcha with a rich caramel swirl on ice', prices: 139, img: 'Ice Matcha Caramel.jpg' },
    { id: 'ma7', name: 'Blue Matcha', desc: 'Butterfly pea flower matcha — a vivid blue cup', prices: { medium: 139, large: 149 }, img: 'Default.jpg' },
    { id: 'ma8', name: 'Matcha Cloud', desc: 'Mango, Strawberry, Coconut or White Choc cloud', prices: { medium: 139, large: 149 }, img: 'Default.jpg' }
  ],

  juices: [
    { id: 'jc1', name: 'Lemon Juice', desc: 'Classic fresh-squeezed lemon, bright and sharp', prices: { medium: 104, large: 114 }, img: 'Lemon Juice.jpg' },
    { id: 'jc2', name: 'Mango Juice', desc: 'Sun-kissed mango, thick and naturally sweet', prices: { medium: 95, large: 110 }, img: 'Mango Juice.jpg' },
    { id: 'jc3', name: 'Strawberry Juice', desc: 'Freshly pressed strawberries, vibrant and sweet', prices: { medium: 95, large: 110 }, img: 'Strawberry Juice.jpg' },
    { id: 'jc4', name: 'Cantaloupe Juice', desc: 'Silky and mellow, cool cantaloupe nectar', prices: { medium: 95, large: 110 }, img: 'Cantaloupe Juice.jpg' },
    { id: 'jc5', name: 'Watermelon Juice', desc: 'Pure hydration — sweet summer in a glass', prices: { medium: 95, large: 110 }, img: 'Watermelon Juice.jpg' },
    { id: 'jc6', name: 'Peach Juice', desc: 'Ripe, fragrant peach pressed fresh daily', prices: { medium: 109, large: 119 }, img: 'Peach Juice.jpg' },
    { id: 'jc7', name: 'Banana Juice', desc: 'Thick, creamy banana — naturally energising', prices: { medium: 110, large: 120 }, img: 'Banana Juice.jpg' },
    { id: 'jc9', name: 'Mint Lemon Juice', desc: 'Lemon with fresh crushed mint — a cooler classic', prices: { medium: 110, large: 120 }, img: 'Mint Lemon Juice.jpg' },
    { id: 'jc10', name: 'Blueberry Juice', desc: 'Deep, rich blueberry with antioxidant goodness', prices: { medium: 124, large: 134 }, img: 'Blueberry Juice.jpg' },
    { id: 'jc11', name: 'Kiwi Juice', desc: 'Bright green and tangy — vitamin C at its best', prices: { medium: 120, large: 130 }, img: 'Kiwi Juice.jpg' }
  ],

  sandwiches: [
    { id: 'sw2', name: 'Mix Cheese', desc: 'Melted selection of premium cheeses', prices: 99, img: 'Mix Cheese.jpg' },
    { id: 'sw3', name: 'Roast Beef', desc: 'Tender sliced roast beef with house condiments', prices: 109, img: 'Roast Beef.jpg' },
    { id: 'sw4', name: 'Smoked Turkey', desc: 'Premium smoked turkey with garden greens', prices: 109, img: 'Smoked Turkey.jpg' },
    { id: 'sw5', name: 'Olive Cheese', desc: 'Olives and premium cheese on toasted bread', prices: 129, img: 'Olive Cheese.jpg' }
  ],

  salads: [
    { id: 'sl1', name: 'Greek Salad', desc: 'Crispy cucumbers, olives, tomato and feta cheese', prices: 119, img: 'Default.jpg' },
    { id: 'sl2', name: 'Tuna Salad', desc: 'Fresh tuna over garden greens with lemon dressing', prices: 129, img: 'Default.jpg' },
    { id: 'sl3', name: 'Caesar Salad', desc: 'Romaine, parmesan shavings and caesar dressing', prices: 140, img: 'Default.jpg' },
  ],

  "Dessert & Bakery": [
    { id: 'ds1', name: 'Cheesecake Flavor Tart', desc: '', prices: 114, img: 'Default.jpg' },
    { id: 'ds2', name: 'Pastrami Croissant', desc: 'Pastrami, Emmental cheese & secret sauce in a flaky croissant', prices: 155, img: 'Default.jpg' },
    { id: 'ds3', name: 'Smoked Turkey Croissant', desc: 'Smoked turkey, Swiss cheese & secret sauce in a flaky croissant', prices: 155, img: 'Default.jpg' },
    { id: 'ds4', name: 'Roast Beef Croissant', desc: 'Roast beef, Swiss cheese & secret sauce in a flaky croissant', prices: 155, img: 'Default.jpg' },
    { id: 'ds5', name: 'Mixed Cheese Croissant', desc: 'Cream cheese and Nutella in one indulgent slice', prices: 135, img: 'Default.jpg' },
    { id: 'ds6', name: 'Plain Croissant', desc: 'Nutella, Blueberry or Caramel — your choice', prices: 104, img: 'Default.jpg' },
    { id: 'ds7', name: 'San Sebastian Tart', desc: 'Espresso-soaked ladyfingers with mascarpone cream', prices: 110, img: 'Default.jpg' },
    { id: 'ds8', name: 'Red Velvet Slice', desc: 'Layered Oreo cream cake, dark and dreamy', prices: 90, img: 'Default.jpg' },
    { id: 'ds9', name: 'Chocolate Fudge Tart', desc: 'Warm chocolate cake with a gooey lava centre', prices: 95, img: 'Default.jpg' },
    { id: 'ds10', name: 'Tiramisu', desc: 'Airy Japanese-style soft sponge cake', prices: 95, img: 'Default.jpg' },
    { id: 'ds11', name: 'Hany Cake Vanilla Tart', desc: 'Pistachio, Lotus or San Sebastian Pistachio', prices: 95, img: 'Default.jpg' },
    { id: 'ds12', name: 'Molten Cake', desc: 'BRISK signature dessert — rich and unforgettable', prices: 110, img: 'Default.jpg' },
    { id: 'ds13', name: 'Plain Croissant', desc: 'BRISK signature dessert — rich and unforgettable', prices: 89, img: 'Default.jpg' },
    { id: 'ds14', name: 'Almond Croissant', desc: 'BRISK signature dessert — rich and unforgettable', prices: 129, img: 'Default.jpg' },
    { id: 'ds15', name: 'Blueberry Muffin', desc: 'BRISK signature dessert — rich and unforgettable', prices: 85, img: 'Default.jpg' },
    { id: 'ds16', name: 'Chocolate Chip Cookies', desc: 'BRISK signature dessert — rich and unforgettable', prices: 59, img: 'Default.jpg' },
    { id: 'ds17', name: 'Nutella Cookies', desc: 'BRISK signature dessert — rich and unforgettable', prices: 64, img: 'Default.jpg' },
    { id: 'ds18', name: 'Plain Cheesecake Tart', desc: 'BRISK signature dessert — rich and unforgettable', prices: 95, img: 'Default.jpg' },
    { id: 'ds19', name: 'Salted Caramel Tart', desc: 'BRISK signature dessert — rich and unforgettable', prices: 119, img: 'Default.jpg' }

  ],

  coldDrinks: [
    { id: 'cd1', name: 'Still Water', desc: 'Cool, refreshing still water', prices: 15, img: 'Default.jpg' },
    { id: 'cd2', name: 'Red Bull', desc: 'Original energy for the day ahead', prices: 99, img: 'Default.jpg' },
    { id: 'cd3', name: 'Red Bull Flavor', desc: 'Fruity energy in your favourite Red Bull flavour', prices: 120, img: 'Default.jpg' },

  ],

  extra: [
    { id: 'ex1', name: 'Flavour · Whip · Honey · Nuts', desc: 'Add extra flavour syrup, whipped cream, honey or mixed nuts', prices: 35, img: 'Default.jpg' },
    { id: 'ex2', name: 'Boba · Ice Cream · Shot', desc: 'Add extra boba pearls, a scoop of ice cream or an espresso shot', prices: 45, img: 'Default.jpg' }
  ],


  Specialty: [

    { id: 'sp1', name: 'V60 Pour-Over', desc: 'Single origin specialty filter coffee, brewed fresh', prices: { medium: 190, large: 220 }, img: 'Default.jpg' }
  ],

};

/* ──────────────────────────────────────────────────────────
   CATEGORIES DEFINITION
   ────────────────────────────────────────────────────────── */
/* ──────────────────────────────────────────────────────────
   SVG ICON LIBRARY — Modern line icons for each category
   ────────────────────────────────────────────────────────── */
const catIcons = {

  /* Hot Coffee — espresso cup with steam */
  hotCoffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 11h12l-1.5 7H6.5L5 11z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 13h2a2 2 0 0 1 0 4h-2" stroke-linecap="round"/>
    <path d="M8 8c0-1.5 2-1.5 2-3" stroke-linecap="round"/>
    <path d="M12 8c0-1.5 2-1.5 2-3" stroke-linecap="round"/>
  </svg>`,

  /* Warm Drinks — steaming mug */
  warmDrinks: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 11h10l-1 7H7l-1-7z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 13.5h1.5a1.5 1.5 0 0 1 0 3H16" stroke-linecap="round"/>
    <path d="M4 20h14" stroke-linecap="round"/>
    <path d="M9 7.5c0-1.2 1.5-1.2 1.5-2.5" stroke-linecap="round"/>
    <path d="M13 7.5c0-1.2 1.5-1.2 1.5-2.5" stroke-linecap="round"/>
  </svg>`,

  /* Ice Coffee — iced cup with straw */
  iceCoffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 8h10l-2 11H9L7 8z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 8h12" stroke-linecap="round"/>
    <path d="M6 6h12" stroke-linecap="round"/>
    <line x1="13" y1="6" x2="11" y2="19" stroke-linecap="round"/>
    <path d="M9.5 12.5h5" stroke-linecap="round" stroke-dasharray="1.5 1.5"/>
  </svg>`,

  /* Mojito — glass with mint leaf */
  mojito: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4h10l-2 15H9L7 4z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 4h12" stroke-linecap="round"/>
    <path d="M13 4c0 0-1.5 3-1.5 5s2 2 2 4" stroke-linecap="round"/>
    <ellipse cx="12" cy="10" rx="2.5" ry="1.2" transform="rotate(-20 12 10)" fill="none"/>
  </svg>`,

  /* Smoothies — blender cup */
  smoothies: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5h8l-2 14H10L8 5z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 5h10" stroke-linecap="round"/>
    <path d="M10 19h4" stroke-linecap="round"/>
    <path d="M9 10c1.5-.5 4-.5 5.5 0" stroke-linecap="round"/>
    <path d="M9.5 13c1-.3 3.5-.3 5 0" stroke-linecap="round"/>
  </svg>`,

  /* Frappé — blended cup with whip */
  frappe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 9h8l-1.5 10h-5L8 9z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 9h10" stroke-linecap="round"/>
    <path d="M8 7c0 0 1-2 4-2s4 2 4 2" stroke-linecap="round"/>
    <path d="M10 6.5V4" stroke-linecap="round"/>
    <path d="M14 6.5V4" stroke-linecap="round"/>
    <path d="M9.5 13h5" stroke-linecap="round" stroke-dasharray="1.5 1.5"/>
  </svg>`,

  /* Shakes — milkshake cup with straw */
  shakes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8h8l-1.5 11H9.5L8 8z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 8h10" stroke-linecap="round"/>
    <path d="M9 6c0-1.5 6-1.5 6 0" stroke-linecap="round"/>
    <line x1="14" y1="5" x2="13" y2="19" stroke-linecap="round"/>
  </svg>`,

  /* Boba Smoothie — boba cup with bubbles */
  bobaSmootie: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 9h10l-2 10H9L7 9z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.5 9H17.5" stroke-linecap="round"/>
    <path d="M8 7c0-1.2 1-2 4-2s4 .8 4 2" stroke-linecap="round"/>
    <line x1="13.5" y1="7" x2="12.5" y2="19" stroke-linecap="round"/>
    <circle cx="10" cy="15" r="1" fill="currentColor" stroke="none"/>
    <circle cx="13" cy="16.5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="11.5" cy="14" r="0.8" fill="currentColor" stroke="none"/>
  </svg>`,

  /* Boba Milk Shake — boba + milkshake */
  bobaMilkShake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 9h9l-1.5 10h-6L7.5 9z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 9h10" stroke-linecap="round"/>
    <path d="M8.5 7c0-1.5 7-1.5 7 0" stroke-linecap="round"/>
    <line x1="14" y1="6" x2="13" y2="19" stroke-linecap="round"/>
    <circle cx="10" cy="14.5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="12.5" cy="16" r="1" fill="currentColor" stroke="none"/>
    <circle cx="10.5" cy="17.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>`,

  /* Boba Soft — soft drink boba cup */
  bobaSoft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8h8l-2 11H10L8 8z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 8h10" stroke-linecap="round"/>
    <path d="M7 6h10" stroke-linecap="round"/>
    <line x1="14" y1="6" x2="12.5" y2="19" stroke-linecap="round"/>
    <circle cx="10" cy="14" r="1" fill="currentColor" stroke="none"/>
    <circle cx="12.5" cy="15.5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="10" cy="17" r="0.8" fill="currentColor" stroke="none"/>
  </svg>`,

  /* Matcha — tea bowl with whisk lines */
  matcha: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10h14l-1 7H6l-1-7z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 10h16" stroke-linecap="round"/>
    <path d="M9 17.5h6" stroke-linecap="round"/>
    <path d="M10 10V7" stroke-linecap="round"/>
    <path d="M12 10V6" stroke-linecap="round"/>
    <path d="M14 10V7" stroke-linecap="round"/>
    <path d="M9 6.5h6" stroke-linecap="round"/>
  </svg>`,

  /* Juices — citrus/orange slice */
  juices: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="13" r="6"/>
    <path d="M12 7v12" stroke-linecap="round"/>
    <path d="M6 13h12" stroke-linecap="round"/>
    <path d="M7.76 8.76l8.48 8.48" stroke-linecap="round"/>
    <path d="M16.24 8.76l-8.48 8.48" stroke-linecap="round"/>
    <path d="M9 5c0 0 1.5-1.5 3-1.5S15 5 15 5" stroke-linecap="round"/>
  </svg>`,

  /* Sandwiches — sandwich layers */
  sandwiches: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8h16" stroke-linecap="round"/>
    <path d="M4 12h16" stroke-linecap="round"/>
    <path d="M4 16h16" stroke-linecap="round"/>
    <path d="M5 8c-1-2 0-4 7-4s8 2 7 4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 16c-1 2 0 4 7 4s8-2 7-4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 12c.5-1 11.5-1 12 0" stroke-linecap="round"/>
  </svg>`,

  /* Salads — bowl with leaf */
  salads: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12c0 0 0 7 7 7s7-7 7-7H5z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 12h16" stroke-linecap="round"/>
    <path d="M12 12c0-5 3-7 6-5" stroke-linecap="round"/>
    <path d="M12 12c0-4-3-7-6-5" stroke-linecap="round"/>
    <path d="M9 10c1-1 4-1 6 0" stroke-linecap="round"/>
  </svg>`,

  /* Dessert — slice of cake */
  dessert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 15l4-9h8l4 9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 6c0-1.5 6-1.5 6 0" stroke-linecap="round"/>
    <path d="M12 6v-2" stroke-linecap="round"/>
    <circle cx="12" cy="3.5" r=".8" fill="currentColor" stroke="none"/>
  </svg>`,

  /* Cold Drinks — cold cup with ice */
  coldDrinks: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 6h10l-2 13H9L7 6z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 6h12" stroke-linecap="round"/>
    <path d="M9 10l1.5 1.5-1.5 1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 13l1.5-1.5-1.5-1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 10v5" stroke-linecap="round"/>
  </svg>`,

  /* Extras — plus/add */
  extra: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8"/>
    <line x1="12" y1="8" x2="12" y2="16" stroke-linecap="round"/>
    <line x1="8" y1="12" x2="16" y2="12" stroke-linecap="round"/>
  </svg>`,

  /* Specialty — pour-over / V60 */
  Specialty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5h8l-3 9h-2L8 5z" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 14v4" stroke-linecap="round"/>
    <ellipse cx="12" cy="18.5" rx="3" ry="1" />
    <path d="M7 5h10" stroke-linecap="round"/>
    <path d="M9 9c1-.5 4-.5 6 0" stroke-linecap="round"/>
  </svg>`,
};

/* Fallback icon for any unmapped key */
const defaultIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="8"/>
  <path d="M12 8v4l3 3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/* ──────────────────────────────────────────────────────────
   CATEGORIES DEFINITION
   ────────────────────────────────────────────────────────── */
const categories = [
  { key: 'hotCoffee', label: 'Hot Coffee', },
  { key: 'warmDrinks', label: 'Warm Drinks', },
  { key: 'iceCoffee', label: 'Ice Coffee', },
  { key: 'mojito', label: 'Mojito', },
  { key: 'smoothies', label: 'Smoothies', },
  { key: 'frappe', label: 'Frappé', },
  { key: 'shakes', label: 'Shakes', },
  { key: 'bobaSmootie', label: 'Boba Smoothie', },
  { key: 'bobaMilkShake', label: 'Boba Milk Shake', },
  { key: 'bobaSoft', label: 'Boba Soft', },
  { key: 'matcha', label: 'Matcha', },
  { key: 'juices', label: 'Juices', },
  { key: 'sandwiches', label: 'Sandwiches', },
  { key: 'salads', label: 'Salads', },
  { key: 'Dessert & Bakery', label: 'Dessert & Bakery', },
  { key: 'coldDrinks', label: 'Cold Drinks', },
  { key: 'extra', label: 'Extras', },
  { key: 'Specialty', label: 'Specialty', },
];

/* ──────────────────────────────────────────────────────────
   DOM REFERENCES
   ────────────────────────────────────────────────────────── */
const categoryTrack = document.getElementById('categoryTrack');
const productsGrid = document.getElementById('productsGrid');
const sectionTitle = document.getElementById('sectionTitle');
const sectionCount = document.getElementById('sectionCount');
const catPrevBtn = document.getElementById('catPrev');
const catNextBtn = document.getElementById('catNext');

/* ──────────────────────────────────────────────────────────
   STATE
   ────────────────────────────────────────────────────────── */
let activeCategory = categories[0].key;
let cardObserver = null;

/* ──────────────────────────────────────────────────────────
   BUILD CATEGORY NAV
   ────────────────────────────────────────────────────────── */
function buildCategoryNav() {
  categoryTrack.innerHTML = '';
  categories.forEach((cat) => {
    const icon = catIcons[cat.key] || defaultIcon;
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat.key === activeCategory ? ' active' : '');
    btn.id = `cat-${cat.key}`;
    btn.setAttribute('aria-label', cat.label);
    btn.innerHTML = `<span class="cat-btn__icon" aria-hidden="true">${icon}</span><span class="cat-btn__label">${cat.label}</span>`;
    btn.addEventListener('click', () => handleCategoryChange(cat.key));
    categoryTrack.appendChild(btn);
  });

  const SCROLL_STEP = 280;
  catPrevBtn.onclick = () => categoryTrack.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' });
  catNextBtn.onclick = () => categoryTrack.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });

  categoryTrack.removeEventListener('scroll', updateArrows);
  categoryTrack.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();
}

function updateArrows() {
  const { scrollLeft, scrollWidth, clientWidth } = categoryTrack;
  catPrevBtn.disabled = scrollLeft <= 4;
  catNextBtn.disabled = scrollLeft + clientWidth >= scrollWidth - 4;
}

/* ──────────────────────────────────────────────────────────
   PRICE BOX HTML
   ────────────────────────────────────────────────────────── */
function buildPriceBox(prices) {
  if (prices && typeof prices === 'object') {
    // Single / Double
    if (prices.single !== undefined || prices.double !== undefined) {
      const singleEl = prices.single !== undefined ? `
        <div class="price-box__size" aria-label="Single: ${prices.single} EGP">
          <span class="price-box__label">Single</span>
          <span class="price-box__amount">${prices.single}</span>
          <span class="price-box__currency">EGP</span>
        </div>` : '';
      const dividerEl = (prices.single !== undefined && prices.double !== undefined) ? `
        <div class="price-box__divider" aria-hidden="true"></div>` : '';
      const doubleEl = prices.double !== undefined ? `
        <div class="price-box__size price-box__size--large" aria-label="Double: ${prices.double} EGP">
          <span class="price-box__label">Double</span>
          <span class="price-box__amount">${prices.double}</span>
          <span class="price-box__currency">EGP</span>
        </div>` : '';
      return `<div class="price-box" role="group" aria-label="Shot options">${singleEl}${dividerEl}${doubleEl}</div>`;
    }

    // Medium / Large
    if (prices.medium !== undefined || prices.large !== undefined) {
      const medEl = prices.medium !== undefined ? `
        <div class="price-box__size" aria-label="Medium: ${prices.medium} EGP">
          <span class="price-box__label">M</span>
          <span class="price-box__amount">${prices.medium}</span>
          <span class="price-box__currency">EGP</span>
        </div>` : '';
      const divEl = (prices.medium !== undefined && prices.large !== undefined) ? `
        <div class="price-box__divider" aria-hidden="true"></div>` : '';
      const lrgEl = prices.large !== undefined ? `
        <div class="price-box__size price-box__size--large" aria-label="Large: ${prices.large} EGP">
          <span class="price-box__label">L</span>
          <span class="price-box__amount">${prices.large}</span>
          <span class="price-box__currency">EGP</span>
        </div>` : '';
      return `<div class="price-box" role="group" aria-label="Size options">${medEl}${divEl}${lrgEl}</div>`;
    }
  }

  // Single flat price
  const val = (typeof prices === 'number') ? prices : (prices ? (prices.price || prices.amount || 0) : 0);
  return `
    <div class="price-box price-box--single" role="group" aria-label="Price: ${val} EGP">
      <div class="price-box__size price-box__size--full" aria-label="${val} EGP">
        <span class="price-box__amount">${val}</span>
        <span class="price-box__currency">EGP</span>
      </div>
    </div>
  `;
}

/* ──────────────────────────────────────────────────────────
   RENDER PRODUCTS — Editorial card layout
   ────────────────────────────────────────────────────────── */
function renderProducts(categoryKey) {
  const items = menuData[categoryKey] || [];
  const catData = categories.find(c => c.key === categoryKey);
  const catLabel = catData ? catData.label : categoryKey;

  sectionTitle.textContent = catLabel;
  sectionCount.textContent = `${items.length} item${items.length !== 1 ? 's' : ''}`;

  productsGrid.innerHTML = '';

  if (!items.length) {
    productsGrid.innerHTML =
      '<p style="color:var(--text-muted);text-align:center;padding:40px 0;grid-column:1/-1">No items in this category.</p>';
    return;
  }

  if (cardObserver) cardObserver.disconnect();

  cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

  items.forEach((item, i) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.style.transitionDelay = `${i * 40}ms`;
    card.setAttribute('aria-label', item.name);

    // Elegant separator element
    const separatorHTML = `
      <div class="product-card__separator" aria-hidden="true">
        <span class="product-card__separator-dot"></span>
      </div>`;

    // Category micro-label
    const catLabelHTML = `<span class="product-card__category-label">${catLabel}</span>`;

    // Description (if present)
    const descHTML = item.desc
      ? `<p class="product-card__desc">${item.desc}</p>`
      : '';

    card.innerHTML = `
      <div class="product-card__img">
        <img
          class="product-card__img-inner"
          src="${item.img}"
          alt="${item.name}"
          loading="lazy"
          onerror="this.parentElement.style.background='var(--brand-xlight)';this.remove()"
        />
        ${item.badge ? `<span class="product-card__badge">${item.badge}</span>` : ''}
      </div>
      <div class="product-card__body">
        ${catLabelHTML}
        <h3 class="product-card__name">${item.name}</h3>
        ${descHTML}
        ${separatorHTML}
        ${buildPriceBox(item.prices)}
      </div>
    `;

    productsGrid.appendChild(card);
    cardObserver.observe(card);
  });
}

/* ──────────────────────────────────────────────────────────
   HANDLE CATEGORY CHANGE
   ────────────────────────────────────────────────────────── */
function handleCategoryChange(newKey) {
  if (newKey === activeCategory) return;

  const prevBtn = document.getElementById(`cat-${activeCategory}`);
  const nextBtn = document.getElementById(`cat-${newKey}`);
  if (prevBtn) prevBtn.classList.remove('active');
  if (nextBtn) {
    nextBtn.classList.add('active');
    nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  activeCategory = newKey;

  productsGrid.classList.add('fading');
  setTimeout(() => {
    renderProducts(newKey);
    productsGrid.classList.remove('fading');
    productsGrid.classList.add('appearing');
    setTimeout(() => productsGrid.classList.remove('appearing'), 380);
  }, 200);

  const menuSection = document.getElementById('menuSection');
  const navHeight = document.getElementById('categoryNav').offsetHeight;
  const top = menuSection.getBoundingClientRect().top + window.scrollY - navHeight - 16;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* ──────────────────────────────────────────────────────────
   INIT
   ────────────────────────────────────────────────────────── */
function init() {
  /* Always reset to first category — never persist across refresh */
  activeCategory = categories[0].key;

  buildCategoryNav();
  renderProducts(activeCategory);

  /* Force scroll to absolute top after DOM is ready.
     requestAnimationFrame defers until the browser is ready to paint,
     ensuring this runs AFTER any browser-native scroll restoration attempt. */
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  });
}

document.addEventListener('DOMContentLoaded', init);


/* ──────────────────────────────────────────────────────────
   FLOATING SOCIAL BAR — micro-interactions
   ────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  const bar = document.getElementById('socialBar');
  const links = bar ? bar.querySelectorAll('.social-bar__link') : [];

  if (!bar) return;

  /* ── Switch from enter animation → idle float once entry finishes ── */
  const ENTER_DURATION_MS = 1180; // 450ms delay + 720ms animation
  setTimeout(() => {
    bar.classList.add('is-floating');
  }, ENTER_DURATION_MS);


  /* ── Ripple tap feedback (mobile / touch) ── */
  links.forEach(link => {
    link.addEventListener('touchstart', handleTap, { passive: true });
    link.addEventListener('mousedown', handleTap, { passive: true });
  });

  function handleTap(e) {
    const link = e.currentTarget;
    /* Remove any previous animation so it can replay */
    link.classList.remove('tapped');
    /* Force reflow to restart animation */
    void link.offsetWidth;
    link.classList.add('tapped');

    /* Clean up after animation completes */
    link.addEventListener('animationend', () => {
      link.classList.remove('tapped');
    }, { once: true });
  }

}());

