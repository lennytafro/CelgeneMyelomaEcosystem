

var app = new Vue({
    el: '#app',
    data: {
        items: [],
        holdItem: [],
        show: false
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

            }).catch(function(error){
                console.log(error)
            })
        },
        getAssetContent: function(item){
            var strHTML = "<button Say what</button>";
            strHTML += item['fields']['Beacon Status'];
            strHTML += "<button>Say what</button>";
            return strHTML;
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
        },
        popScrotie: function(item){
                app.holdItem.length = 0;
                console.log("Hold Item Length: " +  app.holdItem.length);
                app.show = true;
                var message = "I am a " + item['fields']['Tactic']; + "!";
                console.log(message);
                app.holdItem.push(item);
                console.log("Hold Item Length: " +  app.holdItem.length);

        },
        killScrotie() {
            app.show = false
        }
    }
})

            // console.log('assetBucket Length: ' + assetBucket.length);