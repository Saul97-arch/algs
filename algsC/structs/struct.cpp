#include <iostream>
//#include <stdio.h>

using namespace std;
struct Rectagle
{
    int lenght;
    int breadth;
    char x;
};



int main()
{
    //g++ -o hi hi.cpp
    struct Rectagle r1={10, 5};

    printf("%li\n", sizeof(r1));
    
    cout << r1.lenght << endl;
    cout << r1.breadth << endl;

    return 0;
}