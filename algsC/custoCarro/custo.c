#include <stdio.h>
#include <assert.h>

//
// Retorna o custo final da fabricação de um carro
//
float custoFinal(float preco) {
    
    return preco + (preco * 0.28) + (preco * 0.45);
}

//
// Teste
//
int main() {

    assert(17300.0f == custoFinal(10000));

    return 0;

}