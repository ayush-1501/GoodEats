// factorial.cpp
#include <iostream>

unsigned long long factorial(int n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int number;
    std::cin >> number;
    std::cout << factorial(number);
    return 0;
}
