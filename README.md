# carShare
The application FE part is based on React, Typescript, Graphql, Apollo, Meterial UI for UI components, Stripe for payments and other. First app is going to be build on mocked data (no BE required) following BE part to be added though it is not the main purpose so we may consider BE is obligatory for the project and not the main idea

A FEW WORDS ON MAIN IDEA OF THE PROJECT!!
This is car sharing application. There are two main aspects of the app - a user can lease a car and a user can take on lease a car. In the first scenarion a user has to pay to hire a car in the second case user can earn some money giving on lease his car.
The app consists of several pages (HomePage, Available Cars, Terms and orher tbd).

USER FLOW
On home page of the app there are two main buttons: I WANT TO RENT A CAR and I WANT TO RENT OUT MY CAR. Based on selected option two different flows are opened.
In the first case the car enrollment process is opened. In the second case a user is redirected to Available Cars page where they have to choose a car they want to rent. In both cases there be a set of forms to fill in the required data. City shall be precalculated for each user based on IP or some service TBD. A user can change his city.

  IF I WANT TO RENT A CAR:
  I have to fill in the required form fields on several steps:
    0. Select city 
    1. Selec available car from the list,
    2. Fill in user profile form (first name, last name, email, tel, personal Id number, check to agree to terms) 
    3. Select the date range they want to rent a car (from, to)
    4. Checkout step Stripe form to pay amount of money based on number of days user selected 
 After selecting a car the car may no be unavailable on date range selected e.g some one else has booked the car earlier. This logic shall be taken into account.
 The booking span shall not be more than 3 months.
 
 IF I WANT TO RENT OUT MY CAR:
 I have to fill in the required form fields on several steps:
   0. Select city
   1. Submit your car (car type, model, transmission, year, photos and othre)
   2. Submit your identity (user name, adress, personal id number)
   3. Submit account for money transfer 
   
