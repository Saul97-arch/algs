#include <iostream>
#include <stdio.h>

using namespace std;

int main()
{
    int a = 10;
    int *p;
    p = &a;

    cout << a << endl;

    printf("using pointer %d\n", *p);
    /* Pointers with arrays */
    int A[5] = {2, 4, 6, 8, 10}; // Created in the stack

    int *j;
    j = A; // There is no amperstand signal in arrays

    for (int i = 0; i < 5; i++)
        cout << j[i] << endl;

    // Create in heap

    int *h;
    h = (int *)malloc(5 * sizeof(int));

    h[0] = 10, h[1] = 2, h[2] = 33, h[3] = 44, h[4] = 27;
    printf("Here the values of array in heap memory are being showed: \n");
    for (int i = 0; i < 5; i++)
        cout << h[i] << endl;

    return 0;
}