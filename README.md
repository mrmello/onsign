Components
----------

**src/App.js**

### 1. App

The most parent component. Composed by the Header, FormLocation, LocationResult,
WeatherResult and Notification components.   




-----
**src/components/formLocation/FormLocation.js**

### 1. FormLocation

Form component responsible for receiving the user input and
firing a request to the api   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
handleSubmit|func|yes||Function passed to redux-form tha will be called when the user
submits the form
pristine|bool|no||Redux-form attribute that informs if the form is pristine
submitting|bool|no||Redux-form attribute that informs if the form is beeing submitted
-----
**src/components/header/Header.js**

### 1. Header

Header component is responsible for showing the header bar of the application.
It receives the title from the parent component, which is App   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
title|string|yes||The string value to be shown in the header
-----
**src/components/locationResults/LocationResults.js**

### 1. LocationResults

Component responsible for showing the geolocation results for
a given user input. It runs independently from the weather api,
if an error occurs whiling fetching the weather, this component
won't be affected   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
actualLocation|array|no||Array containing the retrieved geolocation information.
-----
**src/components/notification/Notification.js**

### 1. Notification

Notification component is responsible for showing the notification alert
when any error occurs during the api requests   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
errorMessage|string|no||String containing the message to be displayed in the alert
-----
**src/components/weatherResults/WeatherResults.js**

### 1. WeatherResults

Shows the weather temperature of a given location   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
actualWeather|object|no||Object containing weather data. Its attributes are:
 - temp: current temperature, in number format
 - requestedLocation: object composed by lat and lng coordinates
-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
