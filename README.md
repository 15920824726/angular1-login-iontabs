# angular1-login-iontabs

本仓库包括两部分  
1其中practice-iontab目录下为单个的页面，运行index.html即可
2其他的文件夹中，注意Desktop文件夹，他是主要的文件关于从一个Contact页面调到Desktop页面



总结一下  跳转ion-tab
  1.angular.module里面的名字可以随便命名，但是state里面的名称是不可以的，是有继承关系的，例如，$state.go('tabs.home'),会先去state里面的。
  2.ion-tab里面可以有两种方式，<ion-tab title="Home" icon="ion-home" href="#/tabs/home">  和
    <ion-tab title="About" icon="ion-information"  ui-sref="tabs.about">
  3.$stateProvider.state('tabs.home',{url:'',views:{'home-tab':})  其中views是有关<ion-nav-view name='home-tab'>一一对应的。
  
