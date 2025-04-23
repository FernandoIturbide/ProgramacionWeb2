class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def display(self, level=0):
        if self.right:
            self.right.display(level + 1)
        print(' ' * 4 * level + '->', self.value)
        if self.left:
            self.left.display(level + 1)

# Función para convertir una expresión infija a postfija
def infija_a_postfija(expresion):
    precedencia = {'+': 1, '-': 1, '*': 2, '/': 2}
    salida = []
    pila = []
    
    for token in expresion:
        if token.isalnum():
            salida.append(token)
        elif token in '+-*/':
            while pila and pila[-1] != '(' and precedencia.get(pila[-1], 0) >= precedencia[token]:
                salida.append(pila.pop())
            pila.append(token)
        elif token == '(':
            pila.append(token)
        elif token == ')':
            while pila and pila[-1] != '(':
                salida.append(pila.pop())
            pila.pop()
    
    while pila:
        salida.append(pila.pop())
    
    return salida

# Función para convertir una expresión infija a prefija
def infija_a_prefija(expresion):
    expresion = expresion[::-1]
    expresion = [')' if c == '(' else '(' if c == ')' else c for c in expresion]
    postfija = infija_a_postfija(expresion)
    return postfija[::-1]

# Lista de expresiones a procesar
expresiones = [
    ['15', '/', '2', '/', '1', '-', '3', '*', '(', '14', '*', '9', ')'],
    ['(', '3', '-', '7', '/', '2', ')', '+', '8', '*', '12'],
    ['1', '*', '13', '*', '(', '15', '-', '3', ')'],
    ['2', '+', '(', '13', '/', '14', '*', '3', ')'],
    ['6', '*', '(', '14', '+', '13', ')', '+', '6', '/', '11', '*', '(', '9', '/', '4', ')'],
    ['2', '/', '12', '-', '13', '*', '(', '6', '+', '11', '/', '1', ')'],
    ['9', '/', '1', '*', '11', '+', '(', '14', '/', '10', ')', '-', '5', '+', '(', '3', '-', '8', ')'],
    ['(', '11', '-', '8', '-', '11', ')', '*', '12'],
    ['(', '1', '/', '4', ')', '-', '8', '+', '(', '10', '+', '10', ')', '-', '5'],
    ['9', '-', '(', '8', '-', '2', ')', '+', '(', '9', '*', '14', '-', '5', ')'],
    ['(', 'a', '-', 'b', ')', '*', 'c', '/', 'd', '/', 'e', '+', 'f'],
    ['a', '-', 'b', '+', '(', 'c', '*', 'd', ')', '+', 'e', '/', 'f'],
    ['a', '/', 'b', '+', '(', 'c', '+', 'd', ')'],
    ['(', 'a', '/', 'b', '*', 'c', '*', '(', 'd', '-', 'e', '*', 'f', ')', '+', 'g', ')', '*', 'h'],
    ['(', 'a', '+', 'b', ')', '-', 'c', '-', '(', 'd', '*', 'e', ')', '*', 'f'],
    ['(', 'a', '+', 'b', ')', '-', '(', 'c', '/', '(', 'd', '+', 'e', ')', '+', 'f', '-', 'g', ')', '-', 'h'],
    ['a', '*', 'b', '/', 'c', '-', 'd', '-', 'e', '-', '(', 'f', '/', 'g', ')'],
    ['a', '+', '(', 'b', '+', 'c', ')', '/', 'd'],
    ['a', '+', '(', 'b', '+', 'c', ')', '+', 'd', '/', 'e', '+', 'f'],
    ['a', '/', '(', 'b', '-', '(', 'c', '+', 'd', ')', '/', 'e', ')']
]

# Procesar y mostrar resultados
for i, expresion in enumerate(expresiones, 1):
    postfija = infija_a_postfija(expresion)
    prefija = infija_a_prefija(expresion)
    print(f"Expresión {i}:")
    print("  Postfija:", ' '.join(postfija))
    print("  Prefija:", ' '.join(prefija))
    print()