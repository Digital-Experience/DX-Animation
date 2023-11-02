"""
root_url: https://space.skyrocket.de/doc_chr/lau1957.htm

"""

import requests
from bs4 import BeautifulSoup
import pandas as pd

year_start = 2007
year_end = 2008

df = pd.DataFrame(columns = ["ID", "Date", "Payload", "Launch Vehicle", "Launch Site", "Notes"])


def get_url(year):
    return f"https://space.skyrocket.de/doc_chr/lau{year}.htm"


def parse_html(html, table, id):
    soup = BeautifulSoup(html.content, "html.parser")
    return soup.find(table, id=id)
    

def main():
    for i in range(year_start, year_end+1, 1):
        print(f'Working on {i}...')
        page = requests.get(get_url(i))
        table = parse_html(page, 'table', "chronlist")

        for i, row in enumerate(table.find_all('tr')[1:]):
            print(f'Row {i}')
            dat = row.find('th', {"class": "level2"})
            if not dat:
                temp_row = []
                for td in row:
                    if td != "" and td != "\n":
                        print(td)
                        temp_row.append(td.text)
                
                df_length = len(df)
                try:
                    df.loc[df_length] = temp_row
                except:
                    print("Error!") # @TODO Handle exception properly
    
    df.to_excel("output.xlsx")

main()