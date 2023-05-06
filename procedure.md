### Procedure

Consider a use case of the car rental application as follows:

-  **Use Case Name:** Release a Vehicle (to a customer)

- **Description:** A customer arrives to acquire the vehicle and depart for desired destination. The vehicle reservation contract is signed and the vehicle is released to the customer.

- **Actors:** Front-Desk Office Executive, Customer

  Basic Flow ("Sunny Day Scenario"):

    1. A customer comes to the office to acquire a vehicle.

    2. The Office Executive locates the vehicle reservation contract by means of the reservation number and/or customer name. [Exception: Required vehicle type is not available due to late arrivals.]

    3. The customer signs the contract and the Office Executive gives the keys to the vehicle.

    4. The Office Executive then marks the contract active by entering the vehicle release date (today's date) onto the vehicle reservation contract. The use case terminates at this point.

-  **Exceptions ("Rainy Day Scenario"):**

    1. Required vehicle type is not available due to late arrivals:

    2. Raised when the reserved vehicle is not available due to late returns. The customer is informed of the situation and told about the other vehicle types that are available. The customer is offered an incentive to accept another vehicle type. If the customer is not satisfied, the reservation is cancelled without penalty charges. The customer either accepts another vehicle type or cancels the reservation.

- **Postconditions:** The customer departs with the vehicle and the reservation contract is marked active, or the reservation is cancelled.

-  **Stakeholder:** Reservation department

Experiment 1 recap: Use case was completed. Noun phrases and conceptual classes were identified, and the domain object model was constructed.

Experiment 2 recap: The verb phrases were identified and the method invocation between the objects were ordered to construct the time sequence model.

Experiment 3 recap: The datatype of attributes and the signature of the methods were identified for every class. The relationship between classes was defined to construct the class diagram.

Experiment 4 recap: The class Customer was implemented in Java following the constraints given on the attributes and its accessor and mutator functions.

Experiment 5 recap: The aggregation and composition relationship of the class **Customer** and class Vehicle with class **Reservation** was implemented in java.

Now, the steps to implement the generalization of the class **Customer** and class **Clerk** as the class **Person** as follows:

Step 1: Identify the generalized attributes and its accessor/mutator methods of the class Customer and class Clerk to create a parent class Person. Modify the class diagram to reflect this inheritance relationship.

Step 2: Complete the class Person from the modified class diagram.

Step 3: Extend the class Customer from class Person.

Step 4: Extend the class Customer from class Person.

Step 5: Write a demo class to create a Person array with 3 objects. Add a Clerk object and two Customer object are created with the availability of only email, then only phone and last customer with both email and phone number. Assign the city of the first two customers is Coimbatore and remaining customers is Chennai.

Output: Execution of the TestDriver code is shown as stack-heap view.

> **Note:** Work on the experiments sequentially.