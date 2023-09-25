from bs4 import BeautifulSoup
from urllib.request import Request, urlopen

#IMDB Top 250 Movies
site = "https://www.imdb.com/chart/top/"

#User agent to open URL to avoid 403 Forbidden
hdr = {'User-Agent': 'Mozilla/5.0'}
req = Request(site,headers=hdr)
page = urlopen(req)
soup = BeautifulSoup(page, features="html.parser")

