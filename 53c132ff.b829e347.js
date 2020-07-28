(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(9),o=(n(0),n(169)),r=n(170),c=(n(176),n(177),n(173)),l={id:"the-basics-native-support",title:"Native Support"},s={id:"the-basics-native-support",isDocsHomePage:!1,title:"Native Support",description:"checkUrlScroll();",source:"@site/docs/the-basics-native-support.mdx",permalink:"/docs/the-basics-native-support",sidebar:"someSidebar",previous:{title:"Divblox APIs",permalink:"/docs/the-basics-divblox-apis"},next:{title:"Hello World Example",permalink:"/docs/common-examples-hello-world-example"}};Object(c.a)();var b=[{value:"Push Notifications",id:"push-notifications",children:[{value:"Server-side",id:"server-side",children:[]},{value:"Device-side",id:"device-side",children:[]}]}],p={rightToc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Divblox allows you to export your progressive web app to a native project using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://reactnative.dev/"}),"React Native"),".\nTo export to a native project you need the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your web app needs to be deployed on a server with an ssl certificate"),Object(o.b)("li",{parentName:"ul"},"You need to configure your environment for native export:",Object(o.b)("div",{className:"text--center"},Object(o.b)("img",{alt:"Native Export Config",src:Object(r.a)("_the-basics-media/_6-native-support-media/native-environment-config.png")}))),Object(o.b)("li",{parentName:"ul"},'Follow the steps in the "Export to Native" section on the Divblox setup page to configure React Native and export your environment of choice')),Object(o.b)("p",null,"You can export a native app project for any of your configured environments. The export creates the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A React Native project, from the Divblox template, that acts as a wrapper for your web app"),Object(o.b)("li",{parentName:"ul"},"The project already has supporting functions to communicate with your app environment's web server"),Object(o.b)("li",{parentName:"ul"},"The project has a boot screen pre-installed (You can edit this for your app)"),Object(o.b)("li",{parentName:"ul"},"The project has Divblox icons pre-installed (You can edit these for your app)"),Object(o.b)("li",{parentName:"ul"},"The project checks for internet connectivity before trying to load your web environment and shows a helpful error message when it cannot connect"),Object(o.b)("li",{parentName:"ul"},"The project automatically registers a device with a permanent authentication token as a native device to ensure ease of use in terms of user authentication\n(Meaning, once a user logs in they will stay logged in by default)"),Object(o.b)("li",{parentName:"ul"},"A workflow skeleton for initialization of push notifications and other native specific requirements is already in place")),Object(o.b)("h2",{id:"push-notifications"},"Push Notifications"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Divblox push notifications implement Firebase Cloud Messaging. API integration to register and send push notifications is already present in every Divblox project"))),Object(o.b)("p",null,"Support for push notifications on the native device is provided for by an API that allows for the registration of devices and their push registration tokens.\nThe developer needs to implement the native library of their choice to handle push notifications on the device."),Object(o.b)("h3",{id:"server-side"},"Server-side"),Object(o.b)("p",null,'In order to be able to send push notifications we need to have devices registered with push registration tokens.\nThis data is stored in the entity "PushRegistration". A PushRegistration is device-specific, but Divblox will link the PushRegistration to the relevant\nAccount if an authentication takes place.'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To register a device's push registration token we will use this api operation: ",Object(o.b)("inlineCode",{parentName:"li"},"/api/global_functions/updatePushRegistration"),"."),Object(o.b)("li",{parentName:"ul"},"You can read more about how this operation works by visiting its docs page: ",Object(o.b)("inlineCode",{parentName:"li"},"/api/global_functions/updatePushRegistration/docs"))),Object(o.b)("p",null,'Push notifications can be sent from the server using the built-in Divblox Project Functions.\nIn this example we want to send a push notification to all users with the role "Administrator":'),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-php"}),'$PushRegistrationArray = PushRegistration::QueryArray(\n    dxQ::Equal(\n        dxQN::PushRegistration()->AccountObject->UserRoleObject->Role, "Administrator"\n    )\n);\n\n$TokenArray = [];\nforeach ($PushRegistrationArray as $PushRegistrationObj) {\n    $TokenArray[] = $PushRegistrationObj->RegistrationId;\n}\n\nProjectFunctions::deliverBatchedPushPayload(\n    $TokenArray,\n    "Admin message title",\n    "Here is a message only for admins");\n')),Object(o.b)("h3",{id:"device-side"},"Device-side"),Object(o.b)("p",null,"Divblox does not implement the device-side functionality to deal with push notifications by default, because:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'There are many different flavours for frontend implementation (search npm registry for "react native push notifications").\nThe developer can choose the implementation of their choice'),Object(o.b)("li",{parentName:"ul"},"Setting up push notifications with Firebase Cloud Messaging (FCM) involves quite a few configuration steps for both Android and iOS.\nIf the resulting configuration files are present in the React Native project, but not properly set up, the build process will fail")),Object(o.b)("p",null,"However, please see below a working example of how to implement this functionality in a freshly exported Divblox project:"),Object(o.b)("h4",{id:"setting-up-the-prerequisites"},"Setting up the prerequisites"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open your browser and go to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://console.firebase.google.com/"}),"Google Firebase Console"),". Then log in using your Google account")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'From that page, click the "+" add project button to create a Google Firebase project')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Follow the steps to create your project and then add both an Android and an iOS app.\nWhen creating your Android and iOS apps, ensure that the "Android package name" and "iOS bundle ID" matches the "Widget Id" as configured in your environment')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You do not need to do the steps involving adding Firebase SDK & verification of installation for now")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After all the setup is complete, you need to have downloaded the following 2 files for Android and iOS:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"google-services.json (Android)"),Object(o.b)("li",{parentName:"ul"},"GoogleService-info.plist (iOS)"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the Firebase Project Overview page, ensure that your newly created project is selected and click on either the\niOS or Android app to go to the project settings page")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on Cloud Messaging. You want to now copy the Server Key into your Divblox project:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In ",Object(o.b)("inlineCode",{parentName:"li"},"/divblox/config/framework/config.php"),' update the value for "FIREBASE_SERVER_KEY_STR" to match your Server Key'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For iOS you will need to get an APNs Authentication Key. You can do this by following the steps provided by Apple at:\n",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.apple.com/account/resources/authkeys/list"}),"https://developer.apple.com/account/resources/authkeys/list"),".\nOnce you have the APNs key, upload it to your iOS app in Firebase"))),Object(o.b)("h4",{id:"configuring-react-native"},"Configuring React Native"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"/native/[Your Environment Name]/ios/[Your Environment Name].xcworkspace"),' using Xcode. Ensure that the Bundle Identifier matches the "Widget Id" as configured in your environment.'),Object(o.b)("li",{parentName:"ol"},"Edit ",Object(o.b)("inlineCode",{parentName:"li"},"/native/[Your Environment Name]/android/app/src/main/java/com/[Your Environment Name]/MainActivity.java"),",\nensure the first line ",Object(o.b)("inlineCode",{parentName:"li"},"package [xxx]")," is ",Object(o.b)("inlineCode",{parentName:"li"},"package [Your Widget Id]")),Object(o.b)("li",{parentName:"ol"},"Edit ",Object(o.b)("inlineCode",{parentName:"li"},"/native/[Your Environment Name]/android/app/src/main/java/com/[Your Environment Name]/MainApplication.java"),",\nensure the first line ",Object(o.b)("inlineCode",{parentName:"li"},"package [xxx]")," is ",Object(o.b)("inlineCode",{parentName:"li"},"package [Your Widget Id]")),Object(o.b)("li",{parentName:"ol"},'Edit the value for "package" to match your Widget Id in ',Object(o.b)("inlineCode",{parentName:"li"},"/native/[Your Environment Name]/android/app/src/main/AndroidManifest.xml"),"\nand add the following after INTERNET permissions:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />\n<uses-permission android:name="android.permission.VIBRATE" />\n')),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"In the same file, add the Firebase MESSAGING_EVENT before the closing of the ",Object(o.b)("inlineCode",{parentName:"li"},"<application>")," tag:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'<application ...>\n  //...\n  <service android:name="io.invertase.firebase.messaging.RNFirebaseMessagingService">\n    <intent-filter>\n      <action android:name="com.google.firebase.MESSAGING_EVENT" />\n    </intent-filter>\n  </service>\n</application>\n')),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},'Edit the value for "applicationId" to match your Widget Id in ',Object(o.b)("inlineCode",{parentName:"li"},"/native/[Your Environment Name]/android/app/build.gradle"),":")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'android {\n  //...\n\n  defaultConfig {\n      applicationId "[Your Widget Id]"\n      minSdkVersion rootProject.ext.minSdkVersion\n      targetSdkVersion rootProject.ext.targetSdkVersion\n      versionCode 1\n      versionName "1.0"\n  }\n  //...\n}\n')),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},'Edit the value for "package" to match your Widget Id in ',Object(o.b)("inlineCode",{parentName:"li"},"/native/[Your Environment Name]/android/app/BUCK"))),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'android_build_config(\n    name = "build_config",\n    package = "[Your Widget Id]",\n)\n\nandroid_resource(\n    name = "res",\n    package = "[Your Widget Id]",\n    res = "src/main/res",\n)\n')),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"Run this command from the android folder to clean Gradle:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"./gradlew clean\n")),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},"Install and configure React Native Firebase")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"npm install --save react-native-firebase\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Copy the previously downloaded google-services.json to the ",Object(o.b)("inlineCode",{parentName:"li"},"/native/android/app/")," folder"),Object(o.b)("li",{parentName:"ul"},"Edit ",Object(o.b)("inlineCode",{parentName:"li"},"/native/android/build.gradle")," and add this classpath dependency for Google Services:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"dependencies {\n    classpath(\"com.android.tools.build:gradle:3.4.1\")\n    classpath 'com.google.gms:google-services:4.2.0'\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Edit ",Object(o.b)("inlineCode",{parentName:"li"},"/native/android/app/build.gradle")," and add this line to the bottom of the file:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'apply plugin: "com.google.gms.google-services"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Also add these lines for the Firebase implementation to the dependencies in the same file:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'dependencies {\n    //....\n    implementation "com.google.android.gms:play-services-base:16.1.0"\n    implementation "com.google.firebase:firebase-core:17.0.1"\n    implementation "com.google.firebase:firebase-messaging:19.0.1"\n    implementation \'me.leolin:ShortcutBadger:1.1.21@aar\'\n    //....\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Edit ",Object(o.b)("inlineCode",{parentName:"li"},"/native/[Your Environment Name]/android/app/src/main/java/com/[Your Environment Name]/MainApplication.java")," and\nadd these imports for RNFirebaseMessagingPackage and RNFirebaseNotificationsPackage")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;\nimport io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In the same file, add those packages to the list of packages:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'@Override\nprotected List<ReactPackage> getPackages() {\n  @SuppressWarnings("UnnecessaryLocalVariable")\n  List<ReactPackage> packages = new PackageList(this).getPackages();\n  // Packages that cannot be autolinked yet can be added manually here, for example:\n  // packages.add(new MyReactNativePackage());\n  packages.add(new RNFirebaseMessagingPackage());\n  packages.add(new RNFirebaseNotificationsPackage());\n  return packages;\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"At this point, the build for our Android app might fail. We solve this by Enabling Multidex.\nOpen the ",Object(o.b)("inlineCode",{parentName:"li"},"/native//android/app/build.gradle")," file. Under dependencies we need to add the module, and then enable it within our defaultConfig:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"android {\n    defaultConfig {\n        // ...\n        multiDexEnabled true\n    }\n    // ...\n}\n\ndependencies {\n  implementation 'com.android.support:multidex:1.0.3'\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"/native/[Your Environment Name]/ios/[Your Environment Name].xcworkspace"),'\nusing Xcode and add the previously downloaded GoogleService-Info.plist to the XCode project name by\nright clicking and selecting "Add Files to ',"[Your Environment Name]",'"'),Object(o.b)("li",{parentName:"ul"},"In Xcode, enable the remote notifications by clicking on the project name in the left pane then clicking the Capabilities tab. Add Push Notifications."),Object(o.b)("li",{parentName:"ul"},"In Xcode, edit the ",Object(o.b)("inlineCode",{parentName:"li"},"Pods/podfile")," and add these lines:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"pod 'Firebase/Core'\npod 'Firebase/Messaging'\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'Also add the Pod path for RNFirebase to the app under "# Pods for ',"[Your Environment Name]",'":')),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"pod 'RNFirebase', :path => '../node_modules/react-native-firebase/ios'\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run this command from the terminal inside the ",Object(o.b)("inlineCode",{parentName:"li"},"ios")," folder:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"pod update\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Edit ",Object(o.b)("inlineCode",{parentName:"li"},"/native/[Your Environment Name]/ios/[Your Environment Name]/AppDelegate.m")," and add the imports for Firebase, React Native Firebase Notifications, and Messaging:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'#import <Firebase.h>\n#import "RNFirebaseNotifications.h"\n#import "RNFirebaseMessaging.h"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"At the beginning of the ",Object(o.b)("inlineCode",{parentName:"li"},"didFinishLaunchingWithOptions:(NSDictionary *)launchOptions")," method add these lines to initialize Firebase and RNFirebaseNotifications:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"[FIRApp configure];\n[RNFirebaseNotifications configure];\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a new method to receive local RNFirebaseNotifications:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"- (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification {\n  [[RNFirebaseNotifications instance] didReceiveLocalNotification:notification];\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a new method to receive remote RNFirebaseNotifications:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"- (void)application:(UIApplication *)application didReceiveRemoteNotification:(nonnull NSDictionary *)userInfo\nfetchCompletionHandler:(nonnull void (^)(UIBackgroundFetchResult))completionHandler{\n  [[RNFirebaseNotifications instance] didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a new method to register with Firebase and receive the FCM token:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"- (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings {\n  [[RNFirebaseMessaging instance] didRegisterUserNotificationSettings:notificationSettings];\n}\n")),Object(o.b)("h4",{id:"handling-push-notifications-in-app"},"Handling Push Notifications in App"),Object(o.b)("p",null,"You can add the following code to the file ",Object(o.b)("inlineCode",{parentName:"p"},"divblox_react_native.js")," in the root of your native project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"import firebase from 'react-native-firebase';\nimport {Alert} from \"react-native\";\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Edit the function ",Object(o.b)("inlineCode",{parentName:"li"},"registerPushNotifications()")," to handle the registration correctly:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'async registerPushNotifications(success_callback,failed_callback) {\n    // You can safely remove this line\n    //console.log("TODO: Put your code that asks for push notification permissions here. Once a successful Push" +\n    //    " registration ID is received, send it to the server with");\n\n    // Add these 2 lines:\n    this.checkPermission();\n    this.messageListener();\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Then simply add the following functions to the same file inside the ",Object(o.b)("inlineCode",{parentName:"li"},"Divblox")," class:")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'checkPermission = async () => {\n    const enabled = await firebase.messaging().hasPermission();\n    if (enabled) {\n        this.getFcmToken();\n    } else {\n        this.requestPermission();\n    }\n};\n\ngetFcmToken = async () => {\n    const fcmToken = await firebase.messaging().getToken();\n    if (fcmToken) {\n        this.createPushRegistration(\n            fcmToken,\n            function (data) {\n                //console.log("Registered with app: "+data);\n            },\n            function (data) {\n                //console.log("NOT Registered with app: "+data);\n            }\n        );\n    } else {\n        //this.showAlert(\'Failed\', \'No token received\');\n    }\n};\n\nrequestPermission = async () => {\n    try {\n        await firebase.messaging().requestPermission();\n        this.getFcmToken();\n        // User has authorised\n    } catch (error) {\n        // User has rejected permissions\n    }\n};\n\nmessageListener = async () => {\n    this.notificationListener = firebase\n        .notifications()\n        .onNotification((notification) => {\n            const { title, body } = notification;\n            this.showAlert(title, body);\n        });\n\n    this.notificationOpenedListener = firebase\n        .notifications()\n        .onNotificationOpened((notificationOpen) => {\n            const { title, body } = notificationOpen.notification;\n            //this.showAlert(title, body);\n        });\n\n    const notificationOpen = await firebase\n        .notifications()\n        .getInitialNotification();\n    if (notificationOpen) {\n        const { title, body } = notificationOpen.notification;\n        //this.showAlert(title, body);\n    }\n\n    this.messageListener = firebase.messaging().onMessage((message) => {\n        //console.log(JSON.stringify(message));\n    });\n};\n\nshowAlert = (title, message) => {\n    Alert.alert(\n        title,\n        message,\n        [{ text: "OK", onPress: () => console.log("OK Pressed") }],\n        { cancelable: false }\n    );\n};\n')))}d.isMDXComponent=!0},168:function(e,t,n){"use strict";var i=n(0),a=n(52);t.a=function(){return Object(i.useContext)(a.a)}},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=i,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(79);var i=n(168),a=n(172);function o(e,t){var n=void 0===t?{}:t,o=n.forcePrependBaseUrl,r=void 0!==o&&o,c=n.absolute,l=void 0!==c&&c,s=Object(i.a)().siteConfig,b=(s=void 0===s?{}:s).baseUrl,p=void 0===b?"/":b,d=s.url;if(!e)return e;if(r)return p+e;if(!Object(a.a)(e))return e;var u=p+e.replace(/^\//,"");return l?d+u:u}},171:function(e,t,n){"use strict";function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}},172:function(e,t,n){"use strict";function i(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return i}))},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(78),n(0);var i=function(){setTimeout((function(){if("undefined"!=typeof window){var e=window.location.href.split("#");if(e.length>1){var t=e[1];document.getElementById(t).scrollIntoView()}}}),500)}},174:function(e,t,n){"use strict";var i=n(0),a=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=a},175:function(e,t,n){"use strict";var i=n(0),a=n(174);t.a=function(){return Object(i.useContext)(a.a)}},176:function(e,t,n){"use strict";n(24),n(20),n(19);var i=n(0),a=n.n(i),o=n(175),r=n(171),c=n(130),l=n.n(c),s=37,b=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,d=e.groupId,u=Object(o.a)(),m=u.tabGroupChoices,f=u.setTabGroupChoices,h=Object(i.useState)(c),O=h[0],g=h[1];if(null!=d){var j=m[d];null!=j&&j!==O&&p.some((function(e){return e.value===j}))&&g(j)}var v=function(e){g(e),null!=d&&f(d,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},177:function(e,t,n){"use strict";var i=n(0),a=n.n(i);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);