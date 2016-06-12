function myFunction() {
  var x = document.getElementById("frm1");
  var text = "";
  text += x.elements[0].value;

  callApi(text, function(response){
    res = JSON.parse(response);
    // console.log(res.data.embed_url);
    document.getElementById("gif").src = res.data.embed_url
    // document.getElementById("gif").src = res.data.image_url
  })

}

function automatic(){
    var beat = 2500
    
    var i = 0
    setInterval(function(){
      if (i<phrases.length){
        text = phrases[i].phrase
        console.log(text);
        callApi(text, function(response){
          res = JSON.parse(response);
          // console.log(res.data.embed_url);
          document.getElementById("gif").src = res.data.embed_url
          // document.getElementById("gif").src = res.data.image_url
          i ++
        })
      }
    },beat);
}

function translate(phrase){
  endpoint = "http://api.giphy.com/v1/gifs/translate"
  api_key = "dc6zaTOxFJmzC"
  built = endpoint + "?api_key=" + api_key + "&s=" + phrase.replace(" ", "+") + "&fmt=json&rating=r"
  console.log(built);
  return built
}

function random(phrase){
  tags = phrase.split(" ");
  endpoint = "http://api.giphy.com/v1/gifs/random"
  api_key = "dc6zaTOxFJmzC"
  built = endpoint + "?api_key=" + api_key + "&fmt=json&tag=" + tags.join("+")
  console.log(built);
  return built
}

function httpGetAsync(theUrl, callback){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    // console.log(xmlHttp.responseText);
    callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

function callApi(phrase, callback){
  // url = random(phrase)
  url = translate(phrase)
  httpGetAsync(url, callback)
}

function readTextFile(file)
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;
        alert(allText);
      }
    }
  }
  rawFile.send(null);
}
