## Before start

If you are looking at this project after 30.12.2017 you have to follow steps listed below

* Create Pipedrive account

* Go to ’Settings’ -> ‘Customise field’ -> People tab

* Create a field of type text for a Group field

* Open created field details and copy api key

* Past it to `pdrive/src/constatns/custom.fields.js` line: 2
Same way create Address field of type ‘Address’ and copy its key to `custom.field.js` line: 5 and add `__formatted_address` post fix

* Create field Assistant type of ‘Person’ and copy it’s key to `custom.fields.js` line: 8

* Same way create field Order of type ’Number’ and copy it’s key to `custom.fields.js` line: 11

* Now go to ’Settings’ -> ‘Personal’ -> ‘Api’ and copy api token to `pdrive/src/constatns/api.keys.js` line: 1

* Change `BASE_URL` to created account address in `pdrive/src/constatns/api.paths.js`

* Go to ‘Contacts’ -> ‘People’ and create a few users, don’t forget to define users order filed value. Value should be unique and numeric (more on that later)

## Start project 

* Download project

* Go to project root

* Run `yarn` and then `yarn start` (you could used `npm` and `npm start` as well)

## Review of tasks

* **It must be a single page application:** well it is a single page application

* **It must show a list of Persons fetched from Pipedrive API:** done

* **It must open a modal when you click on a Person and show his/hers extra details:** done

* **It must allow ordering of Persons via drag-and-drop in the list:** done

* **It should look like the provided mock-ups** done

Technologies used: React, Redux, Sass, Webpack

## Bonus challenges

* **Add pagination to the Persons list:** I added buttons ‘next’, ‘prev’ and hardcoded limit to 5 per page. The reason for that, as i can see, there is no way to get total amount of users when fetch data with limit and offset parameters and therefore it’s not possible to calculate how many pages of users we have

* **Add search filter to the Persons list:** There is a way to request users by name from Pipedrive API, however it returns you shortened list of field per user. So that does not suits. I decided to implement search on a client site, What is does is just a filter by name over users lists displayed on the page

* **Figure out a way to store the ordering of Persons using the API (tip: custom fields):** This one is pretty interesting. Pipedrive API allows to do a put request and change one user field at a time. So what i did is created a custom field order type numeric. I would like to be able to set as required + unique, however it’s not possible to do in Pipedrive dashboard. So in worst case scenario app can get mixed users, some with oder equals 0 or not defined at all or some users can have a same id. How it works: I fetch users from api, then check if users have this field or it’s value 0 and if so we change user index to index in users array. Next step is to sort users by those id’s and display on a page. When users drag and drop elements i decided to generate a random integer based on elements previous and next items order field value. This solution its not perfect, but in real live it would be reasonable to make order field mandatory and unique.

* **Implement a form to create a Person and store them, using the API:** Form is created

* **Implement a button to delete a Person from the list, using the API:** Button is created