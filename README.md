# carShare

The purpose of the project is to train React, Node, TypeScript, and GraphQL Apollo by building testing application for sharing cars. 
The app is going to consist of two parts Admin part and User part

The app consists of several pages (HomePage, Available Cars, Terms);
There shall be prefilled list of available cars in DB. Data is going to be stored in MySql + Type orm. BE is on Node js 


User flow
1. User can choose a car to rent depending on car make, model, year, milage - price is being changed 
  1.1 Car park is divided into several categories (classes of autos): econom, middle, comfort, business, 4x4,
  1.2 after user has selected category of auto they want to rent a form is being opened where the following fields shall be filled in: which make they want (e.g Skoda Fabia), transmission, place where to take a car, place where car shall be returned, time and date of car returning, first name, last name, tel, email
  1.3 On success submission a car is marked as reserved or booked and disappears from available cars on Available cars page


2. The app allows other users to share their cars for rent 
3. Admin part is for moderating users who want their cars to be shared 

