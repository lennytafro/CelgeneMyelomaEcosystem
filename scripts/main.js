
Vue.component('child', {
  props: ['text'],
  template: `<div>{{ text }}<div>`
});

VueScrollTo.setDefaults({
    // container: ".scrodal_container",
    container: ".scrodal_container",
    duration: 500,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})


var app = new Vue({
    el: '#app',
    data: {
        items: [],
        holdItem: [],
        show: false
    },
    mounted: function(){
       this.loadItems('Assets','All%20Asset%20Grid'); 
    },
    methods: {


        loadItems: function(table, view){
            
            // Init variables
            var self = this
            var app_id = "appvjUANOYCIhhpIC";
            var app_key = "keyuf7sO87qug1SCZ";
            this.items = []
            axios.get(  
                "https://api.airtable.com/v0/"+app_id+"/" + table + "?view=" + view,
                { 
                    headers: { Authorization: "Bearer "+app_key } 
                }
            ).then(function(response){

                self.items = response.data.records;

            }).catch(function(error){
                console.log(error)
            })
        },
        loadItemsChannelNoEmail: function(){
            
            // Init variables
            var table = "Assets";
            var view = "NoEmail";
            this.loadItems(table, view)

        },
        loadItemsChannelOnlyEmail: function(){
            
            // Init variables
            var table = "Assets";
            var view = "OnlyEmail";
            this.loadItems(table, view)
        },
        loadItemsChannelOnlyDisplay: function(){
            
            // Init variables
            var table = "Assets";
            var view = "OnlyDisplay";
            this.loadItems(table, view)
        },
        loadItemsChannelOnlyWeb: function(){
            
            // Init variables
            var table = "Assets";
            var view = "OnlyWeb";
            this.loadItems(table, view)
        },
        loadItemsBrandOnlyPOM: function(){
            
            // Init variables
            var table = "Assets";
            var view = "OnlyPOM";
            this.loadItems(table, view)
        },
        loadItemsBrandOnlyCEL: function(){
            
            // Init variables
            var table = "Assets";
            var view = "OnlyCEL";
            this.loadItems(table, view)
        },
        loadItemsBrandOnlyREV: function(){
            
            // Init variables
            var table = "Assets";
            var view = "OnlyREV";
            this.loadItems(table, view)
        },
        loadItemsPromoBrandedOnly: function(){
            
            // Init variables
            var table = "Assets";
            var view = "BrandedOnly";
            this.loadItems(table, view)
        },
        loadItemsPromoUnbrandedOnly: function(){
            
            // Init variables
            var table = "Assets";
            var view = "UnbrandedOnly";
            this.loadItems(table, view)
        },
        loadItemsAudOnlyPatient: function(){
            
            // Init variables
            var table = "Assets";
            var view = "OnlyPatient";
            this.loadItems(table, view)
        },
        loadItemsAudOnlyHCP: function(){
            
            // Init variables
            var table = "Assets";
            var view = "OnlyHCP";
            this.loadItems(table, view)
        },
        decimalAdjust:  function (type, value, exp) {
            // If the exp is undefined or zero...
            if (typeof exp === 'undefined' || +exp === 0) {
              return Math[type](value);
            }
            value = +value;
            exp = +exp;
            // If the value is not a number or the exp is not an integer...
            if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
              return NaN;
            }
            // If the value is negative...
            if (value < 0) {
              return -app.decimalAdjust(type, -value, exp);
            }
            // Shift
            value = value.toString().split('e');
            value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
            // Shift back
            value = value.toString().split('e');
            return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
        },
        round10: function(value, exp) {
          return app.decimalAdjust('round', value, exp);
        },
        getAssetThumbnail: function(item){
            var strHTML = "lennyh";
            if (item['fields']['Thumbnail']){
                strHTML += item['fields']['Thumbnail'][0]['thumbnails']['small']['url'];
            }  
            return strHTML;
        },
        getAssetImage: function(item){

            var strHTML = "";
            if (item['fields']['Thumbnail']){
                if (item['fields']['Thumbnail'][0]['thumbnails']){
                    strHTML += item['fields']['Thumbnail'][0]['thumbnails']['large']['url'];
                }  

            }  
            return strHTML;

        },
        getAssetPromoStatus: function(item){
            var strHTML = "";
            strHTML += item['fields']['Promo Status'];

            return strHTML;
        },
        getAssetMarket: function(item){
            var strHTML = "";
            strHTML += item['fields']['Market'];

            return strHTML;
        },
        getAssetLanguage:function(item){
            var strHTML = "";
            strHTML += item['fields']['Language'];

            return strHTML;
        },
        getAssetMLR: function(item){
            var strHTML = "";
            strHTML += item['fields']['Approval Status'];

            return strHTML;
        },
        getAssetName: function(item){
            var strHTML = "";
            strHTML += item['fields']['Name'];

            return strHTML;
        },
        getAssetAudience: function(item){
            var strHTML = "";
            strHTML += item['fields']['Audience'];

            return strHTML;
        },
        getAssetBrand: function(item){
            var strHTML = "";
            strHTML += item['fields']['Brand'];

            return strHTML;
        },
        getAssetBrandLogo: function(item){
            var strHTML = "";
            

            if (item['fields']['Brand Logo']){
                strHTML += item['fields']['Brand Logo'][0]['url'];
            }  
            return strHTML;
        },
        getAssetFromLine: function(item){
            var strHTML = "";
            strHTML += item['fields']['From Line'];
            return strHTML;
        },
        getAssetBRDLink: function(item){
            var strHTML = "";
            if (item['fields']['BRD']){
                strHTML += item['fields']['BRD'][0]['url'];
            }  
            return strHTML;
        },
        getAssetWebAddress: function(item){
            var strHTML = "";
            if (item['fields']['Web Address']){
                strHTML += item['fields']['Web Address'];
            }  
            return strHTML;
        },
        getAssetBRDType: function(item){
            var strHTML = "";
            if (item['fields']['BRD']){
                strHTML += item['fields']['BRD'][0]['type'];
            }
            return strHTML;
        },
        getAssetBRDSize: function(item){
            var strHTML = "";
            var intSize = 0;
            if (item['fields']['BRD']){
                intSize = app.round10((item['fields']['BRD'][0]['size'] / 1000000), -1);
            }        
            strHTML += intSize + "MB";

            return strHTML;
        },
        getBRDDocDetails: function(item){return app.getAssetBRDSize(item) + " " +  app.getAssetBRDType(item)},
        getBRDDocIcon: function(item){
            if(app.getAssetBRDType(item).includes('pdf')){
                return "assets/images/pdf-doc-icon.png";
            }elseif( app.getAssetBRDType(item).includes('word') )
            {
                return "assets/images/word-doc-icon.png";
            }
            return "assets/images/text-doc-icon.png";
        },
        getAssetDaySend: function(item){
            var strHTML = "";
            strHTML += item['fields']['Day Send'];
            return strHTML;
        },
        getAssetPACTID: function(item){
            var strHTML = "";
            strHTML += item['fields']['Celgene Tactic ID'];

            return strHTML;
        },
        getAssetTactic: function(item){
            var strHTML = "";
            strHTML += item['fields']['Tactic'];

            return strHTML;
        },
        getAssetBeaconStatus: function(item){
            var strHTML = "";
            strHTML += item['fields']['Beacon Status'];

            return strHTML;
        },
        getAssetPerformance: function(item){
            var strHTML = "";
            strHTML += item['fields']['Performance'];

            return strHTML;
        },
        getAssetGoalPercent: function(item){
            var strHTML = "";
            strHTML += item['fields']['Goal Percent'];

            return strHTML;
        },
        getAssetSubjectLine: function(item){
            
            var strHTML = "";
            if (item['fields']['Subject Line/Topic']){
                strHTML += item['fields']['Subject Line/Topic'];
            }
            else
            {
                strHTML +="N/A";
            }
            return strHTML;


            var strHTML = "";
            

            return strHTML;
        },
        getAssetDateUpdated: function(item){
            var strHTML = "";
            strHTML += item['fields']['Date Updated'];

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

        checkPerf01_RED: function(item){
            var perf = "" + item['fields']['Performance'];
            if (perf){
                if(perf.includes('Disappointing')){
                    return true;
                }else{return false;}
            }
            console.log(' perf is null ');
            return false;

        },
        checkPerf02_ORANGE: function(item){
            var perf = "" + item['fields']['Performance'];
            if (perf){
                if(perf.includes('Under')){
                    return true;
                }else{return false;}
            }
            console.log(' perf is null ');
            return false;

        },
        checkPerf03_NEUTRAL: function(item){
            var perf = "" + item['fields']['Performance'];
            if (perf){
                if(perf.includes('At')){
                    return true;
                }else{return false;}
            }
            console.log(' perf is null ');
            return false;

        },
        checkPerf04_CHARTREUSE: function(item){
            var perf = "" + item['fields']['Performance'];
            if (perf){
                if(perf.includes('Above')){
                    return true;
                }else{return false;}
            }
            console.log(' perf is null ');
            return false;

        },
        checkPerf05_GREEN: function(item){
            var perf = "" + item['fields']['Performance'];
            if (perf){
                if(perf.includes('Exceeds')){
                    return true;
                }else{return false;}
            }
            console.log(' perf is null ');
            return false;

        },


        getPerf00Icon: function(){
            return "http://www.lennytafro.com/beaconhc/celgene/assets/images/level_00_grey.png";
        },
        getPerf01Icon: function(){
            return "http://www.lennytafro.com/beaconhc/celgene/assets/images/level_01_red.png";
        },
        getPerf02Icon: function(){
            return "http://www.lennytafro.com/beaconhc/celgene/assets/images/level_02_orange.png";
        },
        getPerf03Icon: function(){
            return "http://www.lennytafro.com/beaconhc/celgene/assets/images/level_03_yellow.png";
        },
        getPerf04Icon: function(){
            return "http://www.lennytafro.com/beaconhc/celgene/assets/images/level_04_chartreuse.png";
        },
        getPerf05Icon: function(){
            return "http://www.lennytafro.com/beaconhc/celgene/assets/images/level_05_green.png";
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