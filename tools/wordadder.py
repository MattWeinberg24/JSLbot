# Usage: Edit the current_properties variable, then type out each input after running the program.
#        After the end of the last property, press enter again to add another word,
#        or type anything then press enter to end the program and open the textfile.
#        If the textfile does not open automatically, navigate to it manually.

import os

path = "newwords.txt" # path of the textfile

# json properties. second value determines if list or not.
properties = [("\"japanese\"", True),("\"english\"", True), ("\"lesson\"", False)]
nominal_properties = [("\"category\"", False)]
verbal_properties = [("\"ru\"", False),("\"operational\"", False)]

current_properties = properties + nominal_properties # Usage: Concatenate any additional properties you want

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