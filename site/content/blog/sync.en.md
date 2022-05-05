---
title: How to use Cloud Sync
date: 2022-05-05T01:04:41+06:00
author: Geo
description: "This is meta description"
---

Paperlib use MongoDB Atlas as the cloud database backend. You can create your own cloud database and use it to sync your Paperlib data on any device. MongoDB Atlas provides a free tier for all users, which is enough for Paperlib user. You can even share your cloud database with your friends. When everything is set up, you can safely store the metadata of your papers in the cloud without any maintenance operation. For CSer, it should not be a problem to set up a MongoDB Atlas with this tutorial.

### Create a MongoDB Atlas DB
1.Open [https://account.mongodb.com/account/login](https://account.mongodb.com/account/login),Sign up and login to your account.

2.Create an orgnization with your preferred name. Select MongoDB Atlas.

![](/images/blog/sync/1.png)

3.In Project page,create a project.

![](/images/blog/sync/2.png)

4.Click Realm Tab,create a Realm APP.Choose 'Build your own APP'.

![](/images/blog/sync/3.png)

5.Input your preferred name.Select a region where is near to your location.For example, if you are in UK, choose `eu-west-1`.

![](/images/blog/sync/4.png)

6.Since then, the MongoDB Atlas is ready.

---
### Create a User

A User is a person who can access the cloud database. You can create a user for yourself or for your friends. You can only access your own data. 

1.In Realm Tab, click App Users, click Authentication Providers.

![](/images/blog/sync/5.png)

2.Turn on the Email Password Authentication. Choose Automatically confirm users as the User Confirmation Method. Password Reset URL is not required, just input some random URL. Click Save Draft.

![](/images/blog/sync/6.png)

3.Click the upper banner `REVIEW DRAFT & DEPLOY` to apply previous settings.

![](/images/blog/sync/7.png)

4.Back to the User page, Click `Add New User` to create a user.

![](/images/blog/sync/8.png)

5.Sinc then, you've craeted a user.

---
### Create a Data Table.

In MongoDB Atlas, we only need to create the Data Scheme. It can be automatically created according to the data sent by our Paperlib APP.

1.In Sync page, click Start Sync. It enables the Realm APP to sync data with the backend cluster. In the popup dialog, click `No thanks, continue to Sync`.

![](/images/blog/sync/9.png)

2. Open the Development Mode to allow MongoDB Altas automatically create data scheme according to the data sent by our Paperlib APP. Other configurations are as shown below.

![](/images/blog/sync/10.png)
![](/images/blog/sync/11.png)


3. Click Enable Sync.

4.Click the upper banner `REVIEW DRAFT & DEPLOY` again.

5.Since then, the cloud database is ready.

---
### Connect Paperlib to your MongoDB Atlas DB

1.Open the preference view of Paperlib, click Cloud tab.

![](/images/blog/sync/12.png)

2.Input your MongoDB Atlas APP ID.

![](/images/blog/sync/13.png)

3.Input the email and password of the user you created.

4.Click login.

Now, everthing is ready, enjoy Paperlib with cloud sync. You can turn off the development mode after the first sync since the data scheme has been created.
