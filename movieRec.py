from serpapi import GoogleSearch
import sys
import subprocess
import config
import json

def main(argv):
    #set searches
    movieSearch = GoogleSearch({
        "q": argv[0],
        "api_key": config.api_key
    })

    rcmmndSearch = GoogleSearch ({
        "q": argv[0] + " related movies",
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

if __name__ == "__main__":
   main(sys.argv[1:])