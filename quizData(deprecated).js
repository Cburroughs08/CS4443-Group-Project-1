const quizData = {
    beginner: [
        {
            question: "What does PHP stand for?",
            answers: [
                "Personal Home Page",
                "PHP: Hypertext Preprocessor",
                "Private Home Page"
            ],
            correctAnswer: "PHP: Hypertext Preprocessor"
        },
        {
            question: "What is the correct syntax to print 'Hello World' in PHP?",
            answers: [
                "echo 'Hello World'",
                "print('Hello World')",
                "echo('Hello World')"
            ],
            correctAnswer: "echo 'Hello World'"
        },
        {
            question: "What is the use of isset() and empty() functions in PHP?",
            answers: [
                "isset() checks if a variable is set, empty() checks if a variable is empty",
                "isset() checks if a variable is null, empty() checks if a variable is false",
                "isset() checks if a variable is empty, empty() checks if a variable is set"
            ],
            correctAnswer: "isset() checks if a variable is set, empty() checks if a variable is empty"
        }
    ],
    intermediate: [
        {
            question: "What is the use of the glob() function in PHP?",
            answers: [
                "Search for files or directories that match a pattern",
                "Fetch content from a URL",
                "Generate random numbers"
            ],
            correctAnswer: "Search for files or directories that match a pattern"
        },
        {
            question: "What is the use of array_map() function in PHP?",
            answers: [
                "Map an array to another array",
                "Transform array values with a user-defined function",
                "Filter an array based on certain criteria"
            ],
            correctAnswer: "Transform array values with a user-defined function"
        },
        {
            question: "How do you handle errors in PHP?",
            answers: [
                "Use try-catch-finally blocks and error_reporting() function",
                "Use a custom error handler",
                "Simply echo the error message"
            ],
            correctAnswer: "Use try-catch-finally blocks and error_reporting() function"
        },
        {
            question: "How do you connect to a MySQL database in PHP?",
            answers: [
                "Using mysqli_connect()",
                "Using PDO (PHP Data Objects)",
                "Using mysql_connect()"
            ],
            correctAnswer: "Using PDO (PHP Data Objects)"
        },
        {
            question: "What is the difference between require_once() and include_once() functions in PHP?",
            answers: [
                "require_once causes a fatal error if the file is not found, include_once only gives a warning",
                "include_once causes a fatal error if the file is not found, require_once only gives a warning",
                "Both functions behave the same"
            ],
            correctAnswer: "require_once causes a fatal error if the file is not found, include_once only gives a warning"
        }
    ],
    advanced: [
        {
            question: "What is an abstract class in PHP?",
            answers: [
                "A class that cannot be instantiated but can be extended",
                "A class that is not used for inheritance",
                "A class with only static methods"
            ],
            correctAnswer: "A class that cannot be instantiated but can be extended"
        },
        {
            question: "What is a session in PHP?",
            answers: [
                "A way to store user information across multiple requests",
                "A way to store user information in the client browser",
                "A way to store information in a database"
            ],
            correctAnswer: "A way to store user information across multiple requests"
        },
        {
            question: "What is a closure in PHP?",
            answers: [
                "A function that can access variables from its enclosing scope",
                "A type of class that cannot be instantiated",
                "A set of functions grouped together"
            ],
            correctAnswer: "A function that can access variables from its enclosing scope"
        },
        {
            question: "What is a trait in PHP?",
            answers: [
                "A way to reuse code across multiple classes",
                "A type of class with only abstract methods",
                "A method that cannot be overridden"
            ],
            correctAnswer: "A way to reuse code across multiple classes"
        },
        {
            question: "What is the difference between == and === operators in PHP?",
            answers: [
                "== compares values, === compares both values and types",
                "== compares values and types, === compares values",
                "Both operators compare values and types"
            ],
            correctAnswer: "== compares values, === compares both values and types"
        }
    ]
};
