from serpapi import GoogleSearch
import subprocess
import config
import json

#set searches
movieSearch = GoogleSearch({
    "q": "Inglorious Basterds",
    "api_key": config.api_key
  })

rcmmndSearch = GoogleSearch ({
    "q": "Inglorious Basterds" + "related movies",
    "api_key": config.api_key
})

#get JSON result
movieResult = movieSearch.get_json()
rcmmndResult = rcmmndSearch.get_json()

#write as as movieQPage.json and movieRPage.json files
with open("moviePage.json", "w") as outfile:
    json.dump(movieResult, outfile, indent=4)
with open("rcmmndPage.json", "w") as outfile:
    json.dump(rcmmndResult, outfile, indent=4)

#open query.json in Javascript
#print(json_obj)
subprocess.run("node movieRec.js")