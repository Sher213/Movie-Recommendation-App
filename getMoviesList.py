from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import re

#IMDB Top 250 Movies
site = "https://www.imdb.com/chart/top/"

#User agent to open URL to avoid 403 Forbidden and get soup
hdr = {'User-Agent': 'Mozilla/5.0'}
req = Request(site,headers=hdr)
page = urlopen(req)
soup = BeautifulSoup(page, features="html.parser")

#save movies previews to movies.html
with open("movies.html", "w", encoding='utf-8') as file:
    myLis = soup.find_all("li", {"class": "ipc-metadata-list-summary-item"})
    file.write(str(myLis))

#get movie titles to string
myh3s = soup.find_all("h3", {"class":"ipc-title__text"})[1:251]
newh3s = list(e.text.strip() for e in myh3s)

#regex to remove all non-alphabet chars or non spaces
r = re.compile('^[0-9]*[.]{1}\s')
movieNames = list(r.sub('', e) for e in newh3s)

#save movie names to txt file
file = open('movies.txt','w')
for name in movieNames:
	file.write(name +"\n")
file.close()
