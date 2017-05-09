// Declare a string called name with the value of your name and print it to the console
// var firstName: string = "Olay";
// console.log(firstName);

// Declare a number called age with the value of your age and print it to the console
// var age: number = 31;
// console.log(age);

// Declare boolean called thursday with the value of true
// var thursday: boolean = true;
// console.log(thursday);

// Declare two variables, one called firstName and one called surname that contain your name, 
// then finally create a third variable called fullName that concatenates these two strings together
// and prints it to the console.
// var surname: string = "Yusuf";
// var fullName: string = firstName + " " + surname;
// console.log(fullName);

// Declare an array called numbers that contains the numbers 1 .. 10
// var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);

// Declare an enum called directions that contains the values: North, East, South and West
// enum directions { North, East, South, West };
// console.log(directions);

// Create a variable with the type directions that contains the value of directions.North
// var direction: directions = directions.North;
// console.log(direction);

// Using the variables firstName and age above create a string called sentence which contains the value 
// 'Hi, my name is: Olay and I am 31 years of age.'
// var sentence: string = "HI my name is:" + " " + firstName + " " + "and I am" + " " + age + " " + "years of age";
// console.log(sentence);


// If statements
// Logical operators !, &&, ||
// Comparison operators ===, !==, >, >=, <, <=

// var x = 1;
// var y = 2;

// if (x !== y)
// {
//     console.log("x is not equal to y");
// }

// if (x >= y)
// {
//     console.log("x is greater or equal to y");
// }

// if (x <= y)
// {
//     console.log("x is less or equal to y");
// }

// if (x < y)
// {
//     console.log("x is less than y");
// }
// if (x > y)
// {
//     console.log("x is greater than y");
// }


// if (x < y)
// {
//     console.log("x is less than y");
// }
// else if (x > y)
// {
//     console.log("x is greater than y");
// }

// var daytime = true;
// var cloudy = false;

// if (daytime)
// {
//     console.log("It is daytime");
// }

// if (!daytime)
// {
//     console.log("It is not daytime");
// }

// if (daytime && cloudy)
// {
//     console.log("It is daytime and it is cloudy");
// }

// if (daytime || cloudy)
// {
//     console.log("It is daytime or it is cloudy");
// }

// Create a variable called nighttime with the value true and create an if statement to check if it is nighttime and print 'it is night time'
// var nighttime = true
// if (nighttime)
// {
//     console.log("it is night time");
// }
// Change the value of nighttime to false and create an else statement after the previous if statement and print 'it is not night time'
// nighttime = false
// if (nighttime)
// {
//     console.log("it is night time");
// }
// else
// {
//     console.log("it is not night time");
// }

// forcl
// While x is less than ten
// var x = 0;
// while (x < 10)
// {
//     x++;
//     console.log(x);
// }

var myActivityList = 
[
    {
        ID: 1,
        Name: "Work",
        Start: "08:00",
        End: "16:00",
        Color: "orange"
    },
    {
        ID: 2,
        Name: "Eat Supper",
        Start: "17:00",
        End: "18:00",
        Color: "blue"
    }
];

// for (let i = 0; i < myActivityList.length; i++)
// {
//     var timeEntry = myActivityList[i];
//     console.log(timeEntry.ID);
//     console.log(timeEntry.Name);
//     console.log(timeEntry.Start);
// }

// ctrl + k, c

// for (var timeEntry of myActivityList)
// {
//     console.log(timeEntry.ID);
//     console.log(timeEntry.Name);
//     console.log(timeEntry.Start);
// }

// Loop through the myActivityList and log the color 
// for ( var timeEntry of myActivityList)
// {
//     console.log(timeEntry.Color);
// }

// Loop through the myActivityList and log the color only if it is blue (use an if statement)
for ( var timeEntry of myActivityList)
{
    if (timeEntry.Color != "blue")
    {
        console.log(timeEntry.Color);
    }    
}

for (let i = 0; i < myActivityList.length; i++)
{
    console.log(myActivityList[i]);
}

// for (var i = 0; i < myActivityList.length; i++)
// {
//     if (i % 2 === 0)
//     {
//         console.log(myActivityList[i].Color);
//     }
// }
