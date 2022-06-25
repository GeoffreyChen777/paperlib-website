---
title: 如何使用云同步
date: 2022-05-05T01:04:41+06:00
author: Geo
description: "This is meta description"
---

Paperlib 使用 MongoDB Atlas 作为云数据库后端。用户可以自己创建自己的云数据库，并使用它在你的所有机器上享受秒级别的同步功能。大陆的同学可能延迟稍微高一点。MongoDB Atlas 给用户每月提供了一定量的免费额度，该额度对于 Paperlib 绰绰有余，甚至可以和同学分享一个数据库。设置好后，你的数据可以安全地存储在云端。而不用自己维护任何东西。建立云数据库的方式非常简单，对于各位 CSer 理论上不是问题。

### 建立云数据库
1.打开 [https://account.mongodb.com/account/login](https://account.mongodb.com/account/login)，注册并登陆到你的 MongoDB Atlas 账户。账户欢迎页面按照如下设置。

![](/images/blog/sync/n1.png)

2.选择我们的数据库 Plan。我们选 Free 的。

![](/images/blog/sync/n2.png)

3.数据库配置。选择离你最近的或者网络最畅通的服务器。比如大陆北方同学选日本，南方选香港，英国的选爱尔兰伦敦之类。这里以作者所在的英国为例。选择爱尔兰

![](/images/blog/sync/n3.png)

接下来设置数据库管理员

![](/images/blog/sync/n4.png)
![](/images/blog/sync/n5.png)

4.来到 App Services 页面，创建 APP。

![](/images/blog/sync/n6.png)

选择 Build your own APP

![](/images/blog/sync/n7.png)

链接 Atlas 云数据库，重命名，以及部署地点

![](/images/blog/sync/n8.png)

至此数据库已经创建完毕。

---
### 添加用户

用户是所有可以在该云数据库里存储数据的人，你可以和你实验室的同学共享一个数据库，你们之间的数据互不干扰。对于Paperlib存储的内容来说，免费额度足够很多人一起共享一个数据库，当然你也可以自己独享。

1.点击左侧的 App Users 界面。点击 Authentication Providers。

![](/images/blog/sync/user1.png)

2.选择打开 Email Password 登陆。User Confirmation Method 选择 Automatically confirm users。Password Reset URL 随便写，这里不需要这个功能。 点击 Save Draft。

![](/images/blog/sync/user2.png)

3.点击上方的 `REVIEW DRAFT & DEPLOY` 来应用我们刚才的设置。

![](/images/blog/sync/user3.png)

4.回到 User 界面，点击 `Add New User` 我们可以添加我们的用户了。

![](/images/blog/sync/user4.png)

5.至此，用户创建完毕。

---
### 创建数据库表

MongoDB Atlas 是非关系型数据库，我们只需要创建 Data Scheme。而且其支持自动根据客户端数据创建。所以我们并不需要手动定义数据结构。

1.在 Device Sync 界面，点击 Start Sync。这会让我们 APP 的数据和后端数据库开始同步。弹出界面，我们点击 `No thanks, continue to Sync`。

![](/images/blog/sync/n9.png)

2.之后我们打开 Development Mode。至此，MongoDB Altas 会根据我们 Paperlib 传来的数据自动创建 Data Scheme。其余设置如下图所示，**注意 partition 的 require 选项取消**。

![](/images/blog/sync/n10.png)
![](/images/blog/sync/n11.png)
![](/images/blog/sync/n12.png)


3.点击 Enable Sync。

4.再次点击上方的 `REVIEW DRAFT & DEPLOY` 来应用我们刚才的设置。

5.至此，所有的云数据库相关设置完毕。

---
### 设置 Paperlib 连接 MongoDB Atlas

1.打开 Paperlib 设置界面，Cloud 选项卡。输入 MongoDB Atlas 的 APP ID。

![](/images/blog/sync/n13.png)

2.输入你刚才创建的用户的账号密码。

3.登陆就可以了。如果成功了话，我们添加论文之后会在 Log 界面看到 write 的 log。


![](/images/blog/sync/n19.png)


至此，所有的云同步设置完毕。云数据库的 Development Mode 可以选择在第一次同步之后关掉。因为 Data Scheme 已经被自动创建了。

关于 PDF 文件的同步，你可以使用 Onedrive 等工具在不同设备间来同步，Paperlib 也提供了 webDAV 功能。在设备 A, 选择对应路径 `C:/Onedrive/mypaperlib` 作为库路径. 在设备 B, 选择对应的 `/user/xxx/Onedrive/mypaperlib`。