'''
Copyright Esri 2023

Use case: Given a keyword(s), search for it over years from start_date to end_date

Use the Article Search API to look up articles by keyword. You can refine your search using filters and facets.
    /articlesearch.json?q={query}&fq={filter}

Example Call
    https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

Find articles with the word Pokemon that were on the print paper's front page.
    fq=Pokemon AND print_page:1 AND (print_section:("A", "1") OR (!_exists_:print_section))


'''

import sys
import os
import time
import requests
import datetime
import dateutil
import pandas as pd
from dateutil.relativedelta import relativedelta

''' CL Created NYT API Key '''
api_key = 'Vo23G48apl4GcAskUc6HgGYhf4dcUUPE'

end_date = datetime.date.today()
start_date = end_date - relativedelta(years=124)


def send_request(term):
    ''' Send request to NYT Search API for given date. '''
    api = f'https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key={api_key}'

    response = requests.get(api, params=[("fq", f"headline:{term}")]).json()
    time.sleep(6)

    return response["response"]["meta"]["hits"]


def parse_response(response):
    ''' Parse and return response as a Pandas data frame. '''

    data = {'key': []}


def build_query_string():
    print('build query string')


def build_filter_string():
    print('build filter string')


def main():
    build_query_string()
    build_filter_string()
    print(send_request('russia'))

if __name__ == "__main__":
    main()