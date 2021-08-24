# Pillars of OOP
**Encapsulation**: The bundling of data and the methods that act on that data such that access to that data is restricted from outside the bundle.  This means that an object stores its state privately, and only the object’s methods have access to change it.

**Abstraction**:  Abstraction is an extension of encapsulation. It is the process of selecting data from a larger pool to show only the relevant details to the object.

**Inheritance**: Inheritance is the ability of one object to acquire some/all properties of another object.

**Polymorphism**:  Polymorphism gives us a way to use a class exactly like its parent so there is no confusion with mixing types.

## Principles

**SOLID**

<ul>
<li><b>S - Single Responsibility</b> a class should be having one and only one responsibility</li>
<li><b>O - Open / Closed</b> classes should be open for extension but closed for modification</li>
<li><b>L - Liskov Substitution</b> parent classes should be easily substituted with their child classes without blowing up the application</li>
<li><b>I - Interface Segregation</b> many client specific interfaces are better than one general interface</li>
<li><b>D - Dependency Inversion</b> classes should depend on abstraction but not on concretion</li>
</ul>


## Patterns

**MVC**:
The MVC (Model-View-Controller) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. This is done to separate internal representations of information from the ways information is presented to and accepted from the user


**Singleton**:
This pattern involves a single class which is responsible to create an object while making sure that only single object gets created. This class provides a way to access its only object which can be accessed directly without need to instantiate the object of the class.


![image](https://1.bp.blogspot.com/-KSRGDUxR08o/Xq5ssFOF_9I/AAAAAAAAews/0m0PTqknKTUqSzgfU6OBLlB17yTIb67-QCLcBGAsYHQ/w1200-h630-p-k-no-nu/Singleton%2Bpattern%2Bjava%2Bexample.jpg)


**Factory**:
In the factory pattern we create an interface to interact with our client, the interface is used for creating objects but lets the subclasses decide which class to instantiate. The creation logic is hidden to the client but the correct object will be returned.
![Factory](https://i.stack.imgur.com/sWv1u.png)


**Abstract Factory**:
The abstract factory pattern is a similar to the factory pattern but with an additional layer. It's referred to as a super factory as it has an interface that create multiple factories. Each generated factory can give the objects as per the Factory pattern.

![Abstract](https://www.tutorialspoint.com/design_pattern/images/abstractfactory_pattern_uml_diagram.jpg)

**Observer**:
The observer pattern is used to automatically notify objects that are dependent on each other when a change has occurred.
![Observer](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Observer_w_update.svg/500px-Observer_w_update.svg.png)

**Builder**:
The builder pattern builds a complex object using simple objects and a builder class. This builder is independent of other objects.
![Builder](https://www.tutorialspoint.com/design_pattern/images/builder_pattern_uml_diagram.jpg)

**Prototype**:
The prototype pattern is used to duplicate objects that are costly to create.We can cache the object, returns its clone on the next request and update the database as necessary.
![Prototype](https://miro.medium.com/max/1400/1*k445Y_YUwZ-ZypRZYKnhqw.png)
**Object Pool**:
An Object pool is a collection which contains some amount of objects. So, when an object is taken from the pool, it is not available in the pool until it is put back. 
Objects in the pool have a lifecycle: 
- Creation
- Validation
- Destroy.

![Object](https://media.geeksforgeeks.org/wp-content/uploads/uml-pool-design.jpg)


