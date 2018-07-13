## References

- https://www.studytonight.com/dbms/database-normalization.php

## Terminology

### Normalization of Database

- a technique of organizing the data into multiple related tables, to minimize **DATA REDUNDANCY**.

Then what is **DATA REDUNDANCY**?

- Repetition of similar data at multiple places
  ![](noteImages/2018-07-11-15-07-51.png)
  ![](noteImages/2018-07-11-15-11-01.png)

  - This repetitation of data increases the size of database.
  - leads to
    - Insertion, Deletion, Updation Anomaly problems..

- Insertion Anomaly
  - To insert redundant data for every new row (of Student data in our case) is a data insertion problem or anomaly.
- Deletion / Updation Anomaly
  ![](noteImages/2018-07-11-15-16-37.png)
  - If we needed to delete / update every single rows and if even a single row is missed out, it will lead to inconsistent data, hence data redundancy can also lead to inconsistency in data as a result of updation anomaly.

So How to Normalize the database ?
![](noteImages/2018-07-11-15-19-47.png)
![](noteImages/2018-07-11-15-21-07.png)

- As you can see, newly branch has the value of 'CSE' which means normalization is not eliminating redundancy, it's about minimizing data redundancy.

### Resulting

- loss redundancy
- fewer problems in inserting / deleting / updating the data
- **Logical, Independent, but Related data**

### Types of Normalization

- 1st Normal Form
- 2nd Normal Form
- 3rd Normal Form
- BCNF

---

## 1st Normal Form

### Step 1 of Normalization process

- Scalable Table design which can be easily extended.

### 4 basic rules that a table should follow to be in 1st Normal Form

- Rule 1
  - ![](noteImages/2018-07-11-15-39-32.png)
  - Each Column should contain atomic values.
  - Entries like `X, Y` and `W, X` violate this rule.
- Rule 2
  - ![](noteImages/2018-07-11-15-42-15.png)
  - A Column should contain values that are of the same type.
  - Do not inter-mix different types of values in any column.
- Rule 3
  - ![](noteImages/2018-07-11-15-43-49.png)
  - Each column should have a unique name.
  - Same names leads to confusion at the time of data retrieval.
- Rule 4
  - ![](noteImages/2018-07-11-15-44-53.png)
  - Order in which data is saved doesn't matter.
  - Using SQL query, you can easily fetch data in any order from a table.

### Example

- Problem
  - ![](noteImages/2018-07-11-15-48-01.png)
- Solve
  - ![](noteImages/2018-07-11-15-49-07.png)

Although few values are getting repeated but values for subject column is now atomic for each row hence a table is in first normal form.

---

## 2nd Normal Form

- What're the criteria for it ?
  - It should be in 1st Normal Form
  - And, It should not have any Partial Dependencies.
- Why is it so important ?

### What is Partial Dependency ?

To understand **Partial Dependency**, we first need to understand what **Dependency** is

![](noteImages/2018-07-11-15-55-48.png)

#### Primary Key

- Uniquely identify each row in the table.
- So in simple word, all you need is the primary key to fetch any data from the table
  ![](noteImages/2018-07-11-15-58-51.png)

**All I need is student_id, and every other columns depends on it**

this is **Dependency or Functional Dependency** in table

#### So, Can primary key uniquely identify the complete rows or all the other columns ?? => Not true all the time !

Let's extend our example to see if two or more columns together can act as a primary key.

![](noteImages/2018-07-11-16-08-13.png)

You can say that primary key in this table is score_id, but practically composition of two columns named student_id & subject_id can uniquely identify any row of data in SCORE table. Because we have a many-to-many relationship here.

- One **Student** can opt for more than one **Subject**.
- One **Subject** can be opted by more than one **Student**.

And, Here we have **TEACHER** column which is only dependent on the **SUBJECT** column, but it has nothing to do with **STUDENT** column. This is **Partial Dependency** !

> So, for a table to be in second normal form, this should not exist.

Then, How to remove this Partial Dependency ?

Our objective is to remove **TEACHER** column from **SCORE** table.
There can be many possible solutions for this.

- solution 1
  - ![](noteImages/2018-07-11-16-18-38.png)
- solution 2
  - ![](noteImages/2018-07-11-16-19-07.png)

---

## 3rd Normal Form

### Recap

![](noteImages/2018-07-11-16-21-56.png)

But what if we want to add exam_name & total_marks colums in here ?

### For a table to be in 3rd Normal Form:

- It should be in 2nd Normal Form
- It should not have **Transitive Dependency**.

```js
exam_name = ['Practicals', 'Main Exams', 'Sessionals']
total_marks = {
  Practicals: 20,
  Main: 50,
  Sessionals: 30
}
```

In other words, total_marks depends on exam_name.

![](noteImages/2018-07-11-16-33-32.png)

We know that student_id + subject_id is actually primary key in this table. And all other column of attributes depends on it, except `total_marks` which depnds on `exam_name`. But `exam_name` is not a part of Primary Key.

This is **Transitive Dependency**

When there's an attribute in table which depends on some non-primary attribute, not on the primary attributes.

### Solution

![](noteImages/2018-07-11-16-35-04.png)

---

## Boyce-Codd Normal Form (BCNF) or 3.5 Normal Form

### 2 Conditions

- It should be in the 3rd Normal Form.
- For any depenency A -> B, A should be a **super key**.

### Recap

![](noteImages/2018-07-11-16-41-23.png)
![](noteImages/2018-07-11-16-41-39.png)
![](noteImages/2018-07-11-16-41-53.png)

- prime -> non-prime attribute : Functional Dependency
- part of primary key -> non-prime attribute : Partial Dependency
- non-prime -> non-prime attribute: Transitive Dependency

![](noteImages/2018-07-11-17-50-18.png)
A is non-prime attribute with B being a prime attribute. And BCNF doesn't allow this behavior.

![](noteImages/2018-07-11-17-45-53.png)
Because all the values are atomic.

- Columns have different or unique names
- the data saved in each column belongs to the same domain.

![](noteImages/2018-07-11-17-46-59.png)

![](noteImages/2018-07-11-17-43-41.png)
![](noteImages/2018-07-11-17-43-11.png)

subject is dependent on professor but professor is not a super key. so the table doesn't satisfy BCNF

### Solution

![](noteImages/2018-07-11-17-45-03.png)

### A more Generic Explanation

![](noteImages/2018-07-11-18-14-03.png)

---

## 4th Normal Form

- It should satisfy BCNF
- It should not have Multi-Valued, Dependency.

### Recap

- In 2NF : remove Partial Dependency
- In 3NF : remove Transitive Dependency

This time is **Multi-Valued Dependency**.

![](noteImages/2018-07-11-18-07-10.png)
![](noteImages/2018-07-11-18-07-44.png)
![](noteImages/2018-07-11-18-08-11.png)
![](noteImages/2018-07-11-18-08-22.png)

---

## ACID Compliance

- Atomicicity - all or nothing
- Consistancy - all data written to database must be valid (foreign keys, data types, unique, not null)
- Isolation - stops collisions from multiple changes to same doc
- Durability - once executed, data is immediately saved to disc
  - Transactionality lets you make complex, multi-step actions atomically
  - Consistency - all or nothing

## Why abandon what's been working for decades ?

- Need for Speed
- Large data sets (ex: Google, Facebook, Amazon)
- Unstructured Data

## noSQL benefits

- Flexibility
  - able to store non-structured data
  - easy to change fields
- easy to get up and running
  - JSON -> Javascript
  - POST / PUT directly
- 'Web Scale'
  - non-relational makes easy distribution and fast queries
