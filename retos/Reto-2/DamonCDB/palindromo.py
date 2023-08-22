def palindrome(s):
    es_frase = False
    es_palindromo = False

    simbolos = (",",".","¿","?","'","\"","-","_","{","}","[","]")
    aes = ("Á","À","Ä","á","à","ä")
    ees = ("É","È","Ë","é","è","ë")
    ies = ("Í","Ì","Ï","í","ì","ï")
    oes = ("Ó","Ò","Ö","ó","ò","ö")
    ues = ("Ú","Ù","Ü","ú","ù","ü")


    for letra in s:
        if letra == " ":
            es_frase = True
            s = s.replace(letra,"")
        elif letra in simbolos:
            s = s.replace(letra,"")
        elif letra in aes:
            s = s.replace(letra,"a")
        elif letra in ees:
            s = s.replace(letra,"e")
        elif letra in ies:
            s = s.replace(letra,"i")
        elif letra in oes:
            s = s.replace(letra,"o")
        elif letra in ues:
            s = s.replace(letra,"u")

    s_mins = s.lower()
    inversa = ''.join(reversed(s_mins))
    if s_mins == inversa:
        es_palindromo = True

    if es_frase:
        if es_palindromo:
            return "La frase es un palíndromo"
        else:
            return "La frase no es un palíndromo"
    else:
        if es_palindromo:
            return "La palabra es un palíndromo"
        else:
            return "La palabra no es un palíndromo"