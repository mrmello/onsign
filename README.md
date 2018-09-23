How to run
----------
#### Via Docker (must have Docker running)

 `$ git clone https://github.com/mrmello/onsign.git`  
 `$ cd onsign`  
 `$ docker build -t onsign .`  
 `$ docker run -p 8080:80 onsign`  
 
 Production optmized build will be available on http://localhost:8080/
 
 #### Via yarn

 `$ git clone https://github.com/mrmello/onsign.git`  
 `$ cd onsign`  
 `$ yarn install`  
 `$ yarn run build`  
 `$ yarn global add serve`   
 `$ serve -s build`  
 
 Production optmized build will be available on http://localhost:5000/

Considerations
----------
### Assumptions
 - It was assumed that the failure of the second request (OpenWeatherAPI) should not interfere on the results for the geolocation. So, if the second request fails, the results of the Google Geolocation API will still be shown to the user.

### Folder Structure
 - The folder structuring pattern is based on the Components. In each component folder, when necessary, lays the respective reducer and saga for that given component. In this way, as the application grows, it is easier to find out wich component uses wich reducer/saga and also avoids having inumerous "index.js" files

Components
----------

**src/App.js**

### App

The most parent component. Composed by the Header, FormLocation, LocationResult,
WeatherResult and Notification components.   




-----
**src/components/formLocation/FormLocation.js**

### FormLocation

Form component responsible for receiving the user input and
firing a request to the api   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
handleSubmit|func|yes||Function passed to redux-form tha will be called when the user submits the form
pristine|bool|no||Redux-form attribute that informs if the form is pristine
submitting|bool|no||Redux-form attribute that informs if the form is beeing submitted
-----
**src/components/header/Header.js**

### Header

Header component is responsible for showing the header bar of the application.
It receives the title from the parent component, which is App   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
title|string|yes||The string value to be shown in the header
-----
**src/components/locationResults/LocationResults.js**

### LocationResults

Component responsible for showing the geolocation results for
a given user input. It runs independently from the weather api,
if an error occurs whiling fetching the weather, this component
won't be affected   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
actualLocation|array|no||Array containing the retrieved geolocation information.
-----
**src/components/notification/Notification.js**

### Notification

Notification component is responsible for showing the notification alert
when any error occurs during the api requests   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
errorMessage|string|no||String containing the message to be displayed in the alert
-----
**src/components/weatherResults/WeatherResults.js**

### WeatherResults

Shows the weather temperature of a given location   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
actualWeather|object|no||Object containing weather data. Its attributes are:
 - temp: current temperature, in number format
 - requestedLocation: object composed by lat and lng coordinates
-----

<sub>The Components section was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
