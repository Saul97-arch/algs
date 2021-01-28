#include <stdio.h>
#include <assert.h>

int media(int a, int b, int c);

int main(void)
{
    assert(7 == media(6, 7, 8));
}

int media(int a, int b, int c)
{
    return (a + b + c) / 3;
}