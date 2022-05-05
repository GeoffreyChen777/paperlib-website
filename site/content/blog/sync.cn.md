---
title: 如何使用云同步
date: 2022-05-05T01:04:41+06:00
author: Geo
description: "This is meta description"
---

Paperlib 使用 MongoDB Atlas 作为云数据库后端。用户可以自己创建自己的云数据库，并使用它在你的所有机器上享受秒级别的同步功能。MongoDB Atlas 给用户每月提供了一定量的免费额度，该额度对于 Paperlib 绰绰有余，甚至可以和同学分享一个数据库。设置好后，你的数据可以安全地存储在云端。而不用自己维护任何东西。建立云数据库的方式非常简单，对于各位 CSer 理论上不是问题。

### 建立云数据库
1.打开 [https://account.mongodb.com/account/login](https://account.mongodb.com/account/login)，注册并登陆到你的 MongoDB Atlas 账户。

2.随便创建一个 Orgnization。随便取名字，选择 MongoDB Atlas。

![](/images/blog/sync/1.png)

3.来到 Project 页面，创建 Project。

![](/images/blog/sync/2.png)

4.点击 Realm 选项卡，创建 Realm APP。选择 Build your own APP。

![](/images/blog/sync/3.png)

5.随便输入名字。选择距离你较近的云数据库区域。比如英国同学选择这里的`eu-west-1`。

![](/images/blog/sync/4.png)

6.至此数据库已经创建完毕。

---
### 添加用户

用户是所有可以在该云数据库里存储数据的人，你可以和你实验室的同学共享一个数据库，你们之间的数据互不干扰。对于Paperlib存储的内容来说，免费额度足够很多人一起共享一个数据库，当然你也可以自己独享。

1.在 Realm 选项卡下，点击左侧的 App Users 界面。点击 Authentication Providers。

![](/images/blog/sync/5.png)

2.选择打开 Email Password 登陆。User Confirmation Method 选择 Automatically confirm users。Password Reset URL 随便写，这里不需要这个功能。 点击 Save Draft。

![](/images/blog/sync/6.png)

3.点击上方的 `REVIEW DRAFT & DEPLOY` 来应用我们刚才的设置。

![](/images/blog/sync/7.png)

4.回到 User 界面，点击 `Add New User` 我们可以添加我们的用户了。

![](/images/blog/sync/8.png)

5.至此，用户创建完毕。

---
### 创建数据库表

MongoDB Atlas 是非关系型数据库，我们只需要创建 Data Scheme。而且其支持自动根据客户端数据创建。所以我们并不需要手动定义数据结构。

1.在 Sync 界面，点击 Start Sync。这会让我们 APP 的数据和后端数据库开始同步。弹出界面，我们点击 `No thanks, continue to Sync`。

![](/images/blog/sync/9.png)

2.之后我们打开 Development Mode。至此，MongoDB Altas 会根据我们 Paperlib 传来的数据自动创建 Data Scheme。其余设置如下图所示。

![](/images/blog/sync/10.png)
![](/images/blog/sync/11.png)


3.点击 Enable Sync。

4.再次点击上方的 `REVIEW DRAFT & DEPLOY` 来应用我们刚才的设置。

5.至此，所有的云数据库相关设置完毕。

---
### 设置 Paperlib 连接 MongoDB Atlas

1.打开 Paperlib 设置界面，Cloud 选项卡。

![](/images/blog/sync/12.png)

2.输入 MongoDB Atlas 的 APP ID。

![](/images/blog/sync/13.png)

3.输入你刚才创建的用户的账号密码。

4.登陆就可以了。


至此，所有的云同步设置完毕。云数据库的 Development Mode 可以选择在第一次同步之后关掉。因为 Data Scheme 已经被自动创建了。