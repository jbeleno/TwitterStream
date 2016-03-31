/**! TWITTER STREAM COLLECTOR
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 1.0.0
*
* This file is for a set of functions that are pretty basic and could be
* used anywhere in the rest of the project. 
**/

// Declaring variables
var SITE_LINK = "http://localhost:3000/";


/*
 * DESCRIPTION: This function is for getting information from this site
 * 				using GET.
 *
 * PARAMETERS:  
 * url: This is a short version of the url and will be concatenated with
 *		the site url.
 * data: This is a json object with the parameters to be passed in the url
 * done: This is a handler function that will be executed when the conexion
 * 		 with the url is successful
 * error: This is a handler function when an error happens, this is mostly 
 *		  executed when errors are 500 or 404
 */
var getRequest = function (url,data,done,error){
    $.ajax({
        url: SITE_LINK + url,
        context : document.body,
        dataType: "json",
        type: "GET",
        data: data
    }).done(done).error(error);
}


/*
 * DESCRIPTION: This function is for deleting information from this site
 * 				using DELETE.
 *
 * PARAMETERS:  
 * url: This is a short version of the url and will be concatenated with
 *		the site url.
 * data: This is a json object with the parameters to be passed in the url
 * done: This is a handler function that will be executed when the conexion
 * 		 with the url is successful
 * error: This is a handler function when an error happens, this is mostly 
 *		  executed when errors are 500 or 404
 */
var deleteRequest = function (url,data,done,error){
    $.ajax({
        url: SITE_LINK + url,
        context : document.body,
        dataType: "json",
        type: "DELETE",
        data: data
    }).done(done).error(error);
}


/*
 * DESCRIPTION: This function is for creating (and sometimes receiving)  
 * 				information from this site using POST.
 *
 * PARAMETERS:  
 * url: This is a short version of the url and will be concatenated with
 *		the site url.
 * data: This is a json object with the parameters to be passed in the url
 * done: This is a handler function that will be executed when the conexion
 * 		 with the url is successful
 * error: This is a handler function when an error happens, this is mostly 
 *		  executed when errors are 500 or 404
 */
var postRequest = function (url,data,done,error){
    $.ajax({
        url: SITE_LINK + url,
        context : document.body,
        dataType: "json",
        type: "POST",
        data: data
    }).done(done).error(error);
}


/*
 * DESCRIPTION: This function is for updating information from this site
 * 				using PUT.
 *
 * PARAMETERS:  
 * url: This is a short version of the url and will be concatenated with
 *		the site url.
 * data: This is a json object with the parameters to be passed in the url
 * done: This is a handler function that will be executed when the conexion
 * 		 with the url is successful
 * error: This is a handler function when an error happens, this is mostly 
 *		  executed when errors are 500 or 404
 */
var putRequest = function (url,data,done,error){
    $.ajax({
        url: SITE_LINK + url,
        context : document.body,
        dataType: "json",
        type: "PUT",
        data: data
    }).done(done).error(error);
}


/*
 * DESCRIPTION: This function is showing messages in an HTML container and
 				adding classes to improve the style of the message.
 *
 * PARAMETERS:  
 * msg: This is the message.
 * container: This is the id or class of an HTML element that will contain
 *			  the message
 * classes: This are the classes that will contain the message to improve the 
 * 			design, based on bootstrap alert classes
 */
var showMessage = function (msg, container, classes){
	var content = '';

	content += 	'<div class="alert ' + classes + ' alert-dismissible fade in" role="alert">';
	content += 		'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
	content +=			'<span aria-hidden="true">&times;</span>';
	content +=		'</button>';
	content +=		msg;
	content +=	'</div>';

	$(container).html(content);

}