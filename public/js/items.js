/**
 * @author Matthieu Napoli
 *
 * This file is part of the program "Calculette Carbone Electromenager"
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the Lesser GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  Lesser GNU General Public License for more details.
 *
 *  You should have received a copy of the Lesser GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class Item
 * @param id
 * @param name
 * @param emissionFactor
 * @param image
 */
function Item(id, name, emissionFactor, image) {
    this.id = id;
    this.name = name;
    this.emissionFactor = emissionFactor;
    this.image = image;
}


var items = new Array();

items.push(new Item("refrig", "Réfrigérateur", 10., "fridge.png"));
items.push(new Item("refrig-cong", "Réfrigérateur-congélateur", 24., "fridge.png"));
items.push(new Item("refrig-amer", "Réfrigérateur américain", 65.6, "fridge.png"));
items.push(new Item("adoucisseur", "Adoucisseur d'eau", 0.8, "fridge.png"));
items.push(new Item("cafetiere", "Cafetière", 1.86, "fridge.png"));
items.push(new Item("lave-linge", "Lave-linge", 19.75, "fridge.png"));
items.push(new Item("lave-vaiss", "Lave-vaisselle", 17.67, "fridge.png"));
items.push(new Item("seche-linge", "Sèche-linge", 26.66, "fridge.png"));

items.push(new Item("tv-moy", "TV moyenne", 11.9, "fridge.png"));
items.push(new Item("tv-plasma", "TV Plasma", 31.12, "fridge.png"));
items.push(new Item("tv-lcd", "TV LCD", 14.14, "fridge.png"));
items.push(new Item("videoproject", "Vidéoprojecteur", 9.49, "fridge.png"));
items.push(new Item("box-tv", "Box TV", 5.95, "fridge.png"));
items.push(new Item("dvd", "Lecteur DVD", 1.3, "fridge.png"));
items.push(new Item("chaine-hifi", "Chaine Hi-Fi", 4.34, "fridge.png"));

items.push(new Item("pc-fixe", "PC fixe", 17.24, "fridge.png"));
items.push(new Item("pc-portable", "PC portable", 2.17, "fridge.png"));
items.push(new Item("box-internet", "Box Internet", 4.15, "fridge.png"));
items.push(new Item("imprimante", "Imprimante", 1.36, "fridge.png"));
items.push(new Item("scanner", "Scanner", 1.24, "fridge.png"));

items.push(new Item("aquarium", "Aquarium", 24.4, "fridge.png"));
items.push(new Item("tel-fixe", "Téléphone fixe", 2.79, "fridge.png"));
items.push(new Item("aspirateur", "Aspirateur", 1.12, "fridge.png"));
items.push(new Item("eclairage", "Éclairage", 53.94, "fridge.png"));
items.push(new Item("fer-repasser", "Fer à repasser", 2.48, "fridge.png"));
items.push(new Item("pompe-piscine", "Pompe de piscine", 93., "fridge.png"));

/**
 * Find an item
 * @param id
 * @return Item
 */
function findItemById(id) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) {
            return items[i];
        }
    }
    return null;
}
