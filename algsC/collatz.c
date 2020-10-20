#include <stdio.h>
int collatz(int n);

int main(void)
{
    int res;
    printf("Insira um número:\n");
    scanf("%d", &res);
    
    
    printf("Resultado: %d\n", collatz(res));
}

int collatz(int n)
{
    if (n == 1)
        return n;

    if (n % 2 == 0)
        return collatz(n / 2);
    
    if (n % 2 != 0)
        return collatz(3 * n + 1);
}

