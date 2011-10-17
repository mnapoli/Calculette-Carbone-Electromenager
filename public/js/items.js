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

items.push(new Item("refrig", "Réfrigérateur", 1700., "fridge.png"));
items.push(new Item("l-v", "Lave-vaisselle", 1200., "fridge.png"));
items.push(new Item("tv-lcd", "TV LCD", 2100., "fridge.png"));


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
}
