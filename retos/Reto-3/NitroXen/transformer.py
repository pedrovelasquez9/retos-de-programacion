def transformer(enter, namingConvention):
    i = enter.split(" ")

    if namingConvention == "snake":
        return enter.replace(" ", "_").lower()
    if namingConvention == "kebab":
        return enter.replace(" ", "-").lower()
    if namingConvention == "pascal":
        return enter.title().replace(" ", "")
    if namingConvention == "camel":
        return i[0] + "".join(s.capitalize() for s in i[1:])
    return "conversion invalid"
