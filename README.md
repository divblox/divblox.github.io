# Getting started
## Prerequisites

>The divblox server-side functionality is built in php and therefor requires a php environment to be setup in order to function correctly.

- Download your favourite Apache/Php/Mysql distribution and configure to use the following:
    - Latest version of Apache/nginx
    - Php 7.2 or later
    - MySQL 5.6 or later or MariaDB 10.3 or later
    - The easiest way to get started is to download and install MAMP for either windows or mac: https://www.mamp.info/en/

Some of the core divblox code is encoded using IonCube. To ensure that your divblox installation functions correctly, download and install the IonCube loader for Php 7.2 or later for your operating system.
- Download here: https://www.ioncube.com/loaders.php

## Download divblox
- You can download divblox zipped from https://divblox.com/releases or fork the divblox public repo on github here: https://github.com/divblox/divblox
- Add the downloaded content to your apache "public_html" or "www" folder
- Ensure that your web server is running and navigate to http://localhost/ or http://localhost/[your-project-folder]
- divblox will check your installation and, if needed, provide further guidelines on how to finish the installation
- To open the divblox setup page, Browse to http://localhost/divblox or http://localhost/[your-project-folder]/divblox, depending on your installation
- Open the installation checker to ensure that all systems indicate an OK status. Once the installation checker indicates all is OK, you are ready to build with divblox

## Installation checker
The divblox installation checker is designed to ensure that your divblox project meets all the <a href="/#/?id=prerequisites"> prerequisites</a> described above. It will also provide useful guidelines on how to solve installation related problems.
The main checks performed are listed below:
- Checks for php >= 7.2
- Checks for mariadb >= 10.3 or mysql >= 5.6
- Checks your IonCube loader is installed. [Learn why IonCube is required](#prerequisites) in the prerequisites section

!> The installation checker might fail if your [environments](#environments) have to yet been configured properly

# Configuration
## Modules
divblox allows you to define multiple modules for your project. Modules are useful for grouping related data objects. At least one module (The *Main* module) is required. 
Modules are essentially separate databases that ring-fence certain data objects

## Environments
divblox allows you to define multiple environments for your project (local, test, staging, production, etc). 
When you start up divblox for the first time, it will automatically generate the default environment for your current project.

![Environments Screenshot](_media/_screenshots/setup-environments.png)

>For an environment to function correctly, the following needs to be configured:

- **Environment Name** - Can be anything. This is just used to identify the environment
- **App Name** - The name of your app. This will be displayed as the document title
- **Maintenance Password** - This is a password used internally by divblox for sensitive operations, for example to drop a database
- **The server's host name or IP address** - The url or IP address where this environment is deployed
- **The document root** - The path to your web server's www folder
- **Subdirectory** - The sub directory in which your divblox project resides (can be empty)
- **The Database configuration for each module** - The connection information for every module's database

![Environments Screenshot](_media/_screenshots/setup-configure-environments.png)
![Environments Screenshot](_media/_screenshots/setup-configure-database.png)

## divblox Api key
- When making use of the divblox build functions, divblox always checks that you have a valid license. The divblox Api key is used to enable this license check.
- Currently divblox Api keys are issued on request only. Please [contact us](https://divblox.com/#contact) to request your *FREE* Api key

![divblox Api Key](_media/_screenshots/setup-configure-api-key.png)

## dx Admin Password
This password is used to manage your divblox project and allows access to the setup page and various other system features.

!>It is important to select a secure password as your admin password for public and/or production solutions

![Admin password](_media/_screenshots/setup-configure-admin-password.png)

## Service worker
divblox allows you to configure a service worker to handle and cache requests. You can decide to toggle it on or off. It is also sometimes useful to force the service worker to reload when assets are modified.

!>When the service worker is on during development (debug), ensure that you have the option to "Update on reload" enabled in your browser.

!>It is recommended to disable the service worker during development, since this can cause assets to be loaded from cache.

![Service Worker](_media/_screenshots/setup-configure-service-worker.png)
# Data modeler
## Start at the beginning
Every divblox project starts with the data model. 
A well designed data model can be the difference between an app that works brilliantly and one that just doesn't cut it. 
The divblox data modeler allows you to create and manage your app's data model in a visual environment<br><br>
Once a data model is defined, the Data Modeler ensures that the underlying databases are synchronized to its specification and then generates the object relational model classes.
This makes communication with your databases seemless and easy to manage in an object oriented way.

## Vocabulary
!> *Entity*: The definition of an object that will be presented by a class in code and by a table in the database

## Basic Data Modeling Concepts
>The data model allows you define the following:

- All of your entities, their attributes, attribute types and their relationships to other entities
- The user roles that your app will allow for

![Basic Concepts](_media/_screenshots/data-modeler-basic-concepts.png)

>The data model in the above example describes the following:

- 4 Entities: "Person","Project","Task","SubTask"
- A Person is described by 3 attributes: "FirstName","LastName","EmailAddress" of type "VARCHAR(50)","VARCHAR(50)" and "VARCHAR(50)"
- A Project is described by 2 attributes: "ProjectName","DueDate" of type "VARCHAR(50)" and "DATE"
- A Task is described by 4 attributes: "TaskName","Description","DueDate","TaskStatus" of type "VARCHAR(50)","TEXT","DATE" and "VARCHAR(50)"
- A SubTask is described by 3 attributes: "SubTaskName","Description","SubTaskStatus" of type "VARCHAR(50)","TEXT" and "VARCHAR(50)"
- A Task has a single relationship to both Person and Project, meaning a person and/or project can have multiple tasks associated with it
- A SubTask has a single relationship to a Task, meaning a Task can have multiple SubTasks linked to it

**The divblox data model is broken up into 2 main parts:**

- **The System Entities** - Defined by divblox and used internally to perform certain core functions (Audit Logs, Authentication, File Management, etc)
- **The Project Entities** - Defined by the developer to serve the purposes of their project

Below is a visual representation of the divblox System Entities. These entities should not be edited, but rather reused where needed, since they might be affected by future divblox updates. The developer is free to create relationships to these entities to leverage their existing functionality. 

![System Entities](_media/_screenshots/data-modeler-system-entities.png)

The final data model for your app will be the combination of the system entities and the project entities. Once this is defined, divblox can generate the app's object relational model and CRUD (Create, Read, Update, Delete) components. <br>
<br>In essence, simply by defining a data model, you already have CRUD ability for every entity in your data model. More on this in later topics.<br>
Below is a visual representation of a complete divblox data model for the example provided [above](#basic-data-modeling-concepts)

![Data model example](_media/_screenshots/data-modeler-example.png)

## The divblox ORM
### ORM Code Generation

>Based on the data model, the following is generated or can be generated as required:

- **The project's ORM:** These are the ORM classes that describe the current underlying database. For each database table there will be corresponding ORM classes that will allow for the CRUD behaviour for that entity. In essence, the ORM caters for the communication with the database without the need for the developer to write sql queries.
- **Data model related components:** These are the components that allow for exposing the entity's CRUD functionality to the front-end. More on this can be found in the [components](#component-builder) section.

>Code is generated using the following approach:

Each entity will have its own base classes for the ORM. These base classes will always be regenerated when code is generated to ensure that the foundation of your solution is always inline with the database.
Each entity will then also have implemented classes that inherit from their base classes. These classes allow for the developer to change the way a certain class works from the default way, since the code in these classes will never be regenerated.
This base class/implemented class approach is true for every area where divblox generates ORM code.

### divbox ORM Queries
The querying logic behind all the Load methods in divblox ORM classes is powered by dxQuery, or dxQ for short. Put simply, dxQ is a completely object oriented API to perform any SELECT-based query on your database to return any result or hierarchy of your ORM objects.

While the ORM classes utilize basic, straightforward SELECT statements in its Load methods, dxQ is capable of infinitely more complex queries. In fact, any SELECT a developer would need to do against a database should be possible with dxQ.

At its core, any dxQ query will return a collection of objects of the same type (e.g. a collection of Task objects). But the power of dxQ is that we can branch beyond this core collection by bringing in any related objects, performing any SQL-based clause (including WHERE, ORDER BY, JOIN, aggregations, etc.) on both the core set of Task rows andany of these related objects rows.

>Every code generated class in your ORM will have the three following static dxQuery methods:

- **QuerySingle**: to perform a dxQuery to return just a single object (typically for queries where you expect only one row)
- **QueryArray**: to perform a dxQuery to return just an array of objects
- **QueryCount**: to perform a dxQuery to return an integer of the count of rows (e.g. "COUNT (*)")

>All three dxQuery methods expect two parameters, a dxQ Condition and an optional set of dxQ Clauses. 

- dxQ Conditions are typically conditions that you would expect to find in a SQL WHERE clause, including Equal, GreaterThan, IsNotNull, etc. 
- dxQ Clauses are additional clauses that you could add to alter your SQL statement, including methods to perform SQL equivalents of JOIN, DISTINCT, GROUP BY, ORDER BY and LIMIT.
- And finally, both dxQ Condition and dxQ Clause objects will expect dxQ Node parameters. dxQ Nodes can either be tables, individual columns within the tables, or even association tables. dxQ Node classes for your entire ORM is code generated for you.

>The next few examples will examine all three major constructs (dxQ Node, dxQ Condition and dxQ Clause) in greater detail.

#### Basic Example:

```
// Retrieve a single Task from the database
$TaskObj = Task::QuerySingle(dxQ::All());

//Retrieve all Tasks from the database
$TaskArray = Task::QueryArray(dxQ::All());

//Count all Tasks in the database
$TaskCount = Task::QueryCount(dxQ::All());

//Retrieve all Tasks from the database where the TaskName is "A test task"
$TaskArray = Task::QueryArray(dxQ::Equal(dxQN::Task()->TaskName,"A test task"));
```

>Notice that dxQuery doesn't have any construct to describe what would normally be your SELECT clause. 
This is because we take advantage of the code generation process to allow dxQuery to automagically "know" which fields should be SELECT-ed based on the query, conditions and clauses you are performing. 
This will allow a lot greater flexibility in your data model. Because the platform is now taking care of column names, etc., instead of the developer needing to manually hard code it, you can make changes to columns in your tables without needing to rewrite your dxQuery calls.

#### dxQuery Nodes

dxQ Nodes are any object table or association table (type tables are excluded), as well as any column within those tables. dxQ Node classes for your entire data model is generated for you during the code generation process.

But in addition to this, dxQ Nodes are completely interlinked together, matching the relationships that you have defined as foreign keys (or virtual foreign keys using a relationships script) in your database.

To get at a specific dxQ Node, you will need to call `dxQN::ClassName()`, where "ClassName" is the name of the class for your table (e.g. "Task"). From there, you can use property getters to get at any column or relationship.

Naming standards for the columns are the same as the naming standards for the public getter/setter properties on the object, itself. So just as `$TaskObj->TaskName` will get you the "TaskName" property of a Task object, `dxQN::Task()->TaskName` will refer to the "Task.TaskName" column in the database.

Naming standards for relationships are the same way. The tokenization of the relationship reflected in a class's property and method names will also be reflected in the dxQ Nodes. So just as `$TaskObj->PersonObject` will get you a Person object which is the manager of a given Task, `dxQN::Task()->PersonObject` refers to the Task table's row where Task.id = Task.person_id.

And of course, because everything that is linked together in the database, is also linked together in your dxQ Nodes, `dxQN::Task()->PersonObject->FirstName` would of course refer to the Person's first name of the relevant Task.

#### dxQuery Conditions

All dxQuery method calls require a dxQ Condition. dxQ Conditions allow you to create a nested/hierarchical set of conditions to describe what essentially becomes your WHERE clause in a SQL query statement.

>The following lists the dxQ Condition classes and what parameters they take:

- `dxQ::All()`
- `dxQ::None()`
- `dxQ::Equal(dxQNode, Value)`
- `dxQ::NotEqual(dxQNode, Value)`
- `dxQ::GreaterThan(dxQNode, Value)`
- `dxQ::LessThan(dxQNode, Value)`
- `dxQ::GreaterOrEqual(dxQNode, Value)`
- `dxQ::LessOrEqual(dxQNode, Value)`
- `dxQ::IsNull(dxQNode)`
- `dxQ::IsNotNull(dxQNode)`
- `dxQ::In(dxQNode, array of string/int/datetime)`
- `dxQ::Like(dxQNode, string)`

For almost all of the above dxQ Conditions, you are comparing a column with some value. The dxQ Node parameter represents that column. However, value can be either a static value (like an integer, a string, a datetime, etc.) or it can be another dxQ Node.

>And finally, there are three special dxQ Condition classes which take in any number of additional dxQ Condition classes:

- `dxQ::AndCondition()`
- `dxQ::OrCondition()`
- `dxQ::Not()` - "Not" can only take in one dxQ Condition class (conditions can be passed in as parameters and/or as arrays).
Because And/Or/Not conditions can take in any other condition, including other And/Or/Not conditions, you can embed these conditions into other conditions to create what ends up being a logic tree for your entire SQL Where clause.

>Example

```
//Select all Tasks where the TaskName is alphabetically "greater than" the Description
$TaskArray = Task::QueryArray(
    dxQ::GreaterThan(
        dxQN::Task()->TaskName, dxQN::Task()->Description)
    )
);

//Select all Tasks where the person's FirstName is alphabetically "greater than" their LastName, or who's name contains "Website"
$TaskArray = Task::QueryArray(
    dxQ::OrCondition(
        dxQ::GreaterThan(dxQN::Task()->PersonObject->FirstName, dxQN::Task()->PersonObject->LastName),
        dxQ::Like(dxQN::Task()->Name, '%Website%')
    )
);
        
//Select all Tasks where the Task ID <= 2 AND (the person's FirstName is alphabetically "greater than" the Description, or who's name contains "Website")
$TaskArray = Task::QueryArray(
    dxQ::AndCondition(
        dxQ::OrCondition(
            dxQ::GreaterThan(dxQN::Task()->PersonObject->FirstName, dxQN::Task()->PersonObject->LastName),
            dxQ::Like(dxQN::Task()->Name, '%Website%')
        ),
        dxQ::LessOrEqual(dxQN::Task()->Id, 2)
    )
);
```

#### dxQuery Clauses

All dxQuery method calls take in an optional set of dxQ Clauses. dxQ Clauses allow you alter the result set by performing the equivalents of most of your major SQL clauses, including JOIN, ORDER BY, GROUP BY and DISTINCT.

The following is the list of dxQ Clause classes and what parameters they take:

dxQ::OrderBy(array/list of dxQNodes or dxQConditions)
dxQ::GroupBy(array/list of dxQNodes)
dxQ::Having(dxQSubSqlNode)
dxQ::Count(dxQNode, string)
dxQ::Minimum(dxQNode, string)
dxQ::Maximum(dxQNode, string)
dxQ::Average(dxQNode, string)
dxQ::Sum(dxQNode, string)
dxQ::LimitInfo(integer[, integer = 0])
dxQ::Distinct()
OrderBy and GroupBy follow the conventions of SQL ORDER BY and GROUP BY. It takes in a list of one or more dxQ Column Nodes. This list could be a parameterized list and/or an array.

Specifically for OrderBy, to specify a dxQ Node that you wish to order by in descending order, add a "false" after the dxQ Node. So for example, dxQ::OrderBy(dxQN::Task()->Description, false,dxQN::Task()->Name) will do the SQL equivalent of "ORDER BY last_name DESC, name ASC".

Count, Minimum, Maximum , Average and Sum are aggregation-related clauses, and only work when GroupBy is specified. These methods take in an attribute name, which can then be restored using GetVirtualAttribute() on the object.

Having adds a SQL Having clause, which allows you to filter the results of your query based on the results of the aggregation-related functions. Having requires a Subquery, which is a SQL code snippet you create to specify the criteria to filter on. (See the Subquery section later in this tutorial for more information on those).

LimitInfo will limit the result set. The first integer is the maximum number of rows you wish to limit the query to. The optional second integer is the offset (if any).

And finally, Distinct will cause the query to be called with SELECT DISTINCT.

All clauses must be wrapped around a single dxQ::Clause() call, which takes in any number of clause classes for your query.

Example
//Select all Tasks, Ordered by Description then Name
$TaskArray = Task::QueryArray(dxQ::All(), 
    dxQ::Clause(
        dxQ::OrderBy(dxQN::Task()->Description, dxQN::Task()->Name)));
//Select all People, Ordered by Description then Name,Limited to the first 4 results
$TaskArray = Task::QueryArray(dxQ::All(),
    dxQ::Clause(
        dxQ::OrderBy(dxQN::Task()->Description, dxQN::Task()->Name),
        dxQ::LimitInfo(4)));

Adapt documentation from: https://forum.stratusolvecloud.com/App/User/Topic_Detail_View/19/ & https://forum.stratusolvecloud.com/App/User/Topic_Detail_View/67/ & https://forum.stratusolvecloud.com/App/User/Topic_Detail_View/24/



# Component builder
- Virtually everything in dx is a component. The component builder allows you to create and manage your project’s components in a visual environment and to combine various different components to create specific components for your project’s needs
- Talk about the default component builder page (creating new components and the various options for this. Searching for and Opening an existing component for modification). Talk about the default data model type components that can be generated
- Talk about the builder interface
- Describe the various parts of each component (html,js,css,php,json) in detail as well as the concept of basic components
- Talk about the components that ship with a new dx installation and their function

# divblox.js
- talk about its main purpose and how it should be used (as a global function library)
- Document each divblox.js function

# Project.js
- talk about its main purpose and how it should be used (as a global function library that can be used to override default divblox.js functions as well as add project specific ones)
- Document each standard project.js function

# divblox global request handler
- explain its purpose and best use practices
- Document its default functions

# ProjectFunctions 
- explain its purpose and best use practices

# ProjectClasses
- explain its purpose and best use practices
- Talk about object access
- Talk about component access

# divblox api’s
- describe it’s purpose and best practices

# Export to native
- talk about the philosophy 
- Talk about what practically happens when you export to native
- Talk about the prerequisites for exporting to native
