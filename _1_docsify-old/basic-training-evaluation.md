# Basic Training Evaluation

You should only attempt this evaluation once you have worked through the following sections:

-   [The Basics](the-basics.md)
-   [Basic Training Exercise](basic-training-exercise.md)

The exercise below is intended to evaluate whether you have an understanding of the basic concepts of Divblox. If you are able to build this exercise successfully, your skill-level will be considered "basic" and you will be ready to attempt the advanced training exercise.

!> If you would like to have your exercise graded for certification, you can submit it to us at support@divblox.com. Please note, certification may carry a cost.

**Exercise Brief - Build a simple personal expense tracker. You must be able to do the following:**

Because this is a personal expense tracker, you do not need to concern yourself with building your application for multiple users. We will however, cater for two different user roles as part of this exercise.

Make sure to add your personal touch to the final application as some points will be allocated for creative freedom. It is also important to apply good basic programming principles.

**As as User:**

-   Log expenses quickly on a dedicated page
-   An expense needs to have a category
-   Have another page where:
    -   You can view a list of expenses
    -   You should be able to open an existing expense and edit or delete it
    -   Categories and their current grand totals are listed
-   When an expense is saved (or removed), it should update a total that is stored for the selected category

**As an Administrator:**

The sole purpose of the administrator is to manage categories.

-   Categories must be configurable on a dedicated page

**General functionality:**

-   Expose a custom api operation that allows a user to specify a date range and get an expense total, per category, as a result
