#include <stdio.h>
#include <assert.h>

int antecessor(int num);
int sucessor(int num);

int main(void)
{
    assert(9 == antecessor(10));
    assert(11 == sucessor(10));
}

int antecessor(int num)
{
    return num - 1;
}

int sucessor(int num)
{
    return num + 1;
}
