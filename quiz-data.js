// Java Rice Cooker - Comprehensive Quiz Database
// 10 to 12 items per lesson with conceptual and coding questions (output prediction, syntax analysis, bug finding)

const QUIZ_DATA = {
  java: {
    id: "java",
    title: "Lesson 1: What is Java?",
    subtitle: "Master Java fundamentals, syntax rules & history (11 Items)",
    badge: "☕ Java Novice",
    lessonUrl: "java.html",
    nextLessonUrl: "variables.html",
    nextLessonTitle: "Data Types & Variables",
    questions: [
      {
        question: "What does the famous Java principle 'WORA' stand for?",
        options: [
          "Write Once, Run Anywhere",
          "Work Often, Rest Anytime",
          "Web Objects, Rapid Architecture",
          "Windows OS, Run All"
        ],
        answer: 0,
        explanation: "Java was built around 'Write Once, Run Anywhere' (WORA). You write code once and it runs on any device without changes!"
      },
      {
        question: "Java converts your source code into which universal format so different operating systems can read it?",
        options: [
          "Assembly Code",
          "Bytecode",
          "HTML Script",
          "Machine Voltage"
        ],
        answer: 1,
        explanation: "Java compiles code into Bytecode, a universal bridge language that every system with a JVM can understand."
      },
      {
        question: "What will be printed by the following Java code?",
        code: `public class Welcome {
    public static void main(String[] args) {
        System.out.println("Hello, Java Rice Cooker!");
    }
}`,
        options: [
            "Hello, Java Rice Cooker!",
            "Welcome",
            "main",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "System.out.println() prints the text passed inside its double quotes, followed by a new line!"
      },
      {
        question: "What is the exact output of this code with print vs println?",
        code: `System.out.print("Java ");
System.out.println("Cooker");`,
        options: [
          "Java\nCooker",
          "Java Cooker",
          "Cooker Java",
          "JavaCooker"
        ],
        answer: 1,
        explanation: "print() does not start a new line, so 'Java ' and 'Cooker' appear on the same line: 'Java Cooker'!"
      },
      {
        question: "Which of the following lines will cause a syntax error in Java?",
        code: `Line 1: int score = 100;
Line 2: System.out.println("Score: " + score);
Line 3: int lives = 3
Line 4: System.out.println(lives);`,
        options: [
          "Line 1",
          "Line 2",
          "Line 3",
          "Line 4"
        ],
        answer: 2,
        explanation: "Line 3 is missing a semicolon ';'! In Java, every single statement must end with a semicolon."
      },
      {
        question: "Java is case-sensitive. Which of these is the correct main method header?",
        options: [
          "public static void Main(string[] args)",
          "public static void main(String[] args)",
          "Public static Void main(String[] args)",
          "void static public main(string args)"
        ],
        answer: 1,
        explanation: "'main' must be lowercase, and 'String' must start with a capital 'S'! Java treats 'Main' and 'main' as completely different."
      },
      {
        question: "Before it was renamed to Java, what was the original name of the language?",
        options: [
          "CoffeeScript",
          "Oak",
          "Espresso",
          "Mocha"
        ],
        answer: 1,
        explanation: "Java was originally named Oak, but was later renamed Java after the immense amount of coffee its creators consumed!"
      },
      {
        question: "How do you write a single-line comment in Java?",
        code: `// Option A: // This is a comment
// Option B: <!-- This is a comment -->
// Option C: # This is a comment
// Option D: /* This is a comment`,
        options: [
          "// This is a comment",
          "<!-- This is a comment -->",
          "# This is a comment",
          "-- This is a comment"
        ],
        answer: 0,
        explanation: "In Java, '//' is used for single-line comments, and '/* ... */' is used for multi-line comments."
      },
      {
        question: "If your main public class is named 'public class MyGame', what must the file name be on your computer?",
        options: [
          "mygame.java",
          "MyGame.java",
          "Mygame.txt",
          "Game.java"
        ],
        answer: 1,
        explanation: "As taught in your cheat sheet, the file name on your computer must be spelled and capitalized the exact same way: MyGame.java!"
      },
      {
        question: "What is the output of the following string concatenation code?",
        code: `System.out.println("Byte" + "code");`,
        options: [
          "Byte code",
          "Bytecode",
          "Byte+code",
          "Compilation Error"
        ],
        answer: 1,
        explanation: "The '+' operator concatenates two strings together without adding an extra space, producing 'Bytecode'!"
      },
      {
        question: "In Java, what is the role of a Class compared to an Object?",
        options: [
          "A Class is the blueprint; an Object is the actual working item built from it",
          "An Object is the blueprint; a Class is the working item",
          "They are two names for the exact same thing in memory",
          "Classes are only for numbers, Objects are only for text"
        ],
        answer: 0,
        explanation: "A Class is a blueprint (like a cat or car design), and an Object is an individual instance built from that blueprint!"
      }
    ],
    trivia: "💡 Java Trivia Unlocked: Java was created by James Gosling at Sun Microsystems in 1995. Its mascot is named 'Duke', and today Java runs on over 3 billion devices!"
  },

  variables: {
    id: "variables",
    title: "Lesson 2: Data Types and Variables",
    subtitle: "Master primitive types, memory boxes & code calculations (11 Items)",
    badge: "📦 Variable Master",
    lessonUrl: "variables.html",
    nextLessonUrl: "conditions.html",
    nextLessonTitle: "Conditional Statements",
    questions: [
      {
        question: "Which primitive data type in Java is strictly used to store whole numbers without decimals?",
        options: [
          "double",
          "int",
          "boolean",
          "char"
        ],
        answer: 1,
        explanation: "The 'int' (integer) data type holds whole numbers only, such as 'int watermelonSlices = 8;'."
      },
      {
        question: "What will be the output of the following Java calculation?",
        code: `int watermelonSlices = 8;
int perPerson = watermelonSlices / 2;
System.out.println("Slices: " + perPerson);`,
        options: [
          "Slices: 8",
          "Slices: 4",
          "Slices: 2",
          "Slices: 4.0"
        ],
        answer: 1,
        explanation: "8 divided by 2 is 4. Since both are ints, the result is the integer 4, printing 'Slices: 4'!"
      },
      {
        question: "What will be printed by the following boolean code?",
        code: `boolean isHungry = true;
isHungry = false;
System.out.println("Hungry? " + isHungry);`,
        options: [
          "Hungry? true",
          "Hungry? false",
          "Hungry? null",
          "Compilation Error"
        ],
        answer: 1,
        explanation: "Variables can have their values updated! isHungry was changed from true to false, so it prints 'Hungry? false'."
      },
      {
        question: "Which of the following variable declarations will cause a compilation error?",
        code: `Option A: int count = 5;
Option B: double pi = 3.14159;
Option C: int items = 9.99;
Option D: char symbol = '$';`,
        options: [
          "int count = 5;",
          "double pi = 3.14159;",
          "int items = 9.99;",
          "char symbol = '$';"
        ],
        answer: 2,
        explanation: "An 'int' cannot accept decimals directly! 9.99 is a decimal, so it must be stored in a 'double'."
      },
      {
        question: "What is the output of this String concatenation from Momo's sample code?",
        code: `String mimmingName = "Momo";
int age = 3;
System.out.println(mimmingName + " is " + age + " years old.");`,
        options: [
          "Momo is 3 years old.",
          "mimmingName is age years old.",
          "Momo3 years old.",
          "Error: Cannot add String and int"
        ],
        answer: 0,
        explanation: "In Java, using '+' with a String automatically converts numbers to text and joins them smoothly: 'Momo is 3 years old.'"
      },
      {
        question: "What is the key difference between 'char' and 'String' in Java?",
        options: [
          "char uses double quotes, String uses single quotes",
          "char holds one character in 'single quotes', String holds text in \"double quotes\"",
          "char can store long sentences, String can only store letters",
          "They are completely identical"
        ],
        answer: 1,
        explanation: "A char holds a single character in single quotes (like '?'), while String is a reference type holding text in double quotes (\"Momo\")!"
      },
      {
        question: "According to Java naming rules from your cheatsheet, which variable name is INVALID?",
        options: [
          "catAge",
          "_playerScore",
          "3rdPlayer",
          "total_amount"
        ],
        answer: 2,
        explanation: "In Java, variable names CANNOT start with a number (0-9)! '3rdPlayer' is invalid."
      },
      {
        question: "What will be printed by this double arithmetic?",
        code: `double catWeight = 4.5;
double newWeight = catWeight + 1.5;
System.out.println("Weight: " + newWeight);`,
        options: [
          "Weight: 6",
          "Weight: 6.0",
          "Weight: 5.5",
          "Weight: 6.5"
        ],
        answer: 1,
        explanation: "4.5 + 1.5 = 6.0. Since catWeight is a double, the decimal point is preserved, printing 'Weight: 6.0'!"
      },
      {
        question: "Which of the following is a Reference Type in Java rather than a Primitive Type?",
        options: [
          "int",
          "double",
          "boolean",
          "String"
        ],
        answer: 3,
        explanation: "String is a Reference Type! It points to an object in memory, while int, double, and boolean are primitive types storing direct values."
      },
      {
        question: "What happens if you try to assign double quotes to a char variable?",
        code: `char rank = "A";`,
        options: [
          "It compiles and runs fine",
          "Compilation Error: String cannot be converted to char",
          "It prints 'A' with quotes",
          "It automatically changes rank to int"
        ],
        answer: 1,
        explanation: "Double quotes represent a String. Since rank is a char, Java throws a compilation error!"
      },
      {
        question: "What is the recommended variable naming style in Java (e.g. 'watermelonSlices')?",
        options: [
          "camelCase",
          "PascalCase",
          "ALL_CAPS",
          "kebab-case"
        ],
        answer: 0,
        explanation: "Java variables use camelCase: starting lowercase and capitalizing each subsequent word (e.g. 'mimmingName', 'catWeight')!"
      }
    ],
    trivia: "💡 Java Trivia Unlocked: Java is strongly typed! Unlike Python or JavaScript, you must declare what type of data fits in each variable box before running your program."
  },

  conditions: {
    id: "conditions",
    title: "Lesson 3: Conditional Statements",
    subtitle: "Master relational & logical operators, if-else, and switch (11 Items)",
    badge: "🧠 Logic Hacker",
    lessonUrl: "conditions5.html",
    nextLessonUrl: "loops.html",
    nextLessonTitle: "Loops and Arrays",
    questions: [
      {
        question: "Which relational operator is used in Java to test if two values are equal?",
        options: [
          "=",
          "==",
          "===",
          "!="
        ],
        answer: 1,
        explanation: "In Java, '==' compares two values for equality. A single '=' is the assignment operator used to store values."
      },
      {
        question: "What will be printed by the following if-else code?",
        code: `int age = 18;
if (age == 18) {
    System.out.println("You just became an adult!");
} else {
    System.out.println("Still growing!");
}`,
        options: [
          "You just became an adult!",
          "Still growing!",
          "Both statements",
          "Nothing is printed"
        ],
        answer: 0,
        explanation: "Since age is exactly 18, (age == 18) evaluates to true, executing the if branch!"
      },
      {
        question: "In Java, what does the logical AND operator ( && ) require to be true?",
        options: [
          "Only one condition must be true",
          "Both conditions must be true",
          "Neither condition can be true",
          "At least one condition must be false"
        ],
        answer: 1,
        explanation: "The '&&' (AND) operator returns true only if BOTH conditions are true (like wanting a snack that is Sweet AND Chocolate)!"
      },
      {
        question: "What will be printed by this snack check code?",
        code: `boolean isSweet = true;
boolean isChocolate = false;

if (isSweet && isChocolate) {
    System.out.println("I will eat the snack!");
} else {
    System.out.println("Not what I wanted.");
}`,
        options: [
          "I will eat the snack!",
          "Not what I wanted.",
          "Sweet Chocolate",
          "Compilation Error"
        ],
        answer: 1,
        explanation: "Because isChocolate is false, the AND (&&) condition fails, so the else branch prints 'Not what I wanted.'!"
      },
      {
        question: "What does the logical OR operator ( || ) evaluate to in this code?",
        code: `boolean hasCoffee = false;
boolean hasTea = true;

if (hasCoffee || hasTea) {
    System.out.println("Got a warm drink!");
} else {
    System.out.println("Still thirsty.");
}`,
        options: [
          "Got a warm drink!",
          "Still thirsty.",
          "Compilation Error",
          "Nothing"
        ],
        answer: 0,
        explanation: "The '||' (OR) operator only needs at least ONE condition to be true! Since hasTea is true, the if branch executes."
      },
      {
        question: "What does the relational operator '!=' mean in Java?",
        code: `int x = 10;
if (x != 5) {
    System.out.println("Different!");
}`,
        options: [
          "Equal to",
          "Not equal to",
          "Greater than",
          "Approximately equal"
        ],
        answer: 1,
        explanation: "'!=' means 'Not equal to'. Since 10 is not equal to 5, the condition evaluates to true!"
      },
      {
        question: "What does the NOT operator '!' do to a boolean value?",
        code: `boolean isRaining = false;
if (!isRaining) {
    System.out.println("Go outside!");
}`,
        options: [
          "It deletes the variable",
          "It flips true to false, and false to true",
          "It causes an infinite loop",
          "It sets the value to 0"
        ],
        answer: 1,
        explanation: "The '!' operator inverts the boolean: '!false' becomes 'true', so 'Go outside!' is printed!"
      },
      {
        question: "What will this multi-way if-else if structure print?",
        code: `int score = 85;
if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else {
    System.out.println("Grade: C");
}`,
        options: [
          "Grade: A",
          "Grade: B",
          "Grade: C",
          "Grade: A Grade: B"
        ],
        answer: 1,
        explanation: "85 is not >= 90, but it is >= 80. The second condition matches, printing 'Grade: B'!"
      },
      {
        question: "What will be printed by this switch statement?",
        code: `int option = 2;
switch (option) {
    case 1:
        System.out.println("Cook Rice");
        break;
    case 2:
        System.out.println("Steam Veggies");
        break;
    default:
        System.out.println("Keep Warm");
}`,
        options: [
          "Cook Rice",
          "Steam Veggies",
          "Keep Warm",
          "All three"
        ],
        answer: 1,
        explanation: "The switch matches option (2) directly to case 2, executing and then stopping at break to print 'Steam Veggies'!"
      },
      {
        question: "What happens if you omit the 'break;' keyword in a switch case?",
        code: `int num = 1;
switch (num) {
    case 1: System.out.print("One ");
    case 2: System.out.print("Two"); break;
}`,
        options: [
          "It prints 'One ' only",
          "It falls through and prints 'One Two'",
          "It causes a compilation error",
          "It restarts the computer"
        ],
        answer: 1,
        explanation: "Without 'break;', execution 'falls through' to the next case, printing both 'One Two'!"
      },
      {
        question: "According to your Cheat Sheet, when is 'switch' best used over 'if-else'?",
        options: [
          "When checking if a number is greater than 100",
          "When checking a single variable against a list of exact, fixed values",
          "When you want to loop over arrays",
          "When you only have true/false conditions"
        ],
        answer: 1,
        explanation: "Use switch when matching a single variable against exact, fixed values or menu option numbers!"
      }
    ],
    trivia: "💡 Java Trivia Unlocked: In Java switch statements, omitting the 'break;' keyword causes code execution to 'fall through' to the next case automatically!"
  },

  loops: {
    id: "loops",
    title: "Lesson 4: Loops and Arrays",
    subtitle: "Master for loops, while loops, do-while, and array indexing (11 Items)",
    badge: "🔄 Loop Pioneer",
    lessonUrl: "arrays.html",
    nextLessonUrl: "classes.html",
    nextLessonTitle: "Java Classes",
    questions: [
      {
        question: "What will be printed by this basic for loop?",
        code: `for (int i = 1; i <= 3; i++) {
    System.out.print(i + " ");
}`,
        options: [
          "1 2 3 ",
          "0 1 2 ",
          "1 2 3 4 ",
          "3 2 1 "
        ],
        answer: 0,
        explanation: "The loop starts at i = 1, prints and increments until i <= 3, printing '1 2 3 '!"
      },
      {
        question: "How many times will this while loop print 'Nom!'?",
        code: `int capyGrass = 0;
while (capyGrass < 3) {
    System.out.println("Nom!");
    capyGrass++;
}`,
        options: [
          "2 times",
          "3 times",
          "4 times",
          "Infinitely"
        ],
        answer: 1,
        explanation: "capyGrass starts at 0. It runs for 0, 1, and 2 (3 times total) before capyGrass reaches 3 and terminates."
      },
      {
        question: "What makes the 'do-while' loop unique, as shown in the hamster example?",
        code: `boolean eatSunflower = false;
do {
    System.out.println("The hamster eats a sunflower");
} while (eatSunflower);`,
        options: [
          "It never runs if eatSunflower is false",
          "It always runs at least once before checking the condition",
          "It loops forever regardless of the condition",
          "It only accepts numbers"
        ],
        answer: 1,
        explanation: "Like the hamster, a do-while loop always executes its block at least once, even if the condition is false!"
      },
      {
        question: "In Java arrays, what index number corresponds to the very first item (Slot 1)?",
        options: [
          "0",
          "1",
          "-1",
          "First"
        ],
        answer: 0,
        explanation: "Java starts counting array slots at 0! Slot 1 is index 0, Slot 2 is index 1, and Slot 3 is index 2."
      },
      {
        question: "Given this sushi plate array, what will plate[1] print?",
        code: `String[] plate = {"nigiri", "maki", "urumaki"};
System.out.println(plate[1]);`,
        options: [
          "nigiri",
          "maki",
          "urumaki",
          "null"
        ],
        answer: 1,
        explanation: "plate[0] is 'nigiri', plate[1] is 'maki', and plate[2] is 'urumaki'. So plate[1] prints 'maki'!"
      },
      {
        question: "How do you find the total number of items stored inside an array?",
        code: `String[] plate = {"nigiri", "maki", "urumaki"};
System.out.println(plate.length);`,
        options: [
          "plate.size()",
          "plate.length",
          "plate.count",
          "plate.total()"
        ],
        answer: 1,
        explanation: "In Java, standard arrays have a '.length' property (not a method) that returns the total slot capacity!"
      },
      {
        question: "What happens if you try to access plate[3] on this array?",
        code: `String[] plate = {"nigiri", "maki", "urumaki"};
System.out.println(plate[3]);`,
        options: [
          "It prints 'urumaki'",
          "It prints null",
          "It throws ArrayIndexOutOfBoundsException",
          "It automatically expands the array"
        ],
        answer: 2,
        explanation: "The valid indices are 0, 1, and 2. Calling index 3 exceeds the array bounds and causes an ArrayIndexOutOfBoundsException!"
      },
      {
        question: "What will be printed when the 'break' statement is encountered in this loop?",
        code: `for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.print(i + " ");
}`,
        options: [
          "1 2 ",
          "1 2 3 ",
          "1 2 4 5 ",
          "3 4 5 "
        ],
        answer: 0,
        explanation: "'break;' immediately exits the loop. When i reaches 3, the loop stops immediately, leaving '1 2 '!"
      },
      {
        question: "What does the 'continue' statement do in this loop?",
        code: `for (int i = 1; i <= 4; i++) {
    if (i == 2) {
        continue;
    }
    System.out.print(i + " ");
}`,
        options: [
          "1 2 3 4 ",
          "1 3 4 ",
          "2 ",
          "1 2 "
        ],
        answer: 1,
        explanation: "'continue;' skips the rest of the current iteration and jumps to the next! It skips 2, printing '1 3 4 '."
      },
      {
        question: "Can you change the size of a standard Java array after creating it?",
        options: [
          "Yes, using array.resize()",
          "No, standard arrays have a fixed size once created",
          "Yes, by adding more items with plate[10] = 'salmon'",
          "Only if the array contains Strings"
        ],
        answer: 1,
        explanation: "As stated in the lesson: Once you create an array with a specific size (ex. 3 slots), its size cannot be changed later!"
      },
      {
        question: "What is the output of this loop that prints each sushi from the plate?",
        code: `String[] plate = {"nigiri", "maki"};
for (int i = 0; i < plate.length; i++) {
    System.out.print(plate[i] + "-");
}`,
        options: [
          "nigiri-maki-",
          "maki-nigiri-",
          "nigiri-",
          "plate[0]-plate[1]-"
        ],
        answer: 0,
        explanation: "i goes from 0 to 1, printing plate[0] ('nigiri-') then plate[1] ('maki-'), producing 'nigiri-maki-'!"
      }
    ],
    trivia: "💡 Java Trivia Unlocked: Standard Java arrays have a fixed size once created in memory. To work with resizable lists, Java programmers use ArrayList!"
  },

  classes: {
    id: "classes",
    title: "Lesson 5: Java Classes",
    subtitle: "Master blueprints, fields, methods & class definitions (11 Items)",
    badge: "📐 Blueprint Architect",
    lessonUrl: "classes.html",
    nextLessonUrl: "object.html",
    nextLessonTitle: "Java Objects and Methods",
    questions: [
      {
        question: "What is a Class in Java?",
        options: [
          "A physical item taking up active RAM memory",
          "An abstract blueprint or template used to define fields and methods",
          "A loop statement that runs forever",
          "A compiler error"
        ],
        answer: 1,
        explanation: "A Class is an abstract blueprint or template (like a house blueprint). It defines structure without taking physical object memory yet!"
      },
      {
        question: "What are the two primary components defined inside a Java Class?",
        options: [
          "Fields (Attributes) and Methods (Behaviors)",
          "Integers and Booleans",
          "Semicolons and Brackets",
          "Inputs and Outputs"
        ],
        answer: 0,
        explanation: "A class defines Fields/Attributes (data it holds) and Methods/Behaviors (actions it can perform)."
      },
      {
        question: "In the Chevrolet car class example, what was 'speed'?",
        code: `public class Chevrolet {
    int speed = 24;
    void beepBeep() {
        System.out.println("Beep Beep!");
    }
}`,
        options: [
          "A Field / Attribute",
          "A Method / Behavior",
          "A Class Name",
          "A Loop"
        ],
        answer: 0,
        explanation: "'speed' is a Field (Attribute)—a variable describing the car's state or characteristics!"
      },
      {
        question: "In the Chevrolet car example, what was 'beepBeep()'?",
        code: `void beepBeep() {
    System.out.println("Beep Beep!");
}`,
        options: [
          "A Field / Attribute",
          "A Method / Behavior",
          "A Data Type",
          "A Primitive Value"
        ],
        answer: 1,
        explanation: "'beepBeep()' is a Method (Behavior)—a function defining an action the car can perform!"
      },
      {
        question: "What does the keyword 'void' mean in 'void beepBeep()'?",
        options: [
          "The method returns an integer",
          "The method does not return any value",
          "The method is invalid",
          "The method repeats infinitely"
        ],
        answer: 1,
        explanation: "'void' tells Java that this method performs an action but does not send back (return) any data!"
      },
      {
        question: "Which of the following is the correct syntax for declaring a Class named 'RiceCooker'?",
        options: [
          "class public RiceCooker() {}",
          "public class RiceCooker {}",
          "new Class RiceCooker {}",
          "create class RiceCooker;"
        ],
        answer: 1,
        explanation: "The standard Java declaration is 'public class RiceCooker { ... }' enclosed in curly braces!"
      },
      {
        question: "What naming convention is used for Class names in Java?",
        options: [
          "camelCase (e.g. riceCooker)",
          "PascalCase / UpperCamelCase (e.g. RiceCooker)",
          "lowercase_with_underscores (e.g. rice_cooker)",
          "ALL_CAPS (e.g. RICECOOKER)"
        ],
        answer: 1,
        explanation: "As taught in your cheatsheet, Class names start with an uppercase letter for every word (PascalCase, e.g. Chevrolet, RiceCooker)!"
      },
      {
        question: "Which symbols must always enclose the body of a Class?",
        options: [
          "Parentheses ( )",
          "Square brackets [ ]",
          "Curly braces { }",
          "Angle brackets < >"
        ],
        answer: 2,
        explanation: "Curly braces '{ }' define code blocks and enclose the entire body of classes, methods, and loops!"
      },
      {
        question: "Can a Class have multiple methods inside it?",
        code: `public class Car {
    void drive() { System.out.println("Driving"); }
    void stop()  { System.out.println("Stopped"); }
}`,
        options: [
          "Yes, a class can have as many methods as needed",
          "No, each class is limited to exactly one method",
          "Only if the class is named Main",
          "Only if all methods are booleans"
        ],
        answer: 0,
        explanation: "A class can define any number of fields and methods to accurately represent what it models!"
      },
      {
        question: "What will happen if your file is named 'Car.java' but your public class is 'public class Vehicle'?",
        options: [
          "It compiles without any warning",
          "Compilation Error: The public class must match the file name",
          "It automatically renames the file",
          "It runs in stealth mode"
        ],
        answer: 1,
        explanation: "Java strictly requires that the name of a public class must match the file name exactly (case-sensitive) followed by .java!"
      },
      {
        question: "Does defining a class alone take up physical object space in computer RAM?",
        options: [
          "Yes, as soon as you type the class code",
          "No, it is just a blueprint until an object is instantiated from it",
          "Only if it contains more than 10 variables",
          "Only on Windows computers"
        ],
        answer: 1,
        explanation: "A class is just an abstract blueprint on paper—it does not take physical object memory until an instance is built with 'new'!"
      }
    ],
    trivia: "💡 Java Trivia Unlocked: In Java, the name of your public class MUST exactly match the file name on your computer (case-sensitive) followed by .java!"
  },

  objects: {
    id: "objects",
    title: "Lesson 6: Java Objects and Methods",
    subtitle: "Master object instantiation with 'new', dot notation & Pep the frog (11 Items)",
    badge: "🐸 Object Summoner",
    lessonUrl: "object2.html",
    nextLessonUrl: "accessmod.html",
    nextLessonTitle: "Access Modifiers",
    questions: [
      {
        question: "Which Java keyword is used to instantiate (build) a real object from a class blueprint?",
        options: [
          "create",
          "make",
          "new",
          "build"
        ],
        answer: 2,
        explanation: "You instantiate objects using the 'new' keyword, for example: 'Frog pep = new Frog();'!"
      },
      {
        question: "What punctuation is used in Java to access an object's fields and run its methods?",
        options: [
          "Dot notation ( . )",
          "Colon ( : )",
          "Arrow ( -> )",
          "Hash ( # )"
        ],
        answer: 0,
        explanation: "Java uses dot notation (.), such as 'pep.frogName = \"Pep\";' or 'pep.eatFly();'!"
      },
      {
        question: "What will be printed by the following code from Pep's lesson?",
        code: `class Frog {
    String frogName;
    void eatFly() {
        System.out.println(frogName + " ate a fly!");
    }
}
// in main:
Frog pep = new Frog();
pep.frogName = "Pep";
pep.eatFly();`,
        options: [
          "Pep ate a fly!",
          "frogName ate a fly!",
          "null ate a fly!",
          "Compilation Error"
        ],
        answer: 0,
        explanation: "pep.frogName was set to 'Pep', and eatFly() prints frogName + ' ate a fly!', producing 'Pep ate a fly!'!"
      },
      {
        question: "Will an object's method run automatically if you do not call it?",
        options: [
          "Yes, methods execute as soon as an object is created",
          "No, you must explicitly call it using object.methodName()",
          "Yes, but only the first method in the class",
          "Only on Android devices"
        ],
        answer: 1,
        explanation: "Methods will not execute by themselves; you must call them explicitly, like 'pep.eatFly();'!"
      },
      {
        question: "What will this code with two different objects print?",
        code: `Frog frog1 = new Frog();
Frog frog2 = new Frog();
frog1.frogName = "Pep";
frog2.frogName = "Toad";
System.out.println(frog1.frogName + " and " + frog2.frogName);`,
        options: [
          "Pep and Toad",
          "Toad and Toad",
          "Pep and Pep",
          "frog1 and frog2"
        ],
        answer: 0,
        explanation: "Each object created from a class has its own independent copy of the fields defined in that class!"
      },
      {
        question: "What error occurs if you try to call a method on a variable that has NOT been instantiated with 'new'?",
        code: `Frog pep;
pep.eatFly();`,
        options: [
          "It automatically creates a dummy frog",
          "Compilation Error: Variable 'pep' might not have been initialized",
          "It prints 'null'",
          "It executes successfully"
        ],
        answer: 1,
        explanation: "A variable pointing to an object must be instantiated with 'new Frog()' before you can access its methods!"
      },
      {
        question: "What is the output of this method that accepts an argument?",
        code: `class Frog {
    void croak(int times) {
        System.out.println("Ribbit x " + times);
    }
}
// in main:
Frog pep = new Frog();
pep.croak(3);`,
        options: [
          "Ribbit x times",
          "Ribbit x 3",
          "Ribbit x 1",
          "times"
        ],
        answer: 1,
        explanation: "Passing 3 as an argument sets 'times' to 3 inside the method, printing 'Ribbit x 3'!"
      },
      {
        question: "What will be printed when calling this method that returns a value?",
        code: `class Cooker {
    int getCups() {
        return 4;
    }
}
// in main:
Cooker c = new Cooker();
System.out.println("Cups: " + c.getCups());`,
        options: [
          "Cups: 4",
          "Cups: getCups",
          "Cups: 0",
          "Compilation Error"
        ],
        answer: 0,
        explanation: "getCups() returns the integer 4, so 'Cups: ' + 4 prints 'Cups: 4'!"
      },
      {
        question: "Where are objects stored in computer memory when instantiated using 'new'?",
        options: [
          "The Hard Drive",
          "Heap Memory",
          "The Video Card",
          "The Browser Cache"
        ],
        answer: 1,
        explanation: "In Java, object instances created with 'new' are stored in the JVM's Heap Memory, and automatically cleaned up by Garbage Collection!"
      },
      {
        question: "Which line correctly creates a new object named 'myCar' from the 'Chevrolet' class?",
        options: [
          "Chevrolet myCar = new Chevrolet();",
          "myCar = Chevrolet.new();",
          "create Chevrolet myCar;",
          "new Chevrolet = myCar();"
        ],
        answer: 0,
        explanation: "The syntax is: 'ClassName objectName = new ClassName();' -> 'Chevrolet myCar = new Chevrolet();'!"
      },
      {
        question: "What is the relationship between an Object and a Class in Java?",
        options: [
          "An Object is the blueprint; a Class is the product",
          "A Class is the blueprint; an Object is a real concrete instance built from it",
          "They are identical and interchangeable",
          "A Class is only for HTML, an Object is for Java"
        ],
        answer: 1,
        explanation: "While a class is the blueprint on paper, an object is the actual concrete item built from it and stored in memory!"
      }
    ],
    trivia: "💡 Java Trivia Unlocked: When you create an object using 'new', Java allocates memory in the 'Heap' and cleans it up with automatic Garbage Collection!"
  },

  accessmod: {
    id: "accessmod",
    title: "Lesson 7: Access Modifiers",
    subtitle: "Master public, private, protected & code security (11 Items)",
    badge: "🛡️ Security Guardian",
    lessonUrl: "accessmod3.html",
    nextLessonUrl: "oop.html",
    nextLessonTitle: "Object Oriented Programming",
    questions: [
      {
        question: "Which access modifier allows a variable or method to be accessed from ANY other class anywhere?",
        options: [
          "private",
          "public",
          "protected",
          "default"
        ],
        answer: 1,
        explanation: "'public' provides unrestricted access, allowing any class in the project to view and call that variable or method."
      },
      {
        question: "If Pep the Frog has 'private String secret = \"Loves to sleep.\";', where can this variable be accessed?",
        options: [
          "Any other class in the program",
          "Strictly inside the Frog class itself",
          "Only in web browsers",
          "In all subclasses only"
        ],
        answer: 1,
        explanation: "'private' keeps variables strictly hidden inside the specific class where they are declared!"
      },
      {
        question: "What happens if an outside class 'Pond' tries to access pep.secret directly?",
        code: `public class Frog {
    private String secret = "Loves to sleep";
}
public class Pond {
    public static void main(String[] args) {
        Frog pep = new Frog();
        System.out.println(pep.secret);
    }
}`,
        options: [
          "It prints 'Loves to sleep'",
          "It prints null",
          "Compilation Error: secret has private access in Frog",
          "It deletes the secret"
        ],
        answer: 2,
        explanation: "Because 'secret' is private, the compiler will refuse to compile the Pond class with an access violation error!"
      },
      {
        question: "Which access modifier allows access within the same package AND by subclasses (child classes)?",
        options: [
          "private",
          "protected",
          "static",
          "abstract"
        ],
        answer: 1,
        explanation: "'protected' allows members to be accessed within the same package, as well as by subclasses in other packages!"
      },
      {
        question: "If you do NOT write any access modifier (e.g. 'String faveFood = \"maggots\";'), what is the default access level?",
        options: [
          "Public",
          "Private",
          "Default / Package-Private",
          "Protected"
        ],
        answer: 2,
        explanation: "Omitting a modifier gives it Default (Package-Private) access, meaning it is accessible only by classes in the same package."
      },
      {
        question: "What is the primary reason for using access modifiers in Java?",
        options: [
          "To speed up computer hardware",
          "To protect your code and control how data is viewed and modified",
          "To color code in syntax highlighters",
          "To convert Java to JavaScript"
        ],
        answer: 1,
        explanation: "Access modifiers are fundamental for security and encapsulation, preventing code from unintended tampering."
      },
      {
        question: "How can an outside class safely read the value of a private field?",
        code: `public class Frog {
    private String secret = "Loves to sleep";
    public String getSecret() {
        return secret;
    }
}`,
        options: [
          "It is completely impossible",
          "By calling a public 'getter' method like getSecret()",
          "By changing the computer clock",
          "By using the '+' operator"
        ],
        answer: 1,
        explanation: "Encapsulation uses public getter methods to provide controlled, read-only access to private variables!"
      },
      {
        question: "Can a Class itself be declared with the 'public' access modifier?",
        options: [
          "Yes, such as 'public class Frog {}'",
          "No, access modifiers only apply to numbers",
          "Only if the class has no methods",
          "Only in Android apps"
        ],
        answer: 0,
        explanation: "Yes! Classes are frequently declared 'public' so they can be imported and used throughout your application."
      },
      {
        question: "Examine Pep's class. Which line in main will compile without error?",
        code: `public class Frog {
    public String name = "Pep";
    private int secretAge = 2;
}
// in main:
Frog pep = new Frog();`,
        options: [
          "System.out.println(pep.secretAge);",
          "System.out.println(pep.name);",
          "pep.secretAge = 5;",
          "Frog.secretAge = 10;"
        ],
        answer: 1,
        explanation: "'name' is public, so outside code can access it freely. 'secretAge' is private and cannot be accessed outside the class!"
      },
      {
        question: "Order the 4 access levels from MOST RESTRICTIVE to LEAST RESTRICTIVE:",
        options: [
          "private -> default -> protected -> public",
          "public -> protected -> default -> private",
          "private -> public -> default -> protected",
          "default -> private -> protected -> public"
        ],
        answer: 0,
        explanation: "private (class only) is most restrictive, followed by default (package), protected (package + subclasses), and public (everywhere)!"
      },
      {
        question: "In Pep's sample code, 'protected String faveSpot = \"lake\";' is accessible by:",
        options: [
          "Classes in the same package and any subclasses of Frog",
          "Only the Frog class itself",
          "Every website on the internet",
          "No one at all"
        ],
        answer: 0,
        explanation: "'protected' allows visibility inside the same package and to any child classes that inherit from Frog!"
      }
    ],
    trivia: "💡 Java Trivia Unlocked: If you don't write any modifier (like 'String faveFood;'), Java applies 'Default' (Package-Private) access, visible only to classes in the same package."
  },

  oop: {
    id: "oop",
    title: "Lesson 8: Object Oriented Programming",
    subtitle: "Master the 4 pillars: Encapsulation, Inheritance, Polymorphism & Abstraction (11 Items)",
    badge: "👑 Java Grandmaster",
    lessonUrl: "oop5.html",
    nextLessonUrl: "endingCredits.html",
    nextLessonTitle: "Ending Credits & Graduation",
    questions: [
      {
        question: "What are the 4 fundamental pillars of Object-Oriented Programming (OOP) in Java?",
        options: [
          "Int, Double, Char, Boolean",
          "Encapsulation, Inheritance, Polymorphism, Abstraction",
          "For, While, Do-While, Switch",
          "Classes, Objects, Methods, Variables"
        ],
        answer: 1,
        explanation: "The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction!"
      },
      {
        question: "Think of the Capsule Pill: which pillar hides internal variables behind private to protect them?",
        code: `public class Pill {
    private String chemical = "Aspirin";
    public void takePill() {
        System.out.println("Taking " + chemical);
    }
}`,
        options: [
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
          "Compilation"
        ],
        answer: 0,
        explanation: "Encapsulation wraps data inside a class, locking sensitive fields with 'private' to prevent direct tampering!"
      },
      {
        question: "Which keyword does a child class use to inherit fields and methods from a parent class?",
        code: `public class Wizard extends Player {
    void castSpell() {
        System.out.println("Abracadabra!");
    }
}`,
        options: [
          "inherits",
          "extends",
          "implements",
          "super"
        ],
        answer: 1,
        explanation: "In Java, class inheritance uses the 'extends' keyword (e.g. 'public class Wizard extends Player')!"
      },
      {
        question: "What will be printed when calling 'w.walk()' on the Wizard child object?",
        code: `class Player {
    void walk() {
        System.out.println("Walking forward");
    }
}
class Wizard extends Player {
}
// in main:
Wizard w = new Wizard();
w.walk();`,
        options: [
          "Walking forward",
          "Wizard walking",
          "Compilation Error",
          "Nothing"
        ],
        answer: 0,
        explanation: "Because Wizard extends Player, it automatically inherits the 'walk()' method from Player and prints 'Walking forward'!"
      },
      {
        question: "Polymorphism means 'many forms'. What will this code print?",
        code: `class Animal {
    void makeNoise() {
        System.out.println("Generic Sound");
    }
}
class Duck extends Animal {
    @Override
    void makeNoise() {
        System.out.println("Quack quack");
    }
}
// in main:
Animal d = new Duck();
d.makeNoise();`,
        options: [
          "Generic Sound",
          "Quack quack",
          "Generic Sound Quack quack",
          "Compilation Error"
        ],
        answer: 1,
        explanation: "Through method overriding (Polymorphism), the Duck's custom 'makeNoise()' executes, printing 'Quack quack'!"
      },
      {
        question: "What is the purpose of the '@Override' annotation in Java?",
        options: [
          "It deletes the parent method",
          "It indicates that a child class is intentionally replacing a parent class method",
          "It forces the method to repeat in a loop",
          "It turns the method into an integer"
        ],
        answer: 1,
        explanation: "'@Override' informs both the compiler and developers that the subclass is redefining a method inherited from its superclass."
      },
      {
        question: "Think of the Coffee Machine: which pillar hides complex internal processes and shows only essential buttons?",
        code: `abstract class CoffeeMachine {
    abstract void brew();
}`,
        options: [
          "Abstraction",
          "Polymorphism",
          "Inheritance",
          "Encapsulation"
        ],
        answer: 0,
        explanation: "Abstraction hides complex underlying machinery (water heating, grinding) and exposes only simple, essential operations!"
      },
      {
        question: "Can you directly instantiate an abstract class using 'new'?",
        code: `CoffeeMachine cm = new CoffeeMachine(); // Is this valid?`,
        options: [
          "Yes, just like any normal class",
          "No, abstract classes cannot be directly instantiated with 'new'",
          "Only if you add 'static'",
          "Only on Windows"
        ],
        answer: 1,
        explanation: "Abstract classes are incomplete layout templates—they cannot be instantiated directly with 'new'; you must instantiate a subclass that implements them!"
      },
      {
        question: "What will this abstraction code print?",
        code: `abstract class CoffeeMachine {
    abstract void brew();
}
class Brewer extends CoffeeMachine {
    void brew() {
        System.out.println("Brewing hot coffee!");
    }
}
// in main:
Brewer myBrewer = new Brewer();
myBrewer.brew();`,
        options: [
          "Brewing hot coffee!",
          "CoffeeMachine",
          "null",
          "Compilation Error"
        ],
        answer: 0,
        explanation: "The Brewer subclass provides the concrete implementation for brew(), printing 'Brewing hot coffee!'!"
      },
      {
        question: "In the inheritance declaration 'public class Wizard extends Player', which class is the Superclass (Parent)?",
        options: [
          "Wizard",
          "Player",
          "extends",
          "Both are superclasses"
        ],
        answer: 1,
        explanation: "'Player' is the Superclass (parent), and 'Wizard' is the Subclass (child) that extends it."
      },
      {
        question: "Does Java allow a single class to directly extend multiple parent classes (e.g. 'class C extends A, B')?",
        options: [
          "Yes, as many classes as you want",
          "No, Java does not allow multiple class inheritance to avoid ambiguity",
          "Only if both parent classes are abstract",
          "Only in Java 8"
        ],
        answer: 1,
        explanation: "Java prevents multiple class inheritance to avoid conflicts (the 'Diamond Problem'). Instead, Java achieves this using Interfaces!"
      }
    ],
    trivia: "💡 Java Trivia Unlocked: Minecraft (Java Edition), the bestselling video game in human history, was written in Java utilizing OOP architecture!"
  }
};
