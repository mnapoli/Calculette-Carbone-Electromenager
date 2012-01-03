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
 * @param int    id
 * @param String name
 * @param float  emissionFactor
 * @param String image
 * @param bool   defaultRight
 */
function Item(id, name, emissionFactor, image, defaultRight) {
    defaultRight = typeof(defaultRight) != 'undefined' ? defaultRight : false;
    this.id = id;
    this.name = name;
    this.emissionFactor = emissionFactor;
    this.image = image;
    this.defaultRight = defaultRight;
}


var items = new Array();

items.push(new Item("refrig", "Réfrigérateur", 10., "Refrigerateur.png"));
items.push(new Item("refrig-cong", "Réfrigérateur-congélateur", 24., "Refrigerateur-cong.png"));
items.push(new Item("refrig-amer", "Réfrigérateur américain", 65.6, ""));
items.push(new Item("adoucisseur", "Adoucisseur d'eau", 0.8, ""));
items.push(new Item("cafetiere", "Cafetière", 1.86, ""));
items.push(new Item("lave-linge", "Lave-linge", 19.75, "Lave-linge.png"));
items.push(new Item("lave-vaiss", "Lave-vaisselle", 17.67, "Lave-vaisselle.png"));
items.push(new Item("seche-linge", "Sèche-linge", 26.66, "Seche-linge.png"));

items.push(new Item("tv-cat", "TV cathodique", 11.9, "TV-cathodique.png"));
items.push(new Item("tv-plasma", "TV Plasma", 31.12, ""));
items.push(new Item("tv-lcd", "TV LCD", 14.14, ""));
items.push(new Item("videoproject", "Vidéo-projecteur", 9.49, ""));
items.push(new Item("box-tv", "Box TV", 5.95, ""));
items.push(new Item("dvd", "Lecteur DVD", 1.3, ""));
items.push(new Item("chaine-hifi", "Chaine Hi-Fi", 4.34, ""));

items.push(new Item("pc-fixe", "PC fixe", 17.24, "Ordi-fixe.png"));
items.push(new Item("pc-portable", "PC portable", 2.17, "PC-portable.png"));
items.push(new Item("box-internet", "Box Internet", 4.15, "Box-internet.png"));
items.push(new Item("imprimante", "Imprimante", 1.36, ""));
items.push(new Item("scanner", "Scanner", 1.24, ""));

items.push(new Item("aquarium", "Aquarium", 24.4, ""));
items.push(new Item("tel-fixe", "Téléphone fixe", 2.79, ""));
items.push(new Item("aspirateur", "Aspirateur", 1.12, "Aspirateur.png"));
items.push(new Item("eclairage", "Éclairage", 53.94, "", true));
items.push(new Item("fer-repasser", "Fer à repasser", 2.48, "Fer-repasser.png"));
items.push(new Item("pompe-piscine", "Pompe de piscine", 93., ""));

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
