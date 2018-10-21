# weather-widget
weather widget on jquery

Ex.:
$('div').weather(options)

    options = {
        city: 'Kharkiv',          //city for weather forecast. If city !== null, will be ignore geolocation. Default: null
        tempUnit: 'C',            //temperature unit: C or K. Default: C
	displayDescription: true, //display information about weather forecast. Default: true
	displayMinMaxTemp: true,  //display information about minimal and maximal temperature. Default: true
        displayWind: false,       //display information about wind. Default: false
        displayHumidity: false,   //display information about humidity. Default: false
	fixLocation: false,	  //fixed location. Default: false
        autocompleteMinLength: 3, //minimal length of input city for request to server. Default: 3
        url: 'url',               //url of weather api server
	urlParams: {
		appid: '92dc516761ab79d7549453f569efe533',	//key of weather api
		units: 'metric',                                //units format: metric, imperial
	        lang: 'en',               			//language for response weather API, ex: en, ru, ua, etc. Default: en
	}
    }


# 19/01
1. fixed error up & down keys on the empty list
2. added reset of selectedIndex
3. fixed city with "spaces" name
4. corrected expression in arguments of functions
5. corrected long expression convert to a variable
6. added focus to input
7. moved autocomplete to the plugin
8. code refactoring

# 25/01
1. changed api key for openweathermap.org
2. moved render from "_withoutGetLocation" to promise in "_mainChain"
3. added function autocompleteTransformData in module autocomplete