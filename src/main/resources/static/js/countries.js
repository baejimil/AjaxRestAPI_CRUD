var buttonLoad;
var dropdownCountry;
var buttonAdd;
var fieldCountryName;
var labelCountryName;
var buttonUpdate;
var buttonDelete;

$(document).ready(function() {
    buttonLoad = $("#buttonLoadCountries");
	dropdownCountry = $("#dropDownCountries");
	fieldCountryName = $("#fieldCountryName");
	labelCountryName = $("#LabelCountryName");
	buttonAdd = $("#buttonAdd");
	buttonUpdate = $("#buttonUpdate");
	buttonDelete = $("#buttonDelete");
	
    buttonLoad.click(function() {
        loadCountries();
    });
    
    buttonAdd.click(function() {
    	addCountry();
    });
    
    buttonUpdate.click(function() {
    	updateCountry();
    });
    
    buttonDelete.click(function() {
    	deleteCountry();
    });
    
    dropdownCountry.on("change", function(){
    	changeFormStateToSelectCountry();
    });
});

function changeFormStateToSelectCountry() {
	selectedCountryName = $("#dropDownCountries option:selected").text();
	fieldCountryName.val(selectedCountryName);
	labelCountryName.text("Selected Country: ");
	
	buttonAdd.prop("value", "New");
	
	buttonUpdate.prop("disabled", false);
	buttonDelete.prop("disabled", false);
}

function loadCountries() {
    url = "countries/list";
    
    $.get(url, function(responseJson) {
    	dropdownCountry.empty();
    	
    	$.each(responseJson, function(index, country) {
    		$("<option>").val(country.id).text(country.name).appendTo(dropdownCountry);
    	});

    }).done(function() {
    	buttonLoad.val("Refresh Country List");
    }).fail(function() {
    
    });
}

function addCountry() {
	url = "countries/save";
	countryName = fieldCountryName.val();
	jsonData = {name: countryName};
	
	$.ajax({
		type: "POST",
		url: url,
		data: JSON.stringify(jsonData),
		contentType: "application/json"
	}).done(function(countryId) {
		selectNewlyAddedCountry(countryId, countryName);
		alert("Success");
	}).fail(function() {
		alert("Failed");
	});
}

function updateCountry() {
	url = "countries/save";
	countryId = dropdownCountry.val();
	countryName = fieldCountryName.val();
	jsonData = {id: countryId, name: countryName};
	
	$.ajax({
		type: "POST",
		url: url,
		data: JSON.stringify(jsonData),
		contentType: "application/json"
	}).done(function(countryId) {
		$("#dropDownCountries option:selected").text(countryName);
		changeFormsStateToNewCountry();
	}).fail(function() {
		alert("Failed");
	});
}

function deleteCountry() {
	countryId = dropdownCountry.val();
	url = "countries/delete/" + countryId;
	
	$.get(url).done(function() {
		$("#dropDownCountries option:seleted").remove();
		changeFormsStateToNewCountry();
	});
}

function changeFormsStateToNewCountry() {
	buttonAdd.val("Add");
	labelCountryName.text("Country Name: ");
	buttonUpdate.prop("disabled", true);
	buttonDelete.prop("disabled", true);
	
	fieldCountryName.val("").focus();
}


function selectNewlyAddedCountry(countryId, countryName) {
	$("<option>").val(countryId).text(countryName).appendTo(dropDownCountry);
	$("#dropDownCountries option[value='" + countryId + "']").prop("selected", true);
	fieldCountryName.val("").focus();
}
