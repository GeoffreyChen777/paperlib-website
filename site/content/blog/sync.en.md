---
title: How to use Cloud Sync
date: 2022-05-05T01:04:41+06:00
author: Geo
description: "This is meta description"
---

Paperlib use MongoDB Atlas as the cloud database backend. You can create your own cloud database and use it to sync your Paperlib data on any device. MongoDB Atlas provides a free tier for all users, which is enough for Paperlib user. You can even share your cloud database with your friends. When everything is set up, you can safely store the metadata of your papers in the cloud without any maintenance operation. For CSer, it should not be a problem to set up a MongoDB Atlas with this tutorial.

### Create a MongoDB Atlas DB
1.Open [https://account.mongodb.com/account/login](https://account.mongodb.com/account/login),Sign up and login to your account.

![](/images/blog/sync/n1.png)

2.Select a free dataset plan.

![](/images/blog/sync/n2.png)

3.Config database, select the best server location according to your country.

![](/images/blog/sync/n3.png)

config superuser of database.

![](/images/blog/sync/n4.png)
![](/images/blog/sync/n5.png)

4. Go to the App Services page, create a APP.

![](/images/blog/sync/n6.png)

Build your own APP

![](/images/blog/sync/n7.png)

Connect Atlas, rename your APP, select location for deployment.

![](/images/blog/sync/n8.png)

6.Since then, the MongoDB Atlas is ready.

---
### Create a User

A User is a person who can access the cloud database. You can create a user for yourself or for your friends. You can only access your own data. 

1.In Realm Tab, click App Users, click Authentication Providers.

![](/images/blog/sync/user1.png)

2.Turn on the Email Password Authentication. Choose Automatically confirm users as the User Confirmation Method. Password Reset URL is not required, just input some random URL. Click Save Draft.

![](/images/blog/sync/user2.png)

3.Click the upper banner `REVIEW DRAFT & DEPLOY` to apply previous settings.

![](/images/blog/sync/user3.png)

4.Back to the User page, Click `Add New User` to create a user.

![](/images/blog/sync/user4.png)

5.Sinc then, you've craeted a user.

---
### Create a Data Table.

In MongoDB Atlas, we only need to create the Data Scheme. It can be automatically created according to the data sent by our Paperlib APP.

1.In the Device Sync page, click Start Sync. It enables the Realm APP to sync data with the backend cluster. In the popup dialog, click `No thanks, continue to Sync`.

![](/images/blog/sync/n9.png)

2.Open the Development Mode to allow MongoDB Altas automatically create data scheme according to the data sent by our Paperlib APP. Other configurations are as shown below. Uncheck the require checkbox of 'partition'

![](/images/blog/sync/n10.png)
![](/images/blog/sync/n11.png)
![](/images/blog/sync/n12.png)

3.Click Enable Sync.

4.Click the upper banner `REVIEW DRAFT & DEPLOY` again.

5.Since then, the cloud database is ready.

---
### Connect Paperlib to your MongoDB Atlas DB

1.Open the preference view of Paperlib, click Cloud tab. Input your MongoDB Atlas APP ID.

![](/images/blog/sync/n13.png)

2.Input the email and password of the user you created.

3.Click login. If you are successful, you can see the writing log after importing a paper to Paperlib.

![](/images/blog/sync/n19.png)

Now, everthing is ready, enjoy Paperlib with cloud sync. You can turn off the development mode after the first sync since the data scheme has been created.

To sync PDF files, you can use onedrive (or dropbox etc.) or webDAV to sync your PDF files between two devices. For example, on device A, choose `C:/Onedrive/mypaperlib` as your library folder. On the other device B, choose `/user/xxx/Onedrive/mypaperlib` as the library folder.