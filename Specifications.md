# Design Specification

## Problem

> Electronic waste continues to proliferate and is not being disposed of in a responsible way due to lack of knowledge and accessible e-waste recycling resources, posing significant health risks to children in third world countries.

Irresponsible disposal of electronic waste is a problem that may not be presently visible; however, it poses massive concerns for the health of future generations. Improper disposal of e-waste results in poisonous chemicals residing in soil and water, as well as losing out on scarce and valuable resources that are used in producing electronics (https://unstats.un.org/sdgs/report/2021/goal-12/). Barring its economic impact, this problem isn’t directly relevant to current quality of life, yet there has been a defined relationship between e-waste and child health. Changes in lung function, respiratory and respiratory effects, DNA damage, impaired thyroid function and increased risk of some chronic diseases have all been linked to e-waste (https://www.who.int/news/item/15-06-2021-soaring-e-waste-affects-the-health-of-millions-of-children-who-warns).

Long-lasting health impacts pose a significant problem and e-waste is a particularly severe issue in developing countries. Currently, there are many options to recycle devices that export these devices to developing countries where workers use recycling techniques, such as acid leaching and cable burning, to recover gold, silver, copper, and other valuable metals (https://www.niehs.nih.gov/research/programs/geh/geh_newsletter/2014/2/spotlight/ewaste_an_emerging_health_risk_.cfm). This causes workers to be directly exposed to toxic chemicals and substances which can harshly impact their health.

E-waste is growing to be a much more significant issue due to an increase in supply and demand for devices. This is in part due to electronic devices becoming cheaper, as well as device lifespans becoming shorter (https://news.climate.columbia.edu/2018/08/27/growing-e-waste-problem/). These factors lead to much higher levels of e-waste simply because more electronic devices are being purchased, used, and disposed of.

There are currently solutions to the increasing rates of irresponsible e-waste, such as fighting for the right-to-repair or providing opportunities for safe electronic device recycling (https://news.climate.columbia.edu/2018/08/27/growing-e-waste-problem/). However, many of these solutions are not accessible to all users, such as users who may not know that they can even repair their devices. There are also many different opportunities to recycle electronics, but it's hard to find out whether these options recycle responsibly.

## Solution

### Overview

Our product aims to make electronic recycling more accessible to users by educating them about sustainable electronic usage and e-waste recycling practices and by providing them information about responsible recycling services that best suit their needs such as proximity.

We envision a design where a user first enters on a home page where they can see a page about what e-waste is. On this page would be a couple of paragraphs detailing what counts as e-waste, information about the importance of e-waste sustainability and about companies that make long lasting, reusable products. There will be a navigation menu at the top that is able to quickly navigate users to the home page, the FAQ page, and the map page.

On the map page, there will be a map of the Seattle area surrounding UW along with markers for any places that accept e-waste and recycle e-waste sustainably. Users are able to click on the markers to find more information about that location. On the left side of the page there is a list of filters that users are able to use. On the right side the closest results show up in card format. 

On the FAQ Page there will be a list of commonly asked questions about e-waste that weren’t previously answered on the home page. Users are able to scroll through the page and search the question they have. Once they are done, they are able to use the navigation menu to return to a different page.

### Features

The home page (aka the “Learn” page) provides the user with information on what e-waste is, the impacts and causes of electronic waste, and companies that practice responsible electronic production. The information provided on the Learn page will be categorized, as shown above, to inform users about electronic waste related topics. This page will be implemented as static textboxes with links to additional resources for each topic.

<img alt="Home page wireframe" src="/img/home.png" height="350">

The maps feature will display local e-waste disposal sites on a React Leaflet map. Services must be manually added to the map’s database, as there is currently not a comprehensive database of e-waste disposal sites. The services that are indicated on the map can be curated by the filters feature, which will allow a user to filter for distance, types of e-waste sites (e.g. small devices vs large devices), and whether the site is open and accessible at the moment. If there are no results for the filters selected, then there will be a message highlighted in red to indicate the error state. Each location on the map will have a pin to indicate its location, and the pin can be clicked to highlight more information in the Cards column.

The Cards column(shown on the right side of the frame) displays the e-waste disposal services within the vicinity of the user shown on the map based on the filter inputs. Each card will contain an image of the company providing the service as well as their contact information. Interacting with the card will highlight the service’s location on the map and vice versa.

<img alt="Map page wireframe" src="/img/map.png" height="350">
<img alt="Map page filter error state wireframe" src="/img/mapError.png" height="350">

The FAQ page provides information on commonly asked questions about electronic recycling. Users will be able to scroll through the page to see the answers to different questions as well as search their questions by keywords. The questions will be categorized into different topics to help users find their questions more easily. The search result will change after users finish typing the keywords. Besides some general questions about electronic recycling, the page will also include recycling problems with other delicate materials and a list of accepted electronics. Depending on the topics, the content will be implemented using textboxes, images, and links to show the answer to the questions. One possible error state for this page is that the search feature might not work or the keywords they input don’t have any result. If these situations happen, we’ll show an error message under the search bar to let users know what is happening with the search feature.

<img alt="FAQ page wireframe" src="/img/faq.png" height="350">
<img alt="FAQ page error state wireframe" src="/img/faqError.png" height="350">
