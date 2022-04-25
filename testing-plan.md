# Testing Plan

## Types of Testing

We will do manual acceptance testing. 

### PROCESS

Developers will test their code locally before pushing to GitHub.

After push is successfully merged, the product designer will run the acceptance test manually.

## Test Environment
We will be focusing on desktop views. Developers will test their code manually and locally on the devices & browser listed below. Code that has been depoloyed on Netlify will be manually tested as well.

### Devices & Browser
- Windows 11 PC, Google Chrome (1920x1080 resolution)
- MacBook Pro, Google Chrome

## Manual Acceptance Testing Script

### HOME PAGE
Context: User lands on homepage and all content loads correctly.

Scan and scroll down the page. Expect to see text for title, what e-waste is, impacts of e-waste, causes of e-waste, and list of companies that practice responsible electronic production. (1.1 - 1.5)

Click on links to resources. Expect browser to open up that link in a new tab. (1.6)

### NAV BAR
Context: User is able to navigate through the pages and identify the current page they are on using the navigation bar.

Expect the nav bar to be visible at the top of each page. (5.1)

Expect to see title and Learn, Map, FAQ tabs in the nav bar. (5.2)

Except the current page is bolded on the nav bar. (5.4)

Expect each route in the nav bar to navigate to their corresponding page. (5.3)

### MAP
Context: User lands on map page and is able to view e-waste service locations near their provided location.

Visit the map page. Expect to be greeted with a map that is at its default location and has locations pinned. Expect to see location information in the cards column. (2.1, 3.1)

Expect a location’s card to be highlighted when clicking on its pin. Expect the cards to contain company name, an image, and at least one piece of contact information. (2.2, 3.2-3.4)

Click on a card. Expect its corresponding pin on the map to be highlighted. (3.5)

Move around the map by dragging with your mouse, or zooming with a scroll wheel. Also use the integrated zoom buttons. (2.3, 2.4)

Type an address into the search bar, and hit the search button. The map should automatically move to the provided location. (2.5)

Click on the filters tab and select a filter for the type of e-waste site. Expect the map and cards to update accordingly. (2.6, 2.7)

Select all filter options. Expect there to be an error message in the filters, and the cards view to be empty. (2.8)

### FAQ
Context: User lands on FAQ and is able to search the question they have.

Visit the FAQ page and scroll down the page. Expected to see a search bar below the navigation bar and a list of Frequently asked questions that are bulleted and categorized into different topics (4.1- 4.4)

Click on the search bar. Expected to be able to type words in the search bar and the results will change based on words that the user searched for as the user types in the letters instantly. (4.5 - 4.7)

Scroll to the section below the FAQ questions. Expected to see a list of accepted electronics that are be bulleted. (4.8 - 4.9)

Enters a word that’s not on the FAQ list. Expected to see an error message under the search bar If the user enters a word that’s not on the FAQ list. (4.10)

## Defect Management

If a defect is found during testing, the tester will notify the team via Discord. After reading the problem, the team and particularly the project manager will decide who to assign the issue to depending on what the issue is and on our skills and time availability. 
