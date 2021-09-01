import os

path = "newwords.txt" # path of the textfile

# json properties. second value determines if list or not.
properties = [("\"japanese\"", True),("\"english\"", True), ("\"lesson\"", False)]
nominal_properties = [("\"category\"", False)]
verbal_properties = [("\"ru\"", False),("\"operational\"", False)]

current_properties = properties # USAGE: CONCATENATE ANY ADDITIONAL PROPERTIES YOU WANT

with open(path, 'w', encoding='utf8') as f:
    nextword = True
    while nextword:
        f.write("{")
        for i,p in enumerate(current_properties):
            s = input(p[0] + ": ").strip()
            if (s != ""): # only add json if something was inputted
                if (i > 0): # don't add comma before the first property
                    f.write(",")
                if (s != "true"): # only add quotes around values if not supposed to be boolean true
                    l = s.split(",")
                    text = ""
                    for word in l:
                        text += "\"" + word.strip() + "\", "
                    text = text.strip(", ")
                    if (p[1]): 
                        text = "[" + text + "]"
                else:
                    text = s
                f.write("\n\t" + p[0] + ": " + text)
        f.write("\n},\n")
        nextword = input() == ""

os.system(path) # opens the textfile