# Cloud Sync

---

Paperlib use MongoDB Atlas as the cloud database backend. You can create your own cloud database and use it to sync your Paperlib data across your devices. The free tier of MongoDB Atlas is enough for Paperlib. When everything is set up, you can safely store the metadata of your papers in the cloud without any maintenance operation.

## Create a MongoDB Atlas DB
1. Open [https://account.mongodb.com/account/login](https://account.mongodb.com/account/login), sign up and login to your account. Close all the guides and click `Create`.

![](/assets/images/guide/cloud-sync/n1.png)

2. Choose the free dataset plan. Uncheck the two options in the red box. Select the best server location according to your country. Click `Create Deployment`.

![](/assets/images/guide/cloud-sync/n2.png)

3. Close the popup window.

![](/assets/images/guide/cloud-sync/n3.png)

4. Go to the App Services page, create an APP.

![](/assets/images/guide/cloud-sync/n4.png)

5. Make sure the Data Source is the one you just created. Select the location for deployment. Click `Create App`.

![](/assets/images/guide/cloud-sync/n5.png)

6. Close the popup window.

![](/assets/images/guide/cloud-sync/n6.png)

7.Since then, the MongoDB Atlas is ready.

## Create a User

A User is a person who can access the cloud database.

1. In Realm Tab, click `App Users`, click `Authentication Providers`.

![](/assets/images/guide/cloud-sync/user1.png)

2. Turn on the `Email Password Authentication`. Choose `Automatically confirm users` as the user confirmation method. `Password Reset URL` is not required, just leave a random URL. Click `Save Draft`.

![](/assets/images/guide/cloud-sync/user2.png)

3. Click the upper banner `REVIEW DRAFT & DEPLOY` to apply previous settings.

![](/assets/images/guide/cloud-sync/user3.png)

4. Back to the User page, Click `Add New User` to create a user.

![](/assets/images/guide/cloud-sync/user4.png)

5. Sinc then, you've created a user.

## Create a Data Table.

The data schema can be automatically created based on the data sent by the Paperlib APP.

1. In the `Device Sync` page, click `Start Sync`. It enables the your APP to sync data with the backend database cluster. In the popup dialog, click `No thanks, continue to Sync`.

![](/assets/images/guide/cloud-sync/n7.png)

2. Open the `Development Mode` to allow MongoDB Altas automatically create data schema based on the data sent by the Paperlib APP. Other configurations are as shown below. Leave the Queryable Fields setting as default.

![](/assets/images/guide/cloud-sync/n8.png)

3. Click `Enable Sync`.

4. Click the upper banner `REVIEW DRAFT & DEPLOY` again.

5. In the popup dialog, choose `Users can read and write all data`.

6. Click the upper banner `REVIEW DRAFT & DEPLOY` again.

7. Since then, the cloud database is ready.

## Connect Paperlib to your MongoDB Atlas DB

1. Open the preference window of Paperlib, click `Cloud` tab, input your MongoDB Atlas APP ID, email and password of the user you created.

![](/assets/images/guide/cloud-sync/n13.png)

2. Turn on the `Flexible Sync`.

![](/assets/images/guide/cloud-sync/n11.png)

3. Click `Login`. If the sync is successful, you can see some writing logs after importing a paper to Paperlib.

![](/assets/images/guide/cloud-sync/n19.png)

---

Now, everthing is ready, enjoy Paperlib with cloud sync.

## Sync PDF Files

Since PDF storage may cost a lot of cloud space, we recommand to use onedrive (or dropbox etc.) or webDAV to sync your PDF files accross devices. 

For example, on device A, choose `C:/Onedrive/mypaperlib` as your library folder. On the other device B, choose `/user/xxx/Onedrive/mypaperlib` as the library folder.
