#include <stdio.h>
#include <assert.h>

int area(int a, int b);

int main(void)
{
    assert(27 == area(3, 9));
}

int area(int a, int b)
{
    return a * b;
}