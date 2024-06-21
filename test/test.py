last_name = "Barragan"
age = 22
found = False
name = "Johan"
print(name)

# If
if age < 100:
    print("great youre not that old")
    print("im inside of the if statement")
elif age > 100:
    print("yeah seems that youre not that young anymore")
else:
    print("i dont know how you get here")
print("im outside of the if statement")

# Function
def sayHello():
    print("Hello world")
sayHello()

# List
colors = ["black","blue",1,"yellow"]
# add
colors.append("pink")
# get any element
print(colors[1])

for col in colors:
    print(col)

print(colors)

me = {
    "age": 22,
    "firstName": "Johan",
    "lastName": "Barragan",
}

print(me)
# get the value
print(me["firstName"])


#create a calculador using functions
def printMenu():
    print("1) Sum")
    print("2) Sub")
    print("3) Div")
    print("4) Multi")

# plain intructions
printMenu()
opt = input("Select the option: ")
number1 = float(input("please give me the first number: "))
number2 = float(input("please give me the second number: "))

if opt == "1":
    total = number1 + number2
    print("Total: " + str(total))
elif opt == "2":
    total = number1 - number2
    print(f"Total: {total}")
elif opt == "3":
    total = number1 / number2
    print(f"Total: {total}")
elif opt == "4":
    if number2 == 0:
        print("You cannot divide by zero")
    else:
        total = number1 * number2
        print(f"Total: {total}")
