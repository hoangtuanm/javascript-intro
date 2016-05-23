#Logical Operators

&& AND
|| OR 
! NOT

#Example:
var x = 3;
var y = 8;

!(x == "3" || x === y ) && !(y != 8 && x <= y)

#Output:
false

#Truthy and False values
!"Hello World"
!""
!null
!0
!-1
!NaN

#Checking value for Truthy or Falsy
!!<value_to_check>

#Tips: Falsy Values (Verything Else Is Truthy)
false
0
""
null
undefined
NaN

#Example
var str = "";
var msg = "haha!";
var isFunny = "false";

!((str || msg) && isFunny)

Output:
false