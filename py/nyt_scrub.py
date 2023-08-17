'''
•	Pseudo code:
Use the NYT API to pull a table of article headlines for each month from 1900 to present, filtering to only include articles which are type “article” and on page 1 or section front page.
Create a list of keywords for every country in the world, excluding the US (example – Russia would include keywords Russia, Soviet, Soviet Union, Russian, Moscow, etc.)
Return the number of articles in each month with each country in the headline (example – for each month, the number of headlines with a Russian keyword in the title, compared to the same for every country in the world)
Return the most mentioned country in every month from 1900-present as a table or list
•	API Key:
Vo23G48apl4GcAskUc6HgGYhf4dcUUPE
•	Article Search API info:
https://developer.nytimes.com/docs/articlesearch-product/1/overview
•	Demo output:
https://pudding.cool/2018/12/countries/
•	Starter code:
https://towardsdatascience.com/collecting-data-from-the-new-york-times-over-any-period-of-time-3e365504004
'''

import os
import json
import time
import requests
import datetime
import dateutil
import pandas as pd
from dateutil.relativedelta import relativedelta

end = datetime.date.today()
start = end - relativedelta(years=124)
months_in_range = [x.split(' ') for x in pd.date_range(start, end, freq='MS').strftime("%Y %-m").tolist()]

def send_request(date):
    '''Sends a request to the NYT Archive API for given date.'''
    base_url = 'https://api.nytimes.com/svc/archive/v1/'
    url = base_url + '/' + date[0] + '/' + date[1] + '.json?api-key=' + 'Vo23G48apl4GcAskUc6HgGYhf4dcUUPE'
    response = requests.get(url).json()
    time.sleep(6)
    return response


def is_valid(article, date):
    '''An article is only worth checking if it is in range, and has a headline.'''
    is_in_range = date > start and date < end
    has_headline = type(article['headline']) == dict and 'main' in article['headline'].keys()
    return is_in_range and has_headline


def parse_response(response):
    '''Parses and returns response as pandas data frame.'''
    data = {'headline': [],  
        'date': [], 
        'doc_type': [],
        'material_type': [],
        'section': [],
        'keywords': []}
    
    articles = response['response']['docs'] 
    for article in articles: # For each article, make sure it falls within our date range
        date = dateutil.parser.parse(article['pub_date']).date()
        if is_valid(article, date):
            data['date'].append(date)
            data['headline'].append(article['headline']['main']) 
            if 'section' in article:
                data['section'].append(article['section_name'])
            else:
                data['section'].append(None)
            data['doc_type'].append(article['document_type'])
            if 'type_of_material' in article: 
                data['material_type'].append(article['type_of_material'])
            else:
                data['material_type'].append(None)
            keywords = [keyword['value'] for keyword in article['keywords'] if keyword['name'] == 'subject']
            data['keywords'].append(keywords)
    return pd.DataFrame(data) 


def get_data(dates):
    '''Sends and parses request/response to/from NYT Archive API for given dates.'''
    total = 0
    print('Date range: ' + str(dates[0]) + ' to ' + str(dates[-1]))
    if not os.path.exists('headlines'):
        os.mkdir('headlines')
    for date in dates:
        response = send_request(date)
        df = parse_response(response)
        total += len(df)
        df.to_csv('headlines/' + date[0] + '-' + date[1] + '.csv', index=False)
        print('Saving headlines/' + date[0] + '-' + date[1] + '.csv...')
    print('Number of articles collected: ' + str(total))

get_data(months_in_range)