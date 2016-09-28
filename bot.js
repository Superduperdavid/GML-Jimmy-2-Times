var HTTPS = require('https');
var cool = require('cool-ascii-faces');
var botID = process.env.BOT_ID;

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
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexATL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexBAL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexBUF.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexCAR.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexCHI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexCIN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexCLE.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexDAL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexDEN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexDET.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexGB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexHOU.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexIND.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexJAC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexKC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexLA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexMIA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexMIN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexNE.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexNO.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexNYG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexNYJ.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexOAK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexPHI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexPIT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexSD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexSEA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexSF.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexTB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexTEN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexWAS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexGML.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }    
  else if(request.text && botTRYME.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexPDL.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexNXT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexSCH.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexRO.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexDstand.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexCstand.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexPow.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexHurt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexDIS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexdying.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexYoda.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexMore.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexDod.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexNoplay.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexSimhurt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexPanda.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();
  }
  else if(request.text && botRegexSYS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=3XGAmPRxV48");
    this.res.end();  
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
