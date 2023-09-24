from serpapi import GoogleSearch
import subprocess
import config
import json
#set search
search = GoogleSearch({
    "q": "Inglorious Basterds",
    "api_key": config.api_key
  })

#get JSON result
result = search.get_json()
json_obj = json.dumps(result, indent=4)

#and save as query.json file
with open("query.json", "w") as outfile:
    outfile.write(json_obj)

#open query.json in Javascript
#print(json_obj)
subprocess.run("node movieRec.js query.json")