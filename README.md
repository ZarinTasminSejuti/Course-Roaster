# Project Features:

**Feature no. 01**

1. The objective of this project is, it indicates the course registration of nine cse subjects where student can select their necessary courses through this site.

**Feature no. 02**

2. A student can show the course title, course description, course price and course credit respectively.


**Feature no. 03**

3. When a student select each course it will display in right as card with all contents and also display the remaining credit at right top.
 

**Feature no. 04**

4. Students can select courses upto 20 credit or below. If 20 credit of courses selection is done then user can not add many more courses. A toast notification is used in this page to notify students.





# Managing States Elaboration:

In this project application, two essential react hooks; useState() and useEffect() are used to managing state and handling side effects.



- Five useState() are used in this project. At first,

1. const [courses, setCourses] = useState([]);
By declaring a variable 'courses'. it is used for storing an array of all course details and 'setCourses' function is used for update the components with fetching all courses data. The initial state will be an empty array.

2.  const [titleArray, setTitle] = useState([]);
The 'titleArray' is holding the all course title data. 'setTitle' is doing some criteria by mapping to display the course title name and update the state. The initial state of the 'titleArray' will be an empty array.

3.  const [totalCredit, setTotalCredit] = useState(0);
The 'totalCredit' state variable is storing the credit time hour and the 'setTotalCredit' function is adding the credit time and update the 'totalCredit' state. Initially the state value will be zero.

4. const [totalPrice, setTotalPrice] = useState(0);
'totalPrice' variable is used to store course prices and the 'setTotalPrice' is adding total price which will selected by students. The initial state will be zero number.

5. const [totalRemaining, setTotalRemaining] = useState(20);
'totalRemaining' state variable is holding the remaining credit time which is initially set as 20. When student select course one by one then the 'setTotalRemaining' function is doing calculation and subtract value with credit time and the 'totalRemaining' is trigger the state variable and it will display the result in ui.




- useEffect() is used to fetching JSON data from JSON files. The JSON files has all courses details in JSON format. Inside the function the effect will render once, after when the component is mounted because of useEffect dependency array. the hook update the components state through the 'courses' state variable by the 'setCourses' setter function.