// Constructor Function 101
$.getJSON("http://capitolwords.org/api/1/phrases/legislator.json?phrase=love&apikey=7ba96d266cc84b168fab4d878d9aa141")
   .then(function(serverResponse){
      // console.log(serverResponse)

      var mostLoveyBioguideId = serverResponse.results[0].legislator
      var loveCountNum = serverResponse.results[0].count

      var leastLovelyBioguideId = serverResponse.results[serverResponse.results.length - 1].legislator

      var mostLoveyCongressPerson = new CongressPerson(mostLoveyBioguideId) // * 4000
      var leastLoveyCongressPerson = new CongressPerson(leastLovelyBioguideId) // * 4000

      console.log(mostLoveyCongressPerson.constructor)

      var someObj = {
         name: 'bill', age: 33, isRetired: false
      } // new Object(...)

      console.log('checking for isRetired prop : ', someObj.hasOwnProperty('isRetired'))

      mostLoveyCongressPerson.fetchLegislator().then(function(serverRes){
         console.log(serverRes)
         var parsedData = mostLoveyCongressPerson.parseResponse(serverRes)
         console.log('parsed data', parsedData)

         mostLoveyCongressPerson.dataAttributes = parsedData
         mostLoveyCongressPerson.dataAttributes.loveCount = loveCountNum

         console.log(mostLoveyCongressPerson)
         document.querySelector('#app-container').innerHTML = mostLoveyCongressPerson.createHTMLCard()

      })
   })

var CongressPerson = function(id){
   this.bioId = id


}

CongressPerson.prototype.fetchLegislator = function(){
   return $.getJSON("https://congress.api.sunlightfoundation.com/legislators?apikey=7ba96d266cc84b168fab4d878d9aa141&bioguide_id="+this.bioId)
}

CongressPerson.prototype.parseResponse = function(rawResponse){
   return rawResponse.results[0]
}

CongressPerson.prototype.createHTMLCard = function(){
   console.log(this)
   var bigStr = '<div class="media">'
         bigStr += '<div class="media-left">'
         bigStr +=    '<img class="media-object" src="https://robohash.org/'+this.bioId+'/?size=50x50" alt="...">'
         bigStr += '</div>'
         bigStr += '<div class="media-body">'
         bigStr +=   '<h4 class="media-heading">' + this.dataAttributes.first_name + " " + this.dataAttributes.last_name + '</h4>'
         bigStr +=   '<p>' + this.dataAttributes.state + ' | ' + this.dataAttributes.party + '</p>'
         bigStr += '</div>'
         bigStr +=  '</div>'

       return bigStr
}
