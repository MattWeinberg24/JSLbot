import os

path = "newwords.txt" # path of the textfile
categories = [("\"japanese\"", True),("\"english\"", True),("\"category\"", False), ("\"lesson\"", False)] # json properties. second value determines if list or not.

with open(path, 'w', encoding='utf8') as f:
    nextword = True
    while nextword:
        f.write("{")
        for i,c in enumerate(categories):
            s = input(c[0] + ": ").strip()
            if (s != ""): # only add json if something was inputted
                if (i > 0): # don't add comma before the first property
                    f.write(",")
                if (s != "true"): # only add quotes around values if not supposed to be boolean true
                    l = s.split(",")
                    p = ""
                    for word in l:
                        p += "\"" + word.strip() + "\", "
                    p = p.strip(", ")
                    if (c[1]): 
                        p = "[" + p + "]"
                else:
                    p = s
                f.write("\n\t" + c[0] + ": " + p)
        f.write("\n},\n")
        nextword = input() == ""
    
    

os.system(path) # opens the textfile