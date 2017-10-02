/**
 * Created by Administrator on 2017/9/20 0020.
 */


    'use strict';
    angular.module('userInfo')
        .controller('loginCtrl',['$scope','$state','$http',function ($scope,$state,$http) {
            $scope.Login=function () {
                $state.go('contacts');
            }
            
            $scope.showImg=function () {
                console.log('take a photo');
                navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                    destinationType: Camera.DestinationType.FILE_URI });

                function onSuccess(imageURI) {
                    var image = document.getElementById('myImage');
                    image.src = imageURI;
                }

                function onFail(message) {
                    alert('Failed because: ' + message);
                }
            }

            $scope.showTesxArea=function () {
                var user={id:1,name:"hahah",sex:'M',message:"hsssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
                mm:'aaaaaaaaaawadwdqefqefqsqwfqfqecqeevwvedqqec'};
                $scope.usertoken=JSON.stringify(user);
                $scope.userinfo=JSON.stringify(user);
            }
            
            $scope.showWeChat=function () {
                Wechat.isInstalled(function (installed) {
                    alert("Wechat installed: " + (installed ? "Yes" : "No"));
                    var scope = "snsapi_userinfo",
                        state = "_" + (+new Date());
                    Wechat.auth(scope, state, function (response) {
                        // you may use response.code to get the access token.
                        alert(JSON.stringify(response));

                        var appleid='wx22c154f0f6a55f7c';
                        var applescrete="1bd3c4d4da3dc1dbee7d7ff26304bf64";

                        $http.get('https://api.weixin.qq.com/sns/oauth2/access_token',
                            {params:{"appid":appleid,"secret":applescrete,"code":response.code,"grant_type":"authorization_code"}}).success(function(refresToken,status,headers,config){
                                if(refresToken){
                                    $scope.usertoken= JSON.stringify(refresToken);
                                    $http.get("https://api.weixin.qq.com/sns/userinfo",{params:{"access_token":refresToken.access_token,"openid":refresToken.openid}}).success(function (data) {
                                        console.log(data);
                                        $scope.userinfo=JSON.stringify(data);
                                    }).error(function (err) {
                                        console.log(err);
                                    })
                                }
                            }).error(function(err,status,headers,config){
                            alert(err)
                        })

                    }, function (reason) {
                        alert("Failed: " + reason);
                    });
                }, function (reason) {
                    alert("Failed: " + reason);
                });
            }

            function InitData() {
                console.log('ok');
            }
            InitData();
        }])
