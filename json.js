/**
 * Created by zaclee on 9/30/16.
 */
var display = document.getElementById('result');
var request = new XMLHttpRequest();
var output = "";
var data_json = "";


request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status ==200) {
        data_json = JSON.parse(request.response);

        for(var i=1; i<1241; i++) {
            if(data_json.data[i][10] == "Golden Gate Bridge") {
                output += "Title : " + data_json.data[i][8] + "</br>";
                output += "Release year: " + data_json.data[i][9] + "</br>";
                output += "Production Company: " + data_json.data[i][12] + "</br>" + "</br>";

            }
        }
        display.innerHTML = output;
    }
};

request.send();