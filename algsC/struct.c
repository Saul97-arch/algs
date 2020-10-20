#include <stdio.h>
#include <string.h>

struct candidate
{
    char name[10];
    int votes;  
};

#define MAXVALUE 9

int main(void)
{   
    char name1[3] = "joe"; //Sring withouth the cs50 lib
    char names[10];
    strcpy("Rammus", names);
    struct candidate p1;
    strcpy(p1.name, "joe"); //Putting strings in places
    
    //Because of nature of structs this can't be compared as this
    if(strcmp(name1, p1.name))
        printf("Igual\n");
    else
        printf("Diferente\n");
    
   
}
