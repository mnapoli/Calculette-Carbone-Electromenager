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
 * Messagebox constants
 */
const MSGBOX_NORMAL = 0;
const MSGBOX_SUCCESS = 1;
const MSGBOX_ERROR = 2;

/**
 * Show a message box to the user
 * @param {String} message Message to display
 * @param {int} type Type of the message (MSGBOX_NORMAL, MSGBOX_ERROR or MSGBOX_SUCCESS)
 * @param {String} title Title of the message box (default: "Information")
 * @return void
 */
function messageBox(message, title, type) {
	if (type === undefined) {
		type = MSGBOX_NORMAL;
	}
	if (title === undefined) {
		title = "Information";
	}
	// Display the message in the div #message
	$("#messagebox").html(message);
	$("#messagebox").dialog({
		title: title,
		show: "fade",
		buttons: {
			Ok: function() {
				$(this).dialog("close");
			}
		}
	});
}
