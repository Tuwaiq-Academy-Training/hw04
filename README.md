# Day 04

using the following node packages:

- https://github.com/patorjk/figlet.js
- https://github.com/SBoudrias/Inquirer.js

create the following apps:

## Fancy Drawer

write a program to take the user's input and print it in a fancy way like this:

```bash
> enter a sentence: hello world

  _   _      _ _        __        __         _     _ _ _
 | | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
 | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
 |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
 |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)



Thank You for playing :)
```

## BMI App

using the Inquirer package, ask the user multiple questions about their age ,weight, height and gender,

and then calculate the BMI using this equation = weight/height^2
and determain if they are healthy or not depending on their age
using the following table:
### for ages 20 and above:  
Category BMI range | kg/m2
----|-----
Severe Thinness| < 16%
Moderate Thinness| 16% - 17%
Mild Thinness| 17% - 18.5%
Normal| 18.5% - 25%
Overweight| 25% - 30%
Obese Class I| 30% - 35%
Obese Class II| 35% - 40%
Obese Class III| > 40%

### ages 2-20
Category| Percentile Range
-------|---------
Underweight| <5%
Healthy weight| 5% - 85%
At risk of overweight| 85% - 95%
Overweight| >95%

## Shapes in the terminal

find a package and build an application that draws shapes on the terminal, draw to your heart's content but have some form of shapes printed to the screen when the user runs the program, don't use canvas (that's an html dom thing)
