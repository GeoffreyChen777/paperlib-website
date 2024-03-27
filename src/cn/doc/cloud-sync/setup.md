# 云同步设置

Paperlib 使用 MongoDB Atlas 作为云数据库后端。用户可以自己创建自己的云数据库，并使用它在你的所有机器上享受秒级别的同步功能。大陆的同学可能延迟稍微高一点。MongoDB Atlas 给用户每月提供了一定量的免费额度，该额度对于 Paperlib 绰绰有余。设置好后，你的数据可以安全地存储在云端。而不用自己维护任何东西。

## 建立云数据库
1. 打开 [https://account.mongodb.com/account/login](https://account.mongodb.com/account/login)，注册并登陆到你的 MongoDB Atlas 账户。账户欢迎页面按照如下设置。之后关闭所有的前导，进入主界面。点击这个 `Create`

![](/assets/images/guide/cloud-sync/n1.png)

2. 选择我们的数据库 Plan。我们选 Free 的。取消红框内的两个选项。选择你的数据库中心。尽量选择离你近的地方。点击 `Create Deployment`。

![](/assets/images/guide/cloud-sync/n2.png)

3. 弹出窗口我们直接关闭。

![](/assets/images/guide/cloud-sync/n3.png)

4. 来到 App Services 页面，创建 APP。

![](/assets/images/guide/cloud-sync/n4.png)

5. 确保连接的 Data Source 是我们刚才创建的。这里的部署地区一样选择离你近的。点击 `Create App`。

![](/assets/images/guide/cloud-sync/n5.png)

6. 弹出窗口我们直接关闭。

![](/assets/images/guide/cloud-sync/n6.png)

7. 至此数据库已经创建完毕。

## 添加用户

用户是所有可以在该云数据库里存储数据的人，你可以和你实验室的同学共享一个数据库，你们之间的数据互不干扰。对于Paperlib存储的内容来说，免费额度足够很多人一起共享一个数据库，当然你也可以自己独享。

1. 点击左侧的 `App Users` 界面。点击 `Authentication Providers`。

![](/assets/images/guide/cloud-sync/user1.png)

2. 选择打开 Email Password 登陆。User Confirmation Method 选择 `Automatically confirm users`。`Password Reset URL` 随便写，这里不需要这个功能。 点击 `Save Draft`。

![](/assets/images/guide/cloud-sync/user2.png)

3. 点击上方的 `REVIEW DRAFT & DEPLOY` 来应用我们刚才的设置。

![](/assets/images/guide/cloud-sync/user3.png)

4. 回到 User 界面，点击 `Add New User` 我们可以添加我们的用户了。

![](/assets/images/guide/cloud-sync/user4.png)

5. 至此，用户创建完毕。

## 创建数据库表

我们只需要创建 Data Schema。而且其支持自动根据客户端数据创建。所以我们并不需要手动定义数据结构。

1. 在 Device Sync 界面，点击 `Start Sync`。这会让我们 APP 的数据和后端数据库开始同步。弹出界面，我们点击 `No thanks, continue to Sync`。

![](/assets/images/guide/cloud-sync/n7.png)

2. 之后我们打开 `Development Mode`。至此，MongoDB Altas 会根据我们 Paperlib 传来的数据自动创建 Data Schema。其余设置如下图所示。Queryable Fields 保持默认即可。

![](/assets/images/guide/cloud-sync/n8.png)

3. 点击 `Enable Sync`。

4. 再次点击上方的 `REVIEW DRAFT & DEPLOY` 来应用我们刚才的设置。

5. 弹框里，我们选择 `Users can read and write all data`。

6. 再次点击上方的 `REVIEW DRAFT & DEPLOY` 来应用我们刚才的设置。

7. 至此，所有的云数据库相关设置完毕。

## 设置 Paperlib 连接 MongoDB Atlas

1. 打开 Paperlib 设置界面，`Cloud` 选项卡。输入 MongoDB Atlas 的 `APP ID`，你刚才创建的用户的账号密码。

![](/assets/images/guide/cloud-sync/n13.png)

2. 打开 `Flexible Sync`。

![](/assets/images/guide/cloud-sync/n11.png)

3. 登陆就可以了。如果成功了话，我们添加论文之后会在 Log 界面看到 write 的 log。

![](/assets/images/guide/cloud-sync/n19.png)


至此，所有的云同步设置完毕。

## 同步 PDF 文件

关于 PDF 文件的同步，因为云存储实在太消耗空间了，你可以使用 Onedrive 等工具在不同设备间来同步，Paperlib 也提供了 webDAV 功能。在设备 A, 选择对应路径 `C:/Onedrive/mypaperlib` 作为库路径. 在设备 B, 选择对应的 `/user/xxx/Onedrive/mypaperlib`。
