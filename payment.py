def multiply_by(x2, x2_1, x2_2):
    x2 = x2_1 * 60 + x2_2
    return x2


def main():
    x1 = 60
    y1 = 100
    x2_1 = int(input("How many hours have you worked? "))
    print("Let's find out how many minutes have you worked in reality")
    x_0 = int(input("What is the number of minute you've seen in your Time Sheet. If you saw 12.34, tell me 34 "))
    x_0_0 = (x_0 * 60) / 100
    print(f"The truth is that you have worked for {x_0_0} minutes")
    print("Now, you can answer the following question")
    x2_2 = int(input("How many minutes have you worked in reality? "))
    x2 = ""
    x2 = multiply_by(x2, x2_1, x2_2)

    y2 = (x2 * y1) / x1
    y2_int = y2 // 100
    y2_rest = y2 % 100
    print(f"You have worked for {y2_int} hours and {y2_rest} minutes")
    get = y2_int * 2.19 + 0.028 * y2_rest

    print(f"You will get at least {get}$")


main()


# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press Ctrl+F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
