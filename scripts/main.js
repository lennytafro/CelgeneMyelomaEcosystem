var vm = new Vue({
  el: '#frenchfry',
  data: {
    missingitem: true
  },
  computed: {
    // a computed getter
    // checkPresent: function () {
    //   // `this` points to the vm instance
        findItem : function(){
             missingitem = false;
            return this.missingitem
        }
    //   return this.missingitem
    // }
  }
})

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

// var assetBucket=[];

var app = new Vue({
    el: '#app',
    data: {
        items: []
    },
    mounted: function(){
       this.loadItems(); 
    },
    methods: {
        loadItems: function(){
            
            // Init variables
            var self = this
            var app_id = "appvjUANOYCIhhpIC";
            var app_key = "keyuf7sO87qug1SCZ";
            this.items = []
            axios.get(
                
                "https://api.airtable.com/v0/"+app_id+"/Assets?view=All%20Asset%20Grid",
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){


                self.items = response.data.records;
                // assetBucket = self.items;
                


            }).catch(function(error){
                console.log(error)
            })
        },
        filterItems: function(items) {
            return items.filter(function(item) {
              return item.price > 10;
            })
        },
        checkStatus: function(item){
            var stus = item['fields']['Beacon Status'];
            if(stus.includes('Items All In')){
                return true;
            }
            else{return false;}
        },
        checkAud_HCP: function(item){
            var aud = "" + item['fields']['Audience'];
            if (aud){
                if(aud.includes('HCP')){
                    return true;
                }else{return false;}
            }
            console.log(' aud is null ');
            return false;

        },
        checkAud_Patient: function(item){
            var aud = "" + item['fields']['Audience'];
            if (aud){
                if(aud.includes('Patient')){
                    return true;
                }else{return false;}
            }
            console.log(' aud is null ');
            return false;
        },
        getHCPIcon: function(){
            return "http://www.lennytafro.com/beaconhc/celgene/assets/images/hcp.png";
        },
        getPATIcon: function(){
            return "http://www.lennytafro.com/beaconhc/celgene/assets/images/patient.png";
        },
        say: function (message) {
          alert(message)
        },
        popMe: function(item){
            var message = "I am a " + item['fields']['Tactic']; + "!";
            alert(message)
        }
    }
})

            // console.log('assetBucket Length: ' + assetBucket.length);