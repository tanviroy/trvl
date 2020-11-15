#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Nov 13 11:46:41 2020

@author: Ruthu
Copyright Ruthu Hulikal Rooparaghunath 2020

references:
    https://www.tutorialspoint.com/fetch-all-href-link-using-selenium-in-python#:~:text=We%20can%20fetch%20href%20links,use%20the%20method%20find_elements_by_tag_name().
    https://stackoverflow.com/questions/20986631/how-can-i-scroll-a-web-page-using-selenium-webdriver-in-python
    https://stackoverflow.com/questions/55910405/how-to-get-src-of-image-using-xpath-in-selenium-python
    https://stackoverflow.com/questions/54862426/python-selenium-get-href-value
    https://stackoverflow.com/questions/30232344/insert-a-string-before-a-substring-of-a-string/30232424
    https://www.geeksforgeeks.org/writing-csv-files-in-python/
"""

# import required packages
from selenium import webdriver
import time # for sleep time
import csv

# start chrome driver
driver = webdriver.Chrome("/usr/local/bin/chromedriver")



############ get list of URLs of rooms for each country ############

# define urls for each country
italy = 'https://www.airbnb.co.in/s/italy/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query&gps_lat=12.9383783&gps_lng=80.23961779999999'
france = 'https://www.airbnb.co.in/s/france/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query&gps_lat=12.9383783&gps_lng=80.23961779999999'
mexico = 'https://www.airbnb.co.in/s/mexico/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query&gps_lat=12.9383783&gps_lng=80.23961779999999'
india = 'https://www.airbnb.co.in/s/india/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query&gps_lat=12.9383783&gps_lng=80.23961779999999'
us = 'https://www.airbnb.co.in/s/united-states/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&source=structured_search_input_header&search_type=search_query&gps_lat=12.9383783&gps_lng=80.23961779999999'

# initialize lists for link storage
urls = [italy, france, mexico, india, us]
rooms = []

# scrape all room url links for each country
for url in urls:
    driver.get(url)
    lnks=driver.find_elements_by_tag_name("a")
    for i in range(0,len(lnks),2):
        if '/rooms/' in lnks[i].get_attribute('href'):
            rooms.append(lnks[i].get_attribute('href'))
    
        
############ define functions to scrape different kinds of data ############
            
def get_info():
    """
    scrapes name, location, host, rules, policies
    """
    # Scrape room name
    name = driver.find_element_by_css_selector('._14i3z6h').text
    # Scrape room location
    location = driver.find_element_by_css_selector('._5twioja').text
    # scrape information about host, etc
    host_and_specs = driver.find_element_by_css_selector('._tqmy57').text
    # scrape room rules and remove utf encoded text
    house_rules = driver.find_element_by_css_selector('._m9x7bnz:nth-child(1)').text
    house_rules = house_rules.replace(u"\U000f0025", u"")
    house_rules = house_rules.replace(u"\U000f0104", u"")
    house_rules = house_rules.replace(u"\U000f1908", u"")
    house_rules = house_rules.replace(u"\U000f1902", u"")
    house_rules = house_rules.replace(u"\U000f1905", u"")
    house_rules = house_rules.replace(u"\U000f1906" and u"\U000f1907", u"")
    # remove newline characters, rejoin resulting list into string
    house_rules_string = house_rules.split('\n')
    actual_house_rules = ' '.join(house_rules_string)    
    # scrape cancellation policy, 
    cancellation_policy = driver.find_element_by_css_selector('._m9x7bnz:nth-child(3)')
    policy = cancellation_policy.text.split('\n')
    cancellations = []
    for thing in range(0,len(policy),1):
        cancellations.append(policy[thing])
    return (name,location,host_and_specs,actual_house_rules,cancellations[1])

def get_amenities_url(url):
    """
    get amenities for room by adding /amenities to room url path
    """
    insert_into = url
    before = "?"
    insert = "/amenities"

    idx = insert_into.index(before)
    insert_into = insert_into[:idx] + insert + insert_into[idx:]
    return insert_into

def get_amenities():
    """
    scrape amenities from url path returned by get_amenities_url
    """
    amenities_basic = driver.find_element_by_css_selector('._aujnou').text
    return amenities_basic


def get_pictures_url(url):
    """
    get photos for room by adding /photos to room url path
    """
    insert_into = url
    before = "?"
    insert = "/photos"
    
    idx = insert_into.index(before)
    insert_into = insert_into[:idx] + insert + insert_into[idx:]
    return insert_into


def get_photos():
    """
    scrape photos from url path returned by get_pictures_url
    done by finding 'src' attributes of all 'img' elements
    """
    lnks=driver.find_elements_by_tag_name("img")
    image_sources = []
    for lnk in lnks:
        image_sources.append(lnk.get_attribute('src'))
    return image_sources
 
    

############ scrape required data from each airbnb room ############

# list that stores room data as sublists, one per each room
data = []
# counts the room number we're scraping
# (eg. after 5 rooms, url_number = 5)
url_number = 0

# open chrome driver window
driver = webdriver.Chrome("/usr/local/bin/chromedriver")

def keep_scraping(url_number):
    # scrape 200 rooms
    while url_number < 200:
        # update room number we're scraping
        url_number+=1
        print("Scraping site ", url_number)
        # get room url
        url = rooms[url_number]
        driver.get(url)
        # wait for page to load
        time.sleep(3)
        # scrape basic room info
        name,location,host_and_specs,house_rules,cancellations = get_info()
        
        # try to scrape about info from room
        # if there is a "show more" button, click it
        try:
            # scroll to the button
            driver.execute_script("window.scrollTo(0, 1000)") 
            # click on the show more button
            driver.find_element_by_xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "_ejra3kg", " " ))]').click()
            # scrape about information
            about = driver.find_element_by_css_selector('._1y6fhhr').text
            about = about.split('\n')
            about = ' '.join(about)    
            print("About: ", about[:50])
        # if there is no "show more" button, scrape whatever appears in about
        except:
            about = driver.find_element_by_css_selector('._1y6fhhr').text
            about = about.split('\n')
            about = ' '.join(about)    
            print("About: ",about[:50])
        # if for some reason scrapping still didn't work
        # revert control to user
        # at this point the user can choose to execute keep_scraping(url_number) for the next url number
        if len(about) < 1:
            break

        # get room amenities url         
        mystr = get_amenities_url(url)
        driver.get(mystr)
        # wait for page to load then scrape
        time.sleep(3)
        amenities = get_amenities()
        print("Amenities scraped: ",len(amenities)>0)
        print("Amenities: ",amenities[:40])

        # get room photos url         
        mystr = get_pictures_url(url)
        driver.get(mystr)
        # wait for page to load then scrape
        time.sleep(3)
        image_sources = get_photos()
        print("Images scraped: ",len(image_sources)>0)
        print("Images: ",image_sources[:40])

        # append all scraped info to list
        data.append([name,location,host_and_specs,house_rules,cancellations,amenities,image_sources,about])
        print("Entires in data: ",len(data))
        print("Done Scraping site", url_number)


# run scraper by uncommenting below line
#keep_scraping(0)
# if scraper throws an error for a url due to an unknown reason
# try the next url using
#keep_scraping(next_url_number)

# write scraped data into a csv file
filename = 'airBnb.csv'
file = open(filename, 'w', encoding='utf-8',newline = '')
with file:
    write = csv.writer(file) 
    write.writerows(data)