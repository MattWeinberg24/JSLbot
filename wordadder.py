import os

path = "newwords.txt" # path of the textfile
categories = [("\"japanese\"", True),("\"english\"", True),("\"category\"", False), ("\"lesson\"", False), ("\"politeness", False), ("\"question\"", False)] # required json properties
optional_categories = ["\"politeness","\"question\""] # optional json properties

with open(path, 'w', encoding='utf8') as f:
    nextword = True
    while nextword:
        f.write("{")
        for c in categories:
            s = input(c[0] + ": ").strip()
            if (s != ""):
                l = s.split(",")
                p = ""
                for word in l:
                    p += "\"" + word.strip() + "\", "
                p = p.strip(", ")
                if (c[1]):
                    p = "[" + p + "]"
                f.write("\n\t" + c[0] + ": " + p)
        f.write("\n},\n")
        nextword = input() == ""
    
    

os.system(path) # opens the textfile