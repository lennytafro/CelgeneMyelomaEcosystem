var people = [
        {
            "id": "rectIwFlyxyJlRamZ",
            "fields": {
                "Audience": [
                    "Patient/Caregiver"
                ],
                "Market": [
                    "🇺🇸 US"
                ],
                "Language": "English",
                "Image to Beacon": true,
                "Channel": [
                    "recZXTEiGrHXnhv4i"
                ],
                "Campaign": [
                    "rec3peG2wwE1Zg3Id"
                ],
                "Beacon Status": "Items Outstanding",
                "Promo Status": "Branded",
                "Status": "Current - In Use",
                "Approval Status": "MLR Approved",
                "Brand": [
                    "recNA17l9RbxE8z9D"
                ],
                "Thumbnail": [
                    {
                        "id": "attyHsYgtzGmaoqSG",
                        "url": "https://dl.airtable.com/y8Bn5sRxTOKJWxEoOzHm_Screenshot%202017-11-03%2015.23.25.png",
                        "filename": "Screenshot 2017-11-03 15.23.25.png",
                        "size": 1045680,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://dl.airtable.com/RuSNgjXOTfmIP8CLI2Vw_small_Screenshot%202017-11-03%2015.23.25.png",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://dl.airtable.com/hOwqWAicQLinkYodvPW9_large_Screenshot%202017-11-03%2015.23.25.png",
                                "width": 512,
                                "height": 655
                            }
                        }
                    }
                ],
                "Name": "Pomalyst Patient Website",
                "Date Added": "2017-11-03"
            },
            "createdTime": "2017-11-03T18:29:39.000Z"
        },
        {
            "id": "recz0kRNQl9X7GCXM",
            "fields": {
                "Audience": [
                    "HCP"
                ],
                "Market": [
                    "🇺🇸 US"
                ],
                "Image to Beacon": true,
                "Beacon Status": "Items Outstanding",
                "Promo Status": "Branded",
                "Status": "Current - In Use",
                "Brand": [
                    "recNA17l9RbxE8z9D"
                ],
                "Thumbnail": [
                    {
                        "id": "attCQpW59h4IqTUGb",
                        "url": "https://dl.airtable.com/YQ1zs6cjR4Ctl8cDYrex_Screenshot%202017-11-03%2015.23.48.png",
                        "filename": "Screenshot 2017-11-03 15.23.48.png",
                        "size": 886887,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://dl.airtable.com/usIWMlUFRuuaPjyBiERM_small_Screenshot%202017-11-03%2015.23.48.png",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://dl.airtable.com/ZG5XG2rQS6uCewFatw1q_large_Screenshot%202017-11-03%2015.23.48.png",
                                "width": 512,
                                "height": 648
                            }
                        }
                    }
                ],
                "Name": "Pomalyst HCP Website",
                "Date Added": "2017-11-06"
            },
            "createdTime": "2017-11-06T14:11:07.000Z"
        },
        {
            "id": "recndXHzZScyIvHLw",
            "fields": {
                "Audience": [
                    "Patient/Caregiver"
                ],
                "Market": [
                    "🇺🇸 US"
                ],
                "Process Flow Type": "Web",
                "Language": "English",
                "Image to Beacon": true,
                "Channel": [
                    "recZXTEiGrHXnhv4i"
                ],
                "Campaign": [
                    "recDXMbeqvWWZbExf"
                ],
                "Date Updated": "2017-07-10",
                "Beacon Status": "Items Outstanding",
                "Promo Status": "Branded",
                "Status": "Current - In Use",
                "Approval Status": "MLR Approved",
                "Brand": [
                    "recNFuPaqeAUL6Ozf"
                ],
                "Thumbnail": [
                    {
                        "id": "attFlG4rhlQiaWgqE",
                        "url": "https://dl.airtable.com/yhPyvD3R4ihd2BegCmDL_RevPatBrndWeb.png",
                        "filename": "RevPatBrndWeb.png",
                        "size": 1187664,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://dl.airtable.com/crcyxNI2RZiWpXcCnuKv_small_RevPatBrndWeb.png",
                                "width": 28,
                                "height": 36
                            },
                            "large": {
                                "url": "https://dl.airtable.com/UcU4GZYRySYd3Rirl4mQ_large_RevPatBrndWeb.png",
                                "width": 512,
                                "height": 659
                            }
                        }
                    }
                ],
                "Performance": "Above Expectations",
                "Name": "Revlimid Patient Website",
                "Date Added": "2017-07-10"
            },
            "createdTime": "2017-07-10T18:56:22.000Z"
        }
    ];





module.exports = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  res.write(JSON.stringify(people));
  res.end();
};




