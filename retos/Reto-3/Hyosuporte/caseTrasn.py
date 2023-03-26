def caseTransformer(cadena,nomenclatura) :
    
    options = {
        "snake": lambda x: "_".join(x.split()),
        "kebab": lambda x: "-".join(x.split()),
        "pascal": lambda x: x.title().replace(" ",""),
        "camel": lambda x: x.split()[0] + "".join(s.capitalize() for s in x.split()[1:] )
    }

    return options[nomenclatura](cadena)