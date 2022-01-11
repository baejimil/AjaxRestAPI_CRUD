<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head class="container">
    <script src="//code.jquery.com/jquery-3.6.0.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous">

    <link href="navbar-top.css" th:href="@{/navbar-top.css}" rel="stylesheet">
</head>
<body>
<div>
    <div>
        <input type="button" value="Load Country List" id="buttonLoadCountries" class="btn btn-primary m-2" />
    </div>
    <div>
        <select id="dropDownCountries" class="form-control m-2" style="height: 300px" size="3">
            
        </select>
    </div>
    <div class="form-group row">
        <label for="countryName" class="col-sm-2 col-form-label mt-2" id="LabelCountryName">Country Name:</label>
        <div>
            <input type="text" class="form-control mt-2" id="fieldCountryName" required />
        </div>
        <div class="col-sm-4 mt-2">
            <input type="button" value="Add" id="buttonAdd" class="btn btn-primary mr-2" />
            <input type="button" value="Update" id="buttonUpdate" class="btn btn-primary mr-2" />
            <input type="button" value="Delete" id="buttonDelete" class="btn btn-primary" />
        </div>
    </div>
</div>
<script src="/js/countries.js"></script>
</body>
</html>

