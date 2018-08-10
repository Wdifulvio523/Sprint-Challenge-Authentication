<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
 - Middleware is software that acts as a bridge between an operating system or database and applications. It's often used for extra functionality.  
 - Sessions provide a way to persist data across requests. They are commonly used to allow a server to store information about a client
 - bcrypt is middleware that allows us to save passwords in a secure manner by hashing information (usually passwords) multiple times.
 - JWT stands for JSON Web Tokens. JWT is the industry standard for transferring data between two parties. JWT's add authentication to a Web API.

2.  What does bcrypt do in order to prevent attacks?
 - bcrypt hashes information multiple times (or multiple rounds). This means an attacker needs to have the hash, know the algorithm used, and how many rounds were used to generate the hash in the first place.

3.  What are the three parts of the JSON Web Token?
 - The three parts of a JWT are the Header, the payload, and the signature.