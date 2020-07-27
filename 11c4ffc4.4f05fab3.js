(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(2),o=a(6),i=(a(0),a(151)),r=a(154),l=(a(159),a(160),a(156)),s={id:"the-basics-data-modeler",title:"Data Modeler"},c={id:"the-basics-data-modeler",isDocsHomePage:!1,title:"Data Modeler",description:"checkUrlScroll();",source:"@site/docs/the-basics-data-modeler.mdx",permalink:"/docs/the-basics-data-modeler",sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/docs/the-basics-configuration"},next:{title:"Divblox Components",permalink:"/docs/the-basics-divblox-components"}};Object(l.a)();var d=[{value:"Start at the beginning",id:"start-at-the-beginning",children:[]},{value:"Vocabulary",id:"vocabulary",children:[]},{value:"Basic Data Modeling Concepts",id:"basic-data-modeling-concepts",children:[]},{value:"The Divblox ORM (Server side)",id:"the-divblox-orm-server-side",children:[{value:"ORM Code Generation",id:"orm-code-generation",children:[]},{value:"Divbox ORM Queries",id:"divbox-orm-queries",children:[]}]}],b={rightToc:d};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"start-at-the-beginning"},"Start at the beginning"),Object(i.b)("p",null,"Every Divblox project starts with the data model.\nA well designed data model can be the difference between an app that works brilliantly and one that just doesn't cut it.\nThe Divblox data modeler allows you to create and manage your app's data model in a visual environment.",Object(i.b)("br",{parentName:"p"}),"\n","Once a data model is defined, the Data Modeler ensures that the underlying databases are synchronized to its specification and then generates the object relational model classes.\nThis makes communication with your databases seemless and easy to manage in an object oriented way."),Object(i.b)("h2",{id:"vocabulary"},"Vocabulary"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("em",{parentName:"p"},"Entity"),": The definition of an object that will be presented by a class in code and by a table in the database"))),Object(i.b)("h2",{id:"basic-data-modeling-concepts"},"Basic Data Modeling Concepts"),Object(i.b)("p",null,"The data model allows you define the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All of your entities, their attributes, attribute types and their relationships to other entities"),Object(i.b)("li",{parentName:"ul"},"The user roles that your app will allow for")),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"Environments Screenshot",src:Object(r.a)("_the-basics-media/_2-data-modeler-media/data-modeler-basic-concepts.png")})),Object(i.b)("p",null,"The data model in the above example describes the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'4 Entities: "Person","Project","Task","SubTask"'),Object(i.b)("li",{parentName:"ul"},'A Person is described by 3 attributes: "FirstName","LastName","EmailAddress" of type "VARCHAR(50)","VARCHAR(50)" and "VARCHAR(50)"'),Object(i.b)("li",{parentName:"ul"},'A Project is described by 2 attributes: "ProjectName","DueDate" of type "VARCHAR(50)" and "DATE"'),Object(i.b)("li",{parentName:"ul"},'A Task is described by 4 attributes: "TaskName","Description","DueDate","TaskStatus" of type "VARCHAR(50)","TEXT","DATE" and "VARCHAR(50)"'),Object(i.b)("li",{parentName:"ul"},'A SubTask is described by 3 attributes: "SubTaskName","Description","SubTaskStatus" of type "VARCHAR(50)","TEXT" and "VARCHAR(50)"'),Object(i.b)("li",{parentName:"ul"},"A Task has a single relationship to both Person and Project, meaning a person and/or project can have multiple tasks associated with it"),Object(i.b)("li",{parentName:"ul"},"A SubTask has a single relationship to a Task, meaning a Task can have multiple SubTasks linked to it")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The Divblox data model is broken up into 2 main parts:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"The System Entities")," - Defined by Divblox and used internally to perform certain core functions (Audit Logs, Authentication, File Management, etc)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"The Project Entities")," - Defined by the developer to serve the purposes of their project")),Object(i.b)("p",null,"Below is a visual representation of the Divblox System Entities. These entities should not be edited, but rather reused where needed, since they might be affected by future Divblox updates. The developer is free to create relationships to these entities to leverage their existing functionality."),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"Environments Screenshot",src:Object(r.a)("_the-basics-media/_2-data-modeler-media/data-modeler-system-entities.png")})),Object(i.b)("p",null,"The final data model for your app will be the combination of the system entities and the project entities. Once this is defined, Divblox can generate the app's object relational model and CRUD (Create, Read, Update, Delete) components.",Object(i.b)("br",{parentName:"p"}),"\n","In essence, simply by defining a data model, you already have CRUD ability for every entity in your data model. More on this in later topics.\nBelow is a visual representation of a complete Divblox data model for the example provided ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#basic-data-modeling-concepts"}),"above"),"."),Object(i.b)("div",{className:"text--center"},Object(i.b)("img",{alt:"Environments Screenshot",src:Object(r.a)("_the-basics-media/_2-data-modeler-media/data-modeler-example.png")})),Object(i.b)("h2",{id:"the-divblox-orm-server-side"},"The Divblox ORM (Server side)"),Object(i.b)("h3",{id:"orm-code-generation"},"ORM Code Generation"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Based on the data model, the following is generated or can be generated as required:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"The project's ORM:")," These are the ORM classes that describe the current underlying database. For each database table there will be corresponding ORM classes that will allow for the CRUD behaviour for that entity. In essence, the ORM caters for the communication with the database without the need for the developer to write sql queries."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Data model related components:")," These are the components that allow for exposing the entity's CRUD functionality to the front-end. More on this can be found in the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"the-basics-divblox-components"}),"components")," section.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Code is generated using the following approach:")),Object(i.b)("p",null,"Each entity will have its own base classes for the ORM. These base classes will always be regenerated when code is generated to ensure that the foundation of your solution is always inline with the database.\nEach entity will then also have implemented classes that inherit from their base classes. These classes allow for the developer to change the way a certain class works from the default way, since the code in these classes will never be regenerated.\nThis base class/implemented class approach is true for every area where Divblox generates ORM code."),Object(i.b)("h3",{id:"divbox-orm-queries"},"Divbox ORM Queries"),Object(i.b)("p",null,"The querying logic behind all the Load methods in Divblox ORM classes is powered by dxQuery, or dxQ for short. Put simply, dxQ is a completely object oriented API to perform any SELECT-based query on your database to return any result or hierarchy of your ORM objects."),Object(i.b)("p",null,"While the ORM classes utilize basic, straightforward SELECT statements in their Load methods, dxQ is capable of infinitely more complex queries. In fact, any SELECT a developer would need to do against a database should be possible with dxQ."),Object(i.b)("p",null,"At its core, any dxQ query will return a collection of objects of the same type (e.g. a collection of Task objects). But the power of dxQ is that we can branch beyond this core collection by bringing in any related objects, performing any SQL-based clause (including WHERE, ORDER BY, JOIN, aggregations, etc.) on both the core set of Task rows and any of these related objects rows."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Every code generated class in your ORM will have the three following static dxQuery methods:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"QuerySingle"),": to perform a dxQuery to return just a single object (typically for queries where you expect only one row)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"QueryArray"),": to perform a dxQuery to return just an array of objects"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"QueryCount"),': to perform a dxQuery to return an integer of the count of rows (e.g. "COUNT (',"*",')")')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"All three dxQuery methods expect two parameters, a dxQ Condition and an optional set of dxQ Clauses.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"dxQ Conditions are typically conditions that you would expect to find in a SQL WHERE clause, including Equal, GreaterThan, IsNotNull, etc."),Object(i.b)("li",{parentName:"ul"},"dxQ Clauses are additional clauses that you could add to alter your SQL statement, including methods to perform SQL equivalents of JOIN, DISTINCT, GROUP BY, ORDER BY and LIMIT."),Object(i.b)("li",{parentName:"ul"},"And finally, both dxQ Condition and dxQ Clause objects will expect dxQ Node parameters. dxQ Nodes can either be tables, individual columns within the tables, or even association tables. dxQ Node classes for your entire ORM is code generated for you.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The next few examples will examine all three major constructs (dxQ Node, dxQ Condition and dxQ Clause) in greater detail.")),Object(i.b)("h4",{id:"basic-example"},"Basic Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'// Retrieve a single Task from the database\n$TaskObj = Task::QuerySingle(dxQ::All());\n\n//Retrieve all Tasks from the database\n$TaskArray = Task::QueryArray(dxQ::All());\n\n//Count all Tasks in the database\n$TaskCount = Task::QueryCount(dxQ::All());\n\n//Retrieve all Tasks from the database where the TaskName is "A test task"\n$TaskArray = Task::QueryArray(dxQ::Equal(dxQN::Task()->TaskName,"A test task"));\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},'Notice that dxQuery doesn\'t have any construct to describe what would normally be your SELECT clause.\nThis is because we take advantage of the code generation process to allow dxQuery to automagically "know" which fields should be SELECT-ed based on the query, conditions and clauses you are performing.\nThis will allow a lot greater flexibility in your data model. Because the framework is now taking care of column names, etc., instead of the developer needing to manually hard code it, you can make changes to columns in your tables without needing to rewrite your dxQuery calls.'))),Object(i.b)("h4",{id:"dxquery-nodes"},"dxQuery Nodes"),Object(i.b)("p",null,"dxQ Nodes are any object table or association table (type tables are excluded), as well as any column within those tables. dxQ Node classes for your entire data model is generated for you during the code generation process."),Object(i.b)("p",null,"But in addition to this, dxQ Nodes are completely interlinked together, matching the relationships that you have defined as foreign keys (or virtual foreign keys using a relationships script) in your database."),Object(i.b)("p",null,"To get at a specific dxQ Node, you will need to call ",Object(i.b)("inlineCode",{parentName:"p"},"dxQN::ClassName()"),', where "ClassName" is the name of the class for your table (e.g. "Task"). From there, you can use property getters to get at any column or relationship.'),Object(i.b)("p",null,"Naming standards for the columns are the same as the naming standards for the public getter/setter properties on the object, itself. So just as ",Object(i.b)("inlineCode",{parentName:"p"},"$TaskObj->TaskName"),' will get you the "TaskName" property of a Task object, ',Object(i.b)("inlineCode",{parentName:"p"},"dxQN::Task()->TaskName"),' will refer to the "Task.TaskName" column in the database.'),Object(i.b)("p",null,"Naming standards for relationships are the same way. The tokenization of the relationship reflected in a class's property and method names will also be reflected in the dxQ Nodes. So just as ",Object(i.b)("inlineCode",{parentName:"p"},"$TaskObj->PersonObject")," will get you a Person object which is the manager of a given Task, ",Object(i.b)("inlineCode",{parentName:"p"},"dxQN::Task()->PersonObject")," refers to the Task table's row where Task.id = Task.person_id."),Object(i.b)("p",null,"And of course, because everything that is linked together in the database, is also linked together in your dxQ Nodes, ",Object(i.b)("inlineCode",{parentName:"p"},"dxQN::Task()->PersonObject->FirstName")," would of course refer to the Person's first name of the relevant Task."),Object(i.b)("h4",{id:"dxquery-conditions"},"dxQuery Conditions"),Object(i.b)("p",null,"All dxQuery method calls require a dxQ Condition. dxQ Conditions allow you to create a nested/hierarchical set of conditions to describe what essentially becomes your WHERE clause in a SQL query statement."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The following lists the dxQ Condition classes and what parameters they take:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::All()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::None()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Equal(dxQNode, Value)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::NotEqual(dxQNode, Value)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::GreaterThan(dxQNode, Value)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::LessThan(dxQNode, Value)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::GreaterOrEqual(dxQNode, Value)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::LessOrEqual(dxQNode, Value)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::IsNull(dxQNode)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::IsNotNull(dxQNode)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::In(dxQNode, array of string/int/datetime)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Like(dxQNode, string)"))),Object(i.b)("p",null,"For almost all of the above dxQ Conditions, you are comparing a column with some value. The dxQ Node parameter represents that column. However, value can be either a static value (like an integer, a string, a datetime, etc.) or it can be another dxQ Node."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"And finally, there are three special dxQ Condition classes which take in any number of additional dxQ Condition classes:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::AndCondition()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::OrCondition()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Not()"),' - "Not" can only take in one dxQ Condition class (conditions can be passed in as parameters and/or as arrays).\nBecause And/Or/Not conditions can take in any other condition, including other And/Or/Not conditions, you can embed these conditions into other conditions to create what ends up being a logic tree for your entire SQL Where clause.')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'//Select all Tasks where the TaskName is alphabetically "greater than" the Description\n$TaskArray = Task::QueryArray(\n    dxQ::GreaterThan(\n        dxQN::Task()->TaskName, dxQN::Task()->Description)\n    )\n);\n\n//Select all Tasks where the person\'s FirstName is alphabetically\n// "greater than" their LastName, or who\'s name contains "Website"\n$TaskArray = Task::QueryArray(\n    dxQ::OrCondition(\n        dxQ::GreaterThan(\n            dxQN::Task()->PersonObject->FirstName,\n            dxQN::Task()->PersonObject->LastName),\n        dxQ::Like(dxQN::Task()->Name, \'%Website%\')\n    )\n);\n\n//Select all Tasks where the Task ID <= 2 AND (the person\'s FirstName\n// is alphabetically "greater than" the Description, or who\'s name contains "Website")\n$TaskArray = Task::QueryArray(\n    dxQ::AndCondition(\n        dxQ::OrCondition(\n            dxQ::GreaterThan(\n                dxQN::Task()->PersonObject->FirstName,\n                dxQN::Task()->PersonObject->LastName),\n            dxQ::Like(dxQN::Task()->Name, \'%Website%\')\n        ),\n        dxQ::LessOrEqual(dxQN::Task()->Id, 2)\n    )\n);\n')),Object(i.b)("h4",{id:"dxquery-clauses"},"dxQuery Clauses"),Object(i.b)("p",null,"All dxQuery method calls take in an optional set of dxQ Clauses. dxQ Clauses allow you alter the result set by performing the equivalents of most of your major SQL clauses, including JOIN, ORDER BY, GROUP BY and DISTINCT."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The following lists the dxQ Clause classes and parameters they take:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::OrderBy(array/list of dxQNodes or dxQConditions)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::GroupBy(array/list of dxQNodes)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Having(dxQSubSqlNode)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Count(dxQNode, string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Minimum(dxQNode, string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Maximum(dxQNode, string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Average(dxQNode, string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Sum(dxQNode, string)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::LimitInfo(integer[, integer = 0])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Distinct()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dxQ::Select(array/list of dxQNodes)"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Explanation")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'OrderBy and GroupBy follow the conventions of SQL ORDER BY and GROUP BY. It takes in a list of one or more dxQ Column Nodes. This list could be a parameterized list and/or an array.\nSpecifically for OrderBy, to specify a dxQ Node that you wish to order by in descending order, add a "false" after the dxQ Node. So for example, ',Object(i.b)("inlineCode",{parentName:"p"},"dxQ::OrderBy(dxQN::Task()->Description, false,dxQN::Task()->TaskName)"),' will do the SQL equivalent of "ORDER BY Description DESC, TaskName ASC".')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Count, Minimum, Maximum , Average and Sum are aggregation-related clauses, and only work when GroupBy is specified. These methods take in an attribute name, which can then be restored using GetVirtualAttribute() on the object.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Having adds a SQL Having clause, which allows you to filter the results of your query based on the results of the aggregation-related functions. Having requires a Subquery, which is a SQL code snippet you create to specify the criteria to filter on. (See the Subquery section later in this tutorial for more information on those).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"LimitInfo will limit the result set. The first integer is the maximum number of rows you wish to limit the query to. The optional second integer is the offset (if any).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Distinct will cause the query to be called with SELECT DISTINCT.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The select clause will allow you to manually specify the specific columns you wish to return for the query."))),Object(i.b)("p",null,"!>All clauses must be wrapped around a single dxQ::Clause() call, which takes in any number of clause classes for your query."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"//Select all Tasks, Ordered by Description then TaskName\n$TaskArray = Task::QueryArray(\n    dxQ::All(),\n    dxQ::Clause(\n        dxQ::OrderBy(\n            dxQN::Task()->Description,\n            dxQN::Task()->TaskName\n        )\n    )\n);\n//Select all Tasks, Ordered by Description then TaskName, Limited to the first 4 results\n$TaskArray = Task::QueryArray(\n    dxQ::All(),\n    dxQ::Clause(\n        dxQ::OrderBy(\n            dxQN::Task()->Description,\n            dxQN::Task()->Name\n        ),\n        dxQ::LimitInfo(4)\n    )\n);\n")))}u.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,p=b["".concat(r,".").concat(m)]||b[m]||u[m]||i;return a?o.a.createElement(p,l(l({ref:t},c),{},{components:a})):o.a.createElement(p,l({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},152:function(e,t,a){"use strict";var n=a(0),o=a(35);t.a=function(){return Object(n.useContext)(o.a)}},153:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(152),o=a(155);function i(e,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){const{siteConfig:{baseUrl:i="/",url:r}={}}=Object(n.a)();if(!e)return e;if(t)return i+e;if(!Object(o.a)(e))return e;const l=i+e.replace(/^\//,"");return a?r+l:l}},155:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(0);const n=()=>{setTimeout((function(){if("undefined"!=typeof window){let e=window.location.href.split("#");if(e.length>1){let t=e[1];document.getElementById(t).scrollIntoView()}}}),500)}},157:function(e,t,a){"use strict";var n=a(0);const o=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=o},158:function(e,t,a){"use strict";var n=a(0),o=a(157);t.a=function(){return Object(n.useContext)(o.a)}},159:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(158),r=a(153),l=a(92),s=a.n(l);const c=37,d=39;t.a=function(e){const{block:t,children:a,defaultValue:l,values:b,groupId:u}=e,{tabGroupChoices:m,setTabGroupChoices:p}=Object(i.a)(),[h,O]=Object(n.useState)(l);if(null!=u){const e=m[u];null!=e&&e!==h&&b.some(t=>t.value===e)&&O(e)}const j=e=>{O(e),null!=u&&p(u,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===h)[0]))}},160:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);