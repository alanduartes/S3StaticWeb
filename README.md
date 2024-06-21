# Timelineaws

This project that I called DevLog is intended for me to track my AWS studying proccess, it makes me focus on what I'm doing, and makes me think about "What next?"

### 21/06/2024
Now I'm starting with an Angular Static Web Page hosted on a S3 Bucket, using CloudFormation to provisioning the infrastructure in the AWS.
If you managed to clone this repo and run the application, you'll find all the proccess I made to achieve this.

![image](https://github.com/alanduartes/S3StaticWeb/assets/2921409/993021d1-7a0b-401f-a2d0-9a623328f4a6)


Next step is to distribuite the content using CloudFront, and after that I'm not sure....

Maybe at some point I'll have a simple CRUD application running on ECS with an ALB and an ASG. I'm accepting ideas, not too hard ideas, at least not now

## Angular

The static web page is been made with Angular v18

## Build

You can run ng build that'll generate a dist folder inside the project and inside you'll find the index.html and related assets.

