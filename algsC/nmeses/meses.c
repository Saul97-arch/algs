#include <stdio.h>
#include <assert.h>

int nmeses(int dias);

int main(void)
{
    assert(210 == nmeses(7));
}

int nmeses(int dias)
{
   return dias * 30;
}