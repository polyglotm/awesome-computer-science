from day_1_input import day_1_input


def calculate_increase(numbers):
    count = 0

    for i in range(1, len(numbers)):
        if numbers[i] > numbers[i - 1]:
            count += 1

    return count


print(calculate_increase(day_1_input))
