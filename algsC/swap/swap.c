#include <stdio.h>
#include <assert.h>

int main(void)
{
  int a = 999;
  int b = 555;
  int tmp;

  tmp = a;
  a = b;
  b = tmp;

  printf("a vale: %d, b vale: %d\n", a, b);
  //printf('Helllo World!\n');
  assert(a == 555);
  assert(b == 999);
}