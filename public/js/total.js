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
 * Set the total label
 * @param total
 */
function setTotalEmission(total) {
    total = total;
    $("#totalEmission").html(total.toFixed(1)+" kg équivalent CO&#8322; par an");
    $("#totalEmission").effect("shake");
}
