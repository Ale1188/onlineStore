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

