# Boolean Logic
# Everything starts with the idea that a statement is either True or False
# then we can combine those intitial statement to create more complex statements that also evaluate to True or False

# Comparison Operators

Operator, Name
> Greater than
>= Greater than or equal to
< Less than
<= Less than or equal to
== Equal to 
!= Not equal to
=== Equal value and type
!== Not equal value or equal type

# Equality Operators 
# "==" performs type coercion, WHILE "===" does Not

var x == 99;
x == "99"	//True
x === "999"	//False

var y = null;
y == undefined	//True
y === undefined //False

# A Few Interesting Cases
true == '1'	//True
0 == false  // true
null == undefined //True
NaN == NaN	//false