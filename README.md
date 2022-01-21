# ENJOYBOOK using NodeJs
I have created EnjoyBook application using NodeJs, Express, many other packages and database for this application is MongoDB. 
In this application we will take story from the content creaters in the form of .csv file which contain the "Date of creation",
"Title", "Story". After taking the data we will insert these data into our database. And I provide CRUD operation for edit the 
title or story to the content creater. 

I have also created a login and resistration page. Once any user first time come to our site then first of all he has to register
himself so that we can keep track of there interest. Once he successfully create the account and we store his credentials to our
database then will send him to home page. For authentication purpose I have used JsonWebToken and for hashing the password 
I have used bcrypt. I have also created an API for updating their profile. 

There are two more API. 
1. New Content API: this api will provide the content sorted on date.
2. Top contents API - sorted on user-interaction[Sort on basis of Number of interactions, both read and like]


## List Of All API, provided by our application 

```diff
1. api/v1/users/registration  ( For register new user)
2. api/v1/users/login   (For login a user)
3. api/v1/users/update  (For updating profile of an user)
4. api/v1/content/addContent  (For adding data from .csv file to database)
5. api/v1/content/readCompleted   ( For completed the read)
6. api/v1/content/like  ( For like a content)
7. api/v1/content/updateContent   (For updating the story and title)
8. api/v1/newContent  (sorted on date)
9. api/v1/topContent  (sorted on user-interaction)
```
