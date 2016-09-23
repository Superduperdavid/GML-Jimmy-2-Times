var HTTPS = require('https');
var cool = require('cool-ascii-faces');
var botID = process.env.BOT_ID;
function sendText(text){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}

function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
  var text = post.text;
  var user_id = post.user_id;
  
  if(text.indexOf("changed name to") > -1 && user_id == 0){
     postMessage("I liked the old one better... MUCH better...");
    this.res.end();
    
  }
}




function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexARI = /^\/ari/;botRegexATL = /^\/atl/;botRegexBAL = /^\/bal/;botRegexBUF = /^\/buf/;botRegexCAR = /^\/car/;
      botRegexCHI = /^\/chi/;botRegexCIN = /^\/cin/;botRegexCLE = /^\/cle/;botRegexDAL = /^\/dal/;botRegexDEN = /^\/den/;
      botRegexDET = /^\/det/;botRegexGB = /^\/gb/;botRegexHOU = /^\/hou/;botRegexIND = /^\/ind/;botRegexJAC = /^\/jac/;
      botRegexKC = /^\/kc/;botRegexLA = /^\/la/;botRegexMIA = /^\/mia/;botRegexMIN = /^\/min/;botRegexNE = /^\/ne/;
      botRegexNO = /^\/no/;botRegexNYG = /^\/nyg/;botRegexNYJ = /^\/nyj/;botRegexOAK = /^\/oak/;botRegexPHI = /^\/phi/;
      botRegexPIT = /^\/pit/;botRegexSD = /^\/sd/;botRegexSEA = /^\/sea/;botRegexSF = /^\/sf/;botRegexSTL = /^\/stl/;
      botRegexTB = /^\/tb/;botRegexTEN = /^\/ten/;botRegexWAS = /^\/was/;botRegexGML = /^\/gml/
      botTRYME = /^\/tryme/;botRegexPDL = /^\/PDL/i;botRegexNXT = /^\/whosnext/i;botRegexSCH = /^\/schedule/;botRegexRO = /^\/roster/i;
      botRegexDstand = /^\/division/;botRegexCstand = /^\/conference/;botRegexPow = /^\/power/;botRegexHurt = /^\/hurt/i;
      botRegexSh = /^\/schedulingrules/;botRegexRules = /^\/rules/;botRegexDIS = /^\/disconnect/;botRegexSalt = /^\/salt/;botRegexAd=/^\/advance/;
      botRegexdying = /^\/dying/;botRegexYoda = /^\/yoda/;botRegexMore = /^\/more/;botRegexDod = /^\/dodging/;botRegexNoplay = /^\/sike/;
      botRegexSimhurt = /^\/simplyhurt/;botRegexPanda = /^\/panda/;botRegexSYS = /^\/changed name to/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","LA","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegexARI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCcxabxoJHG9cnBV4Gsug8Sg");
    this.res.end();
  }
  else if(request.text && botRegexATL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/XlPoLaR04");
    this.res.end();
  }
  else if(request.text && botRegexBAL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/Fussballer890");
    this.res.end();
  }
  else if(request.text && botRegexBUF.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/GratwickBills");
    this.res.end();
  }
  else if(request.text && botRegexCAR.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/thatsjt");
    this.res.end();
  }
  else if(request.text && botRegexCHI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCMUIBjtzWyZMFxhj45mdvBw");
    this.res.end();
  }
  else if(request.text && botRegexCIN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCq5ezcTjAcKIInqbL1xwd_g");
    this.res.end();
  }
  else if(request.text && botRegexCLE.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://m.youtube.com/channel/UC9RnpVjx52zLSrA7_arAwAQ");
    this.res.end();
  }
  else if(request.text && botRegexDAL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCZUOLrKldRUxKdhpy0O6-mw");
    this.res.end();
  }
  else if(request.text && botRegexDEN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/LunarFuzionGaming");
    this.res.end();
  }
  else if(request.text && botRegexDET.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UClvsLwLu_dckd1CB9fbtT4A");
    this.res.end();
  }
  else if(request.text && botRegexGB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/rafbretas");
    this.res.end();
  }
  else if(request.text && botRegexHOU.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/dannewton4");
    this.res.end();
  }
  else if(request.text && botRegexIND.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/badcapone1");
    this.res.end();
  }
  else if(request.text && botRegexJAC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/clyne335");
    this.res.end();
  }
  else if(request.text && botRegexKC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCUQ_G9lIXxMQnP4h55hqjKw");
    this.res.end();
  }
  else if(request.text && botRegexLA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCVBVl8UHyVjhteFPyXAAbwA");
    this.res.end();
  }
  else if(request.text && botRegexMIA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCo22yos1aOqsbBb0YHzCd7A");
    this.res.end();
  }
  else if(request.text && botRegexMIN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCH4DdBg3Zgt-b4Se8HynkMg");
    this.res.end();
  }
  else if(request.text && botRegexNE.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCSq9JjD1xP3joKVZcHM4UoA");
    this.res.end();
  }
  else if(request.text && botRegexNO.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCHbPkEVjmjL_EeXXoPrDTjA");
    this.res.end();
  }
  else if(request.text && botRegexNYG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCZiAURa0_KddHWKsnr51bUw");
    this.res.end();
  }
  else if(request.text && botRegexNYJ.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCYEco75Hxqh73pHWbFW9-kA");
    this.res.end();
  }
  else if(request.text && botRegexOAK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/DJJaySkillz");
    this.res.end();
  }
  else if(request.text && botRegexPHI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCesEoyrXzsuP8sq0AeW0OjQ");
    this.res.end();
  }
  else if(request.text && botRegexPIT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCfxUZY9yOW7HD6BkBuj361g");
    this.res.end();
  }
  else if(request.text && botRegexSD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/pimpdaddysanta");
    this.res.end();
  }
  else if(request.text && botRegexSEA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UClvsLwLu_dckd1CB9fbtT4A");
    this.res.end();
  }
  else if(request.text && botRegexSF.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/ctopher2291");
    this.res.end();
  }
  else if(request.text && botRegexTB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UCGeXJYbpRIZMs33CLCoZ87A");
    this.res.end();
  }
  else if(request.text && botRegexTEN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/sds606");
    this.res.end();
  }
  else if(request.text && botRegexWAS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/user/Rwinne1");
    this.res.end();
  }
  else if(request.text && botRegexGML.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/channel/UClvsLwLu_dckd1CB9fbtT4A");
    this.res.end();
  }    
  else if(request.text && botTRYME.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1ryMWVFRb7O7ozjpDokBm7R9wsAb6D01UVmM4qph29Rc/pub");
    this.res.end();
  }
  else if(request.text && botRegexPDL.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/GML/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }
  else if(request.text && botRegexNXT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/GML/team/"+request.text.substring(10,13)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexSCH.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/GML/schedules");
    this.res.end();
  }
  else if(request.text && botRegexRO.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/gml/team/"+request.text.substring(8,11)+"/roster");
    this.res.end();
  }
  else if(request.text && botRegexDstand.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/gml/standings");
    this.res.end();
  }
  else if(request.text && botRegexCstand.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/gml/standings/conference");
    this.res.end();
  }
  else if(request.text && botRegexPow.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/gml/standing/ranking");
    this.res.end();
  }
  else if(request.text && botRegexHurt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/gml/players?name=&position=all&team="+request.text.substring(6,9)+"&injured=1");
    this.res.end();
  }
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/16cJD6ers2J59C9t3_fTZdvtz--membWK1-DrwN6KIWM/pub");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://daddyleagues.com/gml/rules");
    this.res.end();
  }
  else if(request.text && botRegexDIS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1_g6eZbrpy3EX59ULvhayeISV9xfk00Rgb5mJm3lF_sU/pub");
    this.res.end();
  }
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i1.kym-cdn.com/photos/images/facebook/000/918/952/d5a.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexdying.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/xgtsl.jpg");
    this.res.end();
  }
  else if(request.text && botRegexYoda.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://memedad.com/memes/977947.jpg");
    this.res.end();
  }
  else if(request.text && botRegexMore.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://memedad.com/memes/977979.jpg");
    this.res.end();
  }
  else if(request.text && botRegexDod.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://memedad.com/memes/977981.jpg");
    this.res.end();
  }
  else if(request.text && botRegexNoplay.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/tcsz3.jpg");
    this.res.end();
  }
  else if(request.text && botRegexSimhurt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://memedad.com/memes/977993.jpg");
    this.res.end();
  }
  else if(request.text && botRegexPanda.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/480x204.gif.461387d8207a487094c05503f5228dd7");
    this.res.end();
  }
  else if(request.text && botRegexSYS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("My NEW name");
    this.res.end();  
   }
  }  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
